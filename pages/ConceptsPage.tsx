
import React from 'react';
import { Link } from 'react-router-dom';
import { MathText } from '../components/MathContent';
import { Lightbulb, ShieldCheck, Compass, Home } from 'lucide-react';

const ConceptsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-16 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-widest text-[10px] transition-colors mb-4">
        <Home size={16} /> Trang chủ
      </Link>

      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Khái niệm & Nguyên lý Trải Phẳng</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Nền tảng lý thuyết biến đổi không gian 3D phức tạp thành mặt phẳng 2D đơn giản.
        </p>
      </div>
      
      {/* 1. Khái niệm & Nguyên lý cơ bản */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
          <div className="flex items-center gap-3 text-blue-600 mb-2">
            <Lightbulb size={28} />
            <h2 className="text-2xl font-bold">Khái niệm</h2>
          </div>
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
            <p>
              <MathText text="Kỹ thuật trải phẳng là phương pháp biến đổi một bài toán tìm đường đi ngắn nhất (hoặc khoảng cách, tối ưu khác) trên bề mặt của một khối hình học không gian ($đa diện, khối tròn xoay$) thành một bài toán tương đương trên mặt phẳng." />
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
          <div className="flex items-center gap-3 text-indigo-600 mb-2">
            <Compass size={28} />
            <h2 className="text-2xl font-bold">Nguyên lý cơ bản</h2>
          </div>
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
            <p>
              <MathText text="Trong hình học phẳng, đường đi ngắn nhất giữa hai điểm là **đoạn thẳng** nối hai điểm đó. Kỹ thuật trải phẳng lợi dụng nguyên lý này để 'duỗi thẳng' bề mặt cong hoặc gấp khúc, đưa các điểm về một mặt phẳng duy nhất." />
            </p>
            <p>
              <MathText text="Sau đó, ta áp dụng định lý **Pytago**, định lý **cosin** hoặc các công thức tính khoảng cách mặt phẳng để tìm kết quả." />
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tính đúng đắn */}
      <section className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="shrink-0 bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
            <ShieldCheck size={40} />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Tính đúng đắn & Bảo toàn kích thước</h2>
            <div className="text-blue-800 dark:text-blue-300 leading-relaxed">
              <MathText text="Tính đúng đắn của phương pháp này nằm ở việc các kích thước được **bảo toàn** khi trải phẳng. Trong hình học đa diện, việc 'lật' một mặt quanh một cạnh chung thực chất là một phép quay trong không gian quanh trục là cạnh đó. Phép biến hình này giữ nguyên độ dài của mọi đoạn thẳng nằm trên mặt đó." />
            </div>
            <div className="text-blue-800 dark:text-blue-300 leading-relaxed font-medium">
              <MathText text="Do đó, tổng chiều dài của một đường đi đi qua nhiều mặt sẽ **không thay đổi** trước và sau khi trải phẳng." />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Phân loại theo hình khối */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Áp dụng cho từng loại hình khối</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Hình hộp & Lập phương</h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <MathText text="Mở các mặt kề nhau theo các cạnh chung để tạo thành một dải phẳng liên tục. Lưu ý rằng một điểm đích có thể có nhiều vị trí tương ứng trên bản trải tùy thuộc vào thứ tự các mặt được mở rộng, cần chọn vị trí tạo ra đoạn thẳng ngắn nhất." />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3 text-indigo-600">Hình trụ</h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <MathText text="Mặt xung quanh được trải phẳng thành một hình chữ nhật. Trong đó, một chiều của hình chữ nhật tương ứng với chiều cao vật thể, chiều còn lại tương ứng với chu vi đáy. Đường đi ngắn nhất thường là đường chéo của hình chữ nhật này." />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3 text-green-600">Hình nón</h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <MathText text="Mặt xung quanh của hình nón khi trải ra sẽ trở thành một hình quạt tròn. Bán kính của hình quạt chính là độ dài đường sinh của hình nón, còn độ dài cung tròn của hình quạt chính là chu vi của đường tròn đáy." />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3 text-purple-600">Hình chóp đều</h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <MathText text="Các mặt bên (thường là các tam giác cân) được trải liền kề nhau chung đỉnh và chung cạnh bên. Độ dài đường đi được xác định bằng cách nối các điểm trên các mặt tam giác đã được đưa về cùng một mặt phẳng." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptsPage;
