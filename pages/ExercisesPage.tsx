
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MathDisplay, MathText } from '../components/MathContent';
import { 
  BookOpenCheck, 
  ChevronRight, 
  HelpCircle, 
  CheckCircle2, 
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Home,
  Image as ImageIcon,
  Send,
  AlertCircle
} from 'lucide-react';

const ExercisesPage: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState<Record<string, boolean>>({});
  const [showHint, setShowHint] = useState<Record<string, boolean>>({});
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [feedbacks, setFeedbacks] = useState<Record<string, { status: 'correct' | 'wrong' | null, msg: string }>>({});

  const toggleAnswer = (id: string) => {
    setShowAnswer(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleHint = (id: string) => {
    setShowHint(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInputChange = (id: string, value: string) => {
    setUserInputs(prev => ({ ...prev, [id]: value }));
  };

  const checkResult = (id: string, correctValue: number) => {
    const input = parseFloat(userInputs[id]);
    if (isNaN(input)) {
      setFeedbacks(prev => ({ ...prev, [id]: { status: 'wrong', msg: 'Vui lòng nhập một con số hợp lệ.' } }));
      return;
    }

    const isCorrect = Math.abs(input - correctValue) < 0.2;
    
    if (isCorrect) {
      setFeedbacks(prev => ({ ...prev, [id]: { status: 'correct', msg: 'Tuyệt vời! Kết quả hoàn toàn chính xác.' } }));
    } else {
      setFeedbacks(prev => ({ ...prev, [id]: { status: 'wrong', msg: `Chưa chính xác rồi. Hãy thử kiểm tra lại các bước tính (Đáp án gợi ý: ${correctValue}).` } }));
    }
  };

  const exercises = [
    {
      id: "q1",
      title: "Câu 1: Trang trí cây thông Noel",
      illustrationLink: "https://drive.google.com/file/d/1LDdth__N7j2FchaoWF7jVFd_YHyc5q5l/view?usp=sharing",
      problem: "Phần trên của một cây thông Noel có dạng hình nón, đỉnh $S$, độ dài đường sinh $l = 2m$ và bán kính đáy $r = 1m$. Biết rằng $AB$ là một đường kính đáy của hình nón và $I$ là trung điểm đoạn thẳng $SB$ (tham khảo hình vẽ). Để trang trí, người ta lắp một dây bóng nháy trên mặt ngoài của cây thông từ vị trí $A$ đến $I$. Tính độ dài ngắn nhất của dây bóng nháy.",
      hint: "Trải phẳng mặt xung quanh hình nón thành một hình quạt. Góc ở đỉnh hình quạt $\\alpha = 2\\pi \\cdot (r/l)$. Xác định vị trí $A$ and $I$ trên bản trải, sau đó dùng định lý Pytago hoặc Cosin trong tam giác $SAI$.",
      correctValue: 2.24,
      solution: [
        "**Bước 1:** Trải mặt xung quanh hình nón ra mặt phẳng, ta được một hình quạt tròn tâm $S$, bán kính $l = SA = SB = 2m$.",
        "**Bước 2:** Độ dài cung của hình quạt bằng chu vi đáy hình nón: $C = 2\\pi r = 2\\pi$.",
        "**Bước 3:** Gọi $\\alpha$ là góc ở đỉnh của hình quạt. Ta có: $\\alpha = \\frac{C}{l} = \\frac{2\\pi}{2} = \\pi$ (tương ứng $180^\\circ$).",
        "**Bước 4:** Do $AB$ là đường kính đáy nên cung $AB$ trên bản trải có độ dài bằng nửa chu vi đáy, tức là $\\pi$. Do đó, góc $\\angle ASB$ trên bản trải bằng $\\frac{\\pi}{2} = 90^\\circ$.",
        "**Bước 5:** Trong tam giác vuông $SAI$ (vuông tại $S$ trên bản trải) có: $SA = 2m$, $SI = \\frac{1}{2} SB = 1m$.",
        "**Bước 6:** Áp dụng định lý Pitago: $AI = \\sqrt{SA^2 + SI^2} = \\sqrt{2^2 + 1^2} = \\sqrt{5} \\approx 2.24m$.",
        "**Kết luận:** Độ dài ngắn nhất của dây bóng nháy là $\\sqrt{5}m$."
      ]
    },
    {
      id: "q2",
      title: "Câu 2: Quấn dây quanh hình lăng trụ tam giác đều",
      illustrationLink: "https://drive.google.com/file/d/1rMCP9BzB96dvZ5FmO3v28KE__oQ_cOlE/view?usp=sharing",
      problem: "Cho một hình lăng trụ tam giác đều $ABC.A'B'C'$ có độ dài cạnh đáy bằng $6$ và cạnh bên bằng $24$. Dùng một sợi dây có chiều dài $L$ quấn quanh hình lăng trụ từ điểm $A'$ đến điểm $B$ như hình vẽ, sao cho sợi dây luôn áp sát vào các mặt. Hãy xác định chiều dài ngắn nhất của sợi dây?",
      hint: "Dựa vào hình vẽ minh họa, sợi dây quấn từ đỉnh $B$ (mặt trên), đi qua 2 mặt bên và đi vào mặt đáy tam giác để đến đỉnh $A'$. Trên bản trải phẳng, chiều ngang là $6 + 6 + 3 = 15$, chiều dọc là chiều cao lăng trụ cộng với chiều cao tam giác đáy $24 + 3\\sqrt{3}$.",
      correctValue: 32.82,
      solution: [
        "**Bước 1:** Phân tích lộ trình của dây trên hình trải phẳng. Sợi dây xuất phát từ đỉnh $B$, đi chéo qua mặt bên thứ nhất ($6$), mặt bên thứ hai ($6$) và đi vào mặt đáy đến đỉnh $A'$.",
        "**Bước 2:** Tính tổng chiều ngang của lộ trình: $L_{ngang} = 6 + 6 + 3 = 15$ (trong đó $3$ là khoảng cách từ cạnh đến đỉnh $A'$ trên mặt đáy trải phẳng).",
        "**Bước 3:** Tính tổng chiều dọc của lộ trình: $L_{doc} = h + h_{\\Delta} = 24 + \\frac{6\\sqrt{3}}{2} = 24 + 3\\sqrt{3}$.",
        "**Bước 4:** Áp dụng định lý Pitago cho tam giác vuông đại diện trên bản trải phẳng: $L = \\sqrt{15^2 + (24 + 3\\sqrt{3})^2}$.",
        "**Bước 5:** Tính toán giá trị: $L = \\sqrt{225 + (24 + 3 \\cdot 1.732)^2} = \\sqrt{225 + (29.196)^2} \\approx \\sqrt{225 + 852.4} \\approx 32.82$.",
        "**Kết luận:** Chiều dài ngắn nhất của sợi dây là $32.82$ đơn vị độ dài."
      ]
    },
    {
      id: "q3",
      title: "Câu 3: Sợi dây quấn quanh hộp quà",
      illustrationLink: "https://drive.google.com/file/d/1DKKUgKHeEQoTjng_hOxmGZW7Uui4jT8L/view?usp=sharing",
      problem: "Chiều dài ngắn nhất của sợi dây để quấn quanh hộp quà có dạng hình hộp chữ nhật kích thước $2 cm \\times 4 cm \\times 6 cm$ như trong hình vẽ là bao nhiêu? Biết rằng sợi dây bắt đầu và kết thúc tại điểm $M$ và $AM = 1$ cm.",
      hint: "Để tìm đường đi ngắn nhất, ta cần trải phẳng các mặt mà sợi dây đi qua. Lộ trình quấn dây phức tạp đi qua cả mặt bên và mặt đáy. Hãy tưởng tượng việc duỗi thẳng lộ trình này thành một đoạn thẳng trên mặt phẳng trải rộng $16 cm$ và cao $12 cm$.",
      correctValue: 20,
      solution: [
        "**Bước 1:** Phân tích đường đi của sợi dây: Theo hình vẽ minh họa, sợi dây không chỉ quấn quanh các mặt bên và còn đi qua các mặt đáy của hình hộp. Ta cần sử dụng phương pháp trải phẳng các mặt liên quan lên một mặt phẳng.",
        "**Bước 2:** Xác định kích thước trên mặt phẳng trải: Khi trải phẳng các mặt theo lộ trình ziczac, ta tạo thành một hình chữ nhật lớn có kích thước được tổng hợp từ các cạnh của hộp quà.",
        "**Bước 3:** Tính chiều ngang tổng cộng ($L_x$): Sợi dây đi qua các đoạn tương ứng với chiều dài và chiều rộng: $6 cm + 4 cm + 6 cm = 16 cm$.",
        "**Bước 4:** Tính chiều dọc tổng cộng ($L_y$): Sợi dây đi qua các đoạn tương ứng với chiều cao và chiều rộng: $2 cm + 4 cm + 2 cm + 4 cm = 12 cm$.",
        "**Bước 5:** Áp dụng định lý Pythagoras cho tam giác vuông: $L_{\\min} = \\sqrt{16^2 + 12^2} = \\sqrt{256 + 144} = \\sqrt{400} = 20 \\text{ cm}$.",
        "**Kết luận:** Chiều dài ngắn nhất của sợi dây để quấn quanh hộp quà theo lộ trình như hình vẽ là $20 cm$."
      ]
    },
    {
      id: "q4",
      title: "Câu 4: Quấn dây qua tâm các mặt bên lăng trụ",
      illustrationLink: "https://drive.google.com/file/d/1qqapn_s0Y6UHQ_VVqRXyB_Y17HIIhBiH/view?usp=sharing",
      problem: "Cho hình lăng trụ đều $ABCD.A'B'C'D'$ có độ dài cạnh đáy bằng 12 và cạnh bên bằng 60. Dùng một sợi dây có chiều dài $L$ quấn quanh hình lăng trụ từ điểm $A'$ đến điểm $R$ như hình vẽ, sao cho các đoạn $A'M, MN, PQ, QR$ luôn áp sát vào các mặt của lăng trụ, đoạn $NP$ xuyên vào bên trong hình lăng trụ với $N$ và $P$ lần lượt là tâm các mặt bên $BCC'B'$ và $CDD'C'$, có $AR = 10$. Hãy xác định chiều dài ngắn nhất của sợi dây (làm tròn kết quả đến hàng phần mười)?",
      hint: "Chia lộ trình thành 3 đoạn chính: 1) $A' \\to N$ trên bề mặt (đi qua 1.5 mặt bên), 2) $N \\to P$ xuyên qua lòng khối (khoảng cách giữa 2 tâm mặt bên kề nhau), 3) $P \\to R$ trên bề mặt (đi qua 1.5 mặt bên). Sử dụng định lý Pytago cho từng đoạn.",
      correctValue: 70.4,
      solution: [
        "**Bước 1:** Phân tích lộ trình dây $A' \\to M \\to N \\to P \\to Q \\to R$. Ta chia thành 3 phần: Đoạn bề mặt $A'N$, đoạn xuyên lòng $NP$, và đoạn bề mặt $PR$.",
        "**Bước 2:** Tính đoạn bề mặt $A'N$. Trải mặt bên $ABB'A'$ và nửa mặt bên $BCC'B'$. $A'$ là đỉnh, $N$ là tâm mặt bên thứ 2. Khoảng cách ngang: $12 + 6 = 18$. Khoảng cách dọc: $60/2 = 30$. Vậy $A'N = \\sqrt{18^2 + 30^2} = \\sqrt{324 + 900} = \\sqrt{1224} \\approx 34.99$.",
        "**Bước 3:** Tính đoạn xuyên lòng $NP$. $N$ và $P$ là tâm của hai mặt bên kề nhau. Khoảng cách giữa hai tâm này trong không gian 3D (hình chiếu lên đáy là đoạn nối trung điểm hai cạnh kề của hình vuông cạnh 12) là $NP = \\sqrt{6^2 + 6^2} = 6\\sqrt{2} \\approx 8.49$.",
        "**Bước 4:** Tính đoạn bề mặt $PR$. $P$ là tâm mặt bên thứ 3, $R$ nằm trên cạnh $AA'$ (cạnh thứ 5 trên bản trải). Khoảng cách ngang: $6 + 12 = 18$. Khoảng cách dọc: $30 - 10 = 20$. Vậy $PR = \\sqrt{18^2 + 20^2} = \\sqrt{324 + 400} = \\sqrt{724} \\approx 26.91$.",
        "**Bước 5:** Tổng chiều dài: $L = \\sqrt{1224} + 6\\sqrt{2} + \\sqrt{724} \\approx 34.99 + 8.49 + 26.91 = 70.39$.",
        "**Kết luận:** Chiều dài ngắn nhất của sợi dây làm tròn đến hàng phần mười là $70.4$ đơn vị độ dài."
      ]
    },
    {
      id: "q5",
      title: "Câu 5: Quấn dây quanh hình chóp đều",
      illustrationLink: "https://drive.google.com/file/d/14Xlq0QLOO1GI044DKB3zsjitXhMevxFG/view?usp=sharing",
      problem: "Cho một hình chóp đều $S.ABCD$ có độ dài cạnh đáy bằng $6$ và cạnh bên bằng $36$. Dùng một sợi dây có chiều dài $L$ quấn quanh hình chóp từ điểm $A$ đến điểm $R$ như hình vẽ, sao cho sợi dây luôn áp sát vào các mặt của hình chóp. Biết $RA = 2RS$. Hãy xác định chiều dài ngắn nhất của sợi dây?",
      hint: "Lộ trình này phức tạp hơn bạn nghĩ: dây đi qua 2 mặt bên xuống đáy, bò qua đáy rồi mới lên lại 2 mặt bên kia. Bạn cần trải phẳng các cặp mặt bên ra cùng một mặt phẳng với đáy hình vuông $ABCD$. Nhấp vào link để xem hình minh họa lộ trình.",
      correctValue: 36.8,
      solution: [
        "**Bước 1:** Phân tích lộ trình dây: Xuất phát từ $A$, qua mặt $SAB, SBC$ xuống cạnh đáy $BC$, đi qua đáy $ABCD$ đến cạnh $CD$, rồi lên mặt $SCD, SDA$ tới điểm $R$ trên cạnh $SA$.",
        "**Bước 2:** Tính toán cụm bên trái ($A \\to C$). Trải mặt $SAB$ và $SBC$ phẳng so với cạnh $BC$. Gọi $A_1$ là ảnh của $A$. Với $\\cos \\beta = \\frac{1}{12}$ (góc đáy mặt bên), ta tính được $A_1C = \\sqrt{6^2 + 6^2 - 2 \\cdot 6 \\cdot 6 \\cdot \\cos(2\\beta)} = \\sqrt{143} \\approx 11.96$. Góc $\\widehat{A_1CB} = 90^\\circ - \\beta$.",
        "**Bước 3:** Tính toán cụm bên phải ($C \\to R$). Trải mặt $SCD$ và $SDA$ phẳng so với cạnh $CD$. Ta tính được $CR = \\frac{\\sqrt{1871}}{3} \\approx 14.42$ và $RD = 14\\sqrt{3}$. Sử dụng định lý Cosin đảo trong $\\Delta RCD$ để tìm góc $\\widehat{RCD}$.",
        "**Bước 4:** Tổng hợp trên mặt phẳng trải. Đường ngắn nhất là đoạn thẳng $A_1R$. Trong tam giác $A_1CR$, góc $\\widehat{A_1CR} = \\widehat{A_1CB} + \\widehat{BCD} + \\widehat{RCD}$ (với $\\widehat{BCD} = 90^\\circ$).",
        "**Bước 5:** Áp dụng định lý Cosin cho $\\Delta A_1CR$: $L_{\\min} = \\sqrt{A_1C^2 + CR^2 - 2 \\cdot A_1C \\cdot CR \\cdot \\cos(\\widehat{A_1CR})}$.",
        "**Kết luận:** Tính toán chi tiết cho kết quả chiều dài ngắn nhất là $L_{\\min} \\approx 36.8$ đơn vị độ dài."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto pb-16 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-widest text-[10px] transition-colors mb-4">
        <Home size={16} /> Trang chủ
      </Link>

      <div className="text-center space-y-6 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-black uppercase tracking-widest">
           <BookOpenCheck size={16} /> Vận dụng kiến thức
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight dark:text-white">
          Bài tập <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Vận dụng</span>
        </h1>
      </div>

      <div className="grid gap-8">
        {exercises.map((item) => (
          <div key={item.id} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden transition-all duration-500">
            <div className="p-8 md:p-10 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black tracking-tight flex items-center gap-3 dark:text-white">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                    {item.id.toUpperCase()}
                  </div>
                  {item.title}
                </h2>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700 italic text-xl leading-relaxed text-slate-800 dark:text-slate-100">
                  <MathText text={item.problem} />
                </div>

                {item.illustrationLink && (
                  <div>
                    <a 
                      href={item.illustrationLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 border-2 border-purple-100 dark:border-purple-900/50 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all shadow-lg shadow-purple-500/10 group/link"
                    >
                      <ImageIcon size={18} />
                      Xem hình minh họa
                      <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700 space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Kết quả của bạn:</label>
                    <input 
                      type="text" 
                      placeholder="Nhập giá trị số..."
                      value={userInputs[item.id] || ''}
                      onChange={(e) => handleInputChange(item.id, e.target.value)}
                      className="w-full px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all font-bold text-lg"
                    />
                  </div>
                  <button 
                    onClick={() => checkResult(item.id, item.correctValue)}
                    className="md:self-end px-8 py-4 bg-purple-600 text-white rounded-2xl font-black shadow-lg shadow-purple-500/20 hover:bg-purple-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Kiểm tra
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => toggleHint(item.id)} className="flex-1 px-8 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl font-black text-slate-600 dark:text-slate-300">
                  {showHint[item.id] ? 'Ẩn gợi ý' : 'Gợi ý tư duy'}
                </button>
                <button onClick={() => toggleAnswer(item.id)} className="flex-1 px-8 py-4 bg-purple-600 text-white rounded-2xl font-black">
                  {showAnswer[item.id] ? 'Ẩn lời giải' : 'Lời giải chi tiết'}
                </button>
              </div>

              {showHint[item.id] && (
                <div className="p-6 bg-amber-50 dark:bg-amber-900/10 rounded-[2rem] border border-amber-100 animate-in fade-in zoom-in-95">
                  <MathText text={item.hint} className="text-amber-800 dark:text-amber-200 font-medium" />
                </div>
              )}

              {showAnswer[item.id] && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 border-t pt-8">
                  {item.solution.map((line, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 shrink-0 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-[10px] font-black">{idx + 1}</div>
                      <MathText text={line} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisesPage;
