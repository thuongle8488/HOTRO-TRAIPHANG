
import React from 'react';
import { MathText } from '../components/MathContent';
import { Target, Scissors, Ruler, CheckCircle, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProcessPage: React.FC = () => {
  const steps = [
    {
      title: "Nhận diện & Phân tích",
      icon: <Target size={32} />,
      color: "from-rose-500 to-pink-600",
      accent: "rose",
      details: [
        "Xác định rõ ràng các điểm đầu, điểm cuối của đường đi.",
        "Xác định các mặt hình học mà đường đi sẽ đi qua.",
        "Lựa chọn loại hình khối: Đa diện, Hình trụ hay Hình nón.",
        "Xác định kích thước thực tế: Cạnh, chiều cao, bán kính."
      ]
    },
    {
      title: "Triển khai Mặt phẳng",
      icon: <Scissors size={32} />,
      color: "from-blue-500 to-indigo-600",
      accent: "blue",
      details: [
        "Cắt dọc theo các cạnh (với đa diện) hoặc đường sinh (với khối tròn).",
        "Lật các mặt kề nhau sao cho chúng nằm trên một mặt phẳng duy nhất.",
        "Đảm bảo bảo toàn kích thước và vị trí các điểm trên bản trải."
      ]
    },
    {
      title: "Giải toán Hình học phẳng",
      icon: <Ruler size={32} />,
      color: "from-emerald-500 to-teal-600",
      accent: "emerald",
      details: [
        "Đường đi ngắn nhất lúc này chính là **đoạn thẳng** nối hai điểm.",
        "Sử dụng định lý Pytago hoặc định lý hàm số Cosin để tính toán.",
        "Lưu ý các trường hợp điểm ảnh xuất hiện nhiều lần do tính tuần hoàn."
      ]
    },
    {
      title: "Kiểm tra & Kết luận",
      icon: <CheckCircle size={32} />,
      color: "from-purple-600 to-violet-700",
      accent: "purple",
      details: [
        "Cuộn bản trải lại để kiểm tra xem đường thẳng có khả thi không.",
        "So sánh các phương án trải khác nhau để tìm ra min tuyệt đối.",
        "Đưa ra đáp án cuối cùng kèm đơn vị và làm tròn."
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16">
      <div className="flex justify-start">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-widest text-[10px] transition-colors">
          <Home size={16} /> Trang chủ
        </Link>
      </div>

      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
          Quy trình <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">4 Bước Chuẩn</span>
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
          Lộ trình khoa học giúp bạn giải mã mọi thử thách tìm đường đi ngắn nhất trên bề mặt vật thể.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Decorative Background Connection Line */}
        <div className="hidden lg:block absolute inset-0 py-20 pointer-events-none">
           <div className="w-1 h-full bg-slate-100 dark:bg-slate-800 absolute left-1/2 -translate-x-1/2 rounded-full opacity-50"></div>
        </div>

        {steps.map((step, idx) => (
          <div key={idx} className="group relative">
            <div className={`p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col overflow-hidden`}>
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-[0.03] rounded-bl-[100px] group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="flex items-center gap-6 mb-8">
                <div className={`w-20 h-20 shrink-0 bg-gradient-to-br ${step.color} text-white rounded-3xl flex items-center justify-center shadow-lg shadow-inherit group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Giai đoạn {idx + 1}</div>
                  <h3 className="text-2xl font-black tracking-tight">{step.title}</h3>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                 {step.details.map((detail, dIdx) => (
                   <div key={dIdx} className="flex gap-4 items-start">
                     <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color} shrink-0`}></div>
                     <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                       <MathText text={detail} />
                     </p>
                   </div>
                 ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center text-xs font-black uppercase tracking-widest text-slate-400">
                <span>Chi tiết kỹ thuật</span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-blue-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive CTA */}
      <div className="relative bg-gradient-to-br from-indigo-700 to-blue-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden shadow-2xl shadow-blue-500/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black tracking-tight">Thực hành qua các ví dụ điển hình</h2>
            <p className="text-indigo-100 text-lg font-medium opacity-90 max-w-xl">
              Xem cách áp dụng quy trình 4 bước vào các bài toán thực tế về Hình nón, Hình trụ và Hình chóp.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/examples" className="px-10 py-5 bg-white text-indigo-950 rounded-2xl font-black shadow-xl hover:scale-105 transition-all text-center">
              Xem các ví dụ
            </Link>
            <Link to="/practice" className="px-10 py-5 bg-blue-600/30 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-blue-600/40 transition-all text-center">
              Luyện tập ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
