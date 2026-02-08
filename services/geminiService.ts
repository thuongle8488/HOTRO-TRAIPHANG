
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export interface ChatMessage {
  role: "user" | "model";
  parts: { text?: string; inlineData?: { mimeType: string; data: string } }[];
}

export class GeminiTutor {
  private ai: GoogleGenAI;
  private history: ChatMessage[] = [];
  private systemInstruction = `Bạn là một Gia sư Hình học chuyên sâu về kỹ thuật "Trải Phẳng" (Unfolding). 

QUY TẮC HIỂN THỊ TOÁN HỌC:
- Sử dụng $...$ cho các biến số, ký hiệu điểm, hoặc công thức ngắn nằm trong dòng văn bản (VD: $A$, $r = 5$, $\sqrt{2}$).
- Sử dụng $$...$$ cho các công thức quan trọng, định lý, hoặc các bước tính toán dài để hiển thị ở giữa dòng (VD: Định lý Pytago, Định lý Cosin).
- LUÔN trình bày lời giải bằng Markdown: sử dụng tiêu đề (###), danh sách gạch đầu dòng và in đậm các từ khóa quan trọng.

NHIỆM VỤ CHÍNH:
1. PHÂN TÍCH ĐỀ BÀI: Khi người học gửi hình ảnh hoặc PDF đề bài, hãy:
   - Nhận diện các thông số kỹ thuật (cạnh, bán kính, chiều cao).
   - Xác định loại hình khối (Chóp, Nón, Trụ, Hộp).
   - Phân tích lộ trình đường đi được yêu cầu.
   - Hướng dẫn học sinh từng bước tư duy trải phẳng trước khi đưa ra đáp án cuối cùng.

2. MENU LUYỆN TẬP: Khi nhận lệnh "menu" hoặc "reset", hiển thị menu bằng các khối Code hoặc danh sách rõ ràng.

3. HƯỚNG DẪN KỸ THUẬT: LUÔN sử dụng quy trình 4 bước chuẩn hóa.

PHONG CÁCH: Kỹ thuật, chính xác, thân thiện. Ưu tiên giải thích bản chất hình học trước khi tính toán.`;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async sendMessage(
    text: string, 
    fileData?: { mimeType: string; data: string }
  ): Promise<string> {
    try {
      const userParts: any[] = [];
      if (text) userParts.push({ text });
      if (fileData) userParts.push({ inlineData: fileData });

      this.history.push({ role: "user", parts: userParts });

      const contents = this.history.map(m => ({
        role: m.role,
        parts: m.parts
      }));

      // Luôn tạo instance mới để đảm bảo API Key mới nhất từ context
      const aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response: GenerateContentResponse = await aiInstance.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: contents,
        config: {
          systemInstruction: this.systemInstruction,
          temperature: 0.7,
        },
      });

      const responseText = response.text || "Xin lỗi, tôi không thể xử lý yêu cầu này.";
      this.history.push({ role: "model", parts: [{ text: responseText }] });
      
      return responseText;
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      if (error?.message?.includes("entity was not found")) {
        return "LỖI_KEY: Vui lòng kiểm tra lại cấu hình API Key.";
      }
      return "Xin lỗi, tôi gặp sự cố kết nối. Hãy thử lại sau ít giây.";
    }
  }

  async resetChat(): Promise<string> {
    this.history = [];
    return this.sendMessage("Xin chào! Hãy hiển thị Menu luyện tập.");
  }

  getHistory() {
    return this.history;
  }
}

export const geminiTutor = new GeminiTutor();
