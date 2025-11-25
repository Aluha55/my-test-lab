import React, { useState, useEffect, useRef } from 'react';
import { DailyTip } from '../types';
import { Sparkles, Share2, Quote, CheckCircle2, Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import logoImg from '../assets/images/logo.png';

interface Props {
  tip: DailyTip;
}

// --- AbstractArt 组件 (保持不变) ---
const AbstractArt: React.FC<{ theme: string }> = ({ theme }) => {
  const palettes: Record<string, any> = {
    yellow: { bg: '#FFFDE7', c1: '#FDD835', c2: '#FFB300', c3: '#FFF59D' },
    green: { bg: '#F1F8E9', c1: '#66BB6A', c2: '#33691E', c3: '#C8E6C9' },
    blue: { bg: '#E1F5FE', c1: '#29B6F6', c2: '#01579B', c3: '#B3E5FC' },
    purple: { bg: '#F3E5F5', c1: '#AB47BC', c2: '#4A148C', c3: '#E1BEE7' },
  };
  const p = palettes[theme] || palettes.yellow;
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={p.bg} />
          <stop offset="100%" stopColor={p.c3} stopOpacity="0.8" />
        </linearGradient>
        <filter id="blur-filter" x="-50%" y="-50%" width="200%" height="200%">
           <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
        </filter>
      </defs>
      <rect width="400" height="200" fill={`url(#grad-${theme})`} />
      <circle cx="0" cy="200" r="150" fill={p.c1} opacity="0.15" filter="url(#blur-filter)" />
      <circle cx="400" cy="0" r="120" fill={p.c2} opacity="0.1" filter="url(#blur-filter)" />
      <circle cx="40" cy="160" r="60" fill={p.c1} opacity="0.1" />
      <circle cx="360" cy="40" r="80" fill={p.c2} opacity="0.1" />
      <circle cx="200" cy="100" r="120" stroke={p.c3} strokeWidth="1" fill="none" opacity="0.6" strokeDasharray="5,5"/>
      <path d="M0,120 C100,80 200,160 400,120" fill="none" stroke={p.c1} strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" />
      <circle cx="180" cy="80" r="4" fill={p.c2} opacity="0.6" />
      <circle cx="220" cy="120" r="6" fill={p.c1} opacity="0.8" />
    </svg>
  );
};

const DailyKnowledgeCard: React.FC<Props> = ({ tip }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [hasCheckedIn, setHasCheckedIn] = useState(false);
  const [checkInCount, setCheckInCount] = useState(1209);
  const [isGeneratingImg, setIsGeneratingImg] = useState(false);

  useEffect(() => {
    const todayKey = `checkin-${new Date().toDateString()}`;
    const dateNum = new Date().getDate();
    const baseCount = 1200 + (dateNum * 37) % 500; 
    const userChecked = localStorage.getItem(todayKey);
    if (userChecked) {
      setHasCheckedIn(true);
      setCheckInCount(baseCount + 1);
    } else {
      setCheckInCount(baseCount);
    }
  }, []);

  const handleCheckIn = () => {
    if (hasCheckedIn) return;
    const todayKey = `checkin-${new Date().toDateString()}`;
    localStorage.setItem(todayKey, 'true');
    setHasCheckedIn(true);
    setCheckInCount(prev => prev + 1);
  };

  const handleDownloadImage = () => {
    if (!cardRef.current || isGeneratingImg) return;
    setIsGeneratingImg(true);
    setTimeout(async () => {
      try {
        if (!cardRef.current) throw new Error("Card ref missing");
        const canvas = await html2canvas(cardRef.current, {
          scale: 2, 
          backgroundColor: null, 
          logging: false, 
          useCORS: true 
        });
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const link = document.createElement('a');
        link.download = `每日心理一签-${new Date().toLocaleDateString('zh-CN')}.png`;
        link.href = image;
        link.click();
      } catch (error) {
        console.error("生成图片失败:", error);
      } finally {
        setIsGeneratingImg(false);
      }
    }, 200);
  };

  const todayStr = new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' });

  return (
    <div ref={cardRef} className="w-full bg-white rounded-3xl shadow-xl shadow-brand-primary/5 overflow-hidden border border-white hover:border-brand-cream hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row h-auto md:h-[340px] relative font-sans">
      
      {/* 左侧：动态艺术图 */}
      <div className="w-full md:w-2/5 h-48 md:h-full relative overflow-hidden bg-gray-50">
        <AbstractArt theme={tip.colorTheme} />
        
        {/* 左上角标签 */}
        {/* 改为 Flex 居中，但是给文字单独加了 pt-[3px] 把它往下按 */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 h-8 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm ring-1 ring-black/5">
           <Sparkles size={14} className="text-brand-yellow fill-brand-yellow shrink-0" /> 
           <span className="pt-[3px]">每日一签</span>
        </div>
      </div>
      
      {/* 右侧：内容区域 */}
      <div className="w-full md:w-3/5 p-8 pt-10 flex flex-col justify-start relative bg-white">
         <Quote className="absolute top-8 left-8 text-gray-50 fill-gray-50 -z-10 transform scale-x-[-1]" size={100} />

         {/* 标签与日期栏 */}
         <div className="flex items-center gap-3 mb-6 h-7"> 
             
             {/* 1. 分类标签 */}
             {/* flex 居中 + pt-[3px] 下压 */}
             <div className={`flex items-center justify-center h-7 px-3 rounded-lg shadow-sm
                ${tip.colorTheme === 'green' ? 'bg-green-100 text-green-800' : ''}
                ${tip.colorTheme === 'blue' ? 'bg-blue-100 text-blue-800' : ''}
                ${tip.colorTheme === 'yellow' ? 'bg-amber-100 text-amber-800' : ''}
                ${tip.colorTheme === 'purple' ? 'bg-purple-100 text-purple-800' : ''}
             `}>
                <span className="text-[11px] font-bold tracking-wide uppercase pt-[3px]">
                  {tip.tag}
                </span>
             </div>
             
             {/* 2. 圆点 */}
             <div className="h-7 flex items-center">
               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
             </div>
             
             {/* 3. 日期 */}
             {/* flex 居中 + pt-[2px] 下压 */}
             <div className="h-7 flex items-center">
               <span className="text-xs text-gray-400 font-medium pt-[2px]">{todayStr}</span>
             </div>
         </div>
         
         <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-primary mb-4 leading-tight">
             {tip.title}
         </h3>
         
         <p className="text-brand-secondary leading-relaxed text-sm md:text-[15px] opacity-90">
             {tip.content}
         </p>
         
         {/* 底部交互按钮 (拍照时隐藏) */}
         <div className="flex items-center justify-between mt-auto pt-8" data-html2canvas-ignore>
             <button 
                onClick={handleCheckIn}
                disabled={hasCheckedIn}
                className={`flex items-center gap-2 text-xs font-medium transition-all duration-300 px-3 py-2 rounded-full -ml-3
                  ${hasCheckedIn 
                    ? 'text-brand-green bg-green-50 cursor-default' 
                    : 'text-gray-400 hover:bg-gray-50 hover:text-brand-primary cursor-pointer active:scale-95'}
                `}
             >
                 <div className="flex -space-x-2">
                    <div className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white
                      ${hasCheckedIn ? 'bg-brand-green' : 'bg-brand-yellow'}
                    `}>
                      {hasCheckedIn ? <CheckCircle2 size={14} /> : 'A'}
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                 </div>
                 <span className="pt-[2px]">
                    {hasCheckedIn ? '已完成共鸣 ' : '已有 '} 
                    <span className={`font-bold ${hasCheckedIn ? 'text-brand-green' : 'text-gray-600'}`}>
                      {checkInCount.toLocaleString()}
                    </span> 
                    人共鸣
                 </span>
             </button>
             
             <button 
                onClick={handleDownloadImage}
                disabled={isGeneratingImg}
                className="flex items-center gap-2 text-brand-primary font-bold text-sm hover:bg-brand-cream px-5 py-2.5 rounded-full transition-all group/btn active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed bg-gray-50"
             >
                 {isGeneratingImg ? (
                   <>生成中... <Loader2 size={16} className="animate-spin" /></>
                 ) : (
                   <><span className="pt-[1px]">保存卡片</span> <Download size={16} className="group-hover/btn:translate-y-0.5 transition-transform" /></>
                 )}
             </button>
         </div>
      </div>
      
      {/* 底部 Logo 水印 */}
      <div className="hidden absolute bottom-0 left-0 w-full py-4 px-8 bg-white/95 backdrop-blur-xl z-20 border-t border-gray-50"
           style={{ display: isGeneratingImg ? 'block' : 'none' }}>
        
        <div className="flex justify-between items-center h-8">
            
          {/* 左侧：Logo + 文字 */}
          <div className="relative h-full flex items-center">
            <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain mr-3" />
            {/* 文字 pt-[3px] 强力下压 */}
            <span className="font-display font-bold text-brand-primary text-sm tracking-wide pt-[3px]">
                心理测试实验室
            </span>
          </div>

          {/* 右侧：网址 */}
          <div className="h-full flex items-center">
            {/* 网址 pt-[2px] 下压 */}
            <span className="text-[11px] text-gray-400 font-medium tracking-wider font-mono pt-[2px]">
                https://www.personalitytestlab.com/
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DailyKnowledgeCard;