
import React, { useEffect, useState } from 'react';

interface Props {
  type: 'mbti' | 'ocean' | 'general';
  color?: string;
}

const TestTheoryVisual: React.FC<Props> = ({ type, color = '#4A6C58' }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  if (type === 'mbti') {
    // MBTI 4-Dimension Breathing Axis
    const dims = [
      { left: 'E (外向)', right: 'I (内向)', desc: '能量来源' },
      { left: 'S (实感)', right: 'N (直觉)', desc: '感知方式' },
      { left: 'T (思考)', right: 'F (情感)', desc: '判断依据' },
      { left: 'J (判断)', right: 'P (感知)', desc: '生活方式' },
    ];

    return (
      <div className="w-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 my-8">
        <h3 className="text-center font-display font-bold text-gray-400 text-sm mb-8 tracking-widest uppercase">
            荣格八维 · 心理动力模型
        </h3>
        <div className="space-y-8">
          {dims.map((d, i) => (
            <div key={i} className="relative">
              {/* Text Labels */}
              <div className="flex justify-between text-sm font-bold text-brand-primary mb-2 px-2">
                <span className="opacity-80">{d.left}</span>
                <span className="text-xs text-brand-yellow font-normal bg-brand-primary/5 px-2 py-0.5 rounded-full">
                    {d.desc}
                </span>
                <span className="opacity-80">{d.right}</span>
              </div>
              
              {/* The Axis Bar */}
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden relative">
                {/* Breathing Indicator */}
                <div 
                   className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-brand-green/40 to-transparent rounded-full blur-sm transition-all duration-[3000ms] ease-in-out infinite"
                   style={{
                       left: '50%',
                       transform: 'translateX(-50%)',
                       animation: `breathe-${i} 4s infinite ease-in-out alternate`
                   }}
                ></div>
                
                {/* Center Marker */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/50 z-10"></div>
              </div>

              <style>{`
                @keyframes breathe-${i} {
                    0% { transform: translateX(${Math.random() * -40 - 10}px); opacity: 0.6; }
                    100% { transform: translateX(${Math.random() * 40 + 10}px); opacity: 1; }
                }
              `}</style>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
            * 每个人都同时拥有两端的功能，只是偏好程度不同
        </p>
      </div>
    );
  }

  // Default Fallback Visual
  return (
    <div className="w-full h-48 bg-brand-cream rounded-2xl flex items-center justify-center overflow-hidden relative">
       <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
          <path 
            d="M0,100 Q100,50 200,100 T400,100" 
            fill="none" 
            stroke={color} 
            strokeWidth="2" 
            className="animate-pulse opacity-50"
          />
          <path 
            d="M0,120 Q100,170 200,120 T400,120" 
            fill="none" 
            stroke={color} 
            strokeWidth="2" 
            className="animate-pulse opacity-30" 
            style={{ animationDelay: '0.5s' }}
          />
       </svg>
       <div className="absolute inset-0 flex items-center justify-center">
           <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-brand-secondary shadow-sm">
               心理测量模型
           </span>
       </div>
    </div>
  );
};

export default TestTheoryVisual;
