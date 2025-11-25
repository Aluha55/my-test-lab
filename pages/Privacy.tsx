
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  
  // Handle anchor link scrolling
  useEffect(() => {
      const handleHashChange = () => {
          const { hash } = window.location;
          if (hash) {
              const id = hash.replace('#', '');
              const element = document.getElementById(id);
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
              }
          }
      };
      // Check on load
      handleHashChange();
      
      // Listen for hash changes
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-20 px-6 bg-brand-bg">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Hero */}
        <section className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-brand-primary mb-4">隐私政策</h1>
          <p className="text-brand-secondary">最近更新：2025-03-01 · 版本 1.0</p>
        </section>

        <div className="bg-white p-8 md:p-16 rounded-[32px] shadow-sm leading-relaxed text-brand-secondary">
            
            {/* TOC */}
            <nav className="bg-brand-bg p-8 rounded-2xl mb-12">
                <h4 className="font-bold text-brand-primary mb-4">目录</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <a href="#intro" className="hover:text-brand-green hover:underline">引言与适用范围</a>
                    <a href="#info-we-collect" className="hover:text-brand-green hover:underline">我们收集的信息</a>
                    <a href="#how-we-use" className="hover:text-brand-green hover:underline">我们如何使用信息</a>
                    <a href="#lawful-bases" className="hover:text-brand-green hover:underline">合法基础（GDPR/UK GDPR）</a>
                    <a href="#cookies" className="hover:text-brand-green hover:underline">Cookie 与同意管理</a>
                    <a href="#sharing" className="hover:text-brand-green hover:underline">信息共享与披露</a>
                    <a href="#retention" className="hover:text-brand-green hover:underline">信息保存期限</a>
                    <a href="#security" className="hover:text-brand-green hover:underline">信息安全</a>
                    <a href="#xborder" className="hover:text-brand-green hover:underline">跨境传输</a>
                    <a href="#children" className="hover:text-brand-green hover:underline">未成年人保护</a>
                    <a href="#your-rights" className="hover:text-brand-green hover:underline">您的权利</a>
                    <a href="#changes" className="hover:text-brand-green hover:underline">本政策的变更</a>
                    <a href="#contact" className="hover:text-brand-green hover:underline">联系我们</a>
                    <a href="#regional" className="hover:text-brand-green hover:underline">地区性补充条款</a>
                </div>
            </nav>

            <div className="space-y-12">
                <section id="intro">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">引言与适用范围</h2>
                    <p className="mb-4">欢迎使用「心理测试实验室」（以下简称“我们”）。我们重视并承诺保护您的个人信息与隐私。本隐私政策说明我们如何在网站（personalitytestlab.com 及其子域名）、相关页面与交互组件中处理您的个人信息。本政策适用于所有访问者、注册用户以及以其他方式与我们互动的个人。</p>
                    <p>若本政策与当地强制性法律法规存在冲突，将以当地法律法规为准。本政策为中文版本，并可提供英文译本；如两者存在不一致，以中文版本为准（在 GDPR 适用场景下，我们也将提供等效英文信息）。</p>
                </section>

                <section id="info-we-collect">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">我们收集的信息</h2>
                    <h3 className="font-bold text-brand-primary mt-4 mb-2">一、您主动提供的信息</h3>
                    <ul className="list-disc list-inside mb-4 pl-2 space-y-1">
                        <li><strong>联系方式</strong>：如邮箱、昵称，当您通过“联系/订阅/反馈”表单与我们互动时提供。</li>
                        <li><strong>互动内容</strong>：您在表单或邮件中提交的问题、建议或其他文本信息。</li>
                    </ul>
                    <h3 className="font-bold text-brand-primary mt-4 mb-2">二、自动收集的信息</h3>
                    <ul className="list-disc list-inside mb-4 pl-2 space-y-1">
                        <li><strong>设备与日志</strong>：IP 地址（可能进行城市级/国家级粗粒度定位）、浏览器类型与版本、首选语言、操作系统、引用/退出页面、访问日期时间与停留轨迹、页面响应时间与错误信息。</li>
                        <li><strong>Cookie/SDK</strong>：为实现基本功能、统计分析与（在获得同意后）个性化或广告目的所使用的 Cookie 或同类技术。</li>
                    </ul>
                    <h3 className="font-bold text-brand-primary mt-4 mb-2">三、第三方来源的信息</h3>
                    <ul className="list-disc list-inside mb-4 pl-2 space-y-1">
                        <li><strong>分析与广告服务商</strong>：如 Google Analytics、Google AdSense/Ads（如启用），在征得必要同意后，这些服务商可能以 Cookie 或类似标识收集使用数据并向我们提供汇总报告。</li>
                    </ul>
                    <p>我们<strong>不会主动收集敏感个人信息</strong>（例如身份证件号码、精确地理位置、健康病历、种族、宗教等）。如您在开放文本域中自愿提供了上述敏感信息，我们将仅用于回复您的询问，不会用于画像或广告。</p>
                </section>

                <section id="how-we-use">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">我们如何使用信息</h2>
                    <ul className="list-disc list-inside pl-2 space-y-1">
                        <li>提供、维护与改进网站功能与性能；</li>
                        <li>处理您的咨询、反馈与客户支持；</li>
                        <li>进行匿名化与汇总的统计分析，用于改善内容质量与用户体验；</li>
                        <li>（在获得您的同意后）进行个性化内容或营销沟通；</li>
                        <li>遵守法律法规与监管要求，配合行政/司法机关依法提出的请求，处理纠纷与维权。</li>
                    </ul>
                </section>

                <section id="lawful-bases">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">合法基础（GDPR / UK GDPR）</h2>
                    <p className="mb-4">在欧洲经济区（EEA）与英国，我们处理您的个人数据通常基于以下一种或多种合法基础：</p>
                    <ul className="list-disc list-inside pl-2 space-y-1">
                        <li><strong>同意</strong>：例如可选 Cookie、订阅邮件等；</li>
                        <li><strong>合同必要</strong>：例如向您提供所请求的在线服务；</li>
                        <li><strong>合法利益</strong>：例如反滥用与网站安全、基本的访问统计（在不侵害您权利的前提下）；</li>
                        <li><strong>法律义务</strong>：遵守适用法律法规与合规要求。</li>
                    </ul>
                </section>

                <section id="cookies">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Cookie 与同意管理</h2>
                    <p className="mb-4">Cookie 是存储在您设备上的小型文本文件，用于识别浏览器、存储偏好、提供安全性与统计信息。我们将 Cookie 分为如下几类：</p>
                    <ul className="list-disc list-inside pl-2 space-y-1">
                        <li><strong>严格必要</strong>（必需）：用于网站基础功能与安全（如会话、负载均衡、防滥用）。不可关闭。</li>
                        <li><strong>功能性</strong>：记住您的设置（如语言偏好），提升体验。</li>
                        <li><strong>统计/分析</strong>：帮助我们了解页面使用情况以改进服务（例如 Google Analytics）。</li>
                        <li><strong>营销/广告</strong>（如启用）：在您同意后用于投放与测量广告。</li>
                    </ul>
                    <p className="mt-4">您可以通过浏览器设置删除/阻止 Cookie。请注意，禁用某些 Cookie 可能影响网站体验。第三方 Cookie 的具体处理规则以各第三方的政策为准。</p>
                </section>

                <section id="sharing">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">信息共享与披露</h2>
                    <ul className="list-disc list-inside pl-2 space-y-1 mb-4">
                        <li><strong>服务提供商/受托处理者</strong>：我们会与严格受合同约束并仅为我们目的处理数据的服务商合作（例如云服务、CDN、分析工具、邮件发送）。</li>
                        <li><strong>法律合规</strong>：在法律法规要求或为保护我们的合法权益及用户安全需要时，我们可能披露必要信息。</li>
                        <li><strong>业务变更</strong>：若发生合并、收购或资产转让，我们将要求受让方继续受本政策约束，或重新征得您的同意。</li>
                    </ul>
                    <p><strong>我们不会出售您的个人信息。</strong></p>
                </section>

                <section id="retention">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">信息保存期限</h2>
                    <p>我们仅在实现本政策所述目的所必需的期间内保留您的信息，期限届满后将删除或匿名化。例如：支持沟通记录一般在问题解决后 <strong>6–12 个月</strong> 内删除；出于安全或合规目的需要保留的日志可能保存更久，除非法律要求更短或更长的期限。</p>
                </section>

                <section id="security">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">信息安全</h2>
                    <p>我们采用合理且行业通行的安全措施保护数据在传输与存储中的机密性、完整性与可用性，包括 HTTPS 传输、访问控制、最小化授权、日志审计与员工保密义务。但互联网环境并非绝对安全，我们建议您在开放文本中避免提供敏感信息，并妥善保管个人设备与网络安全。</p>
                </section>

                <section id="xborder">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">跨境传输</h2>
                    <p>我们可能在境内或境外服务器处理您的信息，并可能将数据传输至您所在国家/地区之外。我们将遵守适用的跨境传输规则并采取适当的保护措施（例如数据最小化、签署标准合同条款 SCC、评估接收方的保护水平等）。如法律要求，我们会在跨境传输前征得您的单独同意。</p>
                </section>

                <section id="children">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">未成年人保护</h2>
                    <p>本网站主要面向成年人。若您未满 <strong>16 周岁</strong>（或当地法律规定的年龄），应在监护人同意与指导下使用。本网站不会在知情情况下收集未成年人个人信息；如您认为我们在未取得监护人同意的情况下收集了未成年人信息，请通过本文末的联系方式与我们联络，我们将尽快删除或采取其他必要措施。</p>
                </section>

                <section id="your-rights">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">您的权利</h2>
                    <p className="mb-4">根据适用法律，您有权提出以下请求：</p>
                    <ul className="list-disc list-inside pl-2 space-y-1 mb-4">
                        <li><strong>访问/复制</strong>：了解我们是否处理您的个人信息并获取副本；</li>
                        <li><strong>更正/补充</strong>：如信息不准确或不完整；</li>
                        <li><strong>删除</strong>：在法律规定情形下要求删除；</li>
                        <li><strong>限制/反对处理</strong>（GDPR/UK GDPR）：在特定情况下要求限制或反对处理；</li>
                        <li><strong>撤回同意</strong>：对于基于同意的处理，您可随时撤回，不影响撤回前处理的合法性；</li>
                        <li><strong>数据可携权</strong>（GDPR/UK GDPR）：在技术可行情况下，以结构化、通用和机器可读格式接收您提供给我们的数据；</li>
                        <li><strong>不被自动化决策单独影响</strong>（如适用）。</li>
                    </ul>
                    <p>您可通过本文末“联系我们”提交请求。为保障安全，我们可能需要先验证您的身份。我们将在法定期限内予以回复。若您对我们的处理不满意，亦可向有管辖权的监管机构投诉。</p>
                </section>

                <section id="changes">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">本政策的变更</h2>
                    <p>我们可能会不时更新本政策。当本政策发生重大变更时，我们将通过站内显著位置公告、弹窗或您提供的联系方式通知。除非法律另有规定，更新自发布之日起生效。</p>
                </section>

                <section id="contact">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">联系我们</h2>
                    <p className="mb-4">如对本政策或个人信息保护有任何疑问、意见或请求，请通过以下方式与我们联系：</p>
                    <ul className="list-disc list-inside pl-2 space-y-1">
                        <li>电子邮箱：<a href="mailto:I4uddqin@gmail.com" className="text-brand-primary font-bold hover:text-brand-green">I4uddqin@gmail.com</a></li>
                    </ul>
                </section>

                <section id="regional">
                    <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">地区性补充条款</h2>

                    <h3 className="font-bold text-brand-primary mt-4 mb-2">一、中国大陆（适用《个人信息保护法》等）</h3>
                    <ul className="list-disc list-inside pl-2 space-y-1 mb-4">
                        <li><strong>处理目的、方式与范围</strong>：详见本政策“收集的信息/使用目的”与相关章节；我们遵循合法、正当、必要、诚信原则，最小化收集并在达到目的所必需的期限内保存。</li>
                        <li><strong>跨境传输</strong>：如需将个人信息提供至境外，我们将遵循监管要求（例如安全评估、SCC 备案或认证等），并在法律要求时征得您的单独同意。</li>
                        <li><strong>共享/委托处理</strong>：与受托方签署严格的处理协议并监督其处理活动；第三方变更处理目的或方式时，将另行征得您的同意。</li>
                        <li><strong>公开披露</strong>：仅在法律要求或为维护公共利益、用户/我们或他人安全时进行。</li>
                        <li><strong>权利行使</strong>：您可通过文末联系方式申请访问、更正、删除、撤回同意、请求解释等。我们将于收到请求后依法处理。</li>
                    </ul>

                    <h3 className="font-bold text-brand-primary mt-4 mb-2">二、欧盟/欧洲经济区与英国（GDPR/UK GDPR）</h3>
                    <ul className="list-disc list-inside pl-2 space-y-1 mb-4">
                        <li><strong>控制者/联合控制者</strong>：心理测试实验室。</li>
                        <li><strong>投诉权</strong>：您可向所在地数据保护机构（DPA/ICO）投诉。</li>
                        <li><strong>跨境基础</strong>：我们会使用欧盟委员会/英国信息专员（ICO）认可的标准合同条款（SCC）等机制传输数据。</li>
                    </ul>

                    <h3 className="font-bold text-brand-primary mt-4 mb-2">三、美国加利福尼亚州（CCPA/CPRA）</h3>
                    <ul className="list-disc list-inside pl-2 space-y-1">
                        <li><strong>“出售/共享个人信息”</strong>：我们不出售个人信息。如未来涉及跨站点行为广告并触发“分享”定义，我们将提供 “Do Not Sell or Share My Personal Information” 选项。</li>
                        <li><strong>消费者权利</strong>：查询、访问、删除、纠正、限制使用、拒绝出售/共享、非歧视待遇等。您可通过文末邮箱提交请求。</li>
                        <li><strong>敏感信息</strong>：我们不主动收集 CPRA 定义的敏感个人信息。</li>
                    </ul>
                </section>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
