
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, RotateCcw, AlertCircle, Trophy, Target, Lightbulb, Box, Compass, Layers, Octagon, Home } from 'lucide-react';
import { MathText } from '../components/MathContent';
import { calculateBoxShortestPath, calculateCylinderPath, calculateConePath } from '../utils/geometry';

type ShapeType = 'BOX' | 'CUBE' | 'CYLINDER' | 'CONE';

interface Question {
  type: ShapeType;
  params: any;
  text: string;
  answer: string;
  hint: string;
}

const PracticePage: React.FC = () => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ status: 'correct' | 'wrong' | null, msg: string }>({ status: null, msg: '' });
  const [score, setScore] = useState(() => parseInt(localStorage.getItem('geometry_score') || '0'));

  const generateQuestion = () => {
    const types: ShapeType[] = ['BOX', 'CUBE', 'CYLINDER', 'CONE'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    let newQuestion: Question;

    switch (randomType) {
      case 'CUBE': {
        const a = Math.floor(Math.random() * 15) + 5;
        const ans = Math.sqrt(5) * a;
        newQuestion = {
          type: 'CUBE',
          params: { a },
          text: `Cho một hình lập phương có cạnh $a=${a}$. Tìm độ dài đường đi ngắn nhất giữa hai đỉnh đối diện xa nhất trên bề mặt của hình lập phương.`,
          answer: ans.toFixed(2),
          hint: "Với hình lập phương cạnh $a$, đường ngắn nhất giữa 2 đỉnh đối diện được tính bằng công thức: $$d = a\\sqrt{5} \\approx 2.236 \\cdot a$$"
        };
        break;
      }
      case 'CYLINDER': {
        const r = Math.floor(Math.random() * 8) + 3;
        const h = Math.floor(Math.random() * 20) + 10;
        const ans = calculateCylinderPath(r, h, 1);
        newQuestion = {
          type: 'CYLINDER',
          params: { r, h },
          text: `Một con kiến bò trên mặt xung quanh của một hình trụ có bán kính đáy $r=${r}$ và chiều cao $h=${h}$. Con kiến bò từ một điểm $A$ ở đáy đến điểm $B$ nằm thẳng đứng phía trên $A$ ở nắp trên, nhưng phải quấn quanh thân trụ đúng 1 vòng. Tính quãng đường ngắn nhất.`,
          answer: ans.toFixed(2),
          hint: "Trải phẳng hình trụ thành hình chữ nhật có chiều ngang là chu vi đáy $2\\pi r$ và chiều cao $h$. Kết quả là: $$d = \\sqrt{(2\\pi r)^2 + h^2}$$"
        };
        break;
      }
      case 'CONE': {
        const r = Math.floor(Math.random() * 6) + 4;
        const l = Math.floor(Math.random() * 10) + r + 5; 
        const theta = (2 * Math.PI * r) / l;
        const halfTheta = theta / 2;
        const ans = Math.sqrt(l * l + (l / 2) * (l / 2) - 2 * l * (l / 2) * Math.cos(halfTheta));
        
        newQuestion = {
          type: 'CONE',
          params: { r, l },
          text: `Cho hình nón có bán kính đáy $r=${r}$ và độ dài đường sinh $l=${l}$. Một sợi dây quấn từ điểm $A$ trên đường tròn đáy đến trung điểm $M$ của đường sinh đối diện với $SA$ qua trục. Tính độ dài ngắn nhất của sợi dây.`,
          answer: ans.toFixed(2),
          hint: "Góc ở đỉnh hình quạt khi trải phẳng là: $$\\alpha = 360^\\circ \\cdot \\frac{r}{l}$$ Sau đó tính $d$ bằng định lý Cosin cho tam giác $SAM$ trên bản trải với góc $\\alpha/2$."
        };
        break;
      }
      case 'BOX':
      default: {
        const a = Math.floor(Math.random() * 15) + 10;
        const b = Math.floor(Math.random() * 15) + 10;
        const c = Math.floor(Math.random() * 15) + 10;
        const res = calculateBoxShortestPath(a, b, c);
        newQuestion = {
          type: 'BOX',
          params: { a, b, c },
          text: `Cho một hình hộp chữ nhật có kích thước dài $a=${a}$, rộng $b=${b}$ và cao $c=${c}$. Tìm độ dài đường đi ngắn nhất giữa hai đỉnh đối diện xa nhất trên bề mặt hình hộp.`,
          answer: res.min.toFixed(2),
          hint: "Thử lần lượt 3 lộ trình khả thi qua 3 cặp mặt kề nhau, kết quả là giá trị nhỏ nhất của: $$d = \\min\\left(\\sqrt{(a+b)^2+c^2}, \\sqrt{(a+c)^2+b^2}, \\sqrt{(b+c)^2+a^2}\\right)$$"
        };
        break;
      }
    }
    
    setQuestion(newQuestion);
    setUserAnswer('');
    setFeedback({ status: null, msg: '' });
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleCheck = () => {
    const parsedUser = parseFloat(userAnswer);
    if (isNaN(parsedUser)) {
      setFeedback({ status: 'wrong', msg: 'Vui lòng nhập một con số hợp lệ!' });
      return;
    }

    if (Math.abs(parsedUser - parseFloat(question!.answer)) < 0.1) {
      setFeedback({ status: 'correct', msg: 'Chính xác! Bạn là bậc thầy trải phẳng.' });
      const newScore = score + 10;
      setScore(newScore);
      localStorage.setItem('geometry_score', newScore.toString());
    } else {
      setFeedback({ status: 'wrong', msg: `Hầu như đúng rồi! Đáp án chuẩn là ${question!.answer}.` });
    }
  };

  const getIcon = (type: ShapeType) => {
    switch (type) {
      case 'BOX': return <Box size={24} />;
      case 'CUBE': return <Octagon size={24} />;
      case 'CYLINDER': return <Layers size={24} />;
      case 'CONE': return <Compass size={24} />;
    }
  };

  const getTitle = (type: ShapeType) => {
    switch (type) {
      case 'BOX': return 'Hình Hộp Chữ Nhật';
      case 'CUBE': return 'Hình Lập Phương';
      case 'CYLINDER': return 'Hình Trụ Tròn';
      case 'CONE': return 'Hình Nón Tròn';
    }
  };

  if (!question) return null;

  return (
    <div className="max-w-3xl mx-auto pb-16 space-y-10">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-widest text-[10px] transition-colors mb-4">
        <Home size={16} /> Trang chủ
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white">Thử Thách <span className="text-blue-600">Ngẫu Nhiên</span></h1>
        </div>
        <div className="relative group">
           <div className="relative flex items-center gap-3 bg-gradient-to-br from-amber-400 to-orange-600 px-8 py-4 rounded-[2rem] shadow-lg shadow-orange-500/20 text-white">
              <Trophy size={24} className="animate-bounce" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Điểm của bạn</span>
                <span className="text-2xl font-black leading-none">{score} PTS</span>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 space-y-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-blue-600">
             <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
               {getIcon(question.type)}
             </div>
             <h3 className="text-xl font-black uppercase tracking-wider">{getTitle(question.type)}</h3>
          </div>
          <div className="text-2xl font-medium leading-relaxed text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700">
            <MathText text={question.text} />
          </div>
        </div>

        <div className="grid gap-6">
          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Nhập kết quả (Làm tròn 2 chữ số)</label>
            <div className="relative">
              <input 
                type="number" 
                step="0.01"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                placeholder="VD: 45.28"
                className="w-full px-8 py-6 text-3xl font-black font-mono bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[2rem] focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleCheck}
              className="flex-[2] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-6 rounded-[2rem] shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 text-lg"
            >
              <CheckCircle2 size={24} /> Kiểm tra đáp án
            </button>
            <button 
              onClick={generateQuestion}
              className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-[2rem] transition-all group flex items-center justify-center gap-3 font-bold text-slate-600 dark:text-slate-300 py-6 sm:py-0"
            >
              <RotateCcw size={24} className="group-hover:rotate-180 transition-transform duration-500 text-slate-500" />
              <span>Câu khác</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-[2.5rem] border border-amber-100 dark:border-slate-700 flex gap-6 items-start">
        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-amber-500 shrink-0">
          <Lightbulb size={28} />
        </div>
        <div className="space-y-2 flex-1">
          <h4 className="font-black text-amber-900 dark:text-amber-400 uppercase tracking-widest text-xs">Mẹo giải nhanh:</h4>
          <div className="text-amber-800/80 dark:text-slate-400 font-medium leading-relaxed prose prose-slate max-w-none prose-p:my-0">
            <MathText text={question.hint} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
