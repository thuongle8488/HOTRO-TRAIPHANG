
import React from 'react';
// @ts-ignore
import Katex from 'react-katex';

const { InlineMath, BlockMath } = Katex;

interface MathProps {
  math: string;
  block?: boolean;
}

/**
 * Render một khối LaTeX thuần túy với xử lý lỗi
 */
export const MathDisplay: React.FC<MathProps> = ({ math, block = false }) => {
  try {
    const cleanMath = math.replace(/^\$+/, '').replace(/\$+$/, '').trim();
    if (!cleanMath) return null;
    
    if (block) {
      return (
        <div className="my-4 overflow-x-auto text-center py-2 bg-slate-50/50 dark:bg-slate-800/30 rounded-xl">
          <BlockMath math={cleanMath} />
        </div>
      );
    }
    return <InlineMath math={cleanMath} />;
  } catch (error) {
    console.error("Katex rendering error:", error);
    return <code className="text-red-500">{math}</code>;
  }
};

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Render văn bản hỗn hợp có chứa $...$ và $$...$$
 */
export const MathText: React.FC<MathTextProps> = ({ text, className = "" }) => {
  if (!text) return null;

  // Regex nhận diện cả $$...$$ (group 1) và $...$ (group 2)
  // Sử dụng lazy matching *? để không nuốt chửng các cặp đô la tiếp theo
  const regex = /(\$\$.*?\$\$|\$.*?\$)/gs;
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const math = part.slice(2, -2).trim();
          return <MathDisplay key={index} math={math} block />;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1).trim();
          return <MathDisplay key={index} math={math} />;
        }
        // Phần văn bản thuần
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
