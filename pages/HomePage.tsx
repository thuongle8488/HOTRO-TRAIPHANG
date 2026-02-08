
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Layers, 
  ClipboardList, 
  Target, 
  Bot, 
  Eye, 
  Sparkles,
  BookOpenCheck,
  ChevronRight 
} from 'lucide-react';

const HomePage: React.FC = () => {
  const menuItems = [
    {
      to: "/concepts",
      icon: <BookOpen size={32} />,
      label: "Lý thuyết cơ bản",
      desc: "Nền tảng nguyên lý bảo toàn kích thước và duỗi phẳng bề mặt.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20"
    },
    {
      to: "/process",
      icon: <Layers size={32} />,
      label: "Quy trình giải bài",
      desc: "Khám phá 4 bước chuẩn hóa để xử lý mọi loại hình khối.",
      color: "from-orange-500 to-amber-600",
      shadow: "shadow-orange-500/20"
    },
    {
      to: "/examples",
      icon: <ClipboardList size={32} />,
      label: "Ví dụ minh họa",
      desc: "4 bài tập điển hình từ cơ bản đến phức tạp (Chóp, Nón, Trụ, Hộp).",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20"
    },
    {
      to: "/exercises",
      icon: <BookOpenCheck size={32} />,
      label: "Bài tập vận dụng",
      desc: "Thực hành giải các bài toán nâng cao đòi hỏi tư duy logic.",
      color: "from-purple-500 to-violet-600",
      shadow: "shadow-purple-500/20"
    },
    {
      to: "/tools",
      icon: <Eye size={32} />,
      label: "Công cụ trực quan",
      desc: "Xem mô phỏng 3D quá trình trải phẳng thực tế.",
      color: "from-pink-500 to-rose-600",
      shadow: "shadow-pink-500/20"
    },
    {
      to: "/tutor",
      icon: <Bot size={32} />,
      label: "Gia sư AI hỗ trợ",
      desc: "Hỏi đáp và giải đề trực tiếp với trí tuệ nhân tạo chuyên sâu.",
      color: "from-indigo-500 to-blue-700",
      shadow: "shadow-indigo-500/20"
    },
    {
      to: "/practice",
      icon: <Target size={32} />,
      label: "Thử thách ngẫu nhiên",
      desc: "Luyện tập phản xạ với hệ thống câu hỏi sinh tự động.",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20"
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Hero Section */}
      <header className="text-center space-y-6 py-8">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-xl shadow-blue-500/5 mx-auto">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="font-black text-sm uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            HỆ THỐNG HỖ TRỢ HỌC TẬP
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight dark:text-white uppercase">
          Hỗ trợ kỹ thuật <br /> <span className="text-blue-600 italic">Trải Phẳng</span>
        </h1>
      </header>

      {/* Grid Menu */}
      <nav className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        {menuItems.map((item, idx) => (
          <Link key={idx} to={item.to} className="group outline-none">
            <div className={`h-full flex items-center gap-6 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm ${item.shadow} hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden`}>
              {/* Background Decor */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-[0.03] rounded-bl-[100px] group-hover:opacity-[0.08] transition-opacity`}></div>
              
              <div className={`shrink-0 w-20 h-20 bg-gradient-to-br ${item.color} text-white rounded-3xl flex items-center justify-center shadow-lg shadow-inherit group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {item.icon}
              </div>

              <div className="flex-1 space-y-1">
                <h3 className="text-2xl font-black tracking-tight group-hover:text-blue-600 transition-colors">{item.label}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="shrink-0 text-slate-200 group-hover:text-blue-500 transition-colors">
                <ChevronRight size={24} />
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HomePage;
