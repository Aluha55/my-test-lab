
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SoulNodes from '../components/SoulNodes';
import TestCard from '../components/TestCard';
import DailyKnowledgeCard from '../components/DailyKnowledgeCard';
import { MOCK_TESTS, getDailyTip } from '../services/testService';
import { DailyTip } from '../types';
import { ArrowRight, Activity, Heart, Users } from 'lucide-react';
import mainHeroImg from '../assets/images/mainhero.webp';
import mainHero2Img from '../assets/images/mainhero2.webp';

const Home: React.FC = () => {
  const [dailyTip, setDailyTip] = useState<DailyTip | null>(null);

  useEffect(() => {
    setDailyTip(getDailyTip());
  }, []);

  return (
    <div className="relative min-h-screen">
      <SoulNodes />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-greenLight text-brand-green rounded-full text-xs font-bold tracking-wider mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
              心理测试实验室
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold text-brand-primary mb-6 leading-[1.2] animate-fade-in" style={{ animationDelay: '0.1s' }}>
              关注心理健康，<br/>
              <span className="relative inline-block text-brand-green">
                从当下开始
                <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-yellow/30 -z-10"></span>
              </span>
            </h1>
            
            <p className="text-lg text-brand-secondary mb-10 leading-relaxed max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              在快节奏的生活中，给自己留一片小小的空间。<br/>
              用科学、温和的方式，理解情绪、认识自我，找到属于自己的平衡。
            </p>
            
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link 
                to="/tests" 
                className="px-8 py-4 bg-brand-yellow text-brand-primary font-bold text-lg rounded-full shadow-lg hover:bg-brand-primary hover:text-brand-yellow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                开始每日 Well-being 测试 <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden md:block animate-float">
             {/* 去掉了 rotate-2 和 border-4，保留 shadow-2xl 让它有点立体感，如果你想完全平铺，也可以去掉 shadow-2xl */}
              <div className="relative z-10 rounded-[40px] overflow-hidden">
                <img 
                  src={mainHeroImg}
                  alt="心理健康插画" 
                  className="w-full h-auto object-cover"
                />
             </div>
             {/* Decorative elements */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-yellow rounded-full opacity-20 blur-2xl"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 2. Daily Tip Section */}
      {dailyTip && (
        <section className="py-8 px-6">
           <div className="max-w-4xl mx-auto">
              <DailyKnowledgeCard tip={dailyTip} />
           </div>
        </section>
      )}

      {/* 3. Why Section */}
      <section className="py-24 bg-white relative overflow-hidden my-12">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-primary mb-4">为什么心理健康很重要</h2>
               <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
                 心理健康并不仅仅是“没有生病”。它关乎我们每天的心情、学习与工作的状态，甚至是与家人朋友之间的关系。
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
               {/* Left Image - 修复版 */}
{/* 1. h-full: 让它和右边一样高 */}
{/* 2. flex & items-center: 让图片在中间垂直居中 */}
{/* 3. 去掉了 border 和 shadow，让它看起来更干净 */}
<div className="h-full flex items-center justify-center p-4">
  <img 
    src={mainHero2Img} 
    alt="阅读与思考" 
    // object-contain: 保证图片完全显示，不被裁切
    // max-h-full: 保证不超过父容器高度
    className="w-full h-auto max-h-full object-contain"
  />
</div>

               {/* Right Stats */}
               <div className="space-y-6">
                  <div className="bg-brand-cream p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-green shrink-0">
                        <Activity size={24} />
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-brand-primary mb-1">52% <span className="text-base font-normal text-gray-500">的人</span></div>
                        <p className="text-brand-secondary text-sm leading-relaxed">
                           会不时感到焦虑、压力或失落，这些体验常被忽略，但它们是身体发出的重要信号。
                        </p>
                     </div>
                  </div>

                  <div className="bg-brand-cream p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-yellow shrink-0">
                        <Heart size={24} fill="currentColor" className="text-brand-yellow" />
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-brand-primary mb-1">37% <span className="text-base font-normal text-gray-500">的人</span></div>
                        <p className="text-brand-secondary text-sm leading-relaxed">
                           曾在成长中经历伤痛，却未获得足够的理解与支持。看见伤痛，是疗愈的开始。
                        </p>
                     </div>
                  </div>

                  <div className="bg-brand-cream p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-purple-500 shrink-0">
                        <Users size={24} />
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-brand-primary mb-1">46% <span className="text-base font-normal text-gray-500">的年轻人</span></div>
                        <p className="text-brand-secondary text-sm leading-relaxed">
                           开始主动关注心理健康，这不仅是趋势，更是对自己最温柔而坚定的照顾。
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Featured Tests Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-primary mb-2">探索你最关心的心理话题</h2>
              <p className="text-brand-secondary">精选热门测评，开启自我探索之旅</p>
            </div>
            <Link to="/tests" className="hidden md:flex items-center gap-2 text-brand-green font-bold hover:translate-x-1 transition-transform">
               查看所有测试 <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {MOCK_TESTS.slice(0, 3).map(test => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/tests" className="btn-primary inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-brand-primary shadow-sm">
               查看所有测试 <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
