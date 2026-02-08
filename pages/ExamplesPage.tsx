
import React from 'react';
import { Link } from 'react-router-dom';
import { MathDisplay, MathText } from '../components/MathContent';
import { 
  Target, 
  Scissors, 
  Ruler, 
  CheckCircle,
  Pyramid,
  Compass,
  Layers,
  Box,
  ChevronRight,
  ExternalLink,
  Home,
  Image as ImageIcon
} from 'lucide-react';

const ExamplesPage: React.FC = () => {
  const examples = [
    {
      title: "Bài toán 1: Tìm đường đi ngắn nhất trên bề mặt hình chóp",
      icon: <Pyramid size={24} />,
      gradient: "from-blue-600 to-indigo-700",
      illustrationLink: "https://drive.google.com/file/d/1v7DdiTootCrG_AK82ugKDDuihiEThE8e/view?usp=sharing",
      problem: "Ở khu nghỉ dưỡng có một chòi nghỉ với mái chòi dạng hình chóp tứ giác đều như hình vẽ. Cạnh bên có chiều dài $4m$, góc ở đỉnh của mặt bên bằng $15^\\circ$. Người ta muốn trang trí đèn LED một vòng quanh hình chóp từ vị trí $A$ đến vị trí $Q$ là trung điểm của cạnh $SA$. Biết chi phí để lắp $1m$ đèn LED có giá $200.000$ đồng. Hỏi chi phí thấp nhất để lắp đèn LED bằng bao nhiêu nghìn đồng? (Làm tròn kết quả đến hàng đơn vị).",
      steps: [
        {
          label: "Bước 1: Phân tích bài toán và xác định các yếu tố liên quan",
          icon: <Target size={16} />,
          content: "Khối hình học là hình chóp tứ giác đều $S.ABCD$. Cạnh bên: $SA=4m$. Trên mỗi mặt bên, góc ở đỉnh tại $S$ bằng $15^\\circ$, tức là: $\\widehat{ASB} = \\widehat{BSC} = \\widehat{CSD} = \\widehat{DSA} = 15^\\circ$. Điểm đầu là $A$. Điểm cuối là trung điểm $Q$ của cạnh $SA$ nên $SQ=2m$. Yêu cầu: tìm đường đi ngắn nhất trên bề mặt hình chóp từ $A$ đến $Q$."
        },
        {
          label: "Bước 2: Triển khai mặt phẳng (Trải phẳng hình)",
          icon: <Scissors size={16} />,
          content: "Dùng kéo cắt dọc theo cạnh $SA$. Giữ nguyên đỉnh $S$, trải lần lượt 4 mặt tam giác cân $SAB, SBC, SCD, SDA$ ra mặt phẳng. Khi đó, trong hình trải: Điểm $Q$ vẫn nằm trên cạnh $SA$ với $SQ=2m$. Điểm $A$ ở mặt đầu sẽ xuất hiện một bản sao của $A$ sau khi trải đủ bốn mặt quanh đỉnh $S$. Từ đó ta có chiều dài dây đèn LED ngắn nhất là độ dài đoạn thẳng $AQ$."
        },
        {
          label: "Bước 3: Chuyển bài toán về hình học phẳng và giải quyết",
          icon: <Ruler size={16} />,
          content: "Do góc ở đỉnh của mỗi mặt bên là $15^\\circ$ nên ta có $\\widehat{ASQ} = 15^\\circ \\times 4 = 60^\\circ$. Áp dụng định lý Cosin trong tam giác $SAQ$ có: $AQ^2 = SA^2 + SQ^2 - 2SA \\cdot SQ \\cdot \\cos(60^\\circ) = 4^2 + 2^2 - 2 \\cdot 4 \\cdot 2 \\cdot 0.5 = 16 + 4 - 8 = 12$. Chiều dài dây đèn LED ngắn nhất là $AQ = \\sqrt{12} \\approx 3.46m$. Chi phí thấp nhất để lắp đèn LED là $3.46 \\times 200.000 \\approx 693$ nghìn đồng."
        },
        {
          label: "Bước 4: Kiểm tra và kết luận",
          icon: <CheckCircle size={16} />,
          content: "Đoạn thẳng $AQ$ trong hình trải tương ứng với một đường gấp khúc nằm hoàn toàn trên các mặt bên của hình chóp khi gấp lại. Vì trong mặt phẳng, đoạn thẳng là đường ngắn nhất nên đây chính là đường đi ngắn nhất trên bề mặt hình chóp khi đi từ $A$ đến $Q$. Vậy chi phí thấp nhất là 693 nghìn đồng."
        }
      ]
    },
    {
      title: "Bài toán 2: Tìm đường đi ngắn nhất trên bề mặt hình nón",
      icon: <Compass size={24} />,
      gradient: "from-emerald-600 to-teal-700",
      illustrationLink: "https://drive.google.com/file/d/1lI0V_vqzYXMgIXMxfVF4ccqrewSCPdKm/view?usp=sharing",
      problem: "Một bạn đang trang trí cây thông Noel được xem là hình nón, có bán kính đáy $r = 50cm$ và chiều cao $h = 180cm$. Thiết diện qua trục hình nón là một tam giác chứa các đường sinh $SA$ (trong đó $S$ là đỉnh hình nón). Bạn muốn gắn một dải đèn LED nhiều màu từ vị trí $A$ đến vị trí $B$ trên mặt xung quanh của cây. Dải đèn được gắn theo lộ trình: từ $A$ đến một điểm $M$ thuộc đường sinh $SB$, sau đó qua điểm $N$ thuộc đường sinh $SC$, rồi mới đến $B$. Biết rằng $SB = 60cm$. Hãy tìm độ dài nhỏ nhất của dải đèn LED cần dùng cho lộ trình trên (tính theo $cm$ và làm tròn đến hàng phần mười).",
      steps: [
        {
          label: "Bước 1: Phân tích bài toán và xác định các yếu tố liên quan",
          icon: <Target size={16} />,
          content: "Cây thông Noel xem như hình nón có bán kính đáy $r = 50cm$ và chiều cao $h = 180cm$. Trên mặt xung quanh có các đường sinh $SA, SB, SC$. Gắn đèn theo lộ trình $AMNB$ trong đó: $M \\in SB, N \\in SC, SB = 60cm$. Mục tiêu: tìm độ dài nhỏ nhất của dây đèn nằm trên mặt xung quanh. Ý tưởng: đường đi ngắn nhất trên mặt cong sẽ trở thành đường thẳng sau khi trải phẳng."
        },
        {
          label: "Bước 2: Triển khai mặt phẳng (Trải phẳng hình)",
          icon: <Scissors size={16} />,
          content: "Cắt dọc theo đường sinh $SA$. Sau khi cắt và trải phẳng, ta sẽ thu được một hình quạt tròn. Vì đường đi từ $A$ đi qua toàn bộ mặt xung quanh của hình nón nên khi trải phẳng ta cần ghép thêm một mặt xung quanh (hoặc hiểu là đi trọn vòng quạt). Từ đó, ta có độ dài nhỏ nhất của dải đèn LED là độ dài đoạn thẳng $AB$ trên bản trải."
        },
        {
          label: "Bước 3: Chuyển bài toán về hình học phẳng và giải quyết",
          icon: <Ruler size={16} />,
          content: "Độ dài cung hình quạt tròn là $C = 2\\pi r = 100\\pi$. Bán kính quạt là $l = SA = \\sqrt{180^2 + 50^2} = 10\\sqrt{349} \\approx 186.8cm$. Góc ở đỉnh hình quạt $\\alpha = \\frac{100\\pi}{l} \\approx 1.68$ rad $\\approx 96.4^circ$. Áp dụng định lý Cosin trong tam giác $SAB$ có: $AB = \\sqrt{SA^2 + SB^2 - 2SA \\cdot SB \\cdot \\cos(\\alpha)} \\approx 238.2cm$."
        },
        {
          label: "Bước 4: Kiểm tra và kết luận",
          icon: <CheckCircle size={16} />,
          content: "Đoạn thẳng $AB$ trong hình trải khi “cuộn” lại sẽ trở thành một đường đi nằm trên mặt nón và đi qua đúng các phần mặt tương ứng với lộ trình đã mô tả. Trong hình phẳng, đoạn thẳng là ngắn nhất. Vậy độ dài nhỏ nhất của dải đèn LED cần dùng là khoảng $238.2cm$."
        }
      ]
    },
    {
      title: "Bài toán 3: Tìm đường đi ngắn nhất trên bề mặt hình trụ",
      icon: <Layers size={24} />,
      gradient: "from-orange-600 to-amber-700",
      illustrationLink: "https://drive.google.com/file/d/1nd6OzgKNQOhrwl4VA1FJdtjGe4n46QOM/view?usp=sharing",
      problem: "Một lon sữa bột em bé có dạng hình trụ, cao $h = 15cm$ và bán kính đáy $r = 6.5cm$. Một con kiến bò trên bề mặt lon theo lộ trình từ $A$ đến $B$ rồi về $A$. Trong mỗi chặng, con kiến luôn chọn đường ngắn nhất trên mặt xung quanh. Hỏi tổng quãng đường ngắn nhất con kiến bò được là bao nhiêu ($cm$), làm tròn kết quả đến hàng phần chục?",
      steps: [
        {
          label: "Bước 1: Phân tích bài toán và xác định các yếu tố liên quan",
          icon: <Target size={16} />,
          content: "Lon sữa hình trụ, $h = 15cm, r = 6.5cm$. Con kiến bò từ đáy $A$ lên đỉnh $B$ rồi vòng về $A$ (vị trí đối xứng hoặc khép kín vòng). Trong mỗi chặng, con kiến chọn đường ngắn nhất trên mặt xung quanh. Mục tiêu: tính tổng quãng đường ngắn nhất $S = AB + BA$."
        },
        {
          label: "Bước 2: Triển khai mặt phẳng (Trải phẳng hình)",
          icon: <Scissors size={16} />,
          content: "Cắt dọc theo đường sinh qua $A$. Sau khi trải phẳng ta thu được một hình chữ nhật với chiều cao $h = 15cm$, chiều dài là chu vi đường tròn đáy $C = 2\\pi r = 13\\pi$. Từ đó, quãng đường ngắn nhất con kiến bò được (vòng quanh 1 vòng) là độ dài đoạn thẳng đường chéo của hình chữ nhật này."
        },
        {
          label: "Bước 3: Chuyển bài toán về hình học phẳng và giải quyết",
          icon: <Ruler size={16} />,
          content: "Ta có quãng đường tổng cộng: $S = \\sqrt{(2\\pi r)^2 + h^2} = \\sqrt{(13\\pi)^2 + 15^2} \\approx \\sqrt{1668.1 + 225} \\approx \\sqrt{1893.1} \\approx 43.5cm$."
        },
        {
          label: "Bước 4: Kiểm tra và kết luận",
          icon: <CheckCircle size={16} />,
          content: "Các đoạn thẳng trong hình trải tương ứng với các đường xoắn ốc trên mặt xung quanh của hình trụ. Vì trong mặt phẳng đoạn thẳng là ngắn nhất nên đây chính là đáp án tối ưu. Vậy quãng đường ngắn nhất con kiến bò được là $43.5cm$."
        }
      ]
    },
    {
      title: "Bài toán 4: Tìm đường đi ngắn nhất trên bề mặt hình hộp chữ nhật",
      icon: <Box size={24} />,
      gradient: "from-pink-600 to-rose-700",
      illustrationLink: "https://drive.google.com/file/d/1ihWTLV1ubkx-orbkhH9m_MQRIJONRWE1/view?usp=sharing",
      problem: "Một hộp quà dạng hình hộp chữ nhật có nắp gập như hình minh hoạ. Hộp có đáy kích thước $3 \\times 2.5 dm$ và chiều cao $3.5 dm$. Gọi $A, B, C, D, A', B', C', D'$ là các đỉnh của hình hộp chữ nhật. Sau khi đặt quà vào hộp và đóng nắp, người ta dùng một dải ruy băng màu đỏ (không co giãn) để dán vào hộp: ruy băng đi từ điểm $A$, lần lượt đi qua các cạnh $A'B', B'C', C'D', D'A'$ và một cạnh khác của hình hộp song song với $AA'$, rồi cuối cùng trở về điểm $A$. Hỏi độ dài ngắn nhất của dải ruy băng cần dùng là bao nhiêu (tính theo $dm$), làm tròn đến hàng phần mười?",
      steps: [
        {
          label: "Bước 1: Phân tích bài toán và xác định các yếu tố liên quan",
          icon: <Target size={16} />,
          content: "Hộp quà là hình hộp chữ nhật có đáy $3 \\times 2.5 dm$ và cao $3.5 dm$. Dải ruy băng quấn quanh 4 mặt bên và trở về điểm xuất phát. Để tìm đường đi ngắn nhất, ta trải phẳng 4 mặt bên của hình hộp thành một dải chữ nhật liên tục trên mặt phẳng."
        },
        {
          label: "Bước 2: Triển khai mặt phẳng (Trải phẳng hình)",
          icon: <Scissors size={16} />,
          content: "Khi trải phẳng 4 mặt bên, chiều dài của bản trải bằng chu vi đáy hình hộp: $L = 3 + 2.5 + 3 + 2.5 = 11 dm$. Chiều rộng của dải trải phẳng chính là chiều cao hình hộp: $h = 3.5 dm$. Đường đi ngắn nhất của dải ruy băng là đoạn thẳng nối điểm đầu và điểm cuối của bản trải này."
        },
        {
          label: "Bước 3: Chuyển bài toán về hình học phẳng và giải quyết",
          icon: <Ruler size={16} />,
          content: "Áp dụng định lý Pitago cho tam giác vuông có hai cạnh góc vuông là $L=11 dm$ and $h=3.5 dm$: $d = \\sqrt{11^2 + 3.5^2} = \\sqrt{121 + 12.25} = \\sqrt{133.25} \\approx 11.5 dm$."
        },
        {
          label: "Bước 4: Kiểm tra và kết luận",
          icon: <CheckCircle size={16} />,
          content: "Đoạn thẳng trong hình trải khi gấp lại đúng là một đường đi khép kín trên bề mặt hình hộp. Với các thông số kỹ thuật đã phân tích, độ dài ngắn nhất của dải ruy băng cần dùng là $11.5 dm$."
        }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-widest text-[10px] transition-colors mb-4">
        <Home size={16} /> Trang chủ
      </Link>

      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
          Chuyên mục <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Giải toán Kỹ thuật</span>
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
          Áp dụng quy trình 4 bước chuẩn hóa để giải quyết các bài toán tối ưu hóa bề mặt 3D phức tạp nhất.
        </p>
      </div>
      
      <div className="space-y-24">
        {examples.map((ex, i) => (
          <div key={i} className="group bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/40 dark:shadow-none overflow-hidden transition-all duration-500">
            <div className="p-8 md:p-12 space-y-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${ex.gradient} text-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-inherit group-hover:rotate-6 transition-transform shrink-0`}>
                  {ex.icon}
                </div>
                <div className="space-y-1">
                  <h2 className="text-3xl font-black tracking-tight">{ex.title}</h2>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em]">
                    <Target size={14} /> Case Study #{i + 1}
                  </div>
                </div>
              </div>

              {/* Problem Statement Card */}
              <div className="relative p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-700">
                 <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                   Đề bài kỹ thuật
                 </div>
                 <div className="space-y-6">
                    <div className="text-xl md:text-2xl font-semibold leading-relaxed text-slate-800 dark:text-slate-100 italic">
                        <MathText text={ex.problem} />
                    </div>
                    
                    {ex.illustrationLink && (
                      <div className="pt-2 animate-in fade-in slide-in-from-left-4 duration-700">
                        <a 
                          href={ex.illustrationLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-2 border-blue-100 dark:border-blue-900/50 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-lg shadow-blue-500/10 group/link"
                        >
                          <ImageIcon size={18} />
                          Nhấp vào đây để xem hình vẽ minh họa
                          <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                      </div>
                    )}
                 </div>
              </div>

              {/* Steps Flow */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ex.steps.map((step, si) => (
                  <div key={si} className="relative flex flex-col p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                    <div className={`w-10 h-10 mb-4 rounded-2xl bg-gradient-to-br ${ex.gradient} text-white flex items-center justify-center shadow-lg`}>
                      {step.icon}
                    </div>
                    <h4 className="font-black text-sm text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">{step.label}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      <MathText text={step.content} />
                    </p>
                    {si < 3 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-200 dark:text-slate-700">
                        <ChevronRight size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamplesPage;
