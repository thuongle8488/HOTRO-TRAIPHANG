
import React from 'react';
import { Save, Shield, User, Globe } from 'lucide-react';

const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Cài đặt hệ thống</h1>
      
      <div className="grid gap-6">
        <SettingSection 
          icon={<User size={20} />} 
          title="Thông tin người dùng" 
          description="Quản lý hồ sơ và lịch sử học tập của bạn."
        >
          <div className="space-y-4">
            <InputField label="Tên hiển thị" value="Học viên 01" />
            <InputField label="Mục tiêu học tập" value="Thi Olympic Toán học" />
          </div>
        </SettingSection>

        <SettingSection 
          icon={<Globe size={20} />} 
          title="Ngôn ngữ & Hiển thị" 
          description="Tùy chỉnh giao diện phù hợp với nhu cầu."
        >
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
             <span>Ngôn ngữ hệ thống</span>
             <select className="bg-white dark:bg-gray-800 border rounded-lg px-3 py-1 outline-none">
               <option>Tiếng Việt</option>
               <option>English</option>
             </select>
          </div>
        </SettingSection>

        <SettingSection 
          icon={<Shield size={20} />} 
          title="Bảo mật & Dữ liệu" 
          description="Kiểm soát quyền riêng tư và bộ nhớ cục bộ."
        >
          <button className="text-red-600 font-medium hover:underline">Xóa lịch sử luyện tập (LocalStorage)</button>
        </SettingSection>
      </div>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
          <Save size={20} /> Lưu thay đổi
        </button>
      </div>
    </div>
  );
};

const SettingSection: React.FC<{ icon: React.ReactNode, title: string, description: string, children?: React.ReactNode }> = ({ icon, title, description, children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
    <div className="flex items-start gap-4 mb-6">
      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl">{icon}</div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
    {children}
  </div>
);

const InputField: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="space-y-1">
    <label className="text-xs font-semibold text-gray-400 uppercase">{label}</label>
    <input 
      type="text" 
      defaultValue={value}
      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
    />
  </div>
);

export default SettingsPage;
