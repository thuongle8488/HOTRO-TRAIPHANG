
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, Bot, RefreshCcw, Home, ArrowLeft } from 'lucide-react';
import { geminiTutor } from '../services/geminiService';
import { MathText } from '../components/MathContent';

interface Message {
  role: 'user' | 'bot';
  text: string;
  filePreview?: {
    name: string;
    type: string;
    url: string;
  };
}

const TutorPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      text: `Chào mừng bạn đến với hệ thống Gia sư Trải Phẳng AI! 🤖

Tôi có thể giúp bạn giải quyết các bài toán tìm đường đi ngắn nhất bằng kỹ thuật trải phẳng.` 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{ file: File; base64: string; mimeType: string } | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (customMsg?: string) => {
    const msgText = customMsg || input.trim();
    if (!msgText && !selectedFile && !isLoading) return;

    const userMsg: Message = {
      role: 'user',
      text: customMsg ? `Yêu cầu: ${customMsg.toUpperCase()}` : msgText,
    };

    if (selectedFile) {
      userMsg.filePreview = {
        name: selectedFile.file.name,
        type: selectedFile.file.type,
        url: URL.createObjectURL(selectedFile.file)
      };
    }

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const fileToUpload = selectedFile ? { mimeType: selectedFile.mimeType, data: selectedFile.base64 } : undefined;
    setSelectedFile(null);

    try {
      let response = '';
      if (customMsg === 'reset') {
        response = await geminiTutor.resetChat();
      } else {
        response = await geminiTutor.sendMessage(msgText, fileToUpload);
      }
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Xin lỗi, tôi gặp sự cố kết nối.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col px-2 sm:px-4 pb-4">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-widest text-[10px] transition-colors mb-4">
        <Home size={16} /> Trang chủ
      </Link>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight dark:text-white leading-none">Gia sư AI</h1>
          </div>
        </div>
        <button onClick={() => handleSend('reset')} className="p-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
          <RefreshCcw size={16} className="text-slate-500" />
        </button>
      </div>

      <div className="flex-1 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden relative">
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-6 rounded-[2rem] max-w-[85%] ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'}`}>
                <MathText text={m.text} />
              </div>
            </div>
          ))}
          {isLoading && <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 animate-pulse ml-4">Gia sư đang suy nghĩ...</div>}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Hỏi về Pytago, Cosin hoặc trải phẳng..."
              className="flex-1 bg-slate-50 dark:bg-slate-800 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 outline-none focus:border-blue-500 transition-all font-medium"
            />
            <button onClick={() => handleSend()} className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-2xl transition-all shadow-lg">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorPage;
