
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import logoImg from '../assets/images/logo.png'; // 确保路径对应你的图片位置

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid Layout - 
            Strategy: 12 Cols Total.
            Brand Info: 5 Cols (Left side)
            Spacer: 2 Cols (Middle gap)
            Quick Links: 3 Cols (Right side start)
            Legal Info: 2 Cols (Far right)
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* Brand Info - Left Aligned */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <h4 className="font-display font-bold text-xl text-brand-yellow flex items-center gap-2">
              {/* 直接显示图片，object-contain 保持比例 */}
             <img 
             src={logoImg} 
             alt="Logo" 
              className="w-8 h-8 object-contain shrink-0" 
            />
               心理测试实验室
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed opacity-90 max-w-md">
              我们致力于提供专业、有趣的心理学测试，帮助您更好地认识自己，探索内心的世界。在这里，科学与温度并存，每一次测试都是一次与心灵的对话。
            </p>
          </div>

          {/* Spacer - Hidden on small screens, pushes content right on large screens */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Links Container - Shifted to the Right */}
          <div className="md:col-span-6 lg:col-span-3 space-y-5">
            <h4 className="font-bold text-lg tracking-wide text-brand-yellow">快速链接</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-yellow transition-colors hover:translate-x-1 inline-block duration-200">首页</Link></li>
              <li><Link to="/tests" className="hover:text-brand-yellow transition-colors hover:translate-x-1 inline-block duration-200">所有测试</Link></li>
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors hover:translate-x-1 inline-block duration-200">关于我们</Link></li>
              <li><Link to="/help" className="hover:text-brand-yellow transition-colors hover:translate-x-1 inline-block duration-200">帮助中心</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors hover:translate-x-1 inline-block duration-200">联系我们</Link></li>
            </ul>
          </div>

          {/* Legal Info - Shifted to the Right */}
          <div className="md:col-span-6 lg:col-span-2 space-y-5">
            <h4 className="font-bold text-lg tracking-wide text-brand-yellow">法律信息</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/privacy" className="hover:text-brand-yellow transition-colors hover:translate-x-1 inline-block duration-200">隐私政策</Link></li>
              <li><Link to="/terms" className="hover:text-brand-yellow transition-colors hover:translate-x-1 inline-block duration-200">服务条款</Link></li>
              <li><span className="opacity-50 cursor-not-allowed">Cookie 设置</span></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 心理测试实验室 (Psychology Test Lab). All rights reserved.</p>
          <div className="flex items-center gap-4">
             <p>Designed for Soul Searching.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
