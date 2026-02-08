
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MathDisplay } from '../components/MathContent';
import { calculateBoxShortestPath, calculateCylinderPath, calculateConePath } from '../utils/geometry';

const ShapeDetailPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [params, setParams] = useState<any>({ a: 10, b: 20, c: 30, r: 5, h: 20, l: 25 });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  const renderCalculator = () => {
    switch(type) {
      case 'box':
      case 'cube':
        const boxRes = calculateBoxShortestPath(params.a, params.b, params.c);
        return (
          <div className="space-y-6">
             <div className="grid grid-cols-3 gap-4">
                <InputField label="Dài (a)" name="a" value={params.a} onChange={handleInputChange} />
                <InputField label="Rộng (b)" name="b" value={params.b} onChange={handleInputChange} />
                <InputField label="Cao (c)" name="c" value={params.c} onChange={handleInputChange} />
             </div>
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border">
                <h3 className="font-bold mb-4">Các phương án trải:</h3>
                {boxRes.paths.map((p, i) => (
                  <div key={i} className="flex justify-between py-2 border-b last:border-0">
                    <span>{p.label}:</span>
                    <span className="font-mono font-bold text-blue-600">{p.value.toFixed(2)}</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t-2 border-dashed flex justify-between">
                  <span className="font-bold">Đường đi ngắn nhất:</span>
                  <span className="text-2xl font-bold text-green-600 font-mono underline">{boxRes.min.toFixed(2)}</span>
                </div>
             </div>
          </div>
        );
      case 'cylinder':
        const cylRes = calculateCylinderPath(params.r, params.h);
        return (
          <div className="space-y-6">
             <div className="grid grid-cols-2 gap-4">
                <InputField label="Bán kính đáy (r)" name="r" value={params.r} onChange={handleInputChange} />
                <InputField label="Chiều cao (h)" name="h" value={params.h} onChange={handleInputChange} />
             </div>
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border">
                <MathDisplay math="d = \sqrt{(2\pi r)^2 + h^2}" block />
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold">Kết quả:</span>
                  <span className="text-3xl font-bold text-green-600 font-mono">{cylRes.toFixed(2)}</span>
                </div>
             </div>
          </div>
        );
      case 'cone':
        const coneRes = calculateConePath(params.r, params.l);
        return (
          <div className="space-y-6">
             <div className="grid grid-cols-2 gap-4">
                <InputField label="Bán kính đáy (r)" name="r" value={params.r} onChange={handleInputChange} />
                <InputField label="Đường sinh (l)" name="l" value={params.l} onChange={handleInputChange} />
             </div>
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border">
                <MathDisplay math="\theta = \frac{2\pi r}{l}" block />
                <MathDisplay math="d = 2l \sin(\theta/2)" block />
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold">Kết quả (đối xứng qua đỉnh):</span>
                  <span className="text-3xl font-bold text-green-600 font-mono">{coneRes.toFixed(2)}</span>
                </div>
             </div>
          </div>
        );
      default:
        return <div>Đang phát triển tính năng cho hình này...</div>;
    }
  };

  const titles: Record<string, string> = {
    box: 'Hình hộp chữ nhật',
    cube: 'Hình lập phương',
    cylinder: 'Hình trụ',
    cone: 'Hình nón',
    pyramid: 'Hình chóp đều'
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">{titles[type || 'box']}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Tham số & Tính toán</h2>
            {renderCalculator()}
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Minh họa Trải phẳng (SVG)</h2>
            <div className="aspect-square bg-gray-50 dark:bg-gray-700 flex items-center justify-center rounded-xl overflow-hidden">
               {type === 'box' && <BoxNetSVG a={params.a} b={params.b} c={params.c} />}
               {type === 'cylinder' && <CylinderNetSVG r={params.r} h={params.h} />}
               {!['box', 'cylinder'].includes(type || '') && <span className="text-gray-400">Đang tải bản vẽ...</span>}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const InputField: React.FC<{ label: string, name: string, value: number, onChange: any }> = ({ label, name, value, onChange }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-gray-500">{label}</label>
    <input 
      type="number" 
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
    />
  </div>
);

const BoxNetSVG: React.FC<{ a: number, b: number, c: number }> = ({ a, b, c }) => {
  const scale = 150 / Math.max(a, b, c, a+b+c);
  const sa = a * scale;
  const sb = b * scale;
  const sc = c * scale;

  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-sm">
       {/* Drawing a simple T-net for box */}
       <rect x={50} y={50} width={sb} height={sa} fill="none" stroke="currentColor" strokeWidth="2" />
       <rect x={50+sb} y={50} width={sc} height={sa} fill="none" stroke="currentColor" strokeWidth="2" />
       <rect x={50-sc} y={50} width={sc} height={sa} fill="none" stroke="currentColor" strokeWidth="2" />
       <rect x={50} y={50-sc} width={sb} height={sc} fill="none" stroke="currentColor" strokeWidth="2" />
       <rect x={50} y={50+sa} width={sb} height={sc} fill="none" stroke="currentColor" strokeWidth="2" />
       <line x1={50} y1={50} x2={50+sb+sc} y2={50+sa} stroke="red" strokeWidth="2" strokeDasharray="4" />
    </svg>
  );
};

const CylinderNetSVG: React.FC<{ r: number, h: number }> = ({ r, h }) => {
  const width = 2 * Math.PI * r;
  const scale = 120 / Math.max(width, h);
  const sw = width * scale;
  const sh = h * scale;
  const sr = r * scale;

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
       <rect x={40} y={60} width={sw} height={sh} fill="none" stroke="currentColor" strokeWidth="2" />
       <circle cx={40 + sw/2} cy={60 - sr} r={sr} fill="none" stroke="currentColor" strokeWidth="2" />
       <circle cx={40 + sw/2} cy={60 + sh + sr} r={sr} fill="none" stroke="currentColor" strokeWidth="2" />
       <line x1={40} y1={60} x2={40+sw} y2={60+sh} stroke="red" strokeWidth="2" strokeDasharray="4" />
    </svg>
  );
};

export default ShapeDetailPage;
