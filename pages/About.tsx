
import React from 'react';
import { Heart, Wind, Feather, Home, Sun, MousePointer2, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      
      {/* 1. 页面头部 Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            赋能你的心理健康之路
          </h1>
          <p className="text-lg md:text-xl text-brand-secondary leading-relaxed max-w-3xl mx-auto">
            我们相信，<strong>理解自己</strong>是走向长期身心安稳的第一步。<br className="hidden md:block"/>
            当你学会观察自己的想法、情绪与行为，你就能在日常生活里获得更清晰的方向、更强的韧性与更稳定的平衡。<br className="hidden md:block"/>
            用科学与温度，陪你探索真实的自己。
          </p>
        </div>
      </section>

      {/* 2. 三大核心卡片 */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <article className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-green mb-6">
              <MousePointer2 size={32} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">自我探索</h3>
            <p className="text-brand-secondary leading-relaxed">
              用简明的评估与练习，看见性格倾向与思维模式；把模糊的感受，化为可理解、可对话的线索。
            </p>
          </article>
          
          <article className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-green mb-6">
              <Wind size={32} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">情绪平衡</h3>
            <p className="text-brand-secondary leading-relaxed">
              以正念与压力管理为基础，建立可执行的日常方案；在忙碌中也能为自己留出稳定的呼吸。
            </p>
          </article>
          
          <article className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-green mb-6">
              <Feather size={32} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">个人成长</h3>
            <p className="text-brand-secondary leading-relaxed">
              从一次小小的改变开始：记录、复盘与微调，让善意与规律，慢慢沉淀为可见的进步。
            </p>
          </article>
        </div>
      </section>

      {/* 3. 我们的价值 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-10">我们的价值</h2>
            <div className="rounded-[32px] overflow-hidden shadow-lg">
                 <img 
                   src="https://images.unsplash.com/photo-1516384108982-ca6b9b66c6d5?q=80&w=1000&auto=format&fit=crop" 
                   alt="温暖空间" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 />
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-brand-primary">同理心驱动</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                以关怀与包容为起点设计产品，让不同背景的人都能在自我探索的路上被理解、被支持。
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-brand-primary">持续的努力</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                我们相信可持续的小步前行胜过一次性的完美冲刺；每次微小的调整，都会带来真实的累积。
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-brand-primary">清晰胜于复杂</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                用清楚、可落地的语言与工具，帮助你把抽象的心理概念，转化为可实践的日常行动。
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-brand-primary">科学的支撑</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                以心理与行为科学为方法论基础，坚持可验证与可追溯，给出可信赖的洞察与建议。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 我们的使命 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-brand-cream rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold mb-8 text-brand-primary">我们的使命</h2>
            <p className="text-lg text-brand-secondary leading-loose">
              我们希望创造一个人人可抵达的空间：在研究与创新的支持下，理解个体的差异，尊重真实的处境。<br/>
              通过把技术与经过验证的方法结合起来，我们陪你逐步练习：识别情绪、整理思维、调整习惯。<br/>
              不是追求“完美的自己”，而是一步一步，走向更稳、更自由的生活。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 关于实验室 */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold mb-6">关于心理测试实验室</h3>
          <div className="space-y-6 text-lg text-brand-secondary leading-relaxed text-justify md:text-center">
            <p>我们是一群长期关注心理健康的创作者，见过焦虑与压力如何悄悄占据生活，也相信科学与善意可以成为稳稳的后盾。</p>
            <p>因此，我们做了一件简单却不容易的事：把复杂的理论做成易懂、好用的工具箱；把宏大的目标拆成可以每天练习的一小步。</p>
            <p>希望在这里，你能被看见、被理解，并且拥有继续向前的力量。</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
