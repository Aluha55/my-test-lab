
import React, { useState } from 'react';
import { Search, AlertTriangle } from 'lucide-react';

const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      q: "测试结果会保存到哪里？",
      a: "测试结果仅保存在您的浏览器本地（Local Storage），不会上传到我们的服务器；这意味着只有使用同一台设备和同一个浏览器才能看到之前的记录。清除浏览器缓存会一并清除结果。如需长期追踪，建议您在结果页截图或保存生成的分享图。"
    },
    {
      q: "生成的分享图会泄露隐私吗？",
      a: "不会。分享图仅包含测试名称、您的得分/类型结果以及相关的插画，不包含您的姓名、账号、IP 地址或联系方式等个人敏感信息。图片生成是在您的本地设备上完成的，不会自动上传到任何社交平台，需您手动保存与分享。"
    },
    {
      q: "手机上显示排版错位怎么办？",
      a: "我们已针对移动端进行了适配。如果仍遇到排版错位，请尝试：1. 刷新页面；2. 切换横/竖屏；3. 清除浏览器缓存。如果问题依旧，建议更换浏览器（如 Chrome, Safari）访问，或在联系我们页面反馈您的设备型号和截图，我们会尽快修复。"
    },
    {
      q: "在线测试是否等同于心理诊断？",
      a: "不等同。在线测试主要用于自我探索、教育和娱乐目的，帮助您获得自我认知的线索，绝对不能替代专业医生的临床诊断或治疗建议。如果您感到严重的心理不适，请务必寻求线下专业医疗帮助。"
    },
    {
      q: "为什么不同测试的题量差别较大？",
      a: "量表的设计目的不同：短测试（如 3-5 分钟）适合快速了解倾向；长测试（如 10 分钟以上）通常能提供更全面、更精准的画像与解释。您可以根据自己的时间和需求选择合适的测试。"
    },
    {
      q: "如何清除之前的测试记录？",
      a: "您可以清除浏览器的缓存（Cookie 和 Local Storage），或者直接使用浏览器的“无痕/隐私模式”进行访问，这样关闭窗口后记录会自动清除。"
    },
    {
      q: "结果出现极端描述会怎样处理？",
      a: "部分专业量表可能会显示“高风险”或极端的描述。结果页面会显示相应的“风险提示/免责声明”。请记住，单次测试结果受多种因素影响，不要因此恐慌。若这些描述让您感到不安，请优先照顾自身安全，并寻求专业咨询。"
    },
    {
      q: "是否支持多语言？",
      a: "目前主要支持简体中文。后续我们将根据用户需求，逐步上线英文等多语言版本。欢迎关注我们的更新公告。"
    },
    {
      q: "为什么我点了“完成并查看结果”但页面没变化？",
      a: "请首先确认是否还有题目未完成（通常会有提示）。如果所有题目已答完仍无反应，可能是网络延迟或脚本加载错误。请刷新页面重试。如果问题持续，请通过联系页面告知我们。"
    },
    {
      q: "结果不准确怎么办？",
      a: "心理测验受答题时的环境、心情、甚至身体状态影响。建议在安静、不被打扰、心情平稳的环境中作答。您也可以在不同时间多次测试，观察结果的稳定性，将其作为自我观察的参考而非绝对定论。"
    },
    {
      q: "我可以把量表用于教学或研究吗？",
      a: "若用于非商业的个人学习或小范围分享是可以的。若用于公开教学、学术研究或商业用途，请先通过联系我们说明背景与目的，我们会评估授权方式与引用规范。"
    },
    {
      q: "如何获取更系统的学习材料？",
      a: "我们将逐步上线「帮助中心·专题文章」板块，并计划在测试结果页提供进阶阅读推荐和工具清单，帮助您更深入地理解相关心理学概念。"
    },
    {
      q: "青少年能使用本网站吗？",
      a: "我们建议未满 16 周岁的青少年在监护人陪同下使用。涉及情绪困扰、家庭关系或人际冲突的测试结果，应由监护人与学校或专业机构共同评估处理，避免独自解读造成误解。"
    },
    {
      q: "如何联系你们获取帮助？",
      a: "您可以在联系我们页面发送邮件反馈问题，我们通常会在 3 个工作日内回复。请注意：我们不提供紧急心理危机干预服务。如遇紧急情况，请直接联系当地医疗急救（如 120）或心理援助热线。"
    }
  ];

  const filteredFaqs = faqs.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 pb-20 px-6 bg-brand-bg">
       <div className="max-w-3xl mx-auto">
           
           {/* Hero Section */}
           <section className="text-center mb-12">
               <h1 className="font-display text-4xl font-bold text-brand-primary mb-4">帮助中心</h1>
               <p className="text-brand-secondary text-lg mb-8">常见问题、使用说明与指引</p>
               
               <div className="relative max-w-lg mx-auto">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                    type="search" 
                    className="w-full pl-12 pr-6 py-4 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none text-brand-primary"
                    placeholder="输入关键词搜索（如：隐私、结果、手机）" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                   />
               </div>
           </section>

           {/* Disclaimer */}
           <div className="bg-red-50 border border-red-100 text-red-800 p-5 rounded-2xl text-center mb-12 leading-relaxed flex flex-col items-center gap-2">
             <div className="font-bold flex items-center gap-2">
               <AlertTriangle size={20}/> 重要提示
             </div>
             <p className="text-sm">
                本网站内容仅供学习与自我探索参考，不构成医疗或心理诊断。若出现持续的焦虑、抑郁、失眠、惊恐或影响日常功能的情况，请尽快前往正规医院或联系持证心理咨询师。
             </p>
           </div>

           {/* FAQ List */}
           <section className="space-y-4">
               {filteredFaqs.map((item, idx) => (
                   <details key={idx} className="group bg-white rounded-3xl shadow-sm border border-transparent hover:border-brand-yellow/30 open:border-gray-100 transition-all duration-200">
                       <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-lg text-brand-primary">
                           <span>{item.q}</span>
                           <span className="transition-transform duration-300 group-open:rotate-180 opacity-50">
                               <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                           </span>
                       </summary>
                       <div className="px-6 pb-6 text-brand-secondary leading-relaxed animate-fade-in">
                           <p dangerouslySetInnerHTML={{__html: item.a}}></p>
                       </div>
                   </details>
               ))}
               {filteredFaqs.length === 0 && (
                   <div className="text-center py-10 text-gray-400">
                       未找到相关结果
                   </div>
               )}
           </section>

       </div>
    </div>
  );
};

export default Help;
