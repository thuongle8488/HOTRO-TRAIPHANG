import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

type ChatMessage = {
  role: "user" | "model";
  parts: {
    text?: string;
    inlineData?: { mimeType: string; data: string };
  }[];
};

const systemInstruction = `Bạn là một Gia sư Hình học chuyên sâu về kỹ thuật "Trải Phẳng" (Unfolding).

QUY TẮC HIỂN THỊ TOÁN HỌC:
- Sử dụng $...$ cho các biến số, ký hiệu điểm, hoặc công thức ngắn.
- Sử dụng $$...$$ cho công thức dài, định lý.
- Trình bày lời giải bằng Markdown rõ ràng.

NHIỆM VỤ:
- Phân tích đề bài hình học.
- Hướng dẫn tư duy trải phẳng từng bước.
- Trình bày logic, dễ hiểu.`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { text, history, fileData } = req.body as {
      text: string;
      history?: ChatMessage[];
      fileData?: { mimeType: string; data: string };
    };

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res
        .status(500)
        .json({ error: "Missing GEMINI_API_KEY on server" });
    }

    const ai = new GoogleGenAI({ apiKey });

    const userParts: ChatMessage["parts"] = [];
    if (text) userParts.push({ text });
    if (fileData) userParts.push({ inlineData: fileData });

    const nextHistory: ChatMessage[] = Array.isArray(history)
      ? [...history]
      : [];

    nextHistory.push({ role: "user", parts: userParts });

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: nextHistory.map((m) => ({
        role: m.role,
        parts: m.parts,
      })),
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const outText =
      response.text || "Xin lỗi, tôi không thể xử lý yêu cầu này.";

    nextHistory.push({
      role: "model",
      parts: [{ text: outText }],
    });

    return res.status(200).json({
      text: outText,
      history: nextHistory,
    });
  } catch (err: any) {
    console.error("Gemini API Error:", err);
    return res.status(500).json({
      error: err?.message || "Server error",
    });
  }
}
