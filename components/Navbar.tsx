import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

interface NavbarProps {
  isTransparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isTransparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: '首页', path: '/' },
    { label: '所有测试', path: '/tests', hasDropdown: true },
    { label: '关于我们', path: '/about' },
    { label: '帮助中心', path: '/help' },
    { label: '联系我们', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={`w-full z-50 transition-all duration-300 
        ${isTransparent 
          // ✨ 修改：由 absolute 改为 fixed，并添加 backdrop-blur
          ? 'fixed top-0 left-0 bg-transparent backdrop-blur-sm border-b border-transparent' 
          : 'sticky top-0 bg-brand-bg/95 backdrop-blur-md border-b border-brand-primary/5'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
             <img 
               src={logoImg} 
               alt="Logo" 
               className="w-10 h-10 object-contain group-hover:rotate-3 transition-transform" 
             />
             <span className="font-display font-bold text-xl tracking-tight text-brand-primary">
               心理测试实验室
             </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-1
                    ${isActive(item.path) 
                      ? 'bg-brand-primary text-white shadow-md' 
                      : 'text-brand-secondary hover:bg-white/50 hover:text-brand-primary'} 
                  `}
                  onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />}
                </Link>
                
                {/* Dropdown */}
                {item.hasDropdown && (
                  <div 
                    className="absolute top-full left-0 w-48 pt-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2">
                      <Link to="/tests" className="block px-4 py-2 rounded-xl hover:bg-brand-cream/50 text-brand-primary text-sm font-bold">全部测试</Link>
                      <Link to="/tests?topic=Personality" className="block px-4 py-2 rounded-xl hover:bg-brand-cream/50 text-brand-secondary hover:text-brand-primary text-sm">人格测试</Link>
                      <Link to="/tests?topic=Emotion" className="block px-4 py-2 rounded-xl hover:bg-brand-cream/50 text-brand-secondary hover:text-brand-primary text-sm">情感测试</Link>
                      <Link to="/tests?topic=Career" className="block px-4 py-2 rounded-xl hover:bg-brand-cream/50 text-brand-secondary hover:text-brand-primary text-sm">职业测试</Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link to="/login" className="ml-4 px-6 py-2 bg-brand-yellow text-brand-primary font-bold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              登录
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-brand-primary hover:bg-brand-cream transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-fade-in">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors
                  ${isActive(item.path)
                    ? 'bg-brand-primary text-white'
                    : 'text-brand-secondary hover:bg-brand-cream'}
                `}
              >
                {item.label}
              </Link>
            ))}
             <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 mt-4 rounded-xl text-base font-bold bg-brand-yellow text-brand-primary text-center"
              >
                登录 / 注册
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;