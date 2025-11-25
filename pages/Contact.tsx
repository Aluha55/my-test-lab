
import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 px-6 bg-brand-bg">
       <div className="max-w-4xl mx-auto">
           
           {/* Hero */}
           <section className="text-center mb-16">
               <h1 className="font-display text-4xl font-bold text-brand-primary mb-6">联系我们</h1>
               <p className="text-lg text-brand-secondary max-w-2xl mx-auto leading-relaxed">
                   我们非常重视每一次沟通的机会。无论是针对产品的改进建议，还是潜在的商业合作意向，我们都期待听到您的声音。
               </p>
           </section>

           <div className="bg-white rounded-[32px] shadow-sm p-8 md:p-16 text-center max-w-3xl mx-auto">
                
                {/* Section 1 */}
                <section className="mb-12">
                    <h2 className="font-display text-2xl font-bold text-brand-primary mb-4">用户反馈与技术支持</h2>
                    <p className="text-brand-secondary leading-relaxed">
                        您的使用体验对我们至关重要。如果您在使用过程中遇到任何技术问题，或对产品功能有独到的见解与优化建议，请随时与我们联系。<br/>
                        您的每一条反馈，都将直接推动“心理测试实验室”的持续迭代。
                    </p>
                </section>

                <div className="w-24 h-px bg-gray-100 mx-auto mb-12"></div>

                {/* Section 2 */}
                <section className="mb-16">
                    <h2 className="font-display text-2xl font-bold text-brand-primary mb-4">商务洽谈与合作伙伴</h2>
                    <p className="text-brand-secondary leading-relaxed">
                        我们致力于构建开放、科学的心理健康生态。如果您有意在<strong>内容共创、学术研究支持、品牌联合推广</strong>等方面与我们展开深度合作，欢迎来信说明您的合作意向与机构背景。
                    </p>
                </section>

                {/* Email Box */}
                <section className="bg-brand-bg rounded-3xl p-10 inline-block w-full">
                    <h3 className="text-lg text-brand-secondary mb-6">官方联络邮箱</h3>
                    
                    <div className="mb-8">
                         <a 
                            href="mailto:I4uddqin@gmail.com" 
                            className="inline-flex items-center gap-3 bg-brand-primary text-brand-yellow px-8 py-4 rounded-full font-display font-bold text-xl md:text-2xl hover:bg-brand-green transition-colors duration-300"
                         >
                             <Mail size={24} />
                             I4uddqin@gmail.com
                         </a>
                    </div>

                    <div className="text-left max-w-md mx-auto text-sm text-gray-500 bg-white p-6 rounded-2xl border border-gray-100">
                        <p className="font-bold mb-2 text-brand-primary">温馨提示：</p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>为了更高效地处理您的邮件，建议您在邮件主题中注明【反馈】或【合作】等关键词。</li>
                            <li>我们通常会在收到邮件后的 <strong>3 个工作日内</strong> 由专人进行回复。</li>
                        </ul>
                    </div>
                </section>

           </div>
       </div>
    </div>
  );
};

export default Contact;
