import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tests from './pages/Tests';
import TestIntro from './pages/TestIntro';
import TestQuestionnaire from './pages/TestQuestionnaire';
import About from './pages/About';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ✨ 新增：一个专门控制 Layout 的组件
const LayoutContent: React.FC = () => {
  const location = useLocation();
  // 判断当前是否是“正在做题页面” (以 /start 结尾)
  const isTakingTest = location.pathname.endsWith('/start');

  return (
    <div className="font-sans text-brand-primary antialiased selection:bg-brand-yellow selection:text-brand-primary flex flex-col min-h-screen">
      <div className="flex-grow">
          <Routes>
            {/* 普通页面：Navbar 不透明 */}
            <Route path="/" element={<><Navbar /><Home /></>} />
            <Route path="/tests" element={<><Navbar /><Tests /></>} />
            <Route path="/about" element={<><Navbar /><About /></>} />
            <Route path="/help" element={<><Navbar /><Help /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /></>} />
            <Route path="/privacy" element={<><Navbar /><Privacy /></>} />
            
            {/* 测试介绍页：Navbar 透明 */}
            <Route path="/tests/:slug" element={<><Navbar isTransparent={true} /><TestIntro /></>} />
            
            {/* 做题页：没有 Navbar */}
            <Route path="/tests/:slug/start" element={<TestQuestionnaire />} />
          </Routes>
      </div>
      
      {/* ✨ Footer 逻辑：只要不是做题页，就显示 Footer */}
      {!isTakingTest && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <LayoutContent />
    </HashRouter>
  );
};

export default App;