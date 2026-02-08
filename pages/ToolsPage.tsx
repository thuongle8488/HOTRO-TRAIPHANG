
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  BoxSelect, 
  Compass, 
  Layers, 
  Box,
  MonitorPlay,
  ArrowUpRight,
  Home,
  Pyramid
} from 'lucide-react';

const ToolsPage: React.FC = () => {
  const visualizationTools = [
    {
      id: 'pyramid-unfolding',
      title: 'Trải phẳng hình chóp đều',
      description: 'Mô phỏng động quá trình lật các mặt bên của hình chóp tứ giác đều lên mặt phẳng đáy.',
      icon: <Pyramid size={32} />,
      link: 'https://www.geogebra.org/m/vcyszahn',
      color: 'from-amber-500 to-orange-600',
      tag: 'GeoGebra'
    },
    {
      id: 'cone-unfolding',
      title: 'Trải phẳng hình nón',
      description: 'Mô phỏng trực quan quá trình duỗi phẳng mặt xung quanh hình nón thành hình quạt trên GeoGebra.',
      icon: <Compass size={32} />,
      link: 'https://www.geogebra.org/m/qvyrc6rz',
      color: 'from-pink-500 to-rose-600',
      tag: 'GeoGebra'
    },
    {
      id: 'cylinder-unfolding',
      title: 'Trải phẳng hình trụ',
      description: 'Khám phá cách mặt xung quanh hình trụ biến đổi thành hình chữ nhật chuẩn kỹ thuật.',
      icon: <Layers size={32} />,
      link: 'https://www.geogebra.org/m/m7wsfx2w',
      color: 'from-blue-500 to-indigo-600',
      tag: 'GeoGebra'
    },
    {
      id: 'box-unfolding',
      title: 'Trải phẳng hình hộp',
      description: 'Xem các phương án trải phẳng khác nhau của hình hộp chữ nhật để tìm đường đi tối ưu.',
      icon: <Box size={32} />,
      link: 'https://www.geogebra.org/m/fdqagj2u',
      color: 'from-emerald-500 to-teal-600',
      tag: 'GeoGebra'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-widest text-[10px] transition-colors mb-4">
        <Home size={16} /> Trang chủ
      </Link>

      <div className="text-center space-y-6 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-xs font-black uppercase tracking-widest">
           <Eye size={16} /> Visual Tools
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight dark:text-white">
          Công cụ <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">Trực quan</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
        {visualizationTools.map((tool) => (
          <div 
            key={tool.id} 
            className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden hover:-translate-y-2 transition-all duration-500"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tool.color} opacity-[0.03] rounded-bl-[100px] group-hover:opacity-10 transition-opacity`}></div>
            
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} text-white rounded-2xl flex items-center justify-center shadow-lg shadow-inherit group-hover:rotate-6 transition-transform`}>
                  {tool.icon}
                </div>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {tool.tag}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black tracking-tight dark:text-white">{tool.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium h-24 overflow-hidden">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4">
                <a 
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gradient-to-r ${tool.color} hover:text-white transition-all shadow-sm group/btn`}
                >
                  <MonitorPlay size={20} />
                  Mở mô phỏng
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
