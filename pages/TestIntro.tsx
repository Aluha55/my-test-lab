import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getTestBySlug } from '../services/testService';
import { TestData } from '../types';
import { Clock, Users, ArrowRight, ChevronLeft, ShieldCheck, ChevronDown, ChevronUp, BookOpen, List } from 'lucide-react';

const getThemeColors = (topic: string) => {
  switch (topic) {
    case 'Personality':
      return {
        bg: 'bg-gradient-to-b from-[#F5F3FF] to-[#EDE9FE]',
        accent: 'text-indigo-600',
        button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/30',
        tag: 'bg-indigo-100 text-indigo-700',
        orb: 'bg-purple-300'
      };
    case 'Emotion': 
      return {
        bg: 'bg-gradient-to-b from-[#FFF5F5] to-[#FFE4E6]', 
        accent: 'text-rose-500',
        button: 'bg-[#FB7185] hover:bg-[#F43F5E] text-white shadow-rose-500/30', 
        tag: 'bg-rose-100 text-rose-700',
        orb: 'bg-orange-200'
      };
    case 'Career': 
      return {
        bg: 'bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE]', 
        accent: 'text-sky-600',
        button: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-500/30',
        tag: 'bg-sky-100 text-sky-700',
        orb: 'bg-blue-200'
      };
    case 'Fun': 
      return {
        bg: 'bg-gradient-to-b from-[#F0FDF4] to-[#DCFCE7]', 
        accent: 'text-emerald-600',
        button: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/30',
        tag: 'bg-emerald-100 text-emerald-700',
        orb: 'bg-lime-200'
      };
    default: 
      return {
        bg: 'bg-gradient-to-b from-[#F8FAFC] to-[#E2E8F0]',
        accent: 'text-slate-600',
        button: 'bg-slate-800 hover:bg-slate-900 text-white shadow-slate-500/30',
        tag: 'bg-slate-200 text-slate-700',
        orb: 'bg-gray-300'
      };
  }
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors pr-8">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-indigo-500 shrink-0" /> : <ChevronDown size={20} className="text-slate-400 shrink-0" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-500 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const TestIntro: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [test, setTest] = useState<TestData | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      const foundTest = getTestBySlug(slug);
      if (foundTest) {
        setTest(foundTest);
      } else {
        navigate('/tests');
      }
    }
  }, [slug, navigate]);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!test) return null;

  const { meta } = test;
  const richIntro = meta?.richIntro || [];
  const references = meta?.references || [];
  const theme = getThemeColors(test.topic);

  // ✨ 核心逻辑：优先使用 heroImage，如果没有就退化使用 image
  const displayImage = test.heroImage || test.image;

  return (
    <div className={`min-h-screen w-full ${theme.bg} font-sans text-slate-800 relative overflow-x-hidden`}>
      
      <div className={`absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 ${theme.orb} pointer-events-none mix-blend-multiply`}></div>
      
      <header className="px-6 pt-28 pb-12 text-center max-w-4xl mx-auto relative z-10">
        
        <div className="mb-8 inline-block">
            {/* ✨ 修改：使用新的 displayImage 变量 */}
            <img 
              src={displayImage} 
              alt={test.title} 
              // ✨ 修改：加大尺寸。
              // 手机端：w-80 h-80 (320px)
              // 电脑端：md:w-96 md:h-96 (384px)
              className="w-80 h-80 md:w-96 md:h-96 object-contain mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
            />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight text-balance">
            {test.title}
        </h1>
        
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-medium opacity-90">
            {test.description}
        </p>

        <div className="inline-flex flex-wrap justify-center gap-4 mb-10">
            <span className={`px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-xs font-bold text-slate-600 shadow-sm border border-white/40 flex items-center gap-2`}>
               <Users size={14} className={theme.accent}/> {meta?.participants?.toLocaleString()} 已测
            </span>
            <span className={`px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-xs font-bold text-slate-600 shadow-sm border border-white/40 flex items-center gap-2`}>
               <Clock size={14} className={theme.accent}/> {test.duration}
            </span>
        </div>

        <div className="flex justify-center">
            <Link 
              to={`/tests/${test.slug}/start`}
              className={`w-full md:w-auto min-w-[280px] md:px-12 py-4 ${theme.button} text-lg font-bold rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3`}
            >
                开始测评
                <ArrowRight size={20} />
            </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 pb-20">
        
        {meta?.disclaimer && (
            <div className="bg-white/80 rounded-3xl p-6 md:p-8 shadow-sm mb-10 border-l-4 border-slate-200">
                <div className="flex gap-4">
                    <div className="mt-1 p-2 rounded-full h-fit shrink-0 bg-slate-100">
                        <ShieldCheck size={20} className="text-slate-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2 text-lg">测评说明</h4>
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                            {meta.disclaimer} 我们承诺保护您的隐私，所有结果仅在本地处理。
                        </p>
                    </div>
                </div>
            </div>
        )}

        {richIntro.length > 0 && (
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-white/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <List size={20} className={theme.accent} /> 
                    目录
                </h3>
                <ul className="space-y-2">
                    {richIntro.map((section, idx) => (
                        <li 
                            key={idx} 
                            onClick={() => scrollToId(`intro-section-${idx}`)}
                            className="flex items-start gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors"
                        >
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${theme.button.split(' ')[0]}`}></div>
                            {section.title}
                        </li>
                    ))}

                    {meta?.faqs && meta.faqs.length > 0 && (
                        <li 
                            onClick={() => scrollToId('faq-section')}
                            className="flex items-start gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors"
                        >
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${theme.button.split(' ')[0]}`}></div>
                            常见问题解答
                        </li>
                    )}
                </ul>
            </div>
        )}

        <div className="space-y-12">
            {richIntro.map((section, index) => (
                <section 
                    key={index} 
                    id={`intro-section-${index}`}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100/50 scroll-mt-28"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                        {section.title}
                    </h2>

                    {section.image && (
                        <div className="mb-10 flex justify-center">
                             <img 
                                src={section.image} 
                                alt={section.title} 
                                className="w-full h-auto rounded-2xl object-contain max-h-80 hover:scale-105 transition-transform duration-700"
                             />
                        </div>
                    )}
                    
                    <div className="space-y-6 text-slate-600 text-lg leading-loose font-light">
                        {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex} dangerouslySetInnerHTML={{ 
                                __html: paragraph.replace(/\*\*(.*?)\*\*/g, `<strong class="text-slate-900 font-semibold">$1</strong>`) 
                            }} />
                        ))}
                    </div>
                </section>
            ))}
        </div>

        {meta?.faqs && meta.faqs.length > 0 && (
            <div id="faq-section" className="mt-16 scroll-mt-28">
                <h3 className="text-center text-2xl font-bold text-slate-900 mb-10">常见问题</h3>
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100/50">
                    {meta.faqs.map((faq, idx) => (
                        <FAQItem key={idx} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        )}

        {references.length > 0 && (
            <div className="mt-16 text-center max-w-2xl mx-auto pb-10">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-center gap-2">
                    <BookOpen size={16} /> Sources
                </h4>
                <ul className="space-y-2 text-left inline-block">
                    {references.map((ref, idx) => (
                        <li key={idx} className="text-xs text-slate-400 font-mono leading-relaxed">
                            <span className="text-slate-300 mr-2">[{idx + 1}]</span> 
                            {ref.text}
                        </li>
                    ))}
                </ul>
            </div>
        )}

      </main>
    </div>
  );
};

export default TestIntro;