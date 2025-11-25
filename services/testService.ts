import { TestData, DailyTip } from '../types';

// 👇 引入本地图片 (请确保这些文件都在 assets 文件夹里)
import mbtiImg from '../assets/images/tests/mbti.webp';
import big5Img from '../assets/images/tests/big5.webp';
import enneagramImg from '../assets/images/tests/enneagram.webp';
import discImg from '../assets/images/tests/disc.webp';
import cattellImg from '../assets/images/tests/cattell16pf.webp';
import darktriadImg from '../assets/images/tests/darktriad.webp';
import hollandImg from '../assets/images/tests/holland.webp';
import attachmentImg from '../assets/images/tests/attachment.webp';
import loveImg from '../assets/images/tests/lovelanguages.webp';
import dassImg from '../assets/images/tests/dass35.webp';
import colorImg from '../assets/images/tests/color.webp';
import alignmentImg from '../assets/images/tests/alignment.webp';
import bdsmImg from '../assets/images/tests/bdsm.webp';
import lovelanguagesHeroImg from '../assets/images/tests/lovelanguages_hero.png';
import dassHeroImg from '../assets/images/tests/dass35_hero.png';
import bdsmHeroImg from '../assets/images/tests/bdsm_hero.png';
import mbtiHeroImg from '../assets/images/tests/mbti_hero.png';
import big5HeroImg from '../assets/images/tests/big5_hero.png';
import hollandHeroImg from '../assets/images/tests/holland_hero.png';

export const MOCK_TESTS: TestData[] = [
  // ----------------------------------------------------------------
  // 1. MBTI (已更新为最新深度版)
  // ----------------------------------------------------------------
  {
    id: '1',
    slug: 'mbti',
    title: 'MBTI 16型人格深度评估 (完整版)',
    description: '基于荣格心理类型理论的专业评估工具。探索你与生俱来的认知偏好、能量来源及决策模式，解锁潜能。',
    topic: 'Personality',
    duration: '约 12-15 分钟',
    image: mbtiImg,
    heroImage: mbtiHeroImg,

    meta: {
      createdAt: "2024 更新版",
      author: "心理测试实验室专家组",
      participants: 154209,
      rating: 4.9,
      disclaimer: "本测试基于经典心理学理论编制，结果仅供自我探索与成长参考，不作为临床诊断依据。",
      
      richIntro: [
        {
          title: "什么是 MBTI 人格类型指标？",
          content: [
            "迈尔斯-布里格斯类型指标 (Myers-Briggs Type Indicator, MBTI) 是全球应用最广泛的人格测评工具之一。它基于瑞士著名心理学家卡尔·荣格 (Carl Jung) 的心理类型理论发展而来。",
            "MBTI 不是要给你“贴标签”，而是帮助你理解自己**天生**的心理偏好。就像习惯用右手还是左手一样，我们在获取信息、做出决策、对待生活等方面也有自己感到最自然、最舒适的方式。"
          ],
          image: mbtiImg,
          imageSide: 'right'
        },
        {
          title: "科学核心：四个维度的偏好",
          content: [
            "MBTI 通过四个核心维度来解析你的性格基因，组合出 16 种独特的人格类型：",
            "• **能量来源 (E/I)**：你通过与外界互动 (外向) 还是独自反思 (内向) 来获取能量？",
            "• **信息获取 (S/N)**：你更关注具体的事实细节 (实感) 还是整体的模式与可能性 (直觉)？",
            "• **决策方式 (T/F)**：你倾向于基于逻辑和客观分析 (思考) 还是基于价值观和对人的影响 (情感) 做决定？",
            "• **生活态度 (J/P)**：你喜欢有计划、有条理的生活 (判断) 还是灵活、开放的生活方式 (知觉)？"
          ],
          image: mbtiImg,
          imageSide: 'left'
        },
        {
          title: "为什么需要进行专业的 MBTI 评估？",
          content: [
            "网络上的许多简易测试往往过于娱乐化，缺乏信效度验证。我们的深度版评估旨在提供更准确、更具指导意义的结果。",
            "**深度自我觉察**：理解为什么某些环境让你如鱼得水，而另一些让你精疲力竭。接纳真实的自己，减少内耗。",
            "**优化人际关系**：看懂他人与你不同的行为逻辑，减少误解，提升沟通效率。",
            "**职业生涯导航**：找到最契合你天赋优势的职业路径和工作方式。"
          ]
        }
      ],

      references: [
        { text: "Jung, C. G. (1971). Psychological Types. (H. G. Baynes, Trans., revised by R. F. C. Hull). The Collected Works of C. G. Jung (Vol. 6). Princeton University Press." },
        { text: "Myers, I. B., McCaulley, M. H., Quenk, N. L., & Hammer, A. L. (1998). MBTI Manual: A guide to the development and use of the Myers-Briggs Type Indicator (3rd ed.). Consulting Psychologists Press." },
        { text: "The Myers & Briggs Foundation. (n.d.). MBTI® Basics." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "在社交聚会上，你：", options: [{ text: "能与多人轻松交谈，甚至包括陌生人", value: "E" }, { text: "倾向于与少数认识的人深谈", value: "I" }] },
        { text: "你更倾向于是一位：", options: [{ text: "现实主义者，注重实际", value: "S" }, { text: "理想主义者，富有想象力", value: "N" }] },
        { text: "做决定时，你更倾向于：", options: [{ text: "遵循逻辑和客观标准", value: "T" }, { text: "考虑他人的感受和价值观", value: "F" }] },
        { text: "你的生活方式更接近：", options: [{ text: "有条理，喜欢计划", value: "J" }, { text: "随性的，喜欢保留选择的余地", value: "P" }] },
        { text: "当你精力耗尽时，你会选择：", options: [{ text: "外出参加活动，与人交流来充电", value: "E" }, { text: "独处，享受宁静来恢复精力", value: "I" }] },
        { text: "你更相信：", options: [{ text: "你的经验和五官所感知到的事物", value: "S" }, { text: "你的直觉和对未来可能性的预感", value: "N" }] },
        { text: "在评价他人时，你更看重：", options: [{ text: "他们的逻辑是否严谨", value: "T" }, { text: "他们是否富有同情心", value: "F" }] },
        { text: "对于任务，你更喜欢：", options: [{ text: "在开始前就设定好明确的目标和步骤", value: "J" }, { text: "在过程中不断调整和适应，保持灵活性", value: "P" }] },
        { text: "你通常是：", options: [{ text: "健谈的，容易打开话匣子", value: "E" }, { text: "有保留的，在熟悉后才会多说", value: "I" }] },
        { text: "你更关注：", options: [{ text: "事情的细节和具体步骤", value: "S" }, { text: "事情的整体格局和内在联系", value: "N" }] },
        { text: "处理团队分歧时，你倾向于：", options: [{ text: "以客观事实为基础进行裁决", value: "T" }, { text: "努力调解，确保团队成员感受良好", value: "F" }] },
        { text: "对于最后期限，你：", options: [{ text: "视其为必须遵守的约定，并提前规划", value: "J" }, { text: "视其为参考，更注重过程中的灵活性", value: "P" }] },
        { text: "你更喜欢的工作环境是：", options: [{ text: "充满活力和互动，有很多交流机会", value: "E" }, { text: "安静，可以让你独立专注思考", value: "I" }] },
        { text: "学习新技能时，你更喜欢：", options: [{ text: "通过动手实践和具体案例来学习", value: "S" }, { text: "先理解其背后的理论和概念", value: "N" }] },
        { text: "你认为更糟糕的是：", options: [{ text: "想法不切实际，过于理想化", value: "T" }, { text: "缺乏同情心，不顾他人感受", value: "F" }] },
        { text: "你的周末通常是：", options: [{ text: "提前安排好活动", value: "J" }, { text: "看心情随时决定做什么", value: "P" }] },
        { text: "你喜欢成为关注的焦点吗？", options: [{ text: "是的，我享受其中", value: "E" }, { text: "不，我更喜欢在幕后", value: "I" }] },
        { text: "你更容易注意到：", options: [{ text: "别人说了什么，做了什么", value: "S" }, { text: "别人没说什么，暗示了什么", value: "N" }] },
        { text: "你觉得哪种人更令人钦佩？", options: [{ text: "头脑清晰，逻辑严密的人", value: "T" }, { text: "富有同情心，能与人共情的人", value: "F" }] },
        { text: "出门旅行前，你通常会：", options: [{ text: "制定详细的旅行计划", value: "J" }, { text: "只定好目的地，随心所欲地探索", value: "P" }] },
        { text: "你认为自己是一个：", options: [{ text: "容易接近的人", value: "E" }, { text: "需要时间才能深入了解的人", value: "I" }] },
        { text: "你更倾向于：", options: [{ text: "脚踏实地，关注当下", value: "S" }, { text: "展望未来，思考可能性", value: "N" }] },
        { text: "你做决定时，会因为影响到他人而感到困扰吗？", options: [{ text: "很少，我认为对事不对人", value: "T" }, { text: "经常，我不想伤害任何人", value: "F" }] },
        { text: "你的生活哲学更接近：", options: [{ text: "凡事预则立，不预则废", value: "J" }, { text: "兵来将挡，水来土掩", value: "P" }] },
        { text: "与人交谈时，你：", options: [{ text: "通常话比较多", value: "E" }, { text: "通常是更好的倾听者", value: "I" }] },
        { text: "在工作中，你更喜欢：", options: [{ text: "可以运用已知技能的实际任务", value: "S" }, { text: "需要学习新理论和概念的任务", value: "N" }] },
        { text: "你认为哪种行为更不可取？", options: [{ text: "过于主观和情绪化", value: "T" }, { text: "过于冷漠和不近人情", value: "F" }] },
        { text: "你喜欢你的工作和娱乐时间：", options: [{ text: "有清晰的界限", value: "J" }, { text: "灵活地融合在一起", value: "P" }] },
        { text: "你通过以下哪种方式更好地了解他人？", options: [{ text: "和他们一起做事", value: "E" }, { text: "观察他们", value: "I" }] },
        { text: "你更倾向于被看作一个：", options: [{ text: "务实的人", value: "S" }, { text: "有远见的人", value: "N" }] },
        { text: "你觉得规则和制度：", options: [{ text: "是必要的，能让事情高效运转", value: "T" }, { "text": "常常限制了个人的自由和创造力", value: "F" }] },
        { text: "你通常：", options: [{ text: "喜欢快速做出决定", value: "J" }, { text: "在做决定前需要足够的信息", value: "P" }] },
        { text: "你喜欢花时间：", options: [{ text: "在外部世界活动", value: "E" }, { text: "在自己的内心世界探索", value: "I" }] },
        { text: "你更关注事物的：", options: [{ text: "功能和用途", value: "S" }, { text: "模式和意义", value: "N" }] },
        { text: "你认为哪种品质更重要？", options: [{ text: "坚定", value: "T" }, { text: "仁慈", value: "F" }] },
        { text: "对于一个项目，你更享受：", options: [{ text: "完成时的成就感", value: "J" }, { text: "开始时的兴奋感", value: "P" }] },
        { text: "你是否容易感到无聊？", options: [{ text: "是的，我需要持续的外部刺激", value: "E" }, { text: "不，我很少感到无聊", value: "I" }] },
        { text: "学习新东西时，你更喜欢：", options: [{ text: "一步一步地按照说明操作", value: "S" }, { text: "自己摸索，理解整体概念", value: "N" }] },
        { text: "你做决定时，首要考虑的是：", options: [{ text: "什么是公平和公正的", value: "T" }, { text: "什么能让大家感觉良好", value: "F" }] },
        { text: "你喜欢惊喜吗？", options: [{ text: "不太喜欢，我更喜欢一切尽在掌握", value: "J" }, { text: "是的，我喜欢生活中的意外之喜", value: "P" }] },
        { text: "你倾向于：", options: [{ text: "先行动，后思考", value: "E" }, { text: "先思考，后行动", value: "I" }] },
        { text: "你对细节的关注程度：", options: [{ text: "非常关注，不喜欢遗漏任何细节", value: "S" }, { text: "更关注整体大局，可能会忽略细节", value: "N" }] },
        { text: "在批评他人时，你：", options: [{ text: "直截了当，认为真实最重要", value: "T" }, { "text": "非常委婉，害怕伤害对方的感情", value: "F" }] },
        { text: "你家里的物品摆放：", options: [{ text: "井然有序，物归原处", value: "J" }, { text: "比较随意，只要自己觉得舒服就好", value: "P" }] },
        { text: "你通常有很多兴趣爱好吗？", options: [{ text: "是的，我对很多事情都感兴趣", value: "E" }, { text: "不多，但我会深入研究我感兴趣的领域", value: "I" }] },
        { text: "你更看重：", options: [{ text: "过去的经验", value: "S" }, { text: "未来的愿景", value: "N" }] },
        { text: "你认为在工作中：", options: [{ text: "能干比友好更重要", value: "T" }, { text: "友好比能干更重要", value: "F" }] },
        { text: "你的日程表：", options: [{ text: "通常都安排得很满", value: "J" }, { text: "喜欢留出大量空白时间", value: "P" }] },
        { text: "你是一个容易被他人了解的人吗？", options: [{ text: "是的，我比较开放", value: "E" }, { text: "不是，我比较有保留", value: "I" }] },
        { text: "对于新环境，你：", options: [{ text: "能迅速适应并投入其中", value: "E" }, { text: "需要一些时间来观察和适应", value: "I" }] }
      ],
      // Paper B
      [
        { text: "当面临一个全新的、复杂的任务时，你倾向于：", options: [{ text: "先理解其背后的抽象原理和框架", value: "N" }, { text: "直接上手，从具体实践中摸索规律", value: "S" }] },
        { text: "一个项目的哪个阶段更让你兴奋？", options: [{ text: "头脑风暴，构思各种可能性", value: "P" }, { text: "制定详细计划，确保项目顺利收尾", value: "J" }] },
        { text: "你更倾向于被评价为：", options: [{ text: "一个富有同情心和人情味的人", value: "F" }, { text: "一个客观公正、有原则的人", value: "T" }] },
        { text: "在一天的忙碌后，你更喜欢：", options: [{ text: "和朋友出去放松，聊聊天", value: "E" }, { text: "一个人静静地看书或看电影", value: "I" }] },
        { text: "对于他人的批评，你通常：", options: [{ text: "客观接受，并将其视为改进的机会", value: "T" }, { text: "会有些受伤，需要时间来消化", value: "F" }] },
        { text: "你喜欢的讨论方式是：", options: [{ text: "开放式的，可以随时跑题和联想", value: "P" }, { text: "有明确议程和目标的，专注解决问题", value: "J" }] },
        { text: "你觉得一个团队的成功更依赖于：", options: [{ text: "和谐的团队氛围和成员间的相互支持", value: "F" }, { text: "清晰的目标和高效的执行力", value: "T" }] },
        { text: "你对新科技产品的态度是：", options: [{ text: "喜欢尝试，探索它们带来的新可能性", value: "N" }, { text: "更愿意使用成熟可靠、已经被验证过的产品", value: "S" }] },
        { text: "你空闲时更喜欢：", options: [{ text: "参加各种活动，结识新朋友", value: "E" }, { text: "享受宁静，沉浸在自己的爱好中", value: "I" }] },
        { text: "你倾向于用以下哪种方式说服别人？", options: [{ text: "摆事实，讲道理，进行逻辑论证", value: "T" }, { text: "分享个人感受，描绘愿景，激发情感共鸣", value: "F" }] },
        { text: "你对“即兴演讲”的态度是：", options: [{ text: "感到兴奋和刺激", value: "P" }, { text: "感到焦虑和不适", value: "J" }] },
        { text: "你更喜欢阅读：", options: [{ text: "讲述真实事件的历史或传记", value: "S" }, { text: "充满想象的科幻或奇幻小说", value: "N" }] },
        { text: "在团队合作中，你通常扮演的角色是：", options: [{ text: "积极的参与者和沟通者", value: "E" }, { text: "冷静的观察者和思考者", value: "I" }] },
        { text: "你认为“公平”意味着：", options: [{ text: "同样的情况，同样对待", value: "T" }, { text: "考虑到每个人的特殊情况，灵活处理", value: "F" }] },
        { text: "对于常规的、重复性的工作，你：", options: [{ text: "觉得安心，因为它清晰可控", value: "J" }, { text: "觉得枯燥，渴望变化和挑战", value: "P" }] },
        { text: "你看电影时，更关注：", options: [{ text: "演员的表演和服装道具等具体细节", value: "S" }, { text: "电影的主题思想和象征意义", value: "N" }] },
        { text: "你倾向于：", options: [{ text: "在行动中获得能量", value: "E" }, { text: "在独处中获得能量", value: "I" }] },
        { text: "你更擅长：", options: [{ text: "处理人际关系", value: "F" }, { text: "分析和解决技术问题", value: "T" }] },
        { text: "你的朋友遇到困难时，你会：", options: [{ text: "提供实际的帮助，比如帮他们做事", value: "S" }, { text: "和他们一起探讨问题的各种可能性和解决方案", value: "N" }] },
        { text: "你对事情的看法：", options: [{ text: "倾向于黑白分明", value: "J" }, { text: "认为大多数事情都是相对的，存在灰色地带", value: "P" }] },
        { text: "你认为自己精力充沛吗？", options: [{ text: "是的，我总是精力旺盛", value: "E" }, { text: "不，我需要合理分配精力", value: "I" }] },
        { text: "你喜欢的事情是：", options: [{ text: "可以预测的", value: "S" }, { text: "充满未知的", value: "N" }] },
        { text: "你更愿意被认为是：", options: [{ "text": "一个善良的人", value: "F" }, { text: "一个聪明的人", value: "T" }] },
        { text: "你对混乱的态度是：", options: [{ "text": "难以忍受，喜欢整洁有序", value: "J" }, { text: "可以接受，甚至有时能在混乱中找到灵感", value: "P" }] },
        { text: "你的人际圈子：", options: [{ "text": "广泛而多样", value: "E" }, { text: "深入而专注", value: "I" }] },
        { text: "你更喜欢：", options: [{ "text": "按部就班地工作", value: "S" }, { text: "同时处理多个任务", value: "N" }] },
        { text: "你认为一个好的领导者应该：", options: [{ "text": "有远见，能鼓舞人心", value: "F" }, { text: "有能力，能做出艰难的决定", value: "T" }] },
        { text: "你喜欢把事情：", options: [{ "text": "安排得明明白白", value: "J" }, { text: "顺其自然地发展", value: "P" }] },
        { text: "你喜欢大型聚会吗？", options: [{ "text": "非常喜欢，人越多越好", value: "E" }, { text: "不太喜欢，觉得很耗费精力", value: "I" }] },
        { text: "你更信任：", options: [{ "text": "你的经验", value: "S" }, { text: "你的直觉", value: "N" }] },
        { text: "在评价一件艺术品时，你更倾向于：", options: [{ "text": "分析它的构图、色彩和技巧", value: "T" }, { text: "感受它带给你的情感冲击", value: "F" }] },
        { text: "你的工作风格是：", options: [{ "text": "一次只专注一件事，直到完成", value: "J" }, { text: "在多个项目之间切换，保持新鲜感", value: "P" }] },
        { text: "你倾向于先：", options: [{ "text": "说", value: "E" }, { text: "听", value: "I" }] },
        { text: "你更容易记住：", options: [{ "text": "具体的人和事", value: "S" }, { text: "抽象的理论和模式", value: "N" }] },
        { text: "你觉得一个社会更需要：", options: [{ "text": "更多的正义", value: "T" }, { text: "更多的慈悲", value: "F" }] },
        { text: "你喜欢：", options: [{ "text": "有计划的生活", value: "J" }, { text: "充满惊喜的生活", value: "P" }] },
        { text: "在学习一个新软件时，你会：", options: [{ "text": "先阅读说明书", value: "S" }, { text: "直接上手点击，边玩边学", value: "N" }] },
        { text: "你更喜欢：", options: [{ "text": "与他人合作", value: "E" }, { text: "独立工作", value: "I" }] },
        { text: "你更看重一个人的：", options: [{ "text": "行为是否一致", value: "T" }, { text: "动机是否善良", value: "F" }] },
        { text: "你对未来的态度是：", options: [{ "text": "有明确的规划和目标", value: "J" }, { text: "充满开放的可能性", value: "P" }] },
        { text: "你通常会：", options: [{ "text": "轻松地表达自己的想法", value: "E" }, { text: "在表达前反复斟酌", value: "I" }] },
        { text: "你更喜欢的故事是：", options: [{ "text": "基于现实的", value: "S" }, { text: "富有想象的", value: "N" }] },
        { text: "你认为法律的主要作用是：", options: [{ "text": "维护社会的公平正义", value: "T" }, { text: "保护弱者，促进社会和谐", value: "F" }] },
        { text: "你喜欢的生活节奏是：", options: [{ "text": "稳定的，可预测的", value: "J" }, { text: "多变的，充满活力的", value: "P" }] },
        { text: "你倾向于记住：", options: [{ "text": "别人的名字和长相", value: "S" }, { text: "别人给你的第一印象和感觉", value: "N" }] },
        { text: "你更愿意：", options: [{ "text": "领导一个团队", value: "E" }, { text: "作为团队的技术骨干", value: "I" }] },
        { text: "当别人犯错时，你认为更重要的是：", options: [{ "text": "指出错误，帮助他们改正", value: "T" }, { text: "理解他们的处境，给予安慰", value: "F" }] },
        { text: "你喜欢在做事之前：", options: [{ "text": "先制定一个详细的清单", value: "J" }, { text: "凭感觉和冲动行事", value: "P" }] },
        { text: "你更喜欢的工作环境是：", options: [{ "text": "充满互动和交流的", value: "E" }, { text: "安静，可以独立思考的", value: "I" }] },
        { text: "在陌生的群体中，你通常会：", options: [{ "text": "主动开场与大家寒暄", value: "E" }, { text: "先观察一阵再参与话题", value: "I" }] }
      ],
      // Paper C
      [
        { text: "面对不确定性，你感到：", options: [{ text: "不安，希望尽快明确下来", value: "J" }, { text: "兴奋，因为它充满了可能性", value: "P" }] },
        { text: "你更欣赏哪种美？", options: [{ text: "对称、和谐的古典美", value: "S" }, { text: "突破常规、充满想象的现代美", value: "N" }] },
        { text: "你更倾向于做一个：", options: [{ text: "温柔的人", value: "F" }, { text: "公正的人", value: "T" }] },
        { text: "在团队中，你更喜欢：", options: [{ text: "有很多互动和讨论", value: "E" }, { text: "每个人都清楚自己的任务并独立完成", value: "I" }] },
        { text: "你认为教育的重点应该是：", options: [{ text: "传授实用的知识和技能", value: "S" }, { text: "启发学生的思维和想象力", value: "N" }] },
        { text: "当你的计划被打乱时，你：", options: [{ text: "感到沮丧和压力", value: "J" }, { text: "能很快适应并找到新的方案", value: "P" }] },
        { text: "你更愿意相信：", options: [{ text: "数据和证据", value: "T" }, { text: "人们的善意和动机", value: "F" }] },
        { text: "你更喜欢：", options: [{ text: "参加热闹的派对", value: "E" }, { text: "和一两个朋友安静地喝杯咖啡", value: "I" }] },
        { text: "你更容易被什么所吸引？", options: [{ text: "一个清晰的逻辑论证", value: "T" }, { text: "一个感人至深的故事", value: "F" }] },
        { text: "你对细节的态度是：", options: [{ text: "享受处理细节的过程", value: "S" }, { text: "觉得细节很繁琐，更关注大方向", value: "N" }] },
        { text: "你喜欢你的生活：", options: [{ text: "井井有条，一切按计划进行", value: "J" }, { text: "充满自发性和灵活性", value: "P" }] },
        { text: "你通常给人的印象是：", options: [{ text: "精力充沛，善于言谈", value: "E" }, { text: "冷静，若有所思", value: "I" }] },
        { text: "你做决定时，更依赖：", options: [{ text: "客观的标准和原则", value: "T" }, { text: "个人的价值观和感受", value: "F" }] },
        { text: "你更喜欢哪种类型的电影？", options: [{ text: "纪录片或基于真实故事的电影", value: "S" }, { text: "概念性的、引人深思的艺术电影", value: "N" }] },
        { text: "你喜欢提前知道事情的全部细节吗？", options: [{ text: "是的，这让我有安全感", value: "J" }, { text: "不，我喜欢保留一些神秘感", value: "P" }] },
        { text: "你更倾向于：", options: [{ text: "广泛涉猎", value: "E" }, { text: "深入钻研", value: "I" }] },
        { text: "你认为更糟糕的是：", options: [{ text: "对人不够真诚", value: "F" }, { text: "对事不够客观", value: "T" }] },
        { text: "你更喜欢的工作是：", options: [{ text: "有形的、能看到成果的", value: "S" }, { text: "探索性的、没有标准答案的", value: "N" }] },
        { text: "你喜欢提前计划好周末的活动吗？", options: [{ text: "是的，我喜欢有计划", value: "J" }, { text: "不，我喜欢看心情决定", value: "P" }] },
        { text: "你认为自己：", options: [{ text: "更擅长与人打交道", value: "E" }, { text: "更擅长独立思考", value: "I" }] },
        { text: "你更喜欢：", options: [{ text: "有据可查的事实", value: "S" }, { text: "耐人寻味的隐喻", value: "N" }] },
        { text: "你做决定时，会：", options: [{ text: "保持冷静和客观", value: "T" }, { text: "设身处地为他人着想", value: "F" }] },
        { text: "你倾向于认为事情是：", options: [{ text: "可以被安排和组织的", value: "J" }, { text: "应该顺其自然发展的", value: "P" }] },
        { text: "当你在一个小组里时，你：", options: [{ text: "倾向于多说话", value: "E" }, { text: "倾向于多倾听", value: "I" }] },
        { text: "你更注重：", options: [{ text: "当下正在发生的事", value: "S" }, { text: "未来可能发生的事", value: "N" }] },
        { text: "你认为更重要的是：", options: [{ text: "效率", value: "T" }, { text: "合作", value: "F" }] },
        { text: "你的工作方式更倾向于：", options: [{ text: "有条不紊", value: "J" }, { text: "灵活多变", value: "P" }] },
        { text: "你更喜欢：", options: [{ text: "在行动中思考", value: "E" }, { text: "在思考后行动", value: "I" }] },
        { text: "你更喜欢被描述为：", options: [{ text: "一个实际的人", value: "S" }, { text: "一个有创意的人", value: "N" }] },
        { text: "你觉得在团队中，什么更重要？", options: [{ text: "坦率的沟通", value: "T" }, { text: "和谐的氛围", value: "F" }] },
        { text: "你喜欢你的生活充满：", options: [{ text: "确定性", value: "J" }, { text: "可能性", value: "P" }] },
        { text: "你倾向于：", options: [{ text: "向外寻找乐趣", value: "E" }, { text: "向内寻找满足", value: "I" }] },
        { text: "你更喜欢：", options: [{ text: "处理具体问题", value: "S" }, { text: "探讨抽象思想", value: "N" }] },
        { text: "当需要做出选择时，你更依赖：", options: [{ text: "你的头脑", value: "T" }, { text: "你的内心", value: "F" }] },
        { text: "你更喜欢的生活状态是：", options: [{ text: "有始有终，完成任务", value: "J" }, { text: "享受过程，不急于下结论", value: "P" }] },
        { text: "你倾向于从哪里获得信息？", options: [{ text: "外部世界的人和事", value: "E" }, { text: "内心的想法和反思", value: "I" }] },
        { text: "你更喜欢被认为是：", options: [{ text: "一个可靠的人", value: "S" }, { text: "一个有灵感的人", value: "N" }] },
        { text: "你认为更重要的是：", options: [{ text: "坚持原则", value: "T" }, { text: "体谅他人", value: "F" }] },
        { text: "你喜欢：", options: [{ text: "把事情敲定", value: "J" }, { text: "让事情随缘", value: "P" }] },
        { text: "你更喜欢：", options: [{ text: "和很多人一起工作", value: "E" }, { text: "独自或和少数人一起工作", value: "I" }] },
        { text: "你更擅长：", options: [{ text: "记忆事实和细节", value: "S" }, { text: "理解理论和概念", value: "N" }] },
        { text: "你更看重：", options: [{ text: "逻辑上的合理性", value: "T" }, { text: "情感上的共鸣", value: "F" }] },
        { text: "你更喜欢：", options: [{ text: "有条理地安排好一切", value: "J" }, { text: "随心所欲地应对一切", value:"P" }] },
        { text: "你通常是：", options: [{ text: "第一个发言的人", value: "E" }, { text: "最后一个发言的人", value: "I" }] },
        { text: "你更喜欢：", options: [{ text: "脚踏实地的生活", value: "S" }, { text: "充满想象的生活", value: "N" }] },
        { text: "你认为更重要的是：", options: [{ text: "对事不对人", value: "T" }, { text: "考虑每个人的感受", value: "F" }] },
        { text: "你喜欢：", options: [{ text: "有明确的结束", value: "J" }, { text: "有开放的结局", value: "P" }] },
        { text: "你更喜欢：", options: [{ text: "广交朋友", value: "E" }, { text: "知己两三", value: "I" }] },
        { text: "初到一个新团队时，你更可能：", options: [{ text: "主动自我介绍并询问他人近况", value: "E" }, { text: "先观察，等熟悉后再开始交流", value: "I" }] },
        { text: "学习一款全新的工具时，你会先关注：", options: [{ text: "使用步骤、界面布局等具体细节", value: "S" }, { text: "它解决的问题以及背后的理念", value: "N" }] }
      ]
    ],
    
    results: {
        "ISTJ": { type: "ISTJ", title: "检查员 (物流师)", description: "您是认真、负责和注重事实的人。您尊重传统和秩序，并且在履行职责时非常可靠。您喜欢让事情井井有条，并且会一丝不苟地完成任务。", suggestion: "尝试对新想法持更开放的态度，并偶尔允许自己跳出常规。学会欣赏自发性可能会给您带来意想不到的乐趣。", color: "#607D8B" },
        "ISFJ": { type: "ISFJ", title: "守护者 (捍卫者)", description: "您非常富有同情心和责任感，致力于照顾他人的福祉。您细心、体贴，并且非常忠诚。您是那种默默支持他人、维系团队和谐的关键人物。", suggestion: "学会更好地表达自己的需求，不要总是把别人的需求放在第一位。照顾好自己同样重要。", color: "#81C784" },
        "INFJ": { type: "INFJ", title: "引路人 (提倡者)", description: "您是理想主义者，富有远见和同情心。您深刻、复杂，并且有强烈的道德感。您致力于实现自己的愿景，并希望为世界带来积极的改变。", suggestion: "注意不要过于理想化而忽略现实的限制。将您的宏大愿景分解为可行的步骤，并学会与现实世界合作。", color: "#4CAF50" },
        "INTJ": { type: "INTJ", title: "策划师 (建筑师)", description: "您是理性的战略家，对知识有强烈的渴望。您独立、有远见，并且善于发现系统中的模式和改进空间。您总是在思考如何优化一切。", suggestion: "在追求效率和逻辑的同时，也要注意他人的情感需求。学会与他人合作，可以让您的伟大计划更容易实现。", color: "#673AB7" },
        "ISTP": { type: "ISTP", title: "手艺人 (鉴赏家)", description: "您是冷静的观察者和解决问题的能手。您喜欢探索和理解事物是如何运作的，并且擅长动手操作。您在危机中能保持冷静，并迅速找到解决方案。", suggestion: "尝试更多地与他人分享您的想法和感受。发展您的社交技能，可以让您的人际关系更加丰富。", color: "#FFC107" },
        "ISFP": { type: "ISFP", title: "艺术家 (探险家)", description: "您是敏感、温和的艺术家，活在当下，享受生活中的美。您有强烈的个人价值观，并且喜欢通过实际行动来表达自己。您灵活且随和。", suggestion: "在面对冲突时，尝试更直接地表达自己的立场，而不是一味地回避。您的观点同样有价值。", color: "#FFEB3B" },
        "INFP": { type: "INFP", title: "治愈者 (调停者)", description: "您是充满理想和热情的调停者，致力于寻找自己和他人的内在和谐。您富有同情心、创造力，并且忠于自己的价值观。您希望世界变得更美好。", suggestion: "学会将您的理想与现实结合起来，找到将价值观付诸实践的具体方法。不要害怕将您的想法变为行动。", color: "#9C27B0" },
        "INTP": { type: "INTP", title: "逻辑学家", description: "您是天生的思想家和逻辑学家，对理论和抽象概念充满好奇。您善于分析复杂的系统，并能发现其中不合逻辑的地方。您追求知识和真理。", suggestion: "尝试将您的理论应用到现实世界中去，并注意与他人建立情感联系。与人分享您的思想，可能会激发更多的火花。", color: "#3F51B5" },
        "ESTP": { type: "ESTP", title: "实践者 (企业家)", description: "您是充满活力和魅力的行动派。您喜欢活在当下，并能敏锐地抓住眼前的机会。您善于解决实际问题，并且享受与人互动。", suggestion: "在行动前多做一些长远规划，考虑事情的后果。这能帮助您避免不必要的风险，取得更持久的成功。", color: "#FF9800" },
        "ESFP": { type: "ESFP", title: "表演者", description: "您是热情洋溢的社交家和表演者，是人群中的焦点。您喜欢与他人分享快乐，并且享受生活中的每一个瞬间。您慷慨、有趣且富有感染力。", suggestion: "在享受生活的同时，也要注意履行自己的责任。学会规划未来，可以让您的生活更加稳定和充实。", color: "#FF5722" },
        "ENFP": { type: "ENFP", title: "追梦人 (竞选者)", description: "您是富有创造力和热情的追梦人，对生活充满了无限的可能性。您善于与人沟通，并且能激发他人的潜力。您总是在寻找新的想法和体验。", suggestion: "学会将注意力集中在一两个最重要的项目上，并坚持到底。将您的创造力转化为实际成果，会给您带来更大的满足感。", color: "#00BCD4" },
        "ENTP": { type: "ENTP", title: "辩论家", description: "您是聪明、机智的辩论家，喜欢智力上的挑战。您善于发现事物的多种可能性，并且享受与他人辩论的过程。您是天生的创新者。", suggestion: "注意在辩论中不要忽视他人的感受。有时候，赢得争论并不如维系良好的人际关系重要。", color: "#009688" },
        "ESTJ": { type: "ESTJ", title: "管理者 (总经理)", description: "您是天生的管理者，注重秩序和效率。您喜欢组织和安排事务，并确保每个人都各司其职。您是可靠的、有决断力的领导者。", suggestion: "学会倾听不同的意见，并对变化持更开放的态度。有时候，最有效的方法并不一定是传统的方法。", color: "#4CAF50" },
        "ESFJ": { type: "ESFJ", title: "主人 (执政官)", description: "您是热情好客、有责任心的主人，非常关心他人的需求。您喜欢帮助别人，并且是维系社区和家庭和谐的核心力量。您非常合群且有条理。", suggestion: "在关心他人的同时，不要忘记给自己留出空间和时间。学会拒绝，可以帮助您更好地管理自己的精力。", color: "#E91E63" },
        "ENFJ": { type: "ENFJ", title: "教导者 (主人公)", description: "您是富有魅力和同情心的教导者，致力于帮助他人成长和发挥潜力。您善于理解他人的动机，并且能激励他人追求共同的目标。", suggestion: "注意不要将他人的问题都当成自己的责任。在帮助别人的同时，也要设定好健康的界限。", color: "#9C27B0" },
        "ENTJ": { type: "ENTJ", "title": "领导者 (指挥官)", description: "您是果断、有远见的领导者，天生就善于指挥和领导。您能迅速发现问题并制定长远的战略计划。您是效率和成就的追求者。", suggestion: "学会放慢脚步，欣赏过程，并对团队成员的贡献给予更多的认可和赞赏。这能帮助您建立更强大的团队。", color: "#673AB7" }
    }
  },
 
 // ----------------------------------------------------------------
  // 2. Big 5 (大五人格)
  // ----------------------------------------------------------------
  // ----------------------------------------------------------------
  // 2. Big 5 大五人格 (完整无错版 - 含两套超全题库)
  // ----------------------------------------------------------------
  {
    id: '2',
    slug: 'big5',
    title: '大五人格 (OCEAN) 深度测评',
    description: '心理学界公认的黄金标准。从开放性、尽责性、外向性、宜人性和神经质五个维度精准描绘你的性格画像。',
    topic: 'Personality',
    duration: '约 8-12 分钟',
    image: big5Img,
    heroImage: big5HeroImg,

    meta: {
      createdAt: "2024 专业版",
      author: "心理测试实验室专家组",
      participants: 89200,
      rating: 4.8,
      disclaimer: "本测试基于大五人格理论编制，结果仅供自我认知参考，不作为临床诊断依据。",

      richIntro: [
        {
          title: "为什么它是心理学界的“黄金标准”？",
          content: [
            "大五人格（Big Five），又称 OCEAN 模型，是目前现代心理学界公认最科学、最实证的人格特质模型。",
            "它不把人简单分类，而是通过五个连续的维度来描绘你独特的性格光谱。这种方式能更细腻、更准确地还原真实的你。"
          ],
          image: big5Img,
          imageSide: 'right'
        },
        {
          title: "OCEAN 五大维度解析",
          content: [
            "**O - 开放性 (Openness)**：你对新奇事物、艺术和抽象概念的接受程度。",
            "**C - 尽责性 (Conscientiousness)**：你的自律、条理和目标导向程度。",
            "**E - 外向性 (Extraversion)**：你从外部世界获取能量的倾向。",
            "**A - 宜人性 (Agreeableness)**：你对他人的同理心和合作倾向。",
            "**N - 神经质 (Neuroticism)**：你的情绪稳定性。"
          ],
          image: big5Img,
          imageSide: 'left'
        }
      ],

      references: [
        { text: "Costa, P. T., & McCrae, R. R. (1992). Revised NEO Personality Inventory (NEO-PI-R) and NEO Five-Factor Inventory (NEO-FFI) professional manual." },
        { text: "Goldberg, L. R. (1992). The development of markers for the Big-Five factor structure. Psychological Assessment." }
      ]
    },

    questionPools: [
      // Paper A (40题)
      [
        { text: "我善于想象。", options: [ { text: "非常同意", value: "O" }, { text: "比较同意", value: "O" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "o" }, { text: "非常不同意", value: "o" } ] },
        { text: "我做事有条理。", options: [ { text: "非常同意", value: "C" }, { text: "比较同意", value: "C" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "c" }, { text: "非常不同意", value: "c" } ] },
        { text: "我喜欢参加社交活动。", options: [ { text: "非常同意", value: "E" }, { text: "比较同意", value: "E" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "e" }, { text: "非常不同意", value: "e" } ] },
        { text: "我很容易相信别人。", options: [ { text: "非常同意", value: "A" }, { text: "比较同意", value: "A" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "a" }, { text: "非常不同意", value: "a" } ] },
        { text: "我常常感到焦虑。", options: [ { text: "非常同意", value: "N" }, { text: "比较同意", value: "N" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "n" }, { text: "非常不同意", value: "n" } ] },
        { text: "我对艺术不感兴趣。", options: [ { text: "非常同意", value: "o" }, { text: "比较同意", value: "o" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "O" }, { text: "非常不同意", value: "O" } ] },
        { text: "我经常忘记把东西放回原处。", options: [ { text: "非常同意", value: "c" }, { text: "比较同意", value: "c" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "C" }, { text: "非常不同意", value: "C" } ] },
        { text: "我喜欢独处。", options: [ { text: "非常同意", value: "e" }, { text: "比较同意", value: "e" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "E" }, { text: "非常不同意", value: "E" } ] },
        { text: "我对别人的困难漠不关心。", options: [ { text: "非常同意", value: "a" }, { text: "比较同意", value: "a" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "A" }, { text: "非常不同意", value: "A" } ] },
        { text: "我很少感到沮丧。", options: [ { text: "非常同意", value: "n" }, { text: "比较同意", value: "n" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "N" }, { text: "非常不同意", "value": "N" } ] },
        { text: "我的想象力不是很丰富。", options: [ { text: "非常同意", value: "o" }, { text: "比较同意", value: "o" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "O" }, { text: "非常不同意", value: "O" } ] },
        { text: "我总是为事情提前做好准备。", options: [ { text: "非常同意", value: "C" }, { text: "比较同意", value: "C" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "c" }, { text: "非常不同意", value: "c" } ] },
        { text: "在人群中我通常很安静。", options: [ { text: "非常同意", value: "e" }, { text: "比较同意", value: "e" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "E" }, { text: "非常不同意", value: "E" } ] },
        { text: "我对他人的感受很感兴趣。", options: [ { text: "非常同意", value: "A" }, { text: "比较同意", value: "A" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "a" }, { text: "非常不同意", "value": "a" } ] },
        { text: "我的情绪很稳定。", options: [ { text: "非常同意", value: "n" }, { text: "比较同意", value: "n" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "N" }, { text: "非常不同意", "value": "N" } ] },
        { text: "我喜欢尝试新的活动和爱好。", options: [ { text: "非常同意", value: "O" }, { text: "比较同意", value: "O" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "o" }, { text: "非常不同意", "value": "o" } ] },
        { text: "我做事有些杂乱无章。", options: [ { text: "非常同意", value: "c" }, { text: "比较同意", value: "c" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "C" }, { text: "非常不同意", value: "C" } ] },
        { text: "我是派对的活跃分子。", options: [ { text: "非常同意", value: "E" }, { text: "比较同意", value: "E" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "e" }, { text: "非常不同意", "value": "e" } ] },
        { text: "我有时会说别人的闲话。", options: [ { text: "非常同意", value: "a" }, { text: "比较同意", value: "a" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "A" }, { text: "非常不同意", "value": "A" } ] },
        { text: "我很容易感到压力。", options: [ { text: "非常同意", value: "N" }, { text: "比较同意", value: "N" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "n" }, { text: "非常不同意", "value": "n" } ] },
        { text: "我对抽象的概念不感兴趣。", options: [ { text: "非常同意", value: "o" }, { text: "比较同意", value: "o" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "O" }, { text: "非常不同意", "value": "O" } ] },
        { text: "我注重细节。", options: [ { text: "非常同意", value: "C" }, { text: "比较同意", value: "C" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "c" }, { text: "非常不同意", value: "c" } ] },
        { text: "我不喜欢成为众人瞩目的焦点。", options: [ { text: "非常同意", value: "e" }, { text: "比较同意", value: "e" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "E" }, { text: "非常不同意", "value": "E" } ] },
        { text: "我对别人很友善。", options: [ { text: "非常同意", value: "A" }, { text: "比较同意", value: "A" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "a" }, { text: "非常不同意", "value": "a" } ] },
        { text: "我通常很放松。", options: [ { text: "非常同意", value: "n" }, { text: "比较同意", value: "n" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "N" }, { text: "非常不同意", "value": "N" } ] },
        { text: "我拥有丰富的词汇量。", options: [ { text: "非常同意", value: "O" }, { text: "比较同意", value: "O" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "o" }, { text: "非常不同意", "value": "o" } ] },
        { text: "我经常把事情弄得一团糟。", options: [ { text: "非常同意", value: "c" }, { text: "比较同意", value: "c" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "C" }, { text: "非常不同意", "value": "C" } ] },
        { text: "我主动发起对话。", options: [ { text: "非常同意", value: "E" }, { text: "比较同意", "value": "E" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "e" }, { text: "非常不同意", "value": "e" } ] },
        { text: "我对他人的问题不感兴趣。", options: [ { text: "非常同意", value: "a" }, { text: "比较同意", "value": "a" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "A" }, { text: "非常不同意", "value": "A" } ] },
        { text: "我情绪多变。", options: [ { text: "非常同意", value: "N" }, { text: "比较同意", value: "N" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "n" }, { text: "非常不同意", "value": "n" } ] },
        { text: "我理解抽象概念有困难。", options: [ { text: "非常同意", value: "o" }, { text: "比较同意", "value": "o" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "O" }, { text: "非常不同意", "value": "O" } ] },
        { text: "我喜欢遵守计划。", options: [ { text: "非常同意", value: "C" }, { text: "比较同意", value: "C" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "c" }, { text: "非常不同意", "value": "c" } ] },
        { text: "我在别人面前感到自在。", options: [ { text: "非常同意", value: "E" }, { text: "比较同意", "value": "E" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "e" }, { text: "非常不同意", "value": "e" } ] },
        { text: "我能体谅他人的感受。", options: [ { text: "非常同意", value: "A" }, { text: "比较同意", value: "A" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "a" }, { text: "非常不同意", "value": "a" } ] },
        { text: "我很少感到不安。", options: [ { text: "非常同意", value: "n" }, { text: "比较同意", value: "n" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "N" }, { text: "非常不同意", "value": "N" } ] },
        { text: "我有很好的想法。", options: [ { text: "非常同意", value: "O" }, { text: "比较同意", value: "O" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "o" }, { text: "非常不同意", "value": "o" } ] },
        { text: "我经常逃避责任。", options: [ { text: "非常同意", value: "c" }, { text: "比较同意", value: "c" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "C" }, { text: "非常不同意", "value": "C" } ] },
        { text: "我喜欢待在人群的边缘。", options: [ { text: "非常同意", value: "e" }, { text: "比较同意", value: "e" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "E" }, { text: "非常不同意", "value": "E" } ] },
        { text: "我心肠很软。", options: [ { text: "非常同意", value: "A" }, { text: "比较同意", value: "A" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "a" }, { text: "非常不同意", "value": "a" } ] },
        { text: "我很容易被小事困扰。", options: [ { text: "非常同意", value: "N" }, { text: "比较同意", value: "N" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "n" }, { text: "非常不同意", "value": "n" } ] }
      ],
      // Paper B (50题)
      [
        { text: "我喜欢思考事情的深层含义。", options: [ { text: "非常同意", value: "O" }, { text: "比较同意", value: "O" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "o" }, { text: "非常不同意", value: "o" } ] },
        { text: "我是一个可靠的员工。", options: [ { text: "非常同意", value: "C" }, { text: "比较同意", value: "C" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "c" }, { text: "非常不同意", value: "c" } ] },
        { text: "我话很多。", options: [ { text: "非常同意", value: "E" }, { text: "比较同意", value: "E" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "e" }, { text: "非常不同意", value: "e" } ] },
        { text: "我乐于助人。", options: [ { text: "非常同意", value: "A" }, { text: "比较同意", value: "A" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "a" }, { text: "非常不同意", value: "a" } ] },
        { text: "我经常感到紧张。", options: [ { text: "非常同意", value: "N" }, { text: "比较同意", value: "N" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "n" }, { text: "非常不同意", value: "n" } ] },
        { text: "我喜欢循规蹈矩。", options: [ { text: "非常同意", value: "o" }, { text: "比较同意", value: "o" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "O" }, { text: "非常不同意", value: "O" } ] },
        { text: "我做事拖延。", options: [ { text: "非常同意", value: "c" }, { text: "比较同意", value: "c" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "C" }, { text: "非常不同意", value: "C" } ] },
        { text: "我有些害羞。", options: [ { text: "非常同意", value: "e" }, { text: "比较同意", value: "e" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "E" }, { text: "非常不同意", value: "E" } ] },
        { text: "我有时会利用别人。", options: [ { text: "非常同意", value: "a" }, { text: "比较同意", value: "a" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "A" }, { text: "非常不同意", value: "A" } ] },
        { text: "我能很好地控制自己的情绪。", options: [ { text: "非常同意", value: "n" }, { text: "比较同意", value: "n" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "N" }, { text: "非常不同意", "value": "N" } ] },
        { text: "我充满好奇心。", options: [ { text: "非常同意", value: "O" }, { text: "比较同意", value: "O" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "o" }, { text: "非常不同意", value: "o" } ] },
        { text: "我的工作很有效率。", options: [ { text: "非常同意", value: "C" }, { text: "比较同意", value: "C" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "c" }, { text: "非常不同意", value: "c" } ] },
        { text: "我是一个外向的人。", options: [ { text: "非常同意", value: "E" }, { text: "比较同意", value: "E" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "e" }, { text: "非常不同意", value: "e" } ] },
        { text: "我通常不会记仇。", options: [ { text: "非常同意", value: "A" }, { text: "比较同意", value: "A" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "a" }, { text: "非常不同意", value: "a" } ] },
        { text: "我经常感觉自己无助。", options: [ { text: "非常同意", value: "N" }, { text: "比较同意", value: "N" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "n" }, { text: "非常不同意", value: "n" } ] },
        { text: "我是一个很有创意的人。", options: [ { text: "非常同意", value: "O" }, { text: "比较同意", value: "O" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "o" }, { text: "非常不同意", value: "o" } ] },
        { text: "我总是能完成我的计划。", options: [ { text: "非常同意", value: "C" }, { text: "比较同意", value: "C" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "c" }, { text: "非常不同意", value: "c" } ] },
        { text: "我能迅速让别人感到放松。", options: [ { text: "非常同意", value: "E" }, { text: "比较同意", value: "E" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "e" }, { text: "非常不同意", "value": "e" } ] },
        { text: "我待人很真诚。", options: [ { text: "非常同意", value: "A" }, { text: "比较同意", value: "A" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "a" }, { text: "非常不同意", "value": "a" } ] },
        { text: "我很少为事情担忧。", options: [ { text: "非常同意", value: "n" }, { text: "比较同意", value: "n" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "N" }, { text: "非常不同意", "value": "N" } ] },
        { text: "我喜欢艺术和自然。", options: [ { text: "非常同意", value: "O" }, { text: "比较同意", value: "O" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "o" }, { text: "非常不同意", "value": "o" } ] },
        { text: "我的房间总是很整洁。", options: [ { text: "非常同意", value: "C" }, { text: "比较同意", value: "C" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "c" }, { text: "非常不同意", "value": "c" } ] },
        { text: "我充满活力。", options: [ { text: "非常同意", value: "E" }, { text: "比较同意", value: "E" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "e" }, { text: "非常不同意", "value": "e" } ] },
        { text: "我很容易与人发生争执。", options: [ { text: "非常同意", value: "a" }, { text: "比较同意", value: "a" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "A" }, { text: "非常不同意", "value": "A" } ] },
        { text: "我很容易情绪失控。", options: [ { text: "非常同意", value: "N" }, { text: "比较同意", value: "N" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "n" }, { text: "非常不同意", "value": "n" } ] },
        { text: "我不喜欢改变。", options: [ { text: "非常同意", value: "o" }, { text: "比较同意", value: "o" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", value: "O" }, { text: "非常不同意", "value": "O" } ] },
        { text: "我是一个非常自律的人。", options: [ { text: "非常同意", value: "C" }, { text: "比较同意", value: "C" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "c" }, { text: "非常不同意", "value": "c" } ] },
        { text: "我是一个热情的人。", options: [ { text: "非常同意", value: "E" }, { text: "比较同意", value: "E" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "e" }, { text: "非常不同意", "value": "e" } ] },
        { text: "我总是为别人着想。", options: [ { text: "非常同意", value: "A" }, { text: "比较同意", value: "A" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "a" }, { text: "非常不同意", "value": "a" } ] },
        { text: "我对未来充满信心。", options: [ { text: "非常同意", value: "n" }, { text: "比较同意", value: "n" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "N" }, { text: "非常不同意", "value": "N" } ] },
        { text: "我喜欢探索新的地方。", options: [ { text: "非常同意", value: "O" }, { text: "比较同意", value: "O" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "o" }, { text: "非常不同意", "value": "o" } ] },
        { text: "我做事总是半途而废。", options: [ { text: "非常同意", value: "c" }, { text: "比较同意", value: "c" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "C" }, { text: "非常不同意", "value": "C" } ] },
        { text: "我喜欢和别人在一起。", options: [ { text: "非常同意", value: "E" }, { text: "比较同意", value: "E" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "e" }, { text: "非常不同意", "value": "e" } ] },
        { text: "我待人苛刻。", options: [ { text: "非常同意", value: "a" }, { text: "比较同意", value: "a" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "A" }, { text: "非常不同意", "value": "A" } ] },
        { text: "我经常感到不知所措。", options: [ { text: "非常同意", value: "N" }, { text: "比较同意", value: "N" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "n" }, { text: "非常不同意", "value": "n" } ] },
        { text: "我认为自己是一个有深度的人。", options: [ { text: "非常同意", value: "O" }, { text: "比较同意", value: "O" }, { text: "不确定", value: "N/A" }, { text: "比较不同意", "value": "o" }, { "text": "非常不同意", "value": "o" } ] },
        { text: "我是一个有抱负的人。", options: [ { "text": "非常同意", "value": "C" }, { "text": "比较同意", "value": "C" }, { "text": "不确定", "value": "N/A" }, { "text": "比较不同意", "value": "c" }, { "text": "非常不同意", "value": "c" } ] },
        { text: "我是一个乐观的人。", options: [ { "text": "非常同意", "value": "E" }, { "text": "比较同意", "value": "E" }, { "text": "不确定", "value": "N/A" }, { "text": "比较不同意", "value": "e" }, { "text": "非常不同意", "value": "e" } ] },
        { text: "我是一个合作的人。", options: [ { "text": "非常同意", "value": "A" }, { "text": "比较同意", "value": "A" }, { "text": "不确定", "value": "N/A" }, { "text": "比较不同意", "value": "a" }, { "text": "非常不同意", "value": "a" } ] },
        { text: "我能保持冷静。", options: [ { "text": "非常同意", "value": "n" }, { "text": "比较同意", "value": "n" }, { "text": "不确定", "value": "N/A" }, { "text": "比较不同意", "value": "N" }, { "text": "非常不同意", "value": "N" } ] }
      ]
    ],

    results: {
      "O": { type: "O", title: "开放性 (Openness)", description: "您对新体验、新思想和美学持开放态度。您富有想象力、创造力，并且好奇心强。", suggestion: "将您的创造力投入到具体的项目中，与他人分享您的独特见解，同时也要注意在现实和理想之间找到平衡。", color: "#FF9800" },
      "C": { type: "C", title: "尽责性 (Conscientiousness)", description: "您做事有条理、可靠且自律。您注重细节，追求成就，并且有强烈的责任感。", suggestion: "在追求完美的同时，也要学会放松和接纳不确定性。偶尔的灵活性和自发性会让您的生活更轻松。", color: "#4CAF50" },
      "E": { type: "E", title: "外倾性 (Extraversion)", description: "您精力充沛，喜欢社交，并从与他人的互动中获得能量。您热情、健谈且果断。", suggestion: "利用您的社交能力去建立有意义的联系。同时，也要留出时间进行内省和独处，以更好地理解自己的内心世界。", color: "#2196F3" },
      "A": { type: "A", title: "宜人性 (Agreeableness)", description: "您富有同情心、乐于助人且善于合作。您真诚地关心他人，并倾向于信任别人。", suggestion: "在帮助他人的同时，也要学会设定健康的界限，并勇于表达自己的需求和不同意见。您的善良非常宝贵，但自我关怀同样重要。", color: "#E91E63" },
      "N": { type: "N", title: "神经质 (Neuroticism)", description: "您情绪丰富，容易感受到焦虑、担忧或悲伤等负面情绪。您对环境和他人的反应比较敏感。", suggestion: "学习正念、冥想等情绪调节技巧，可以帮助您更好地管理情绪波动。与值得信赖的朋友或专业人士交谈，也能提供重要的支持。", color: "#9C27B0" }
    }
  },
 // ----------------------------------------------------------------
  // 3. Enneagram 九型人格 (完整版 - 包含 A/B/C 三套题库)
  // ----------------------------------------------------------------
  {
    id: '3',
    slug: 'enneagram',
    title: '九型人格 (Enneagram) 深度解析',
    description: '不仅仅是性格分类，更是灵魂的地图。深入探索你行为背后的核心欲望、恐惧与原动力。',
    topic: 'Personality',
    duration: '约 10-15 分钟',
    image: enneagramImg,

    meta: {
      createdAt: "2024 修订版",
      author: "心理测试实验室专家组",
      participants: 65400,
      rating: 4.7,
      disclaimer: "本测试结果旨在辅助自我探索，核心型号的确认可能需要长期的自我观察。",
      
      richIntro: [
        {
          title: "探索你的核心原动力",
          content: [
            "九型人格（Enneagram）是一门古老的智慧，它将人分为九种基本类型。与其他测试不同，九型人格不只看你的行为表现，更关注你**为什么**这样做——你的核心恐惧、核心欲望和防御机制。",
            "找到你的型号，就像拿到了一张心灵地图，能帮你看到自己的思维盲区，打破性格的枷锁。"
          ],
          image: enneagramImg,
          imageSide: 'right'
        },
        {
          title: "九种型号速览",
          content: [
            "**1号 完美主义者**：正直、有原则，追求完美。",
            "**2号 助人者**：关怀、体贴，渴望被爱。",
            "**3号 成就者**：适应力强、追求成功，关注形象。",
            "**4号 独特者**：浪漫、敏感，追求独特体验。",
            "**5号 观察者**：理智、好学，保持距离。",
            "**6号 忠诚者**：忠诚、警觉，寻求安全感。",
            "**7号 活跃者**：乐观、多才多艺，逃避痛苦。",
            "**8号 挑战者**：自信、果断，掌控局势。",
            "**9号 和平者**：随和、包容，避免冲突。"
          ]
        }
      ],
      references: [
        { text: "Riso, D. R., & Hudson, R. (1999). The Wisdom of the Enneagram." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "我非常在意事情是否正确，并努力修正错误。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望被爱和被需要，并会主动帮助他人。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望成功，并希望自己的成就能得到他人的认可。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我感觉自己与众不同，并渴望深刻的情感体验。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望知识，喜欢在行动前进行深入的观察和分析。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望安全感，常常会预想最坏的情况以作准备。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望快乐，喜欢追求新奇有趣的体验，讨厌被束缚。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望掌控自己的生活和命运，会保护自己不受他人控制。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望内心的平静与和谐，会尽力避免与他人发生冲突。", options: [ { text: "很像我", value: "9" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我有一个内在的“批评家”，总是鞭策自己做到最好。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "付出爱比接受爱对我来说更自然。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我非常注重效率，无法忍受浪费时间。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我常常沉浸在自己的情绪和想象中。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "在社交场合，我更喜欢做一个安静的观察者。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我对权威的态度常常是矛盾的，既需要指引又会质疑。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我总是有很多计划，并对未来感到乐观。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我说话非常直接，有时可能会得罪人。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我很容易理解别人的观点，但有时会忽略自己的立场。", options: [ { text: "很像我", value: "9" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我很难放松自己，总觉得有事情需要被完善。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "别人的认可对我非常重要。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我善于根据不同场合调整自己的形象。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我害怕被认为是平庸或普通的。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我需要大量的独处时间来恢复精力。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我是一个非常忠诚的朋友和伙伴。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我讨厌负面情绪，会用各种活动来分散注意力。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我倾向于保护弱者，对抗不公。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "对我来说，维持一种舒适、安逸的生活状态很重要。", options: [ { text: "很像我", value: "9" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我坚信凡事都应该有原则和标准。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我很容易察觉到他人的需求并给予满足。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我是一个目标导向的人，非常有竞争力。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我时常感到一种淡淡的忧郁和对过去的怀念。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我认为知识和能力比情感更可靠。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "在做重要决定前，我需要征求很多人的意见。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我喜欢同时进行多项任务和活动。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我不想展现自己脆弱的一面。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] }
      ],
      // Paper B
      [
        { text: "我做决定时有些困难，因为总能看到各方的道理。", options: [ { text: "很像我", value: "9" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本恐惧是：怕自己是坏的、有缺陷的。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本恐惧是：怕自己不被爱、不被需要。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本恐惧是：怕自己是没有价值的。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本恐惧是：怕自己没有独特的身份和意义。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本恐惧是：怕自己是无能的、无助的。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本恐惧是：怕自己没有支持和引导。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本恐惧是：怕自己被剥夺和陷入痛苦。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本恐惧是：怕自己被他人控制或伤害。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本恐惧是：怕失去、分离和破碎。", options: [ { text: "很像我", value: "9" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本欲望是：希望自己是好的、正直的、平衡的。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本欲望是：感受爱。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本欲望是：感觉自己有价值、被接受。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本欲望是：寻找自我，发现自己的独特性。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本欲望是：掌握知识，获得能力。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本欲望是：得到支持和安全感。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本欲望是：保持满足和幸福。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本欲望是：保护自己，决定自己的人生道路。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的基本欲望是：保持内心的稳定与平和。", options: [ { text: "很像我", value: "9" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我常常觉得自己必须表现得更好，才能被接受。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我有时会为了关系而忽略自己的真实需求。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我倾向于通过成就来获得安全感。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望别人真正理解我的内心世界。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我经常分析别人的行为动机。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我担心别人可能会背叛我。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我容易被新点子吸引而分散注意力。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我喜欢掌控局面，避免显得弱势。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我常常会顺从别人以避免争吵。", options: [ { text: "很像我", value: "9" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会因他人对我的需要而感到满足。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我害怕自己不够有价值。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我在陌生环境中更愿意观察而不是表现。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我倾向于担忧未来可能发生的问题。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我常常追逐新的体验来保持兴奋。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会本能地保护自己不受他人伤害。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会避免冲突以保持和谐。", options: [ { text: "很像我", value: "9" }, { text: "不太像我", value: "N/A" } ] }
      ],
      // Paper C
      [
        { text: "我会对错误或不公感到强烈不满。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我喜欢通过服务来表达感情。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会根据别人的期望来塑造自己。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我经常感到情绪波动很大。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我喜欢深入研究自己感兴趣的领域。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我在做决定时会犹豫不决。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我容易被娱乐和刺激分散注意力。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会展现强势以避免显得脆弱。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我经常妥协以保持和平。", options: [ { text: "很像我", value: "9" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我对细节和规则非常敏感。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会在别人需要我时立刻回应。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会用成绩和表现来证明自己。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我常常觉得自己与周围格格不入。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会在独处中恢复精力。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会对潜在风险保持警觉。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会用幽默来掩饰不安。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会通过掌控局面来增强安全感。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会选择顺其自然避免冲突。", options: [ { text: "很像我", value: "9" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会批评自己不够好。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会为了爱而不断付出。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会因没有达到目标而焦虑。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我经常感到孤独或与众不同。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我更信赖逻辑和理性而不是情感。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我常常需要别人的支持来下决定。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会追逐快乐来回避痛苦。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会直言不讳地表达不满。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会把别人的需求放在自己之前。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我非常看重成就带来的认可。", options: [ { text: "很像我", value: "3" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我对美和独特性的追求很强烈。", options: [ { text: "很像我", value: "4" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我倾向于在安全的范围内行动。", options: [ { text: "很像我", value: "6" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我喜欢把生活安排得丰富多彩。", options: [ { text: "很像我", value: "7" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我对不公正的事情会挺身而出。", options: [ { text: "很像我", value: "8" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我希望把事情做到尽善尽美。", options: [ { text: "很像我", value: "1" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我害怕被拒绝或被忽视。", options: [ { text: "很像我", value: "2" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我希望通过学习让自己更有力量。", options: [ { text: "很像我", value: "5" }, { text: "不太像我", value: "N/A" } ] }
      ]
    ],

    results: {
      "1": {
        type: "Type 1",
        title: "1号 完美主义者",
        description: "您是一位有原则、有理想的改革者。您内心有一个强大的“正确”标准，并以此来要求自己和世界。您追求完美，做事有条理，有强烈的责任感，并致力于不断改进。在他人眼中，您是正直、可靠且自律的榜样。",
        suggestion: "您的正直和高标准能创造卓越，但也可能给自己带来过度的压力。请学习接纳不完美，拥抱“足够好”的哲学。练习自我关怀，认识到您的价值不取决于您是否完美。偶尔放下评判，纯粹地去体验生活，会让您更轻松。",
        color: "#CFD8DC" // 灰色/理性
      },
      "2": {
        type: "Type 2",
        title: "2号 助人者",
        description: "您是一位富有同情心、真诚且重感情的给予者。您能敏锐地察觉到他人的需求和感受，并从中获得满足感。您渴望被爱和被需要，是身边人温暖的依靠和支持者。",
        suggestion: "您的善良和乐于助人非常可贵。请务必记得，在照顾他人之前，先照顾好自己的需求。学会设立健康的界限，并直接表达您的感受和需要，而不是期望他人能猜到。请相信，真实的您本身就值得被爱，而不仅仅是因为您的付出。",
        color: "#EF9A9A" // 红色/温暖
      },
      "3": {
        type: "Type 3",
        title: "3号 成就者",
        description: "您是一位充满活力、目标导向的实干家。您渴望成功，并希望自己的价值能通过成就得到认可。您适应能力强，注重效率和形象，善于激励他人，是天生的行动派和团队的推动者。",
        suggestion: "您的干劲和追求卓越的精神是您成功的关键。请在追逐外部成就的同时，花些时间探索自己内在的真实感受和价值。学会放慢脚步，从过程中寻找乐趣，而不是仅仅盯着结果。请记住，您的内在价值，远不止于您的成就。",
        color: "#FFCC80" // 橙色/活力
      },
      "4": {
        type: "Type 4",
        title: "4号 独特者",
        description: "您是一位敏感、内省且富有创造力的独特个体。您感觉自己与众不同，渴望深刻的情感连接和真实的自我表达。您拥有丰富的内心世界和独特的审美，能从平凡中发现美与深度，是天生的艺术家和诗人。",
        suggestion: "您深刻的情感体验和创造力是独特的礼物。请学习拥抱当下的快乐，而不是沉浸于过去的失落或未来的幻想。尝试将您丰富的情感通过具体的艺术形式（写作、绘画、音乐等）表达出来。请相信，您并不孤单，许多人能理解并欣赏您的独特性。",
        color: "#CE93D8" // 紫色/神秘
      },
      "5": {
        type: "Type 5",
        title: "5号 观察者",
        description: "您是一位富有洞察力、善于分析的观察家。您渴望知识和理解，喜欢通过深入思考和研究来掌握世界。您重视个人空间和隐私，在行动前需要做足准备。在他人眼中，您是冷静、客观、充满智慧的专家。",
        suggestion: "您的智慧和洞察力非常宝贵。请勇敢地从思想的世界走向行动的世界，将您的知识应用于实践。尝试与他人分享您的见解，并参与到团队协作中。请记住，与他人的情感连接同样是一种深刻的知识，值得您去探索。",
        color: "#90CAF9" // 蓝色/理智
      },
      "6": {
        type: "Type 6",
        title: "6号 忠诚者",
        description: "您是一位有责任心、值得信赖的忠诚伙伴。您渴望安全感，因此总能预见到潜在的风险和问题。您对人和事都非常谨慎，一旦赢得您的信任，您会报以极大的忠诚。您是团队中不可或缺的风险管理者和守护者。",
        suggestion: "您的谨慎和责任心让您成为可靠的支柱。请学习更多地信任自己的内在权威和判断力，而不是总向外界寻求确认。练习正念，关注当下，可以帮助您减少对未来的过度忧虑。勇敢地迈出信任的一步，世界比您想象的更安全。",
        color: "#B0BEC5" // 深灰/稳重
      },
      "7": {
        type: "Type 7",
        title: "7号 活跃者",
        description: "您是一位充满活力、乐观向上的享乐主义者。您热爱生活，对世界充满好奇，喜欢追求新奇、有趣的体验。您总能看到事物积极的一面，并用您的热情感染他人。您是多才多艺的，并且总是有很多计划。",
        suggestion: "您的热情和乐观是您魅力的来源。请学习接受并面对生活中的负面情绪，而不是总试图逃避它们，这会让您更完整。练习将注意力集中于一件事，并深入地完成它，您会从中发现比追逐新奇更深刻的满足感。",
        color: "#FFF59D" // 黄色/快乐
      },
      "8": {
        type: "Type 8",
        title: "8号 挑战者",
        description: "您是天生的领导者，充满力量、自信且果断。您渴望掌控自己的命运，会保护自己和身边的人不受控制和伤害。您说话直接，充满正义感，是弱者的保护者和团队的强大核心。",
        suggestion: "您的力量和决断力能成就大事。请学习在展示力量的同时，也展现您内心柔软和脆弱的一面，这会让别人更愿意亲近您。练习倾听，特别是那些与您意见相左的声音，并认识到合作有时比对抗更有力量。",
        color: "#EF5350" // 深红/力量
      },
      "9": {
        type: "Type 9",
        title: "9号 和平者",
        description: "您是一位随和、包容的和平使者。您渴望内心的平静与外界的和谐，会尽力避免冲突。您有出色的同理心，能理解和接纳不同的观点，是优秀的倾听者和调停者。在您身边，人们会感到放松和舒适。",
        suggestion: "您的平和与包容力是团队的粘合剂。请勇敢地去发现和表达自己真实的立场与需求，不要因为害怕冲突而忽略自己。请相信，您真实的想法对他人同样重要。适度地“唤醒”内心的能量，去追求您真正想要的东西。",
        color: "#A5D6A7" // 绿色/和谐
      }
    }
  },
  // ----------------------------------------------------------------
  // 4. DISC 行为风格测验 (完整版 - Breeze 风格介绍页)
  // ----------------------------------------------------------------
  {
    id: '4',
    slug: 'disc',
    title: 'DISC 行为风格测验',
    description: '职场沟通与管理的导航仪。解析你的支配性(D)、影响性(I)、稳健性(S)和合规性(C)。',
    topic: 'Personality',
    duration: '约 6-10 分钟',
    image: discImg,

    meta: {
      createdAt: "2024 职场专业版",
      author: "心理测试实验室专家组",
      participants: 45300,
      rating: 4.6,
      disclaimer: "本测试基于马斯顿博士的 DISC 理论编制，主要用于了解行为风格与沟通偏好，适用于职场与人际场景。",
      
      richIntro: [
        {
          title: "什么是 DISC 行为风格？",
          content: [
            "DISC 理论由美国心理学家威廉·马斯顿博士 (Dr. William Marston) 创立。与测量智商或情绪不同，DISC 就像一面镜子，反映的是你的**行为风格**和**沟通偏好**。",
            "为什么有些人说话直截了当，而有些人委婉含蓄？为什么有些人喜欢冒险，而有些人追求稳定？DISC 将帮助你解码这些行为背后的逻辑，让你在职场和生活中更加游刃有余。"
          ],
          image: discImg,
          imageSide: 'right'
        },
        {
          title: "四种核心风格解析",
          content: [
            "**D - 支配型 (Dominance)**：<br>你是天生的指挥官。结果导向，行动迅速，喜欢掌控局面，不惧怕冲突和挑战。",
            "**I - 影响型 (Influence)**：<br>你是团队的开心果。乐观热情，善于交际，富有感染力，喜欢在人群中获得认可。",
            "**S - 稳健型 (Steadiness)**：<br>你是可靠的守护者。耐心友善，追求和谐稳定，是优秀的倾听者和支持者。",
            "**C - 合规型 (Compliance)**：<br>你是严谨的分析师。注重细节，追求精准，讲究逻辑和规则，是质量的保证。"
          ],
          image: discImg,
          imageSide: 'left'
        },
        {
          title: "关于测试的常见疑问 (FAQ)",
          content: [
            "**Q：这个测试能测出我的能力高低吗？**<br>不能。DISC 测量的是“风格”而非“能力”。没有最好的风格，只有最适合的位置。任何风格都能成为优秀的领导者或员工。",
            "**Q：我的风格会改变吗？**<br>核心风格通常比较稳定，但在不同的环境（如工作 vs 家庭）或压力状态下，你的行为表现可能会有所调整。本测试将揭示你的自然风格。",
            "**Q：我是纯粹的某一种类型吗？**<br>很少有人是单一类型的。大多数人都是四种因子的混合体，只是某种因子（主导因子）表现得更为突出。我们的报告会分析你的主导特质。"
          ]
        }
      ],

      references: [
        { text: "Marston, W. M. (1928). Emotions of Normal People. Harcourt Brace & Company." },
        { text: "Bonnstetter, B. J., & Suiter, J. I. (2013). The Universal Language of DISC." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "面对挑战时，我倾向于：", options: [ { text: "直接、果断地迎接", value: "D" }, { text: "热情、乐观地鼓励他人", value: "I" }, { text: "冷静、耐心地支持团队", value: "S" }, { text: "谨慎、有条理地分析", value: "C" } ] },
        { text: "在团队中，我更像一个：", options: [ { text: "影响者，善于交际和鼓舞人心", value: "I" }, { text: "协作者，提供稳定和支持", value: "S" }, { text: "分析者，确保准确和质量", value: "C" }, { text: "领导者，推动目标和结果", value: "D" } ] },
        { text: "我做事的节奏通常是：", options: [ { text: "快速、高效、目标明确", value: "D" }, { text: "热情、活泼、充满互动", value: "I" }, { text: "平稳、按部就班、有耐心", value: "S" }, { text: "精确、注重细节、一丝不苟", value: "C" } ] },
        { text: "当需要做决定时，我更依赖：", options: [ { text: "逻辑、事实和数据分析", value: "C" }, { text: "我的直觉和对他人的信任", value: "S" }, { text: "快速判断和对目标的把握", value: "D" }, { text: "与他人讨论并获得认可", value: "I" } ] },
        { text: "在压力下，我可能会变得：", options: [ { text: "更具控制欲和不耐烦", value: "D" }, { text: "情绪化和杂乱无章", value: "I" }, { text: "犹豫不决和抗拒改变", value: "S" }, { text: "过于挑剔和拘泥细节", value: "C" } ] },
        { text: "我更喜欢的工作环境是：", options: [ { text: "充满活力、自由开放", value: "I" }, { text: "稳定、和谐、可预测", value: "S" }, { text: "有条理、有标准、注重质量", value: "C" }, { text: "充满竞争、能快速看到结果", value: "D" } ] },
        { text: "我的主要恐惧是：", options: [ { text: "被人利用或失去控制", value: "D" }, { text: "被社会排斥或失去影响力", value: "I" }, { text: "失去稳定或安全感", value: "S" }, { text: "被批评或工作质量出错", value: "C" } ] },
        { text: "对于规则和流程，我的态度是：", options: [ { text: "规则是为了被打破和挑战的", value: "D" }, { text: "规则很重要，但人际关系更重要", value: "I" }, { text: "我喜欢并依赖清晰的规则", value: "S" }, { text: "规则和标准是质量的保证", value: "C" } ] },
        { text: "在沟通时，我更倾向于：", options: [ { text: "谈论人、故事和情感", value: "I" }, { text: "倾听并提供支持", value: "S" }, { text: "关注事实、数据和逻辑", value: "C" }, { text: "直接说出我的观点和要求", value: "D" } ] },
        { text: "我希望别人认为我是一个：", options: [ { text: "有能力、果断的人", value: "D" }, { text: "有魅力、受欢迎的人", value: "I" }, { text: "可靠、友善的人", value: "S" }, { text: "严谨、专业的人", value: "C" } ] }
      ],
      // Paper B
      [
        { text: "我更倾向于在团队中承担：", options: [ { text: "领导角色", value: "D" }, { text: "协调关系", value: "S" }, { text: "活跃气氛", value: "I" }, { text: "制定标准", value: "C" } ] },
        { text: "我的沟通方式通常是：", options: [ { text: "直截了当", value: "D" }, { text: "热情洋溢", value: "I" }, { text: "平和耐心", value: "S" }, { text: "逻辑清晰", value: "C" } ] },
        { text: "遇到问题时，我会：", options: [ { text: "立即行动", value: "D" }, { text: "寻求他人支持", value: "S" }, { text: "寻找创新方法", value: "I" }, { text: "系统分析原因", value: "C" } ] },
        { text: "我更在意：", options: [ { text: "目标与结果", value: "D" }, { text: "人际和谐", value: "S" }, { text: "他人的认可", value: "I" }, { text: "准确与质量", value: "C" } ] },
        { text: "我的优点是：", options: [ { text: "勇敢果断", value: "D" }, { text: "友善支持", value: "S" }, { text: "善于表达", value: "I" }, { text: "注重细节", value: "C" } ] },
        { text: "我的缺点是：", options: [ { text: "过于控制", value: "D" }, { text: "过度依赖", value: "S" }, { text: "过于情绪化", value: "I" }, { text: "过于挑剔", value: "C" } ] },
        { text: "在计划事情时，我：", options: [ { text: "目标明确，快速执行", value: "D" }, { text: "喜欢协商一致", value: "S" }, { "text": "富有创造力", "value": "I" }, { "text": "制定详细步骤", "value": "C" } ] },
        { text: "我担心的事情是：", options: [ { text: "失去掌控", value: "D" }, { text: "失去和谐", value: "S" }, { text: "失去人气", value: "I" }, { text: "犯错被批评", value: "C" } ] },
        { text: "我希望别人看到我：", options: [ { text: "强大可靠", value: "D" }, { text: "亲切随和", value: "S" }, { text: "充满活力", value: "I" }, { text: "专业严谨", value: "C" } ] },
        { text: "我更喜欢的方式是：", options: [ { text: "挑战目标", value: "D" }, { text: "维持稳定", value: "S" }, { text: "结交朋友", value: "I" }, { text: "遵守规则", value: "C" } ] }
      ],
      // Paper C
      [
        { text: "别人通常会形容我：", options: [ { text: "果断", value: "D" }, { text: "外向", value: "I" }, { text: "随和", value: "S" }, { text: "严谨", value: "C" } ] },
        { text: "我在冲突中更可能：", options: [ { text: "坚持己见", value: "D" }, { text: "寻求共赢", value: "S" }, { text: "缓解气氛", value: "I" }, { text: "坚持规则", value: "C" } ] },
        { text: "我的动力来源是：", options: [ { text: "成就与控制", value: "D" }, { text: "人际与乐趣", value: "I" }, { text: "安稳与支持", value: "S" }, { text: "标准与秩序", value: "C" } ] },
        { text: "我更倾向于：", options: [ { text: "冒险尝试", value: "D" }, { text: "享受交流", value: "I" }, { text: "保持耐心", value: "S" }, { text: "谨慎计划", value: "C" } ] },
        { text: "在工作中，我通常：", options: [ { text: "推动进展", value: "D" }, { text: "带动团队", value: "I" }, { text: "维持秩序", value: "S" }, { text: "关注细节", value: "C" } ] },
        { text: "别人可能批评我：", options: [ { text: "强硬固执", value: "D" }, { text: "夸张轻浮", value: "I" }, { text: "优柔寡断", value: "S" }, { text: "刻板死板", value: "C" } ] },
        { text: "我更看重：", options: [ { text: "速度与效率", value: "D" }, { text: "人情与影响力", value: "I" }, { text: "安全与和谐", value: "S" }, { text: "精确与正确", value: "C" } ] },
        { text: "我对变化的态度是：", options: [ { text: "积极迎接", value: "D" }, { text: "乐观适应", value: "I" }, { text: "谨慎接受", value: "S" }, { text: "尽量避免", value: "C" } ] },
        { text: "我的朋友会说我：", options: [ { text: "意志坚定", value: "D" }, { text: "热情健谈", value: "I" }, { text: "体贴可靠", value: "S" }, { text: "细致周到", value: "C" } ] },
        { text: "我通常：", options: [ { text: "直接提出问题", value: "D" }, { text: "喜欢讲故事", value: "I" }, { text: "先听别人意见", value: "S" }, { text: "先检查细节", value: "C" } ] }
      ]
    ],

    results: {
      "D": {
        type: "D",
        title: "支配型 (Dominance)",
        description: "您是天生的领导者和决策者，目标明确，行动力强。您喜欢挑战和竞争，并致力于达成结果。在团队中，您通常是那个推动项目前进、无畏困难的核心人物。您注重效率，说话直接，可能会显得比较有控制欲。",
        suggestion: "您的决断力和执行力是您成功的关键。请在追求目标的同时，有意识地放慢脚步，多倾听团队成员的意见和感受。学会赞美和授权，并认识到合作有时比命令更有效，这将让您的领导力更具魅力和凝聚力。",
        color: "#F44336" // 红色
      },
      "I": {
        type: "I",
        title: "影响型 (Influence)",
        description: "您是充满热情和魅力的社交家，乐观、健谈且善于鼓舞人心。您喜欢与人互动，享受在团队中成为注意力的焦点，并能用您的积极情绪去影响和带动他人。您通常富有创意，但不拘小节。",
        suggestion: "您的人际交往能力和感染力是您巨大的财富。在发挥影响力的同时，请注意提高对细节和任务完成度的关注。学习使用计划工具来跟进任务，并确保在表达创意后，也能有效地将其付诸实践，这会让您的才华更具成果。",
        color: "#FFEB3B" // 黄色
      },
      "S": {
        type: "S",
        title: "稳健型 (Steadiness)",
        description: "您是耐心、随和的协作者，是团队中最可靠和忠诚的伙伴。您重视和谐、稳定和可预测的环境。您是一个出色的倾听者，富有同情心，并总是在幕后默默地提供支持。您做事按部就班，不喜欢突然的变化。",
        suggestion: "您的稳定和耐心是团队的“压舱石”。请勇敢地走出您的舒适区，尝试接受一些必要的变化和挑战。在需要的时候，请更果断地表达您的观点和需求，您的意见对团队非常有价值。请相信，适度的改变会带来新的成长机遇。",
        color: "#4CAF50" // 绿色
      },
      "C": {
        type: "C",
        title: "服从型 (Conscientiousness)",
        description: "您是严谨、精确的分析者，注重质量、标准和逻辑。您做事有条不紊，追求准确无误，并喜欢在有清晰规则和流程的环境下工作。在他人眼中，您是专业、可靠且一丝不苟的专家，是质量的最终保障。",
        suggestion: "您的严谨和专业精神令人敬佩。请在追求完美的同时，学会接受“足够好”的结果，这能帮您避免陷入“分析瘫痪”。尝试对他人和自己的小错误更宽容一些，并理解有时快速决策比绝对精确更重要，这会让您的工作更高效。",
        color: "#2196F3" // 蓝色
      }
    }
  },
 // ----------------------------------------------------------------
  // 5. Cattell 16PF 卡特尔16种人格因素 (完整版)
  // ----------------------------------------------------------------
  {
    id: '5',
    slug: 'cattell16pf',
    title: '卡特尔 16PF 人格倾向测试',
    description: '最全面的个性分析工具之一。通过16个相对独立的性格因素，绘制你独特的人格雷达图。',
    topic: 'Personality',
    duration: '约 10-15 分钟',
    image: cattellImg,

    meta: {
      createdAt: "2024 专业修订版",
      author: "心理测试实验室专家组",
      participants: 32100,
      rating: 4.7,
      disclaimer: "本测试为简化版 16PF，聚焦于四大核心维度，结果仅供参考。",
      
      richIntro: [
        {
          title: "什么是 16PF？",
          content: [
            "卡特尔 16PF（16 Personality Factors）是由美国心理学家雷蒙德·卡特尔编制的经典量表。通过因素分析法，卡特尔找出了 16 种相互独立的“根源特质”，这被认为是构成人类性格的原子。",
            "与简单的分类测试不同，16PF 能捕捉到性格中更细微的差别，广泛应用于职业规划、心理咨询和人事选拔。"
          ],
          image: cattellImg,
          imageSide: 'right'
        },
        {
          title: "本测试的四大核心维度",
          content: [
            "为了让结果更易读，我们将 16 个因素归纳为四个应用维度：",
            "**🤝 人际维度 (Interpersonal)**：反映你的社交风格、外向性以及与他人合作的倾向。",
            "**🧠 思维维度 (Thinking)**：反映你的认知风格、逻辑性以及对抽象概念的偏好。",
            "**🛡️ 应对维度 (Coping)**：反映你的情绪稳定性、抗压能力以及面对挫折的复原力。",
            "**⚡ 行动维度 (Action)**：反映你的执行力、决策风格以及目标导向程度。"
          ],
          image: cattellImg,
          imageSide: 'left'
        }
      ],

      references: [
        { text: "Cattell, R. B., & Mead, A. D. (2008). The 16 Personality Factor Questionnaire (16PF)." },
        { text: "Cattell, H. E. P., & Schuerger, J. M. (2003). Essentials of 16PF Assessment." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "我喜欢结交新朋友，与人共处。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "在社交场合，我通常感觉很自在。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我是一个活泼、爱开玩笑的人。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我乐于主动发起交流。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "与陌生人交谈时我能很快进入状态。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我经常主动帮助他人解决问题。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "团队活动能让我充满能量。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我擅长在多人讨论中协调话题。", options: [ { text: "是的", "value": "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我乐意分享个人经历来拉近关系。", options: [ { text: "是的", "value": "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢把朋友聚在一起做事情。", options: [ { text: "是的", "value": "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我更喜欢处理抽象和理论性的问题。", options: [ { text: "是的", "value": "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我更偏好用逻辑分析而不是凭感觉行事。", options: [ { text: "是的", "value": "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢学习复杂的新概念和模型。", options: [ { text: "是的", "value": "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我对艺术与美学也有理性评判的兴趣。", options: [ { text: "是的", "value": "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我善于从数据中发现规律与趋势。", options: [ { text: "是的", "value": "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢拆解问题并构建清晰的逻辑框架。", options: [ { text: "是的", "value": "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "面对新领域，我愿意系统地自学和研究。", options: [ { text: "是的", "value": "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我享受推理题或逻辑游戏带来的成就感。", options: [ { text: "是的", "value": "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我在表达观点时会尽量给出依据与论证。", options: [ { text: "是的", "value": "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", "value": "N/A" } ] },
        { text: "我愿意质疑常识并提出新的假设。", options: [ { text: "是的", "value": "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我很少感到紧张或焦虑。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "在压力下我能保持冷静。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我能较快从挫折中恢复过来。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "面对批评时我能客观看待并吸收有用信息。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "在忙碌时期我也能稳定地管理情绪。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "突发状况下我能先理清优先级再处理。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我会用运动、呼吸或写作等方式缓解压力。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "即使遇到困难，我也能保持基本的作息与自律。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我会适度表达情绪而不过度压抑或爆发。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "对未来我保持稳健乐观而不过度担忧。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢领导和影响他人。", options: [ { text: "是的", "value": "action" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我做事果断，喜欢快速做决定。", options: [ { text: "是的", "value": "action" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我习惯为团队设定明确目标。", options: [ { text: "是的", "value": "action" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我会把任务拆解并制定执行计划。", options: [ { text: "是的", "value": "action" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我注重按时交付并兑现承诺。", options: [ { text: "是的", "value": "action" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "面对不确定性我也敢于先行一步。", options: [ { text: "是的", "value": "action" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我会跟踪进度并推动他人完成任务。", options: [ { text: "是的", "value": "action" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢把想法迅速落地成可执行方案。", options: [ { text: "是的", "value": "action" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "遇到阻碍时我会主动寻找资源与支持。", options: [ { text: "是的", "value": "action" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我愿意对结果承担责任并复盘改进。", options: [ { text: "是的", "value": "action" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] }
      ],
      // Paper B
      [
        { text: "我容易与不同背景的人打成一片。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我常在聊天中带动气氛。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我主动关心同伴的感受与需要。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢参与社区或社团活动。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "在会议中我愿意先开口打破沉默。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我善于倾听并给予积极反馈。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢帮助团队成员建立连接。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我愿意组织聚会或团建活动。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "与人大胆交流对我来说并不困难。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我常因社交带来灵感和动力。", options: [ { text: "是的", value: "interpersonal" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢阅读专业书籍或长篇文章来拓展思维。", options: [ { text: "是的", value: "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我会为复杂问题画出结构图或思维导图。", options: [ { text: "是的", value: "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我对事物背后的原理与机制充满好奇。", options: [ { text: "是的", value: "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢比较不同观点并形成自己的判断。", options: [ { text: "是的", value: "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我会主动寻找数据来验证直觉。", options: [ { text: "是的", value: "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢发明新方法来提升效率。", options: [ { text: "是的", value: "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我能清楚地区分事实、观点与假设。", options: [ { text: "是的", value: "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我愿意在不确定时先做小规模试验。", options: [ { text: "是的", value: "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我热衷比较不同模型与方法的优缺点。", options: [ { text: "是的", value: "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我在讨论中重视定义、边界与前提条件。", options: [ { text: "是的", value: "thinking" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "遇到突发事件时我能稳定团队情绪。", options: [ { text: "是的", value: "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我会把压力分解为可处理的小问题。", options: [ { text: "是的", value: "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我会设定边界，避免过度消耗自己。", options: [ { text: "是的", value: "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我能识别压力信号并及时调整节奏。", options: [ { text: "是的", value: "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我在冲突中尽量保持理性而非情绪化。", options: [ { text: "是的", value: "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "紧张时期我也能维持健康的生活方式。", options: [ { text: "是的", value: "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我能从失败中提炼经验而不过分自责。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我愿意寻求支持（如同事/朋友/专业人士）。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "面对长周期任务我能保持稳定耐心。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我能将焦虑转化为行动而不是拖延。", options: [ { text: "是的", "value": "coping" }, { text: "不一定", value: "N/A" }, { text: "不是", value: "N/A" } ] },
        { text: "我喜欢把目标分阶段推进并逐一达成。", options: [ { text: "是的", "value": "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "关键时刻我愿意站出来做决定。", options: [ { text: "是的", "value": "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会设定里程碑并跟踪完成情况。", options: [ { text: "是的", "value": "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我善于分配资源并协调各方配合。", options: [ { text: "是的", "value": "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "遇到阻力我会调整方案而非停滞。", options: [ { text: "是的", "value": "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我更愿意主动承担责任而非被动等待。", options: [ { text: "是的", "value": "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会把复杂任务拆分为可执行清单。", options: [ { text: "是的", "value": "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "为了达成目标我能保持持续专注。", options: [ { text: "是的", "value": "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我愿意在资源有限时做取舍并承担后果。", options: [ { text: "是的", "value": "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "阶段结束后我会复盘并优化下一轮行动。", options: [ { text: "是的", "value": "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] }
      ],
      // Paper C
      [
        { text: "我在陌生环境中能很快与人建立联系。", options: [ { text: "是的", value: "interpersonal" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我乐于在群体中担任协调者或联络人。", options: [ { text: "是的", value: "interpersonal" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我愿意公开表达赞赏并给予鼓励。", options: [ { text: "是的", value: "interpersonal" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我善于观察并回应他人的非语言信号。", options: [ { text: "是的", value: "interpersonal" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我喜欢在聚会中结识新朋友。", options: [ { text: "是的", value: "interpersonal" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我经常充当团队里的“破冰者”。", options: [ { text: "是的", value: "interpersonal" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会主动维护与同事或朋友的关系网络。", options: [ { text: "是的", value: "interpersonal" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我善于在冲突中让双方保持体面和尊重。", options: [ { text: "是的", value: "interpersonal" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我喜欢在团队中营造轻松的氛围。", options: [ { text: "是的", value: "interpersonal" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我在公开场合发言较为自如。", options: [ { text: "是的", value: "interpersonal" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我愿意花时间查阅文献以支持我的观点。", options: [ { text: "是的", value: "thinking" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我对“系统”“模型”“框架”等概念有偏好。", options: [ { text: "是的", value: "thinking" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我喜欢从多学科角度综合思考问题。", options: [ { text: "是的", value: "thinking" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我偏好可复现、可验证的结论。", options: [ { text: "是的", value: "thinking" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会在方案中明确假设与限制条件。", options: [ { text: "是的", value: "thinking" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我享受“提出问题—验证—修正”的循环。", options: [ { text: "是的", value: "thinking" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会通过实验或小样本先行验证想法。", options: [ { text: "是的", value: "thinking" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我乐于清理概念混乱并定义准确术语。", options: [ { text: "是的", value: "thinking" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我倾向于用事实纠正以偏概全的论断。", options: [ { text: "是的", value: "thinking" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我能把复杂内容提炼为可理解的要点。", options: [ { text: "是的", value: "thinking" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会提前识别压力来源并做预案。", options: [ { text: "是的", value: "coping" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "长时间高负荷后我能有效恢复状态。", options: [ { text: "是的", value: "coping" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "遇到否定时我能保持自尊与自信。", options: [ { text: "是的", value: "coping" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我能在重要时刻稳定发挥而不被情绪左右。", options: [ { text: "是的", value: "coping" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会与信任的人及时沟通压力感受。", options: [ { text: "是的", value: "coping" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我能把负面情绪转化为改进的动力。", options: [ { text: "是的", value: "coping" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会在高压阶段坚持最基本的身心照顾。", options: [ { text: "是的", value: "coping" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我能接受不确定性并维持行动。", options: [ { text: "是的", value: "coping" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会把注意力从无法控制的事移到可控行动上。", options: [ { text: "是的", value: "coping" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我能在压力中保持幽默感与弹性。", options: [ { text: "是的", value: "coping" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会明确分工并确保每个人知道自己的目标。", options: [ { text: "是的", value: "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我能在资源有限下做优先级取舍。", options: [ { text: "是的", value: "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "需要推动时我会主动站到前台。", options: [ { text: "是的", value: "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会把长期目标拆成短期可交付的阶段性目标。", options: [ { text: "是的", value: "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "遇到阻碍我会寻找替代方案并马上推进。", options: [ { text: "是的", value: "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "关键节点我会收敛范围以保证交付质量。", options: [ { text: "是的", value: "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我习惯用看板或清单管理进度。", options: [ { text: "是的", value: "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我能在多任务之间保持节奏与效率。", options: [ { text: "是的", value: "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "我会及时同步状态并对结果负责。", options: [ { text: "是的", value: "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] },
        { text: "阶段完成后我会沉淀复盘文档。", options: [ { text: "是的", value: "action" }, { "text": "不一定", "value": "N/A" }, { "text": "不是", "value": "N/A" } ] }
      ]
    ],

    results: {
      "interpersonal": {
        type: "Interpersonal",
        title: "人际维度 (Interpersonal)",
        description: "反映与他人交往的倾向与能力，包括外向性、沟通、同理、协作与社交主动性。分数高者更外向、善交际、乐于协作；分数较低者更偏向独处与深思。",
        suggestion: "如果您得分较高，请继续利用您的社交优势，但也要注意留出独处时间进行反思。如果您得分较低，请珍惜您的独立思考能力，同时尝试在感到舒适的小范围内建立深层连接。",
        color: "#E91E63" // 玫红
      },
      "thinking": {
        type: "Thinking",
        title: "思维维度 (Thinking)",
        description: "反映思维方式与认知偏好，包括逻辑性、抽象性、求知欲与创造力。分数高者更重视逻辑和结构，热衷学习与创新；分数较低者更偏好经验直觉与具体事务。",
        suggestion: "高分者请注意不要过于陷入理论而忽视现实的可行性。低分者可以尝试接触一些新领域，挑战自己的思维定势，保持认知弹性。",
        color: "#2196F3" // 蓝色
      },
      "coping": {
        type: "Coping",
        title: "应对维度 (Coping)",
        description: "反映情绪稳定性与压力管理，包括复原力、自我调节与界限感。分数高者在压力下更稳定、能有效恢复；分数较低者更易焦虑、需要更多支持与节奏管理。",
        suggestion: "如果应对分较高，请成为他人的稳定力量。如果较低，请优先建立自己的支持系统和减压机制（如运动、冥想），接纳自己的情绪波动。",
        color: "#4CAF50" // 绿色
      },
      "action": {
        type: "Action",
        title: "行动维度 (Action)",
        description: "反映计划与执行能力，包括目标设定、决策、推进与复盘。分数高者更果断、善于拆解并推动达成；分数较低者更倾向跟随、需要明确指引与节奏安排。",
        suggestion: "行动力强者请注意不要冲动，行动前多做一点规划。行动力较弱者，可以尝试“微习惯”策略，先从非常小的第一步开始，逐步建立信心。",
        color: "#FF9800" // 橙色
      }
    }
  },
  // ----------------------------------------------------------------
  // 6. Dark Triad 黑暗人格三合一 (完整版)
  // ----------------------------------------------------------------
  {
    id: '6',
    slug: 'darktriad',
    title: '黑暗人格三合一 (Dark Triad)',
    description: '直面人性的阴暗面。评估马基雅维利主义、自恋和精神病态倾向。',
    topic: 'Personality',
    duration: '约 5-8 分钟',
    image: darktriadImg,

    meta: {
      createdAt: "2024 学术版",
      author: "心理测试实验室专家组",
      participants: 51200,
      rating: 4.5,
      disclaimer: "本测试仅用于亚临床（非病理）人格特质评估，不作为反社会人格障碍等精神疾病的诊断依据。",
      
      richIntro: [
        {
          title: "什么是黑暗人格？",
          content: [
            "黑暗三合一（Dark Triad）是心理学中用于描述三种具有潜在破坏性、但也可能带来社会成功的人格特质的模型。",
            "这三种特质在一定程度上是每个人都有的“阴暗面”，它们并不一定意味着“邪恶”，在某些高竞争环境下（如商业谈判、政治博弈），适度的黑暗特质反而可能成为一种生存优势。"
          ],
          image: darktriadImg,
          imageSide: 'right'
        },
        {
          title: "三大黑暗维度",
          content: [
            "**🧠 马基雅维利主义 (Machiavellianism)**：<br>以权谋、策略和操纵为特征。信奉“结果正义”，擅长利用他人达成目的，情感冷漠，理性至上。",
            "**🪞 自恋 (Narcissism)**：<br>以宏大的自我感、特权感和寻求赞美为特征。渴望成为焦点，拥有极高的自信，但也可能伴随着对他人的轻视。",
            "**🔥 精神病态 (Psychopathy)**：<br>以冲动、寻求刺激和缺乏同理心为特征。行事大胆，不畏风险，在压力下异常冷静，但可能缺乏悔过之心。"
          ],
          image: darktriadImg,
          imageSide: 'left'
        }
      ],

      references: [
        { text: "Paulhus, D. L., & Williams, K. M. (2002). The Dark Triad of personality: Narcissism, Machiavellianism, and psychopathy." },
        { text: "Jonason, P. K., & Webster, G. D. (2010). The Dirty Dozen: A concise measure of the Dark Triad." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "我倾向于操纵别人以达到我的目的。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我希望得到别人很多的赞美。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我做事冲动，不太考虑后果。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我认为奉承和欺骗是成功的必要手段。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我幻想自己拥有巨大的权力和声望。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我对他人的麻烦和痛苦漠不关心。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "为了实现目标，我可以不择手段。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我喜欢成为众人瞩目的焦点。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我喜欢寻求刺激和危险的活动。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我善于发现别人的弱点并加以利用。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我觉得自己比大多数人都更优秀。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我对自己的行为很少感到后悔或内疚。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我认为大多数人都是可以被操纵的。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我喜欢炫耀自己的才华和成就。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我很容易感到厌烦。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我与人交往时，总是在盘算能得到什么好处。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望权力。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我喜欢打破规则。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我认为没有永远的朋友，只有永远的利益。", options: [ { text: "很像我", "value": "machiavellianism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我期望别人能给予我特殊的待遇。", options: [ { text: "很像我", "value": "narcissism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我对他人的情感反应迟钝。", options: [ { text: "很像我", "value": "psychopathy" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我非常注重策略和长远计划。", options: [ { text: "很像我", "value": "machiavellianism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我不太在意批评，因为我知道自己是对的。", options: [ { text: "很像我", "value": "narcissism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我有时会撒谎来摆脱麻烦。", options: [ { text: "很像我", "value": "psychopathy" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我会对人隐瞒我的真实意图。", options: [ { text: "很像我", "value": "machiavellianism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我喜欢利用自己的外表或魅力来获得优势。", options: [ { text: "很像我", "value": "narcissism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我的人生信条是“人不为己，天诛地灭”。", options: [ { text: "很像我", "value": "psychopathy" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我认为情感是决策的障碍。", options: [ { text: "很像我", "value": "machiavellianism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我喜欢领导别人，而不是被领导。", options: [ { text: "很像我", "value": "narcissism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我很难与他人建立深厚的情感联系。", options: [ { text: "很像我", "value": "psychopathy" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我认为道德是相对的，可以根据情况改变。", options: [ { text: "很像我", "value": "machiavellianism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我常常觉得自己应该得到最好的。", options: [ { text: "很像我", "value": "narcissism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我很少为自己的决定感到焦虑。", options: [ { text: "很像我", "value": "psychopathy" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我会让别人为我做事，以节省我的时间和精力。", options: [ { text: "很像我", "value": "machiavellianism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "别人应该认识到我的特殊才华。", options: [ { text: "很像我", "value": "narcissism" }, { text: "不太像我", "value": "N/A" } ] },
        { text: "我对他人的威胁或攻击会进行冷酷的回击。", options: [ { text: "很像我", "value": "psychopathy" }, { text: "不太像我", "value": "N/A" } ] }
      ],
      // Paper B
      [
        { text: "如果能帮助我达成目标，我会有意影响别人的选择。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我享受别人对我的赞赏与关注。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我时常凭直觉行事，哪怕后果不明。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "在必要时，策略性隐瞒信息是可以接受的。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我常设想自己拥有更高的地位与影响力。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "他人的痛苦通常与我无关，不会影响我的情绪。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "结果最重要，过程中的手段可以灵活处理。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "成为舞台中央让我感到愉悦。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我乐于参与高风险、高回报的活动。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会观察别人的弱点，以备将来所需。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "总体而言，我的能力优于多数人。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "做错事时，我通常不会陷入内疚。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "大多数人都容易被影响，所以关键是方法。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我倾向于强调并展示自己的长处。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我很快就会对重复的事情感到无聊。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "社交往来时，我会衡量能否为我带来回报。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我希望能掌控更多人和资源。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "打破规则让我有一种自由和快感。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "利益优先于人情，这是现实法则。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我理应享受比他人更优待的待遇。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我对他人的情绪常感觉冷淡或疏离。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我习惯先制订计划，再通过技巧实现目标。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "批评对我影响不大，我更相信自己的判断。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "必要时编造一些说法也无伤大雅。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我不会轻易暴露真正的目的。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我愿意利用魅力或形象换取优势。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "“先顾自己”是最务实的生活方式。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "过多的情感只会干扰理性判断。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我更喜欢主导他人而不是受他人支配。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我与人很少建立深度情感连接。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "所谓道德是因时因地而变的。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我更愿意相信自己值得最好的资源。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我做决定后很少感到不安。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "把任务委派给他人能让我更专注要紧的事。", options: [ { text: "很像我", "value": "machiavellianism" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "他人应该认可并服从我的独特优势。", options: [ { "text": "很像我", "value": "narcissism" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "若受挑衅，我会冷酷而强硬地回击。", options: [ { "text": "很像我", "value": "psychopathy" }, { "text": "不太像我", "value": "N/A" } ] }
      ],
      // Paper C
      [
        { text: "为了谈判更有利，我会有意识地引导对方认知。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "他人的赞美能让我更有动力。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我有时会先行动，之后再考虑影响。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "必要时，我会隐藏真实立场以保留筹码。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我常设想自己处在权力中心。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我对别人的遭遇通常较少共情。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "实现目标时，我更看重结果而非方式。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "成为注意力的中心让我感觉良好。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "追求刺激是我生活的一部分。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会记录并记住对方的短板，以便博弈。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我相信自己在多方面都胜过他人。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我很少为自己的决定感到愧疚。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "，只要方法得当，多数人都能被我影响。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我乐于让别人看到我的成就与光环。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "面对单调任务，我会迅速失去兴趣。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我评估关系时会考虑交换价值与成本收益。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望更强的号召力和控制权。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "挑战规则会让我有兴奋与权能感。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "现实交往中，利益往往比情义更可靠。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我理应得到比普通人更好的待遇与资源。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我对他人的感受通常不太敏感。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我善于通过布局和计谋实现目标。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "即使被质疑，我也坚持自己的卓越判断。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "若能脱身，编造解释也是一种选择。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我会把真实意图深藏不露，直到合适时机。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "在场合需要时，我会刻意经营个人形象。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "“先满足自己需求”是我行事的原则之一。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "当情绪干扰理智时，我会选择忽略情绪。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我本能地倾向于指挥他人而不是被指挥。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我通常不追求与人建立过于亲密的关系。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "道德规范需要根据情境灵活理解。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我觉得自己配得上独一无二的资源与礼遇。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "做出选择后，我很少被不确定感困扰。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我更愿意把琐事交给别人处理。", options: [ { text: "很像我", value: "machiavellianism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我期待他人认可我的独特能力与价值。", options: [ { text: "很像我", value: "narcissism" }, { text: "不太像我", value: "N/A" } ] },
        { text: "面对挑衅时，我会选择冷酷、强硬的回应。", options: [ { text: "很像我", value: "psychopathy" }, { text: "不太像我", value: "N/A" } ] }
      ]
    ],

    results: {
      "narcissism": {
        type: "Narcissism",
        title: "自恋倾向 (Narcissism)",
        description: "您的结果表明，您在“自恋”特质上表现得较为突出。这通常表现为强烈的优越感、对赞美和认可的渴求，以及希望成为众人瞩目的焦点。自信是您的优势，但需警惕滑向傲慢。",
        suggestion: "自信是宝贵的，但请有意识地练习“积极倾听”，真正理解他人的观点，而不是仅仅等待表达自己的机会。真正的强大源于能够平等地看待自己和他人。",
        color: "#FFD54F" // 金色
      },
      "machiavellianism": {
        type: "Machiavellianism",
        title: "马基雅维利主义倾向 (Machiavellianism)",
        description: "您的结果表明，您在“马基雅维利主义”特质上表现得较为突出。这表现为一种注重策略、以目标为导向的思维方式。您对人性持相对冷静的态度，擅长博弈与布局。",
        suggestion: "您的策略思维是把双刃剑。请审视当前的手段是否真正服务于长远目标。建立在真诚和信任基础上的人际关系，往往比短暂的策略联盟更能带来长久回报。",
        color: "#546E7A" // 冷灰蓝
      },
      "psychopathy": {
        type: "Psychopathy",
        title: "精神变态倾向 (Psychopathy)",
        description: "您的结果表明，您在“精神变态”（非临床意义）特质上表现得较为突出。这通常表现为较高的冲动性、喜欢寻求刺激，以及较低的同理心。您行事大胆，在压力下异常冷静。",
        suggestion: "您在压力下的冷静非常罕见。请尝试培养“认知共情”，即通过逻辑去理解他人的情绪后果。在冲动前建立“暂停-思考”机制，利用您的冷静而非被冲动驱使。",
        color: "#D32F2F" // 深红
      }
    }
  },
  // ----------------------------------------------------------------
  // 7. Holland 霍兰德职业兴趣测试 (已修复标点错误版)
  // ----------------------------------------------------------------
  // ----------------------------------------------------------------
  // 7. Holland 霍兰德职业兴趣测试 (已修复：移除了错误的引号)
  // ----------------------------------------------------------------
  {
    id: '7',
    slug: 'holland',
    title: '霍兰德职业兴趣测试 (RIASEC)',
    description: '找到你职业生涯中无法放弃的核心价值。基于RIASEC模型，匹配最适合你的职业环境。',
    topic: 'Career',
    duration: '约 8-12 分钟',
    image: hollandImg,
    heroImage: hollandHeroImg,

    meta: {
      createdAt: "2024 职业规划版",
      author: "心理测试实验室专家组",
      participants: 41500,
      rating: 4.8,
      disclaimer: "本测试基于霍兰德职业代码理论，结果仅供职业探索参考。",
      
      richIntro: [
        {
          title: "什么是 RIASEC 模型？",
          content: [
            "霍兰德职业兴趣理论（Holland Codes）是由美国心理学家约翰·霍兰德提出的。他认为人的人格类型、兴趣与职业环境可以分为六种类型。",
            "如果你选择了与自己兴趣类型相匹配的职业环境，你会工作得更快乐、更高效，职业稳定性也更高。"
          ],
          image: hollandImg,
          imageSide: 'right'
        },
        {
          title: "六边形职业代码",
          content: [
            "**🔨 现实型 (Realistic)**：动手操作，喜欢机械和户外。",
            "**🔬 研究型 (Investigative)**：逻辑分析，喜欢科学和探索。",
            "**🎨 艺术型 (Artistic)**：自由创造，喜欢表达和想象。",
            "**🤝 社会型 (Social)**：助人为乐，喜欢教育和咨询。",
            "**💼 企业型 (Enterprising)**：领导影响，喜欢管理和销售。",
            "**📊 常规型 (Conventional)**：井井有条，喜欢数据和规则。"
          ],
          image: hollandImg,
          imageSide: 'left'
        }
      ],

      references: [
        { text: "Holland, J. L. (1997). Making Vocational Choices." },
        { text: "Gottfredson, G. D. (1996). Dictionary of Holland Occupational Codes." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "我喜欢修理自行车或汽车。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢解决数学或科学难题。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢绘画、素描或雕刻。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢帮助别人解决他们的问题。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢说服和影响他人。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢整理和归档文件。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢操作机械设备。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做化学实验。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢演奏乐器或唱歌。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢参加志愿者活动。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢领导一个团队。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢制定详细的计划。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢户外活动，比如远足或露营。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢阅读科学文章或书籍。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢写作，比如写诗或故事。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢教导或培训他人。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢创业或经营自己的生意。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢处理数据和数字。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢组装家具。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢分析数据并寻找规律。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢设计服装或室内装饰。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢倾听并给予朋友建议。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢公开演讲或辩论。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢使用电子表格软件。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做木工活。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢研究生物或自然。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢摄影或拍电影。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢在团队中协调工作。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢谈判和销售。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢检查工作的准确性。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢园艺。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢编程或开发软件。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢跳舞。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢提供客户服务。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢组织活动或派对。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢遵守规则和程序。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢驾驶交通工具。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢思考抽象的理论问题。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢创造新的食谱。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢关心和照顾他人。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢管理项目。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做簿记或会计工作。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢使用电动工具。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做研究。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢戏剧表演。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做社工。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢推广和宣传产品。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做办公室文书工作。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] }
      ],
      // Paper B
      [
        { text: "我喜欢与动物一起工作。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢观察星象。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢设计网页或APP界面。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做心理咨询。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢从事政治活动。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做校对工作。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做体力劳动。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢解读地图和图表。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢写博客或日记。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢组织社区活动。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢进行投资理财。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢管理库存。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢制作手工艺品。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢进行科学探索。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢从事电影制作。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢在非营利组织工作。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢担任团队负责人。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做预算。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢修理电器。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢解决逻辑谜题。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢插花。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做辅导员。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做房地产经纪人。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢进行数据录入。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢烹饪。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢研究历史。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做动画。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做护士或医生。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢当经理。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做图书馆员。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做建筑工作。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做市场调研。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做时尚设计。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做人力资源工作。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做销售总监。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做审计员。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做农民或渔夫。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做侦探。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做音乐家。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做治疗师。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做律师。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做银行出纳员。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做电工。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做物理学家。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做演员。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做小学老师。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做公关专员。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做数据分析师。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] }
      ],
      // Paper C
      [
        { text: "我喜欢做消防员。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做天文学家。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做诗人。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做营养师。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做广告策划。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做质量检验员。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做警察。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做经济学家。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做指挥家。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做健身教练。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做招聘专员。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做保险理算员。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做厨师。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做考古学家。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做室内设计师。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做牧师或神职人员。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做酒店经理。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做税务顾问。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做卡车司机。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做数学家。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做画家。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做职业顾问。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做项目经理。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做信贷员。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做焊工。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做化学家。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做雕塑家。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做言语治疗师。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做销售代表。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做行政助理。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做林务员。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做地质学家。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做作曲家。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做图书馆员。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做活动策划。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做工资专员。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做飞行员。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做人类学家。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做广告文案。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做临床心理学家。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做法官。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做成本估算员。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做兽医。", options: [{ text: "是", value: "R" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做医学研究员。", options: [{ text: "是", value: "I" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做编辑。", options: [{ text: "是", value: "A" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做特殊教育老师。", options: [{ text: "是", value: "S" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做财务规划师。", options: [{ text: "是", value: "E" }, { text: "否", value: "N/A" }] },
        { text: "我喜欢做统计员。", options: [{ text: "是", value: "C" }, { text: "否", value: "N/A" }] }
      ]
    ],

    results: {
      "R": { type: "R", title: "现实型 (Realistic)", description: "您是“实干家”，喜欢运用技能和工具，进行实际操作。您偏爱具体、明确的任务，而不是抽象的理论。通常动手能力强，做事踏实。", suggestion: "适合从事需要动手能力和操作技能的职业，如工程师、机械师、飞行员、程序员或户外工作者。在团队中，您可以成为解决实际问题的专家。", color: "#795548" },
      "I": { type: "I", title: "研究型 (Investigative)", description: "您是“思考者”，对探索和理解事物充满好奇。您喜欢观察、分析和解决问题，偏爱智力挑战，享受在科学和逻辑的世界里遨游。", suggestion: "适合从事需要分析和研究能力的职业，如科学家、医生、侦探、数据分析师或学者。不断学习和深入钻研能让您获得最大的满足感。", color: "#3F51B5" },
      "A": { type: "A", title: "艺术型 (Artistic)", description: "您是“创造者”，拥有丰富的想象力和创造力。您喜欢通过各种艺术形式来表达自己的想法和情感，追求美和创新，不喜欢被规则束缚。", suggestion: "适合从事需要创造力和自我表达的职业，如设计师、作家、音乐家、演员或建筑师。为自己创造一个自由表达的空间至关重要。", color: "#E91E63" },
      "S": { type: "S", title: "社会型 (Social)", description: "您是“协作者”，喜欢与人打交道，并乐于助人。您富有同情心，善于沟通和教导，享受在团队中合作并为他人提供支持。", suggestion: "适合从事需要人际交往和服务他人的职业，如教师、心理咨询师、社工、护士或人力资源。您的共情能力是您最大的优势。", color: "#4CAF50" },
      "E": { type: "E", title: "企业型 (Enterprising)", description: "您是“领导者”，精力充沛，富有说服力。您喜欢影响和领导他人，追求权力和成就，享受在竞争中取胜。您是天生的组织者和决策者。", suggestion: "适合从事需要领导力、说服力和竞争性的职业，如销售、管理、律师、企业家或市场营销。勇于承担风险和责任能让您脱颖而出。", color: "#FF9800" },
      "C": { type: "C", title: "常规型 (Conventional)", description: "您是“组织者”，做事有条理、注重细节和精确性。您喜欢在明确的规则和流程下工作，擅长处理数据和文书工作，非常可靠和高效。", suggestion: "适合从事需要条理性和精确性的职业，如会计、行政人员、图书管理员、程序员或银行职员。您对秩序和细节的关注是您成功的关键。", color: "#607D8B" }
    }
  },
  // ----------------------------------------------------------------
  // 8. Attachment Style 依恋类型测试 (完整版 - 已修复所有标点)
  // ----------------------------------------------------------------
  {
    id: '8',
    slug: 'attachment',
    title: '成人依恋类型测试',
    description: '你在亲密关系中缺乏安全感吗？了解你的依恋模式（安全型、焦虑型、回避型），找到构建长久关系的钥匙。',
    topic: 'Emotion',
    duration: '约 5-8 分钟',
    image: attachmentImg,

    meta: {
      createdAt: "2024 情感版",
      author: "心理测试实验室专家组",
      participants: 32400,
      rating: 4.8,
      disclaimer: "本测试基于成人依恋理论，结果仅供自我探索，不作为心理诊断依据。",
      
      richIntro: [
        {
          title: "什么是依恋类型？",
          content: [
            "依恋理论（Attachment Theory）最初由英国心理学家约翰·鲍比（John Bowlby）提出，描述了人与人之间建立情感纽带的方式。",
            "虽然依恋模式形成于童年，但它深刻影响着成人后的恋爱与婚姻质量。了解自己的依恋风格，是打破“吸渣体质”、建立健康亲密关系的第一步。"
          ],
          image: attachmentImg,
          imageSide: 'right'
        },
        {
          title: "四种依恋风格",
          content: [
            "**🟢 安全型 (Secure)**：自信、信任，既享受亲密也能保持独立。",
            "**🟠 焦虑型 (Anxious)**：渴望亲密，但常担心被抛弃，需要不断确认。",
            "**🔵 疏离回避型 (Dismissive)**：看重独立，抗拒亲密，习惯压抑情感。",
            "**🟣 恐惧回避型 (Fearful)**：渴望爱却害怕受伤害，在靠近与推开中摇摆。"
          ],
          image: attachmentImg,
          imageSide: 'left'
        }
      ],

      references: [
        { text: "Bowlby, J. (1969). Attachment and Loss." },
        { text: "Ainsworth, M. D. S. (1978). Patterns of Attachment." },
        { text: "Hazan, C., & Shaver, P. (1987). Romantic love conceptualized as an attachment process." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "与伴侣亲近让我感到很舒服和自然。", options: [ { text: "很像我", value: "secure" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我常常担心我的伴侣不是真的爱我，或者随时会离开我。", options: [ { text: "很像我", value: "anxious" }, { text: "不太像我", value: "N/A" } ] },
        { text: "对我来说，保持独立和自给自足比进入亲密关系更重要。", options: [ { text: "很像我", value: "dismissive" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我很想和人建立亲密的情感关系，但我又害怕因此受到伤害。", options: [ { text: "很像我", value: "fearful" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我很容易就相信并依赖我的伴侣。", options: [ { text: "很像我", value: "secure" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我发现伴侣的一些小举动就能让我极度不安，反复猜测其含义。", options: [ { text: "很像我", value: "anxious" }, { text: "不太像我", value: "N/A" } ] },
        { text: "当伴侣试图与我过度亲密时，我会感到不适并想拉开距离。", options: [ { text: "很像我", value: "dismissive" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我的情绪有时会因为感情问题而剧烈波动，让我自己都觉得很混乱。", options: [ { text: "很像我", value: "fearful" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我不担心被抛弃或有人与我太过亲近。", options: [ { text: "很像我", value: "secure" }, { text: "不太像我", value: "N/A" } ] },
        { text: "为了让对方喜欢我，我愿意做任何事，有时甚至会失去自我。", options: [ { text: "很像我", value: "anxious" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我不喜欢在别人面前展露脆弱的一面。", options: [ { text: "很像我", value: "dismissive" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我时常怀疑自己是否值得被爱。", options: [ { text: "很像我", value: "fearful" }, { text: "不太像我", value: "N/A" } ] },
        { text: "和伴侣相互支持、彼此依赖的感觉很好。", options: [ { text: "很像我", value: "secure" }, { text: "不太像我", value: "N/A" } ] },
        { text: "如果感觉不到伴侣持续的关注和回应，我会变得非常焦虑。", options: [ { text: "很像我", value: "anxious" }, { text: "不太像我", value: "N/A" } ] },
        { text: "比起情感交流，我更倾向于关注实际问题和个人事业。", options: [ { text: "很像我", value: "dismissive" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我很难完全信任别人，总觉得他们最终会伤害我。", options: [ { text: "很像我", value: "fearful" }, { text: "不太像我", value: "N/A" } ] },
        { text: "当伴侣需要我时，我总能在他们身边给予支持。", options: [ { text: "很像我", value: "secure" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我非常渴望亲密关系，但这常常会吓跑别人。", options: [ { text: "很像我", value: "anxious" }, { text: "不太像我", value: "N/A" } ] },
        { text: "人们评价我有些冷漠和疏远。", options: [ { text: "很像我", value: "dismissive" }, { text: "不太像我", value: "N/A" } ] },
        { text: "有时我会毫无理由地推开那些试图接近我的人。", options: [ { text: "很像我", value: "fearful" }, { text: "不太像我", value: "N/A" } ] }
      ],
      // Paper B
      [
        { text: "亲密相处对我来说轻松自然，不会压迫我。", options: [ { text: "很像我", value: "secure" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我常担忧伴侣会撤回爱意或突然离开。", options: [ { text: "很像我", value: "anxious" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我看重独立胜过依赖，过度亲密让我不自在。", options: [ { text: "很像我", value: "dismissive" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我渴望亲密，但又害怕被伤害而犹豫靠近。", options: [ { text: "很像我", value: "fearful" }, { text: "不太像我", value: "N/A" } ] },
        { text: "我愿意信任并依靠伴侣，感觉安全可靠。", options: [ { text: "很像我", value: "secure" }, { text: "不太像我", value: "N/A" } ] },
        { text: "伴侣的细微变化会让我反复揣测、坐立不安。", options: [ { text: "很像我", value: "anxious" }, { text: "不太像我", value: "N/A" } ] },
        { text: "当对方靠得太近时，我倾向于退后一步。", options: [ { text: "很像我", "value": "dismissive" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "在关系里，我的情绪容易剧烈波动且难以安定。", options: [ { "text": "很像我", "value": "fearful" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我不太担心被抛弃，也不害怕过分亲密。", options: [ { "text": "很像我", "value": "secure" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "为了留住对方，我容易过度付出、忽略自我。", options: [ { "text": "很像我", "value": "anxious" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我不愿示弱，避免在别人面前表现脆弱面。", options: [ { "text": "很像我", "value": "dismissive" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我时常不确定自己是否值得被爱、被珍惜。", options: [ { "text": "很像我", "value": "fearful" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "彼此依赖、相互支持让我感到踏实。", options: [ { "text": "很像我", "value": "secure" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "当收不到稳定回应时，我会明显感到焦虑不安。", options: [ { "text": "很像我", "value": "anxious" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我更把精力放在事业与实际问题上，而非情感交流。", options: [ { "text": "很像我", "value": "dismissive" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "要我完全信任别人很难，总担心他们会伤我。", options: [ { "text": "很像我", "value": "fearful" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "当对方需要我时，我能稳定地提供支持与回应。", options: [ { "text": "很像我", "value": "secure" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我非常渴望亲密，但常因过度靠近而让人退缩。", options: [ { "text": "很像我", "value": "anxious" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "别人常形容我疏离、冷淡，不易亲近。", options: [ { "text": "很像我", "value": "dismissive" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "当有人靠近我时，我会下意识把他们推开。", options: [ { "text": "很像我", "value": "fearful" }, { "text": "不太像我", "value": "N/A" } ] }
      ],
      // Paper C
      [
        { text: "与伴侣的贴近与互动让我感到安心自在。", options: [ { "text": "很像我", "value": "secure" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我常担心在关系里被忽视或被抛弃。", options: [ { "text": "很像我", "value": "anxious" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我更愿意保持边界和空间，避免过度亲密。", options: [ { "text": "很像我", "value": "dismissive" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我渴求亲密却又害怕受伤，常左右为难。", options: [ { "text": "很像我", "value": "fearful" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我愿意向伴侣敞开心扉并建立互信。", options: [ { "text": "很像我", "value": "secure" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "伴侣的小小冷淡就会让我心神不宁。", options: [ { "text": "很像我", "value": "anxious" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "当别人靠近时，我会以理性与距离来保护自己。", options: [ { "text": "很像我", "value": "dismissive" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "关系中的不确定感会触发我强烈的矛盾情绪。", options: [ { "text": "很像我", "value": "fearful" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我不太担心被束缚，也不会惧怕亲密。", options: [ { "text": "很像我", "value": "secure" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "为了获得安全感，我会格外在意对方是否时刻回应我。", options: [ { "text": "很像我", "value": "anxious" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我不愿意在人前暴露自己的柔软与脆弱。", options: [ { "text": "很像我", "value": "dismissive" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我常怀疑自己不值得被深深爱着。", options: [ { "text": "很像我", "value": "fearful" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我欣赏关系中的互信、互助与共同成长。", options: [ { "text": "很像我", "value": "secure" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "若缺少持续的关怀回应，我会变得格外焦虑。", options: [ { "text": "很像我", "value": "anxious" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "与其情感黏连，我更偏好务实和目标导向。", options: [ { "text": "很像我", "value": "dismissive" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "完全信任他人对我而言很难，我怕再次受伤。", options: [ { "text": "很像我", "value": "fearful" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "在伴侣需要时，我能持续、稳定地提供支持。", options: [ { "text": "很像我", "value": "secure" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "我渴望黏近对方，但靠太近又让我不安。", options: [ { "text": "很像我", "value": "anxious" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "别人说我在情感上显得克制甚至疏离。", options: [ { "text": "很像我", "value": "dismissive" }, { "text": "不太像我", "value": "N/A" } ] },
        { text: "当有人向我靠近时，我会本能地把他们推远。", options: [ { "text": "很像我", "value": "fearful" }, { "text": "不太像我", "value": "N/A" } ] }
      ]
    ],

    results: {
      "secure": {
        type: "Secure",
        title: "安全型依恋",
        description: "您对亲密关系抱有积极的看法，既享受与人亲近、相互依赖的温暖，也能保持自己的独立性。您能够坦诚地表达自己的情感和需求，并积极回应伴侣。您相信自己是值得被爱的，也相信他人是可靠和值得信赖的。在面对冲突时，您倾向于以建设性的方式沟通，共同寻找解决方案。这种依恋模式是健康亲密关系的基石。",
        suggestion: "您已经拥有了非常宝贵的心理资源。请继续保持开放和诚实的沟通习惯，这是维持任何健康关系的核心。当您与不安全依恋类型的伴侣互动时，您的稳定性和一致性可以成为对方的“安全基地”，帮助他们慢慢疗愈。",
        color: "#4CAF50" // 绿色
      },
      "anxious": {
        type: "Anxious",
        title: "焦虑痴迷型依恋",
        description: "您极度渴望亲密和情感联结，并为此投入大量的精力。然而，您内心深处常常缺乏安全感，担心伴侣无法给予同等的回报，害怕被抛弃。这使您对伴侣的言行举止高度敏感，容易将中性的信号解读为拒绝或冷漠，从而引发焦虑和不安。您可能会通过过度付出的方式来“抓住”对方，但这有时反而会给关系带来压力。",
        suggestion: "您的爱是热烈的，但需要找到一个更安稳的内核。核心任务是建立“自我价值感”。请投入时间和精力在您的个人爱好、事业和友情上，从中获得成就感和支持。学习用“我”开头来表达您的感受（例如：“我感到有些不安”），而不是指责对方（“你为什么不回我信息”）。",
        color: "#FF9800" // 橙色
      },
      "dismissive": {
        type: "Dismissive",
        title: "疏离回避型依恋",
        description: "您高度重视独立、自由和自给自足，并以此为荣。您可能认为亲密关系会束缚您的自由，或带来不必要的麻烦。因此，当他人试图与您建立深层情感联结时，您会感到不适，并下意识地拉开距离。您习惯于压抑自己的情感，不愿示弱，并倾向于用理性和逻辑来处理问题，这可能会让伴侣觉得您有些冷漠和难以接近。",
        suggestion: "您的独立是您的力量，但真正的强大也包括与人联结的能力。核心任务是“允许自己变得脆弱”。选择一个您信任的人，尝试分享一个微不足道的情绪或想法，观察会发生什么。您会发现，脆弱并不总是危险的。理解他人的情感需求，他们表达情感需求时，并不是想“控制”您，而是渴望“联结”。",
        color: "#607D8B" // 蓝灰
      },
      "fearful": {
        type: "Fearful",
        title: "恐惧回避型依恋",
        description: "您的内心充满了矛盾：您一方面渴望与人建立深刻、真诚的亲密关系，但另一方面，过去的创伤或负面经历又让您深信亲密是危险的，最终只会带来伤害。这种“既想要又害怕”的矛盾心态，让您在关系中反复上演“靠近又推开”的循环。您的情绪可能会因此剧烈波动，既让自己感到困惑，也让伴侣不知所措。",
        suggestion: "您的内心充满了未被疗愈的伤口，走向整合是您的核心任务。由于这种依恋模式通常与过往的创伤有关，寻求专业的心理咨询师或治疗师的帮助是最高效、最安全的选择。同时，通过正念、冥想等方式，学习与自己当下的情绪和身体感受共处，而不是被它们淹没。这能帮助您在混乱中找到一个稳定的“锚点”。",
        color: "#F44336" // 红色
      }
    }
  },
  // ----------------------------------------------------------------
  // 9. Love Languages 爱之语测试 (完整版)
  // ----------------------------------------------------------------
  {
    id: '9',
    slug: 'lovelanguages',
    title: '爱的五种语言测试',
    description: '肯定的言辞、服务的行动、礼物、精心时刻还是身体接触？发现你和伴侣感受爱的方式，减少误解。',
    topic: 'Emotion',
    duration: '约 5-8 分钟',
    image: loveImg,
    heroImage: lovelanguagesHeroImg,

    meta: {
      createdAt: "2024 经典版",
      author: "心理测试实验室专家组",
      participants: 55100,
      rating: 4.9,
      disclaimer: "本测试基于盖瑞·查普曼博士的理论，帮助理解情感表达偏好。",
      
      richIntro: [
        {
          title: "什么是爱的语言？",
          content: [
            "“爱的五种语言”理论由著名婚姻咨询师盖瑞·查普曼博士提出。他发现，就像人们说不同的方言一样，每个人都有自己主要的“爱语”。",
            "如果伴侣之间语言不通，即便你付出了全部的爱，对方也可能感觉不到。了解彼此的爱语，是填满彼此“爱箱”的秘密。"
          ],
          image: loveImg,
          imageSide: 'right'
        },
        {
          title: "五种爱语解析",
          content: [
            "**💬 肯定的言辞 (Words)**：赞美、鼓励、感谢的话语。",
            "**🕰️ 精心时刻 (Time)**：全神贯注的陪伴，没有手机干扰。",
            "**🎁 接受礼物 (Gifts)**：礼物代表的心意和思念，而非价格。",
            "**🛠️ 服务的行动 (Acts)**：用实际行动帮忙分担责任。",
            "**🤝 身体接触 (Touch)**：牵手、拥抱、亲吻等肢体接触。"
          ],
          image: loveImg,
          imageSide: 'left'
        }
      ],

      references: [
        { text: "Chapman, G. (1992). The Five Love Languages: How to Express Heartfelt Commitment to Your Mate." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "对我来说，什么更重要？", options: [{ text: "伴侣对我说“我爱你”", value: "words" }, { text: "伴侣给我一个温暖的拥抱", value: "touch" }] },
        { text: "当伴侣为我做些什么时，我感觉被爱？", options: [{ text: "他们帮我处理一件棘手的家务", value: "acts" }, { text: "他们送我一份精心挑选的礼物", value: "gifts" }] },
        { text: "我更喜欢哪种方式度过时光？", options: [{ text: "和伴侣进行一次不受打扰的深入交谈", value: "time" }, { text: "和伴侣一起参加我们都喜欢的活动", value: "time" }] },
        { text: "什么更能表达“我关心你”？", options: [{ text: "在我生病时，伴侣无微不至地照顾我", value: "acts" }, { text: "伴侣时常称赞我的优点", value: "words" }] },
        { text: "收到什么样的惊喜让我最开心？", options: [{ text: "一份意想不到的礼物", value: "gifts" }, { text: "伴侣在我疲惫时为我按摩", value: "touch" }] },
        { text: "我感到最被珍视的时刻是：", options: [{ text: "伴侣放下手机，专注地听我说话", value: "time" }, { text: "伴侣告诉我，他们为我感到骄傲", value: "words" }] },
        { text: "什么更能打动我？", options: [{ text: "伴侣在我忙碌时，主动帮我完成了任务", value: "acts" }, { text: "伴侣在我们散步时，自然地牵起我的手", value: "touch" }] },
        { text: "纪念日时，我更期待：", options: [{ text: "收到一份有特殊意义的礼物", value: "gifts" }, { text: "伴侣安排一次只属于我们两个人的特别约会", value: "time" }] },
        { text: "伴侣的哪种行为让我感到最安全？", options: [{ text: "他们用鼓励的话语支持我的梦想", value: "words" }, { text: "在我难过时，他们会抱着我，让我依靠", value: "touch" }] },
        { text: "什么更能体现伴侣的爱意？", options: [{ text: "他们记得并为我做我喜欢吃的东西", value: "acts" }, { text: "他们送我的礼物，总能送到我心坎里", value: "gifts" }] },
        { text: "我感到与伴侣最亲近的时刻是：", options: [{ text: "我们一起分享彼此的梦想和恐惧", value: "time" }, { text: "伴侣发信息告诉我，他们在想我", value: "words" }] },
        { text: "什么更能让我从糟糕的一天中恢复过来？", options: [{ text: "伴侣帮我把家里整理得井井有条", value: "acts" }, { text: "伴侣坐在我身边，轻轻地抚摸我的头发", value: "touch" }] },
        { text: "我更看重：", options: [{ text: "伴侣送的礼物所代表的心意", value: "gifts" }, { text: "伴侣愿意花时间陪伴我，即使什么都不做", value: "time" }] },
        { text: "什么更能让我感受到被爱？", options: [{ text: "伴侣对我外表或能力的赞美", value: "words" }, { text: "伴侣在我需要帮助时，二话不说就来帮忙", value: "acts" }] },
        { text: "我更喜欢：", options: [{ text: "和伴侣依偎在沙发上看电影", value: "touch" }, { text: "收到伴侣从旅行地带回来的小纪念品", value: "gifts" }] },
        { text: "对我来说，什么更能体现承诺？", options: [{ text: "伴侣愿意花时间去了解我的内心世界", value: "time" }, { text: "伴侣用温柔的语言肯定我们的关系", value: "words" }] },
        { text: "什么更能让我感到被支持？", options: [{ text: "在我面临重大任务前，伴侣帮我做好后勤准备", value: "acts" }, { text: "在我感到不安时，伴侣紧紧握住我的手", value: "touch" }] },
        { text: "我更喜欢哪种爱的表达？", options: [{ text: "收到一份能代表我们共同回忆的礼物", value: "gifts" }, { text: "伴侣为我写一封充满爱意的情书", value: "words" }] },
        { text: "什么更能让我感到满足？", options: [{ text: "和伴侣一起计划未来", value: "time" }, { text: "伴侣帮我处理我一直拖延的琐事", value: "acts" }] },
        { text: "在公共场合，什么更能让我感到被爱？", options: [{ text: "伴侣把手放在我的背上", value: "touch" }, { text: "伴侣在朋友面前骄傲地介绍我", value: "words" }] },
        { text: "我更欣赏伴侣的哪一点？", options: [{ text: "他们总能找到完美的礼物", value: "gifts" }, { text: "他们总是愿意为我服务", value: "acts" }] },
        { text: "什么更能让我感到温暖？", options: [{ text: "伴侣和我分享他们一天的经历", value: "time" }, { text: "伴侣在我哭泣时，给我一个肩膀依靠", value: "touch" }] },
        { text: "我更希望伴侣：", options: [{ text: "经常对我说一些欣赏和感谢的话", value: "words" }, { text: "为我做一些实际的事情来减轻我的负担", value: "acts" }] },
        { text: "什么更能代表爱？", options: [{ text: "一份有形的、可以珍藏的礼物", value: "gifts" }, { text: "一段无形的、可以回味的共处时光", value: "time" }] },
        { text: "我感到最被呵护的时刻是：", options: [{ text: "伴侣在我累的时候，让我先休息", value: "touch" }, { text: "伴侣帮我处理那些我不擅长的事情", value: "acts" }] },
        { text: "什么更能让我感到幸福？", options: [{ text: "伴侣记得我说过的话，并用言语回应我", value: "words" }, { text: "伴侣愿意陪我去做我喜欢但他们不一定喜欢的事", value: "time" }] },
        { text: "我更喜欢哪种告别方式？", options: [{ text: "一个深情的吻", value: "touch" }, { text: "一句“我爱你，今天会想你的”", value: "words" }] },
        { text: "什么更能体现伴侣的用心？", options: [{ text: "他们为我准备了一份惊喜礼物", value: "gifts" }, { text: "他们为我们的约会做了详细的计划", value: "time" }] },
        { text: "我更希望伴侣如何表达歉意？", options: [{ text: "用行动来弥补他们的过错", value: "acts" }, { text: "真诚地说“对不起”，并解释他们错在哪里", value: "words" }] },
        { text: "什么更能让我感受到爱意？", options: [{ text: "伴侣送我一件小礼物，只因为他们想到了我", value: "gifts" }, { text: "伴侣在看电视时，会把头靠在我的肩膀上", value: "touch" }] }
      ],
      // Paper B
      [
        { text: "什么更能让我感到被珍惜？", options: [{ text: "听到伴侣真诚地说“我爱你”", value: "words" }, { text: "在拥抱中感到被紧紧包裹", value: "touch" }] },
        { text: "哪一种更像爱？", options: [{ text: "伴侣主动承担我最头疼的家务", value: "acts" }, { text: "伴侣送来一份用心挑选的礼物", value: "gifts" }] },
        { text: "我理想的相处时光是：", options: [{ text: "不被打扰地深聊彼此的想法", value: "time" }, { text: "一起参与一项我们都喜欢的活动", value: "time" }] },
        { text: "什么更能让我感到被照顾？", options: [{ text: "生病时对方细致入微地照料我", value: "acts" }, { text: "对方经常用温暖的话鼓励我", value: "words" }] },
        { text: "收到什么会让我心花怒放？", options: [{ text: "意外的惊喜礼物", value: "gifts" }, { text: "疲惫时被轻柔地按摩放松", value: "touch" }] },
        { text: "何时我最感到被尊重？", options: [{ text: "对方放下手机专注听我说话", value: "time" }, { text: "对方口头表达认可与骄傲", value: "words" }] },
        { text: "什么更让我感动？", options: [{ text: "我忙时对方主动把任务做完", value: "acts" }, { text: "散步时被自然地牵起手", value: "touch" }] },
        { text: "纪念日更想要：", options: [{ text: "一件有纪念意义的小物", value: "gifts" }, { text: "一次只属于我们俩的专属约会", value: "time" }] },
        { text: "哪种行为让我更安心？", options: [{ text: "对方用言语支持我的理想", value: "words" }, { text: "难过时对方用拥抱给予依靠", value: "touch" }] },
        { text: "何者更像“被爱”？", options: [{ text: "对方记住并做我爱吃的", value: "acts" }, { text: "礼物总能精准击中我的喜好", value: "gifts" }] },
        { text: "我与对方最靠近的时刻是：", options: [{ text: "我们分享彼此的梦想与担忧", value: "time" }, { text: "收到一句关切的讯息：我在想你", value: "words" }] },
        { text: "结束糟糕的一天，我更需要：", options: [{ text: "家务与杂事被贴心处理好", value: "acts" }, { text: "有人坐在旁边轻抚我的发梢", value: "touch" }] },
        { text: "我更看重哪一个？", options: [{ text: "礼物背后的心意", value: "gifts" }, { text: "安静专注地陪伴", value: "time" }] },
        { text: "哪种更能表达爱？", options: [{ text: "真诚的赞美与肯定", value: "words" }, { text: "需要时立刻伸出援手", value: "acts" }] },
        { text: "我更喜欢的相处方式：", options: [{ text: "依偎在沙发上一起看剧", value: "touch" }, { text: "收到旅行带回的贴心纪念", value: "gifts" }] },
        { text: "承诺的最好证明是：", options: [{ text: "愿意理解我的内心与故事", value: "time" }, { text: "用言语肯定我们的关系", value: "words" }] },
        { text: "最能给我支持的是：", options: [{ text: "大事前替我安排好一切", value: "acts" }, { text: "不安时有人握住我的手", value: "touch" }] },
        { text: "爱的表达我更偏好：", options: [{ text: "代表共同回忆的小礼物", value: "gifts" }, { text: "一封发自内心的情书", value: "words" }] },
        { text: "让我满足的是：", options: [{ text: "与伴侣一起规划愿景", value: "time" }, { text: "有人替我处理拖延的琐事", value: "acts" }] },
        { text: "在公开场合，我更喜欢：", options: [{ text: "被温柔地搂肩或牵手", value: "touch" }, { text: "被自豪地介绍给朋友们", value: "words" }] },
        { text: "我更欣赏伴侣哪点？", options: [{ text: "送礼物很懂我的心思", value: "gifts" }, { text: "愿意主动为我服务", value: "acts" }] },
        { text: "什么令我倍感温暖？", options: [{ text: "分享彼此一天的见闻", value: "time" }, { text: "在我落泪时给我依靠", value: "touch" }] },
        { text: "我更希望伴侣：", options: [{ text: "常表达感谢与欣赏", value: "words" }, { text: "做实事减轻我的负担", value: "acts" }] },
        { text: "爱更像：", options: [{ text: "可保存的礼物象征", value: "gifts" }, { text: "可回味的相处时光", value: "time" }] },
        { text: "我被呵护的感觉来自：", options: [{ text: "疲惫时先被安顿下来", value: "touch" }, { "text": "不擅长的事有人代劳", "value": "acts" }] },
        { text: "真正让我幸福的是：", options: [{ "text": "对方记得我的话并回应", "value": "words" }, { "text": "愿意陪我做我所爱之事", "value": "time" }] },
        { text: "告别时我更喜欢：", options: [{ "text": "深情的拥吻", "value": "touch" }, { "text": "一句温柔的想念与叮嘱", "value": "words" }] },
        { text: "“用心”的体现是：", options: [{ "text": "准备一份代表心思的礼物", "value": "gifts" }, { "text": "把约会细节安排得妥帖", "value": "time" }] },
        { text: "当对方需要道歉时，我更希望：", options: [{ "text": "看到实际的补救行动", "value": "acts" }, { "text": "听到坦率而完整的歉意", "value": "words" }] },
        { text: "在小日常中，我更能感到爱的是：", options: [{ "text": "想到我就带回一份小礼物", "value": "gifts" }, { "text": "看电视时依偎在我身旁", "value": "touch" }] }
      ],
      // Paper C
      [
        { text: "什么最能让我笃定被爱？", options: [{ text: "清晰而有力量的告白与称赞", value: "words" }, { text: "一个真实而长久的拥抱", value: "touch" }] },
        { text: "在日常里，我更被打动的是：", options: [{ text: "对方替我完成困难家务", value: "acts" }, { text: "对方送上贴合心意的礼物", value: "gifts" }] },
        { text: "我最享受的陪伴是：", options: [{ text: "深入交流、彼此倾听", value: "time" }, { text: "一起做我们都热爱的事", value: "time" }] },
        { text: "何者更能让我感到被理解？", options: [{ text: "生病时被细心照料", value: "acts" }, { text: "经常听见温柔而肯定的话语", value: "words" }] },
        { text: "哪种惊喜更让我心动？", options: [{ text: "不经意却用心的礼物", value: "gifts" }, { text: "在疲惫时得到放松的触碰", value: "touch" }] },
        { text: "我觉得被重视当：", options: [{ text: "对方专注听我说而不分心", value: "time" }, { text: "对方公开表达对我的赞美", value: "words" }] },
        { text: "什么让我觉得对方很贴心？", options: [{ text: "忙碌时主动替我完成事务", value: "acts" }, { text: "出门时自然地牵起我的手", value: "touch" }] },
        { text: "重要日子里我更期待：", options: [{ text: "一件承载回忆的小礼物", value: "gifts" }, { text: "一次只属于我们的高质量约会", value: "time" }] },
        { text: "我会更有安全感当：", options: [{ text: "听到对方对我的肯定承诺", value: "words" }, { text: "难过时被拥抱与安抚", value: "touch" }] },
        { text: "哪一个更能说明爱？", options: [{ text: "做我喜欢吃的那道菜", value: "acts" }, { text: "礼物总能精准表达心意", value: "gifts" }] },
        { text: "我与伴侣最贴近的瞬间是：", options: [{ text: "一起谈心直到深夜", value: "time" }, { text: "收到一句温暖的惦念讯息", value: "words" }] },
        { text: "当我情绪低落时：", options: [{ text: "有人把家务和杂事先处理好", value: "acts" }, { text: "有人坐在身边轻抚我的手臂", value: "touch" }] },
        { text: "我更珍视：", options: [{ text: "礼物背后藏着的用心", value: "gifts" }, { text: "全然的相伴与专注", value: "time" }] },
        { text: "更能让我感到被爱的是：", options: [{ text: "被真诚称赞与认可", value: "words" }, { text: "需要时立刻得到帮助", value: "acts" }] },
        { text: "我喜欢的亲密瞬间：", options: [{ text: "沙发上彼此依偎", value: "touch" }, { text: "从旅途中带来的心意礼物", value: "gifts" }] },
        { text: "承诺在我心中更像：", options: [{ text: "花时间了解我的世界", value: "time" }, { text: "用语言确认我们的关系", value: "words" }] },
        { text: "支持感来源于：", options: [{ text: "大项目前有人替我准备细节", value: "acts" }, { text: "焦虑时被握住的那只手", value: "touch" }] },
        { text: "爱的表达更合我心：", options: [{ text: "象征我们回忆的小礼物", value: "gifts" }, { text: "一封真挚动人的情书", value: "words" }] },
        { text: "满足感来自：", options: [{ text: "共同讨论并描绘未来蓝图", value: "time" }, { text: "有人替我解决拖延已久的小事", value: "acts" }] },
        { text: "在人群中我更喜欢：", options: [{ text: "被温柔地牵手或拥抱", value: "touch" }, { text: "被骄傲地介绍给他人", value: "words" }] },
        { text: "我欣赏伴侣的点是：", options: [{ text: "送礼很会抓住我的喜好", value: "gifts" }, { text: "愿意付出实际行动服务我", value: "acts" }] },
        { text: "令我感到温暖的是：", options: [{ text: "晚饭后散步分享一天", value: "time" }, { text: "难过时靠在对方肩上", value: "touch" }] },
        { text: "我更希望伴侣经常：", options: [{ text: "表达感谢和鼓励", value: "words" }, { text: "主动做事减轻我的压力", value: "acts" }] },
        { text: "爱更像什么？", options: [{ text: "可珍藏的实物礼物", value: "gifts" }, { text: "可反复回味的共处时光", value: "time" }] },
        { text: "被呵护的感觉是：", options: [{ text: "累时先被安顿与拥抱", value: "touch" }, { text: "不擅长的事有人代劳", "value": "acts" }] },
        { text: "幸福感来自：", options: [{ text: "对方记得并回应我说过的话", value: "words" }, { text: "愿意陪我做我热爱的事", value: "time" }] },
        { text: "道别时我更喜欢：", options: [{ text: "一个温柔而确定的吻", value: "touch" }, { text: "一句真诚的思念与祝福", value: "words" }] },
        { text: "“用心”的体现是：", options: [{ text: "准备一份代表心思的礼物", value: "gifts" }, { text: "把约会细节安排得妥帖", value: "time" }] },
        { text: "当对方需要道歉时，我更希望：", options: [{ text: "看到实际的补救行动", value: "acts" }, { text: "听到坦率而完整的歉意", value: "words" }] },
        { text: "在小日常中，我更能感到爱的是：", options: [{ text: "想到我就带回一份小礼物", value: "gifts" }, { text: "看电视时依偎在我身旁", value: "touch" }] }
      ]
    ],

    results: {
      "words": { type: "Words", title: "肯定的言辞 (Words)", description: "言语是您感受爱的核心通道。真诚的赞美、鼓励和“我爱你”能让您感到深深的满足。", suggestion: "告诉伴侣您需要听到他们的肯定。", color: "#2196F3" },
      "acts": { type: "Acts", title: "服务的行动 (Acts)", description: "“行动胜于雄辩”。您认为爱体现在帮您分担责任、解决问题上。", suggestion: "让伴侣知道，细微的帮助对您意义重大。", color: "#4CAF50" },
      "gifts": { type: "Gifts", title: "接受礼物 (Gifts)", description: "礼物代表了心意和思念。您看重的不是价格，而是对方在挑选时想着您的那份心。", suggestion: "珍视礼物背后的象征意义。", color: "#E91E63" },
      "time": { type: "Time", title: "精心时刻 (Time)", description: "全神贯注的陪伴胜过一切。您渴望的是不被干扰的、彼此连接的时光。", suggestion: "规划定期的约会之夜。", color: "#FFC107" },
      "touch": { type: "Touch", title: "身体接触 (Touch)", description: "牵手、拥抱和亲吻是您安全感的来源。身体的距离对您来说就是心的距离。", suggestion: "主动表达对拥抱的渴望。", color: "#9C27B0" }
    }
  },
 // ----------------------------------------------------------------
  // 10. DASS-35 综合情绪健康自评 (完整版)
  // ----------------------------------------------------------------
  {
    id: '10',
    slug: 'dass35',
    title: 'DASS-35 综合情绪健康自评',
    description: '专业的心理健康筛查工具。快速评估您最近一周的压力、焦虑和抑郁水平。',
    topic: 'Emotion',
    duration: '约 6-10 分钟',
    image: dassImg,
    heroImage: dassHeroImg,

    meta: {
      createdAt: "2024 医疗标准版",
      author: "心理测试实验室专家组",
      participants: 28900,
      rating: 4.8,
      disclaimer: "本测试结果仅供参考，若分数过高，请务必寻求专业医生或心理咨询师的帮助。",
      
      richIntro: [
        {
          title: "什么是 DASS 量表？",
          content: [
            "DASS（Depression Anxiety Stress Scales）是目前国际上广泛使用的心理健康评估工具。它能有效区分三种负面情绪状态：",
            "**🔵 抑郁 (Depression)**：情绪低落、悲观、缺乏动力。",
            "**🔴 焦虑 (Anxiety)**：生理唤醒、紧张、恐慌。",
            "**🟢 压力 (Stress)**：易怒、急躁、难以放松。",
            "通过这个测试，您可以像体检一样，快速了解自己当前的心灵状态。"
          ],
          image: dassImg,
          imageSide: 'right'
        }
      ],

      references: [
        { text: "Lovibond, S. H., & Lovibond, P. F. (1995). Manual for the Depression Anxiety Stress Scales." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "我发现很难让自己平静下来。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我对未来感到没有希望。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我发现自己很容易不耐烦。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我感到口干舌燥。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我觉得生活没什么意义。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我反应过度。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我感到身体颤抖（例如：手抖）。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我对任何事情都提不起劲。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我发现自己很难放松。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我感到惊慌失措。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我觉得自己没什么价值。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我感觉自己消耗了很多精力。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我感到心跳加速，即使没有运动。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我对生活毫无乐趣。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我很容易被别人的行为打扰。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我感到害怕，但又说不出原因。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我很难投入到一件事情中。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我感到自己快要崩溃了。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我为一些小事而感到烦恼。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我似乎对什么都失去了热情。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我对他人的错误缺乏耐心。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我感到头晕或昏厥。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我无法体验到任何快乐或满足感。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我似乎无法容忍任何打断我工作的事情。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我担心某些场合会让我出丑。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我感觉自己像一个失败者。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "由于紧张，我无法完成任务。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我对生活感到失望。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我对自己很挑剔。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我担心自己的身体状况（如心脏病）。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我很难做出决定。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我感觉神经紧张。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我担心会失去控制或做出疯狂举动。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我很难产生积极的情绪。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] },
        { text: "我发现自己坐立不安。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { "text": "经常", "value": "2" }, { "text": "总是", "value": "3" }] }
      ],
      // Paper B
      [
        { text: "我很难让身体和情绪放松下来。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我对未来的期待感很弱。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我经常容易急躁或易怒。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我常感到喉咙或口腔发干。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我觉得生活缺少目的和方向。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我对小事反应过大。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我出现过明显的发抖或颤动。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我对日常活动提不起兴趣。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "放松对我来说并不容易。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我曾突然感到极度惊慌。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我常觉得自己不够好或没有价值。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我感觉精力被迅速消耗。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "即使静坐，我也会心悸或心跳加快。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我几乎感受不到快乐。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "别人一些小举动就会让我心烦。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我会无缘无故地感到害怕。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我很难专注在某件事情上。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我感觉压力大得让我快撑不住。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "一些细小的事情也会让我紧张不安。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我对原本喜欢的事物失去了兴趣。", options: [{ text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我对他人的错误很难保持宽容。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我偶尔会感到头晕或恍惚。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我很难从任何事情中获得愉悦。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "任何打断都会让我烦躁不安。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我害怕在公共场合出洋相。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我常把自己看作失败者或不合格的人。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "紧张常使我难以把事情完成。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我对生活总体感到失落。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我常常苛求自己、吹毛求疵。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我担忧身体出现严重问题（如心脏不适）。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我做决定时经常拿不定主意。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我常感到神经紧绷、难以松弛。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { text: "总是", value: "3" }] },
        { text: "我担心自己会情绪失控或做出不理智的事。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我很难体验到轻松愉快的心情。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我常坐立不安，难以保持安静。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] }
      ],
      // Paper C
      [
        { text: "我难以让思绪慢下来并获得内心平静。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我常常对未来感到灰心或悲观。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我对周围人和事容易失去耐性。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "经常感觉口渴或喉咙干，尤其紧张时。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我时常体会不到生活的意义。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我的情绪反应经常比事情本身更强烈。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我会出现肌肉发抖或手心颤动的情况。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "曾经带给我快乐的事情，如今很难再提起兴趣。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我不容易“松下来”，总是绷着一根弦。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我会突然陷入强烈的恐慌或惊惶中。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我经常否定自我，觉得自己没有价值。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我总感觉体力或精神被过度消耗。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "没有明显原因时也会心跳加速或胸闷。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "对多数事情我都体会不到乐趣或满足。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "别人的一些行为会轻易打扰到我。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我会无缘由地感到紧张或害怕。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "专注或沉浸在一件事上对我很困难。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我会觉得自己濒临崩溃边缘。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "一些小插曲也会让我不安或烦躁。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我对事物普遍缺少热情和动力。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我对别人犯错很难保持耐心与平和。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我会有目眩、发虚或要晕倒的感觉。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我几乎感受不到任何快乐或满足。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "被打断时我会明显烦躁且难以恢复状态。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我担心在人前失态或显得很笨拙。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我常把自己看作失败者或不合格的人。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "紧张会让我在任务上频频受阻。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "总体而言，我对生活感到沮丧或失望。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我经常对自己过于苛刻或批评。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我会担心自己的健康出现严重问题。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我做决定时经常拿不定主意。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我的神经处在紧绷状态，难以放松下来。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我担心自己会情绪失控或做出不理智的事。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我很难体验到轻松愉快的心情。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] },
        { text: "我经常坐立难安，无法静坐很久。", options: [ { text: "从不", value: "0" }, { text: "有时", value: "1" }, { text: "经常", value: "2" }, { "text": "总是", "value": "3" }] }
      ]
    ],

    results: {
      "depressive": {
        type: "Depressive",
        title: "情绪低落倾向",
        description: "您的结果表明，您近期可能经历了较多与情绪低落、失去兴趣和活力相关的感受。这不代表您患有抑郁症，而是提示您当前的情绪状态需要关注。",
        suggestion: "请温柔地对待自己。尝试与信任的朋友聊天，进行温和运动。如果这些感受持续存在并严重影响生活，请务必寻求专业帮助。",
        color: "#3F51B5" // 深蓝
      },
      "anxious": {
        type: "Anxious",
        title: "焦虑不安倾向",
        description: "您的结果表明，您近期可能经历了较多与紧张、担忧和生理唤醒（如心跳加速）相关的感受。提示您当前的焦虑水平可能偏高。",
        suggestion: "您的身体可能处于“战斗或逃跑”状态。学习深呼吸练习（吸气4秒，呼气8秒）对缓解焦虑非常有帮助。如果难以应对，请咨询专业人士。",
        color: "#FF9800" // 橙色
      },
      "stressful": {
        type: "Stressful",
        title: "压力紧张倾向",
        description: "您的结果表明，您近期可能处于较高的压力水平下。您可能感觉精疲力尽、易怒、难以放松，觉得自己一直处于“待命”状态。",
        suggestion: "休息是“充电”而非“浪费时间”。尝试找出压力源，确保每天有15分钟做自己真正喜欢的事。如果压力持续过高，请寻求专业支持。",
        color: "#F44336" // 红色
      }
    }
  },
  // ----------------------------------------------------------------
  // 11. Color Test 色彩心理性格测试 (完整版)
  // ----------------------------------------------------------------
  {
    id: '11',
    slug: 'color',
    title: '色彩心理性格测试',
    description: '直觉测试。你选择的颜色，暴露了你当下的潜意识状态和真实性格。',
    topic: 'Fun',
    duration: '约 3-5 分钟',
    image: colorImg,

    meta: {
      createdAt: "2024 趣味版",
      author: "心理测试实验室专家组",
      participants: 68200,
      rating: 4.7,
      disclaimer: "本测试基于色彩心理学原理，结果仅供趣味参考。",
      
      richIntro: [
        {
          title: "色彩与潜意识",
          content: [
            "色彩不仅仅是视觉的体验，更是潜意识的语言。瑞士心理学家卡尔·荣格曾说：'色彩是潜意识的母语。'",
            "你对某种颜色的偏好，往往投射了你当下的情绪状态、性格特质以及内心深处的渴望。通过这个直觉测试，我们将解码你的色彩人格。"
          ],
          image: colorImg,
          imageSide: 'left'
        },
        {
          title: "四色性格模型",
          content: [
            "**🔴 红色性格**：热情、行动、充满力量。",
            "**🟡 黄色性格**：乐观、创意、充满希望。",
            "**🔵 蓝色性格**：冷静、理智、追求深度。",
            "**🟢 绿色性格**：和谐、成长、充满生机。"
          ],
          image: colorImg,
          imageSide: 'right'
        }
      ],

      references: [
        { text: "Lüscher, M. (1969). The Lüscher Color Test." },
        { text: "Birren, F. (1950). Color Psychology and Color Therapy." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "当想到“激情”这个词，你脑海中浮现的第一种颜色是？", options: [ { text: "红色", value: "red" }, { text: "黄色", value: "yellow" }, { text: "蓝色", value: "blue" }, { text: "绿色", value: "green" } ] },
        { text: "你需要一个空间来冷静思考，你会选择什么色调的房间？", options: [ { text: "冷静深邃的蓝色调", value: "blue" }, { text: "宁静自然的绿色调", value: "green" }, { text: "温暖活力的橙黄色调", value: "yellow" }, { text: "热情饱满的红色调", value: "red" } ] },
        { text: "如果你要为一场重要演讲选择一件外套，你会选哪种颜色？", options: [ { text: "自信的红色", value: "red" }, { text: "明亮的黄色", value: "yellow" }, { text: "沉稳的蓝色", value: "blue" }, { text: "平和的绿色", value: "green" } ] },
        { text: "你更喜欢哪种海报设计？", options: [ { text: "具有强烈对比和大胆配色", value: "red" }, { text: "明快活泼、富有创意", value: "yellow" }, { text: "简洁理性、留白适度", value: "blue" }, { text: "柔和协调、自然舒适", value: "green" } ] },
        { text: "在紧急情况下，你更可能表现为：", options: [ { text: "迅速决策并采取行动", value: "red" }, { text: "保持乐观并鼓舞他人", value: "yellow" }, { text: "冷静分析并制定方案", value: "blue" }, { text: "安抚情绪并维持秩序", value: "green" } ] },
        { text: "你最喜欢的自然景象是：", options: [ { text: "落日余晖下的峭壁", value: "red" }, { text: "金色麦田的微风", value: "yellow" }, { text: "静谧深海的波纹", value: "blue" }, { text: "森林里阳光穿过树梢", value: "green" } ] },
        { text: "当你完成一项困难任务时，你希望别人给你的反馈是：", options: [ { text: "直接而热烈的称赞", value: "red" }, { text: "开心轻松地庆祝", value: "yellow" }, { text: "充分认可细节与专业", value: "blue" }, { text: "温和肯定并表达支持", value: "green" } ] },
        { text: "以下哪种工作方式更适合你？", options: [ { text: "目标导向、讲求效率", value: "red" }, { text: "灵活多变、创意优先", value: "yellow" }, { text: "稳定规范、流程清晰", value: "blue" }, { text: "协作互助、氛围友好", value: "green" } ] },
        { text: "在团体讨论中，你更常扮演：", options: [ { text: "推动决策的人", value: "red" }, { text: "活跃气氛的人", value: "yellow" }, { text: "提供事实与逻辑的人", value: "blue" }, { text: "调解和平衡的人", value: "green" } ] },
        { text: "你的理想假期更接近：", options: [ { text: "极限运动或挑战项目", value: "red" }, { text: "探索新奇城市和活动", value: "yellow" }, { text: "安静的书店与美术馆", value: "blue" }, { text: "自然徒步与康养休闲", value: "green" } ] },
        { text: "你更看重朋友的特质是：", options: [ { text: "勇敢果断", value: "red" }, { text: "乐观幽默", value: "yellow" }, { text: "可靠理性", value: "blue" }, { text: "体贴包容", value: "green" } ] },
        { text: "面对压力你的第一反应是：", options: [ { text: "抓紧推进、迎头解决", value: "red" }, { text: "找人聊聊、转换心情", value: "yellow" }, { text: "列出问题、逐一分解", value: "blue" }, { text: "调整节奏、先稳住情绪", value: "green" } ] },
        { text: "你最喜欢的饮品更可能是：", options: [ { text: "浓烈提神的", value: "red" }, { text: "清爽甜润的", value: "yellow" }, { text: "纯净清冽的", value: "blue" }, { text: "自然草本的", value: "green" } ] },
        { text: "如果你的房间只能有一幅画，你更倾向于：", options: [ { text: "抽象、强烈的色块", value: "red" }, { text: "活泼、明亮的插画", value: "yellow" }, { text: "极简、冷静的线条", value: "blue" }, { text: "自然、和谐的风景", value: "green" } ] },
        { text: "你对“规则”的态度更接近：", options: [ { text: "可以打破以达成目标", value: "red" }, { text: "灵活调整以便创新", value: "yellow" }, { text: "遵循规则保障秩序", value: "blue" }, { text: "在尊重中寻找平衡", value: "green" } ] },
        { text: "你会更快被哪种内容吸引？", options: [ { text: "刺激、竞争、胜负", value: "red" }, { text: "新奇、点子、趣味", value: "yellow" }, { text: "知识、数据、逻辑", value: "blue" }, { text: "情感、关系、关怀", value: "green" } ] },
        { text: "你对“失败”的看法是：", options: [ { text: "快速复盘，继续冲", value: "red" }, { text: "下一次会更好", value: "yellow" }, { text: "找到原因再行动", value: "blue" }, { text: "调节心态稳步推进", value: "green" } ] },
        { text: "你的学习方式更像：", options: [ { text: "做中学、边干边悟", value: "red" }, { text: "发散思考、类比联想", value: "yellow" }, { text: "系统学习、结构化吸收", value: "blue" }, { text: "在交流中吸收并内化", value: "green" } ] },
        { text: "你收到一份复杂任务，第一步会：", options: [ { text: "先把能做的部分快速做起来", value: "red" }, { text: "找灵感，先构想有趣的方法", value: "yellow" }, { text: "拆解任务，明确优先级与时间线", value: "blue" }, { text: "沟通协作，协调资源和支持", value: "green" } ] },
        { text: "你更向往的团队文化是：", options: [ { text: "高效执行、结果导向", value: "red" }, { text: "开放多元、创意无限", value: "yellow" }, { text: "严谨专业、标准清晰", value: "blue" }, { text: "互助信任、以人为本", value: "green" } ] },
        { text: "当出现分歧时，你更可能：", options: [ { text: "据理力争、捍卫立场", value: "red" }, { text: "机智调侃、化解尴尬", value: "yellow" }, { text: "拿出数据、佐证观点", value: "blue" }, { text: "倾听各方、寻找折中", value: "green" } ] },
        { text: "你最欣赏的故事主角是：", options: [ { text: "勇敢果敢的斗士", value: "red" }, { text: "聪明幽默的冒险家", value: "yellow" }, { text: "冷静睿智的策士", value: "blue" }, { text: "温暖仁慈的守护者", value: "green" } ] },
        { text: "你认为“成功”的关键更是：", options: [ { text: "敢闯敢干的魄力", value: "red" }, { text: "创意灵感与人缘", value: "yellow" }, { text: "系统能力与纪律", value: "blue" }, { text: "长期主义与关系", value: "green" } ] },
        { text: "如果把你比作一种天气，你更像：", options: [ { text: "烈日当空", value: "red" }, { text: "阳光明媚", value: "yellow" }, { text: "晴空万里", value: "blue" }, { text: "和风细雨", value: "green" } ] },
        { text: "你的手机壁纸更可能是：", options: [ { text: "高饱和、强对比的视觉", value: "red" }, { text: "明亮、可爱、有趣的图案", value: "yellow" }, { text: "极简、留白的几何或照片", value: "blue" }, { text: "植物、自然、疗愈系风景", value: "green" } ] }
      ],
      // Paper B
      [
        { text: "你更喜欢哪种运动？", options: [ { text: "竞争性强的对抗运动", value: "red" }, { text: "趣味性强、氛围轻松", value: "yellow" }, { text: "需要策略与配合的项目", value: "blue" }, { text: "节奏平和、注重身心平衡", value: "green" } ] },
        { text: "你做选择时更依靠：", options: [ { text: "直觉与胆识", value: "red" }, { text: "灵感与想象", value: "yellow" }, { text: "数据与分析", value: "blue" }, { text: "价值观与人际和谐", value: "green" } ] },
        { text: "你最希望被别人形容为：", options: [ { text: "有冲劲", value: "red" }, { text: "有创意", value: "yellow" }, { text: "很靠谱", value: "blue" }, { text: "很温暖", value: "green" } ] },
        { text: "你更偏好的办公桌风格：", options: [ { text: "醒目配色，充满能量", value: "red" }, { text: "活泼元素，灵感多多", value: "yellow" }, { text: "整洁有序，工具齐全", value: "blue" }, { text: "绿植点缀，自然舒适", value: "green" } ] },
        { text: "你收到一个陌生邀请，你会：", options: [ { text: "直接答应，边做边看", value: "red" }, { text: "先了解亮点，有趣就去", value: "yellow" }, { text: "核实信息，评估价值", value: "blue" }, { text: "确认是否合适自己的节奏", value: "green" } ] },
        { text: "哪类书更吸引你？", options: [ { text: "商业、战术、人物传记", value: "red" }, { text: "创意、旅行、生活方式", value: "yellow" }, { text: "科普、历史、方法论", value: "blue" }, { text: "心理、关系、治愈故事", value: "green" } ] },
        { text: "你喜欢的配饰更可能是：", options: [ { text: "高调、有存在感", value: "red" }, { text: "可爱、有趣味点", value: "yellow" }, { text: "极简、功能优先", value: "blue" }, { text: "自然材质、亲肤舒适", value: "green" } ] },
        { text: "团队遇到瓶颈时，你常做的是：", options: [ { text: "施压推进，打破僵局", value: "red" }, { text: "换个方向，制造新鲜感", value: "yellow" }, { text: "找根因，优化流程", value: "blue" }, { text: "激励支持，稳定军心", value: "green" } ] },
        { text: "你更看重的生活状态：", options: [ { text: "高目标、高产出", value: "red" }, { text: "有趣、有活力", value: "yellow" }, { text: "清晰、可控", value: "blue" }, { text: "平衡、可持续", value: "green" } ] },
        { text: "你更偏好的社交活动：", options: [ { text: "竞技类、对抗类活动", value: "red" }, { text: "派对、桌游、新奇体验", value: "yellow" }, { text: "沙龙分享、读书会", value: "blue" }, { text: "野餐、露营、轻社交", value: "green" } ] },
        { text: "你最不能接受的合作伙伴是：", options: [ { text: "拖延、效率低", value: "red" }, { text: "消极、缺乏热情", value: "yellow" }, { text: "随意、缺乏纪律", value: "blue" }, { text: "自我中心、不体谅人", value: "green" } ] },
        { text: "遇到好消息时，你通常会：", options: [ { text: "立刻分享并庆祝", value: "yellow" }, { text: "先制定下一步目标", value: "red" }, { text: "记录经验，整理方法", value: "blue" }, { text: "感谢团队，肯定支持者", value: "green" } ] },
        { text: "对你来说，“家的颜色”更应该：", options: [ { text: "热烈，有生命力", value: "red" }, { text: "明亮，有阳光感", value: "yellow" }, { text: "克制，有秩序", value: "blue" }, { text: "柔和，有疗愈感", value: "green" } ] },
        { text: "朋友评价你更常用：", options: [ { text: "“冲！”", value: "red" }, { text: "“有趣！”", value: "yellow" }, { text: "“靠谱！”", value: "blue" }, { text: "“贴心！”", value: "green" } ] },
        { text: "你更看重职业发展的哪一面：", options: [ { text: "影响力与成绩", value: "red" }, { text: "新鲜感与舞台", value: "yellow" }, { text: "专业度与稳定性", value: "blue" }, { text: "关系网络与长期协作", value: "green" } ] },
        { text: "你对“仪式感”的看法：", options: [ { text: "有冲劲的开场最重要", value: "red" }, { text: "有趣的元素最关键", value: "yellow" }, { text: "流程清楚不出错最重要", value: "blue" }, { text: "让大家都舒服才是关键", value: "green" } ] },
        { text: "看到别人成功，你更会：", options: [ { text: "被激发斗志，立刻行动", value: "red" }, { text: "替他开心，找机会合作", value: "yellow" }, { text: "研究他的方法，总结复用", value: "blue" }, { text: "表达祝贺，维系关系", value: "green" } ] },
        { text: "你面对变化的态度：", options: [ { text: "敢于试错，快速迭代", value: "red" }, { text: "拥抱变化，玩出花样", value: "yellow" }, { text: "审慎评估，有章可循", value: "blue" }, { text: "留有人性化空间，平稳过渡", value: "green" } ] },
        { text: "你更喜欢的学习氛围：", options: [ { text: "有竞争、有目标", value: "red" }, { text: "轻松、有互动", value: "yellow" }, { text: "安静、有秩序", value: "blue" }, { text: "互助、可交流", value: "green" } ] },
        { text: "你更容易被哪类广告打动：", options: [ { text: "燃、热血、刺激", value: "red" }, { text: "欢乐、趣味、创意", value: "yellow" }, { text: "专业、数据、权威背书", value: "blue" }, { text: "温暖、人情、共鸣", value: "green" } ] },
        { text: "你更愿意把时间花在：", options: [ { text: "实现短期突破", value: "red" }, { text: "体验新鲜事物", value: "yellow" }, { text: "打磨长期能力", value: "blue" }, { text: "陪伴与联结", value: "green" } ] },
        { text: "你更喜欢的穿衣风格：", options: [ { text: "强势利落", value: "red" }, { text: "明亮活泼", value: "yellow" }, { text: "简洁理性", value: "blue" }, { text: "自然舒适", value: "green" } ] },
        { text: "你觉得更重要的沟通方式：", options: [ { text: "直奔主题", value: "red" }, { text: "轻松幽默", value: "yellow" }, { text: "条理清晰", value: "blue" }, { text: "共情理解", value: "green" } ] },
        { text: "你对“完美”的理解更接近：", options: [ { text: "结果漂亮就行", value: "red" }, { text: "过程好玩最重要", value: "yellow" }, { text: "过程与结果都要可复盘", value: "blue" }, { text: "让人愉悦且可持续", value: "green" } ] }
      ],
      // Paper C
      [
        { text: "你更倾向于哪种目标设定？", options: [ { text: "大刀阔斧，短期见效", value: "red" }, { text: "多线并行，灵感驱动", value: "yellow" }, { text: "SMART原理，稳步推进", value: "blue" }, { text: "兼顾身心，长期平衡", value: "green" } ] },
        { text: "在陌生社交场合，你更可能：", options: [ { text: "主动出击，迅速破冰", value: "red" }, { text: "从话题切入，活络气氛", value: "yellow" }, { text: "先观察，再理性互动", value: "blue" }, { text: "先照顾熟悉的伙伴", value: "green" } ] },
        { text: "你对“失败者逆袭”的电影更看重：", options: [ { text: "燃点与翻盘", value: "red" }, { text: "创意与巧思", value: "yellow" }, { text: "逻辑与细节", value: "blue" }, { text: "情感与关系", value: "green" } ] },
        { text: "你的闹钟铃声更可能是：", options: [ { text: "强节奏、瞬间清醒", value: "red" }, { text: "轻快旋律、好心情", value: "yellow" }, { text: "柔和提示、逐步唤醒", value: "blue" }, { text: "自然声，如风与鸟鸣", value: "green" } ] },
        { text: "你更愿意参加的课程是：", options: [ { text: "领导力训练营", value: "red" }, { text: "创意思维工作坊", value: "yellow" }, { text: "系统化方法论课程", value: "blue" }, { text: "人际沟通与情绪课", value: "green" } ] },
        { text: "面对复杂项目的排期，你会：", options: [ { text: "抢占先机，定下强势里程碑", value: "red" }, { text: "保留灵活，留给灵感空间", value: "yellow" }, { text: "严谨拆分，甘特图推进", value: "blue" }, { text: "综合各方感受，协调节奏", value: "green" } ] },
        { text: "收到负面反馈时，你更可能：", options: [ { text: "据理力争，捍卫成果", value: "red" }, { text: "先幽默化解，再改进", value: "yellow" }, { text: "记录要点，制定改进计划", value: "blue" }, { text: "关注感受，争取理解与支持", value: "green" } ] },
        { text: "你更常用的备忘工具：", options: [ { text: "任务清单App + 提醒", value: "blue" }, { text: "便利贴 + 灵感笔记", value: "yellow" }, { text: "纸笔手帐 + 番茄钟", value: "green" }, { text: "日历里直接锁定时间块", value: "red" } ] },
        { text: "你更愿意投入时间提升：", options: [ { text: "谈判与影响力", value: "red" }, { text: "创意表达与内容力", value: "yellow" }, { text: "数据分析与结构化", value: "blue" }, { text: "共情力与关系经营", value: "green" } ] },
        { text: "你对“安全感”的来源是：", options: [ { text: "掌控局面", value: "red" }, { text: "选择自由", value: "yellow" }, { text: "信息透明", value: "blue" }, { text: "人际支持", value: "green" } ] },
        { text: "你更容易被哪种城市吸引：", options: [ { text: "节奏快、充满机会", value: "red" }, { text: "文化多元、活动丰富", value: "yellow" }, { text: "秩序井然、公共服务好", value: "blue" }, { text: "绿色宜居、社区友好", value: "green" } ] },
        { text: "你更想先升级的生活环节：", options: [ { text: "效率系统（时间/工具）", value: "blue" }, { text: "兴趣体验（旅行/课程）", value: "yellow" }, { text: "健康管理（运动/作息）", value: "green" }, { text: "职业突破（项目/影响力）", value: "red" } ] },
        { text: "当你主动发起一个项目时，最看重：", options: [ { text: "落地推进速度", value: "red" }, { text: "方案的创意度", value: "yellow" }, { text: "逻辑性与可复制性", value: "blue" }, { text: "合作体验与伙伴关系", value: "green" } ] },
        { text: "最能代表你工作台的一句话：", options: [ { text: "“马上开始做”", value: "red" }, { text: "“灵感随处发生”", value: "yellow" }, { text: "“一切井井有条”", value: "blue" }, { text: "“舒服最重要”", value: "green" } ] },
        { text: "一次团队活动你更期待：", options: [ { text: "竞赛PK、分组对抗", value: "red" }, { text: "创意路演、即兴发挥", value: "yellow" }, { text: "主题分享、干货输出", value: "blue" }, { text: "团建旅行、关系增温", value: "green" } ] },
        { text: "和陌生人第一次见面，你更可能：", options: [ { text: "抛出有挑战的问题", value: "red" }, { text: "用幽默破冰", value: "yellow" }, { text: "从事实话题切入", value: "blue" }, { text: "先关注对方感受", value: "green" } ] },
        { text: "你更希望自己的作品被评价为：", options: [ { text: "有影响力", value: "red" }, { text: "有创意", value: "yellow" }, { text: "可复用", value: "blue" }, { text: "有人味", value: "green" } ] },
        { text: "你对“慢生活”的理解：", options: [ { text: "阶段性需要，不能耽误成果", value: "red" }, { text: "要有趣、有色彩", value: "yellow" }, { text: "有节律、有方法", value: "blue" }, { text: "身心舒展、与人相伴", value: "green" } ] },
        { text: "选择居住社区时你更看重：", options: [ { text: "交通便利、效率高", value: "red" }, { text: "周边活动、文化氛围", value: "yellow" }, { text: "治安良好、秩序感", value: "blue" }, { text: "绿化与邻里关系", value: "green" } ] },
        { text: "你更愿意投入资金在：", options: [ { text: "提升生产力的设备", value: "blue" }, { text: "体验型消费（演出/旅行）", value: "yellow" }, { text: "健康相关（课程/器材）", value: "green" }, { text: "扩大影响力的项目", value: "red" } ] },
        { text: "最能描述你处理冲突的方式：", options: [ { text: "直面问题，快刀斩乱麻", value: "red" }, { text: "幽默化解，寻找转圜", value: "yellow" }, { text: "厘清事实，厘定规则", value: "blue" }, { text: "照顾情绪，先修复关系", value: "green" } ] },
        { text: "你觉得最需要提升的能力：", options: [ { text: "耐心与细腻度", value: "red" }, { text: "专注与落地性", value: "yellow" }, { text: "灵活度与同理心", value: "blue" }, { text: "边界感与决断力", value: "green" } ] },
        { text: "你更愿意如何结束忙碌的一天：", options: [ { text: "健身或高强度运动", value: "red" }, { text: "看喜剧或社交小聚", value: "yellow" }, { text: "阅读或系统复盘", value: "blue" }, { text: "泡脚、冥想或与家人相处", value: "green" } ] },
        { text: "如果你是一位配色设计师，你更愿意：", options: [ { text: "打造高饱和、强对比方案", value: "red" }, { text: "尝试大胆的跨界混搭", value: "yellow" }, { text: "用低饱和、理性的秩序感", value: "blue" }, { text: "做莫兰迪系的柔和舒缓", value: "green" } ] }
      ]
    ],

    results: {
      "red": { type: "red", title: "热情与行动 (红色)", description: "您的核心能量像火焰一样，充满了热情、活力和勇气。您是天生的行动派和领导者，果断、自信，喜欢挑战。在社交中，您通常是主动和外向的，能够迅速点燃气氛。您渴望胜利，并有能力将想法快速转化为行动。", suggestion: "您的能量能极大地感染和激励他人，这是您最宝贵的财富。在追求目标时，请注意保持耐心，倾听他人的声音，避免因过于冲动而做出仓促的决定。学会放慢脚步，享受过程，能让您的耐力更持久。", color: "#F44336" },
      "yellow": { type: "yellow", title: "乐观与智慧 (黄色)", description: "您的核心能量像阳光一样，乐观开朗，思路清晰。您善于沟通和表达，对新知识充满好奇。在社交中，您是那个能带来欢声笑语的人。您富有创意，总能想出新点子。", suggestion: "您的乐观和创意非常有感染力。请注意将您的众多想法付诸实践，并坚持到底。学会专注，可以让您的才华更好地转化为成果。", color: "#FFEB3B" },
      "blue": { type: "blue", title: "冷静与理性 (蓝色)", description: "您的核心能量像大海一样，冷静、理性和深邃。您是天生的思考者和分析家，做事有条理，注重逻辑和事实。在人际关系中，您忠诚可靠，是值得信赖的朋友。", suggestion: "您的理性和智慧是您最大的优势。请尝试更多地表达您的情感，与他人分享您的内心世界。有时候，感性的交流比纯粹的逻辑更能拉近彼此的距离。", color: "#2196F3" },
      "green": { type: "green", title: "和谐与成长 (绿色)", description: "您的核心能量像大自然一样，追求和谐、平衡与成长。您是天生的和平缔造者，富有同情心，善于倾听和理解他人。在团队中，您是那个维系关系、促进合作的关键人物。", suggestion: "您的善良和同理心让周围的人感到舒适。请在关心他人的同时，不要忘记照顾自己的需求。学会设立界限，并勇敢地表达自己的想法，这对您的个人成长至关重要。", color: "#4CAF50" }
    }
  },
  // ----------------------------------------------------------------
  // 12. Alignment D&D阵营九宫格 (完整版)
  // ----------------------------------------------------------------
  {
    id: '12',
    slug: 'alignment',
    title: 'D&D 阵营九宫格测试',
    description: '守序善良还是混乱邪恶？用RPG的方式打开你的道德与行为准则。',
    topic: 'Fun',
    duration: '约 5-8 分钟',
    image: alignmentImg,

    meta: {
      createdAt: "2024 游戏版",
      author: "心理测试实验室",
      participants: 88100,
      rating: 4.9,
      disclaimer: "本测试基于龙与地下城 (D&D) 规则，结果仅供娱乐与性格参考。",
      
      richIntro: [
        {
          title: "你的道德坐标在哪里？",
          content: [
            "阵营（Alignment）是龙与地下城（D&D）游戏中用于描述角色道德和伦理立场的系统。它由两个维度组成：",
            "**⚖️ 秩序与混乱**：你更看重规则、传统和法律，还是更看重自由、适应和个人主义？",
            "**❤️ 善良与邪恶**：你更倾向于利他、仁慈和无私，还是更倾向于利己、冷酷和权术？"
          ],
          image: alignmentImg,
          imageSide: 'right'
        },
        {
          title: "九大阵营解析",
          content: [
            "这两个维度的交叉，构成了经典的九宫格：",
            "**🛡️ 守序善良**：正义的十字军。",
            "**🌿 绝对中立**：自然的守护者。",
            "**🔥 混乱邪恶**：毁灭的化身。",
            "找到你的阵营，不仅能帮你了解自己的价值观，还能帮你找到现实生活中的“队友”。"
          ],
          image: alignmentImg,
          imageSide: 'left'
        }
      ],
      references: [
        { text: "Gygax, G., & Arneson, D. (1974). Dungeons & Dragons." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "当法律与良知冲突时，我更倾向于：", options: [{ text: "遵循法律，因为它是社会秩序的基石。", value: "L" }, { text: "追随内心深处的道德准则。", value: "G" }] },
        { text: "面对一个陷入困境的陌生人，我会：", options: [{ text: "尽我所能提供帮助，即使这会给我带来麻烦。", value: "G" }, { text: "首先考虑这件事是否会对我自己造成负面影响。", value: "E" }] },
        { text: "我认为一个理想的社会应该：", options: [{ text: "拥有完善的法律和明确的社会结构。", value: "L" }, { text: "给予每个人最大限度的个人自由。", value: "C" }] },
        { text: "为了达成一个伟大的目标，我认为：", options: [{ text: "可以牺牲一些无辜的人。", value: "E" }, { text: "绝不能伤害无辜者。", value: "G" }] },
        { text: "我更喜欢：", options: [{ text: "有详细计划和明确分工的团队合作。", value: "L" }, { text: "灵活、即兴、随时适应变化的团队。", value: "C" }] },
        { text: "“承诺”对我来说：", options: [{ text: "是神圣不可违背的誓言。", value: "L" }, { text: "是可以根据情况变化而调整的约定。", value: "C" }] },
        { text: "如果我获得强大的力量，我会优先：", options: [{ text: "用它来保护弱者，维护正义。", value: "G" }, { text: "用它来实现我个人的野心和欲望。", value: "E" }] },
        { text: "对于传统和习俗，我的看法是：", options: [{ text: "它们是智慧的结晶，应当被尊重。", value: "L" }, { text: "它们是思想的束缚，应当被挑战。", value: "C" }] },
        { text: "在做决定时，我更依赖于：", options: [{ text: "逻辑、规则和既定程序。", value: "L" }, { text: "我的直觉、冲动和当下的感受。", value: "C" }] },
        { text: "我认为知识的主要用途是：", options: [{ text: "造福大众，推动社会进步。", value: "G" }, { text: "作为获取个人权力和优势的工具。", value: "E" }] },
        { text: "面对不公的规则，我会：", options: [{ text: "试图在规则体系内找到方法来改变它。", value: "L" }, { text: "直接无视或打破这个规则。", value: "C" }] },
        { text: "我是否会为了帮助朋友而对权威撒谎？", options: [{ text: "会的，友情比规定更重要。", value: "G" }, { text: "不会，诚实和规则是首要的。", value: "L" }] },
        { text: "我认为“混乱”是：", options: [{ text: "创造力和机遇的源泉。", value: "C" }, { text: "毁灭和痛苦的根源。", value: "L" }] },
        { text: "我是否会匿名举报一个对我很好的同事的违规行为？", options: [{ text: "会的，规定就是规定。", value: "L" }, { text: "不会，我会先私下与他沟通。", value: "G" }] },
        { text: "我认为最重要的是：", options: [{ text: "群体的福祉和稳定。", value: "G" }, { text: "个人的成就和满足。", value: "E" }] },
        { text: "如果一个独裁者能带来绝对的和平与繁荣，我会：", options: [{ text: "支持他，结果最重要。", value: "L" }, { text: "反对他，自由不可被剥夺。", value: "C" }] },
        { text: "我更欣赏哪种人？", options: [{ text: "无私奉献的圣人。", value: "G" }, { text: "精明狡猾的投机者。", value: "E" }] },
        { text: "我做事的方式更倾向于：", options: [{ text: "有条不紊，按部就班。", value: "L" }, { text: "随心所欲，打破常规。", value: "C" }] },
        { text: "如果捡到一个装满钱的钱包，我会：", options: [{ text: "想办法归还失主。", value: "G" }, { text: "据为己有。", value: "E" }] },
        { text: "在团队中，我更愿意成为：", options: [{ text: "制定规则和策略的领导者。", value: "L" }, { text: "打破僵局、带来新想法的“变数”。", value: "C" }] },
        { text: "我认为怜悯是一种：", options: [{ text: "高尚的美德。", value: "G" }, { text: "阻碍成功的弱点。", value: "E" }] },
        { text: "我更不能容忍：", options: [{ text: "背叛和无序。", value: "L" }, { "text": "暴政和压迫。", "value": "C" }] },
        { text: "我认为一个人的价值主要取决于：", options: [{ "text": "他们为他人所做的贡献。", "value": "G" }, { "text": "他们为自己获取的利益。", "value": "E" }] },
        { text: "在没有规则的情况下，我认为人们会：", options: [{ "text": "相互合作，建立新的秩序。", "value": "G" }, { "text": "陷入自相残杀的混乱状态。", "value": "E" }] }
      ],
      // Paper B
      [
        { text: "当法律与道德冲突时我更在意：", options: [{ text: "法度与制度必须被遵守", value: "L" }, { text: "内心的正义与良知", value: "G" }] },
        { text: "遇到路边受伤的人，我更可能：", options: [{ text: "立刻出手相助，哪怕很麻烦", value: "G" }, { text: "评估风险与成本后再决定", value: "E" }] },
        { text: "理想社会在我眼中应当：", options: [{ text: "以规则维持秩序与稳定", value: "L" }, { text: "以自由激发创造与活力", value: "C" }] },
        { text: "达成宏愿时，若需牺牲少数无辜：", options: [{ text: "可以接受，目标更重要", value: "E" }, { text: "不可以，底线不可逾越", value: "G" }] },
        { text: "工作方式上我更偏好：", options: [{ text: "计划周密、按章执行", value: "L" }, { text: "随机应变、灵活推进", value: "C" }] },
        { text: "对“守信”的理解更像：", options: [{ text: "承诺一出，使命必达", value: "L" }, { text: "视情境变化合理调整", value: "C" }] },
        { text: "若拥有强权，我首先会：", options: [{ text: "庇护弱小，匡扶正义", value: "G" }, { text: "扩张个人影响与利益", value: "E" }] },
        { text: "传统与惯例在我看来：", options: [{ text: "值得尊重并延续", value: "L" }, { text: "需要质疑与革新", value: "C" }] },
        { text: "做选择时我多依赖：", options: [{ text: "流程、制度与逻辑", value: "L" }, { text: "直觉、灵感与当下", value: "C" }] },
        { text: "知识最好被用来：", options: [{ text: "服务大众，改善社会", value: "G" }, { text: "谋取优势，达成野心", value: "E" }] },
        { text: "不合理的规定出现时我会：", options: [{ text: "循体制渠道推动修订", value: "L" }, { text: "直接无视或越过它", value: "C" }] },
        { text: "帮朋友瞒报会不会？", options: [{ text: "会，情义优先", value: "G" }, { text: "不会，原则优先", value: "L" }] },
        { text: "我把“混乱”视为：", options: [{ text: "创意与突破的土壤", value: "C" }, { text: "失控与灾难的前兆", value: "L" }] },
        { text: "面对“好同事违规”的情形，我会：", options: [{ text: "按制度匿名举报", value: "L" }, { text: "先私下沟通劝止", value: "G" }] },
        { text: "更重要的是：", options: [{ text: "群体稳定与共同福祉", value: "G" }, { text: "个人名利与自我实现", value: "E" }] },
        { text: "若独裁可换来繁荣与和平：", options: [{ text: "支持，效果导向", value: "L" }, { text: "反对，自由至上", value: "C" }] },
        { text: "我更欣赏的人：", options: [{ text: "利他而无私的人", value: "G" }, { text: "精于算计的机会主义者", value: "E" }] },
        { text: "做事风格更接近：", options: [{ text: "按规矩一步一步", value: "L" }, { text: "打破常规闯一闯", value: "C" }] },
        { text: "捡到巨款时我会：", options: [{ text: "设法物归原主", value: "G" }, { text: "据为己有", value: "E" }] },
        { text: "在团队定位上我愿意：", options: [{ text: "定规则、扛责任", value: "L" }, { text: "当破局者与催化剂", value: "C" }] },
        { text: "怜悯对于成功是：", options: [{ text: "可贵的德性", value: "G" }, { text: "拖累的软肋", value: "E" }] },
        { text: "我最不能容忍的是：", options: [{ text: "背信弃义与无序", value: "L" }, { text: "压迫专制与独裁", value: "C" }] },
        { text: "评价一个人的价值更看重：", options: [{ text: "对他人的贡献", value: "G" }, { text: "为自己带来的收益", value: "E" }] },
        { text: "若无规则约束，人们更可能：", options: [{ text: "自发协同重建秩序", value: "G" }, { text: "陷入弱肉强食的混战", value: "E" }] }
      ],
      // Paper C
      [
        { text: "法与义冲突时，我会：", options: [{ text: "守法优先，秩序第一", value: "L" }, { text: "听从良知，择善而行", value: "G" }] },
        { text: "看见陌生人需要帮助，我会：", options: [{ text: "先救人，其他事再说", value: "G" }, { text: "先考虑自身损失与风险", value: "E" }] },
        { text: "我心中的理想社会是：", options: [{ text: "制度完善、层级清晰", value: "L" }, { text: "自由至上、各展其能", value: "C" }] },
        { text: "若要为大局牺牲无辜，我会：", options: [{ text: "接受，这是必要代价", value: "E" }, { text: "拒绝，底线不可践踏", value: "G" }] },
        { text: "我的工作偏好：", options: [{ text: "流程明确、职责清楚", value: "L" }, { text: "边走边看、灵活机动", value: "C" }] },
        { text: "关于“说到做到”，我认为：", options: [{ text: "诺必践，即使代价不小", value: "L" }, { text: "可变通，契约亦可重谈", value: "C" }] },
        { text: "若握有强势资源，我会：", options: [{ text: "守护弱者、主持公道", value: "G" }, { text: "优先扩张自我版图", value: "E" }] },
        { text: "对待传统，我更：", options: [{ text: "尊重与传承", value: "L" }, { text: "质疑并革新", value: "C" }] },
        { text: "做决定更依赖：", options: [{ text: "规则与理性推演", value: "L" }, { text: "直觉与当下感受", value: "C" }] },
        { text: "知识的意义主要在于：", options: [{ text: "惠及众人、改善世界", value: "G" }, { text: "加持个人、制胜博弈", value: "E" }] },
        { text: "遇到不公条款时我会：", options: [{ text: "走程序推动修正", value: "L" }, { text: "直接越过或破除", value: "C" }] },
        { text: "为朋友挡一次“实话”可以吗？", options: [{ text: "可以，情义更重", value: "G" }, { text: "不行，原则更重", value: "L" }] },
        { text: "我认为混乱：", options: [{ text: "是创新与自由的温床", value: "C" }, { text: "是秩序崩塌的前奏", value: "L" }] },
        { text: "若同事违规但与我交好，我会：", options: [{ text: "依规举报", value: "L" }, { text: "先沟通、劝其改正", value: "G" }] },
        { text: "价值排序中更靠前的是：", options: [{ text: "群体利益与安定", value: "G" }, { text: "个人收获与满足", value: "E" }] },
        { text: "独裁换来繁荣该不该支持？", options: [{ text: "该，效率优先", value: "L" }, { text: "不该，自由优先", value: "C" }] },
        { text: "更让我钦佩的是：", options: [{ text: "无私行善者", value: "G" }, { text: "精于权术者", value: "E" }] },
        { text: "风格更像：", options: [{ text: "循规蹈矩", value: "L" }, { text: "不按常理出牌", value: "C" }] },
        { text: "捡到厚钱包，我会：", options: [{ text: "联系失主归还", value: "G" }, { text: "据为己有", value: "E" }] },
        { text: "团队定位我更愿意：", options: [{ text: "当制度与规则的制定者", value: "L" }, { text: "当打破停滞的变革者", value: "C" }] },
        { text: "“怜悯”更像是：", options: [{ text: "值得守护的美德", value: "G" }, { text: "阻挡进步的绊脚石", value: "E" }] },
        { text: "更难以忍受的是：", options: [{ text: "混乱与背弃规则", value: "L" }, { text: "强权与系统性压迫", value: "C" }] },
        { text: "衡量价值我更看：", options: [{ text: "对他人的贡献度", value: "G" }, { text: "对自我的收益率", value: "E" }] },
        { text: "若无任何约束，人类倾向：", options: [{ text: "自组织协作并重建秩序", value: "G" }, { text: "演化为弱肉强食的混战", value: "E" }] }
      ]
    ],

    results: {
      "LG": { type: "LG", title: "守序善良 (Lawful Good)", description: "您是正义的化身，是骑士、圣武士和模范公民。您坚信，一个有组织、有秩序的强大社会能够让大多数人过上更好的生活。", suggestion: "警惕将“秩序”本身看得比“善良”更重要。有时规则也需要怀有同情心。", color: "#2196F3" },
      "NG": { type: "NG", title: "中立善良 (Neutral Good)", description: "您是仁慈的化身，是真正的利他主义者。您只做内心认为正确和善良的事，不盲从于法律，也不执着于反抗。", suggestion: "在行善时，请注意保护自己，避免因过度付出而被利用。", color: "#8BC34A" },
      "CG": { type: "CG", title: "混乱善良 (Chaotic Good)", description: "您是自由的化身，是侠盗罗宾汉。您拥有一颗善良的心，但认为严格的社会结构常常会阻碍正义。您相信个人的良知。", suggestion: "请注意，您的“善举”有时可能会因为打破规则而带来意想不到的混乱后果。", color: "#00BCD4" },
      "LN": { type: "LN", title: "守序中立 (Lawful Neutral)", description: "您是秩序的化身，是法官和恪尽职守的官僚。对您而言，秩序、规则和传统至高无上。您不关心善恶，只关心规则。", suggestion: "警惕成为没有感情的“系统齿轮”。一点点变通和同情心能让秩序更具韧性。", color: "#9E9E9E" },
      "N": { type: "N", title: "绝对中立 (True Neutral)", description: "您是平衡的化身，是自然的守护者。您认为善良与邪恶、秩序与混乱都只是宇宙天平上的砝码。您倾向于顺其自然。", suggestion: "过度的中立可能会被解读为冷漠。请思考，何时应当顺其自然，何时又必须挺身而出。", color: "#607D8B" },
      "CN": { type: "CN", title: "混乱中立 (Chaotic Neutral)", description: "您是自由的终极化身，是吟游诗人、浪子。您将个人自由置于一切之上。您不为善，也不为恶，只为自己的自由和快乐而活。", suggestion: "真正的自由并非完全不受约束。建立一些可靠的人际关系，会让您的旅程不那么孤单。", color: "#FF9800" },
      "LE": { type: "LE", title: "守序邪恶 (Lawful Evil)", description: "您是有组织的利己主义者。您利用社会的法律、规则和等级制度来满足自己的私欲。您认为等级森严的社会才是最高效的。", suggestion: "通过压迫建立的秩序终将崩塌。一个真正强大的系统，需要的是忠诚，而不仅仅是恐惧。", color: "#673AB7" },
      "NE": { type: "NE", "title": "中立邪恶 (Neutral Evil)", "description": "您是纯粹的利己主义者。您作恶并非为了享乐，仅仅是因为这是达成目的最简单的方式。您是纯粹的自私自利者。", "suggestion": "一个没有任何盟友的人生，最终将是一座孤岛。当您陷入困境时，将无人向您伸出援手。", color: "#455A64" },
      "CE": { "type": "CE", "title": "混乱邪恶 (Chaotic Evil)", "description": "您是毁灭的化身。您享受混乱，致力于摧毁一切有秩序的东西。您的欲望就是您唯一的法律。", "suggestion": "您从毁灭中获得快感，但火焰最终也会燃尽自己。一个只有您自己的世界，将是最终极的虚无。", color: "#F44336" }
    }
  },
  // ----------------------------------------------------------------
  // 13. BDSM 倾向自评 (完整版 - 限制级)
  // ----------------------------------------------------------------
  {
    id: '13',
    slug: 'bdsm',
    title: 'BDSM 倾向自评 (成人)',
    description: '专业版倾向测试。探索你在亲密关系中的支配、臣服或其他特殊偏好。',
    topic: 'Adult',
    duration: '约 5-8 分钟',
    image: bdsmImg,
    heroImage: bdsmHeroImg,

    meta: {
      createdAt: "2024 限制级",
      author: "心理测试实验室专家组",
      participants: 18200,
      rating: 4.6,
      disclaimer: "本测试包含成人内容，未满18岁请勿进行。结果仅供了解个人偏好，不作为心理诊断依据。",
      
      richIntro: [
        {
          title: "关于 BDSM 与 SSC 原则",
          content: [
            "BDSM 是 Bondage & Discipline (束缚与调教)、Dominance & Submission (支配与臣服)、Sadism & Masochism (施虐与受虐) 的首字母缩写。它是一种以权力交换和感官刺激为核心的亲密关系形态。",
            "所有健康的 BDSM 实践都必须建立在 **SSC 原则** 之上：",
            "🛡️ **安全 (Safe)**：确保身心不受永久性伤害。",
            "🧠 **理智 (Sane)**：双方在清醒、理智的状态下进行。",
            "🤝 **知情同意 (Consensual)**：双方完全自愿，且随时可以停止。"
          ],
          image: bdsmImg,
          imageSide: 'right'
        },
        {
          title: "常见倾向解析",
          content: [
            "**Dom (支配者)**：享受掌控、引导和责任。",
            "**Sub (臣服者)**：享受交付、信任和追随。",
            "**Sadist (施虐倾向)**：从施加刺激中获得快感。",
            "**Masochist (受虐倾向)**：从承受刺激中获得快感。",
            "**Switch (切换者)**：灵活转换角色，双向体验。"
          ],
          image: bdsmImg,
          imageSide: 'left'
        }
      ],

      references: [
        { text: "Barker, M. (2013). Rewriting the Rules: An Integrative Guide to Love, Sex and Relationships." },
        { text: "Wiseman, J. (1996). SM 101: A Realistic Introduction." }
      ]
    },

    questionPools: [
      // Paper A
      [
        { text: "在亲密关系或场景中，我更倾向于：", options: [{ text: "掌控主导权", value: "dominant" }, { text: "服从和追随指引", value: "submissive" }] },
        { text: "“规则”和“指令”让我感到：", options: [{ text: "兴奋和有安全感", value: "submissive" }, { text: "这是我用来引导他人的工具", value: "dominant" }] },
        { text: "在权力关系中，我发现自己：", options: [{ text: "享受给予他人快乐或痛苦的感受", value: "sadist" }, { text: "享受为他人付出并体验快乐或痛苦", value: "masochist" }] },
        { text: "我更着迷于：", options: [{ text: "心理上的控制与征服", value: "dominant" }, { text: "身体上的束缚与限制", value: "submissive" }] },
        { text: "“服务”这个概念让我联想到：", options: [{ text: "通过为他人付出来表达忠诚和爱意", value: "submissive" }, { text: "接受他人的服务作为一种尊重和权力的体现", value: "dominant" }] },
        { text: "在幻想中，我更常扮演：", options: [{ text: "严格的管教者或主人", value: "dominant" }, { text: "顺从的学生或仆人", value: "submissive" }] },
        { text: "对于“疼痛”的看法，我倾向于：", options: [{ text: "将其视为一种可以带来快感的强烈刺激", value: "masochist" }, { text: "将其视为一种施加影响或表达控制的方式", value: "sadist" }] },
        { text: "什么更能让我兴奋？", options: [{ text: "看到对方因我而产生强烈的情绪或身体反应", value: "sadist" }, { text: "将自己的身体和意志完全交给信任的伴侣", value: "masochist" }] },
        { text: "在角色扮演中，我更喜欢：", options: [{ text: "扮演拥有更高社会地位或权力的角色", value: "dominant" }, { text: "扮演需要被照顾、指导或拥有的角色", value: "submissive" }] },
        { text: "“取悦”对方这个想法，对我来说意味着：", options: [{ text: "我的首要任务，能给我带来巨大的满足感", value: "submissive" }, { text: "我希望对方努力去做的事", value: "dominant" }] },
        { text: "我是否享受在不同场景中切换主导和服从的角色？", options: [{ text: "是的，我享受这种灵活性和变化", value: "switch" }, { text: "不，我更喜欢固定在某一个角色上", value: "N/A" }] },
        { text: "“仪式感”在亲密互动中：", options: [{ text: "非常重要，它能建立氛围和权力结构", value: "dominant" }, { text: "非常重要，它让我感到安全并能更快进入状态", value: "submissive" }] },
        { text: "当看到伴侣完全屈服于我时，我感到：", options: [{ text: "强烈的满足感和责任感", value: "dominant" }, { text: "这个场景对我没有特别的吸引力", value: "N/A" }] },
        { text: "当我的行动能给对方带来极致的快感（甚至通过痛苦），我感到：", options: [{ text: "兴奋和力量", value: "sadist" }, { text: "这个想法让我感到不适", value: "N/A" }] },
        { text: "将自己的快乐和满足置于伴侣的控制之下，这个想法让我：", options: [{ text: "感到兴奋和解脱", value: "masochist" }, { text: "感到不安和抗拒", value: "N/A" }] },
        { text: "我是否同时享受主导和被主导的乐趣？", options: [{ text: "是的，取决于我的心情和伴侣的状态", value: "switch" }, { text: "不，我的偏好非常明确", value: "N/A" }] },
        { text: "“惩罚”和“奖励”的体系让我觉得：", options: [{ text: "是建立和维持权力动态的有效工具", value: "dominant" }, { text: "是一种能带来刺激和指导的框架", value: "submissive" }] },
        { text: "我更倾向于：", options: [{ text: "给予感官上的刺激（如鞭打、滴蜡）", value: "sadist" }, { text: "接受感官上的刺激", value: "masochist" }] },
        { text: "“崇拜”这个词，让我感觉：", options: [{ text: "我渴望被他人崇拜", value: "dominant" }, { text: "我渴望去崇拜某人", value: "submissive" }] },
        { text: "我是否觉得，有时主导，有时顺从，能让关系更有趣？", options: [{ text: "绝对是的", value: "switch" }, { text: "我不太这么认为", value: "N/A" }] },
        { text: "我更喜欢：", options: [{ text: "精心策划一个场景和互动流程", value: "dominant" }, { text: "将自己完全交给对方，期待未知的体验", value: "submissive" }] },
        { text: "对他人的情绪和反应，我：", options: [{ text: "高度敏感，并享受能够影响甚至控制它们", value: "sadist" }, { text: "更关注自己的内在感受和体验", value: "masochist" }] },
        { text: "“权力”这个词对我来说是：", options: [{ text: "性感的，令人着迷的", value: "dominant" }, { text: "有时会让我感到害怕或不安", value: "submissive" }] },
        { text: "我是否发现自己在不同的关系或时期中，倾向的角色会变化？", options: [{ text: "是的，我的倾向不是一成不变的", value: "switch" }, { text: "不，我的倾向非常稳定", value: "N/A" }] },
        { text: "我更享受：", options: [{ text: "精神上的征服和让对方心理上依赖我", value: "dominant" }, { text: "身体和精神上完全依赖信任的伴侣", value: "submissive" }] },
        { text: "对于羞耻感，我的看法是：", options: [{ text: "一种可以被利用来创造快感的强大情绪", value: "sadist" }, { text: "一种我愿意为信任的伴侣去体验的刺激感", value: "masochist" }] },
        { text: "我是否享受那种既能掌控他人，又能被他人掌控的感觉？", options: [{ text: "是的，我两者都享受", value: "switch" }, { text: "不，我只享受其中之一", value: "N/A" }] },
        { text: "在关系中，我更看重：", options: [{ text: "清晰的权力结构和领导者", value: "dominant" }, { text: "清晰的指引和被保护感", value: "submissive" }] },
        { text: "我更着迷于：", options: [{ text: "探索对方身体和心理的极限", value: "sadist" }, { text: "探索自己身体和心理的极限", value: "masochist" }] },
        { text: "我是否认为最理想的关系是权力可以流动的？", options: [{ text: "是的，平等和互换角色的能力很重要", value: "switch" }, { text: "不，我更喜欢稳定的权力结构", value: "N/A" }] }
      ],
      // Paper B
      [
        { text: "进入亲密互动时，我更自然的状态是：", options: [{ text: "掌控节奏与决策", value: "dominant" }, { text: "遵循对方的安排与指引", value: "submissive" }] },
        { text: "当涉及到“规则/口令”时，我会：", options: [{ text: "以此建立秩序并引导全局", value: "dominant" }, { text: "因此更安心并愿意投入", value: "submissive" }] },
        { text: "我在权力交换中更偏好：", options: [{ text: "主动施加刺激、观察对方反应", value: "sadist" }, { text: "承受刺激、把自己交给对方", value: "masochist" }] },
        { text: "最令我着迷的是：", options: [{ text: "思维与意志的掌控", value: "dominant" }, { text: "肢体与行动的束缚", value: "submissive" }] },
        { text: "对“服务”的联想更接近：", options: [{ text: "以付出与顺从表达忠诚", value: "submissive" }, { text: "被恭敬地服务体现权威", value: "dominant" }] },
        { text: "在幻想故事里，我常见到自己是：", options: [{ text: "严谨的领导者、导师或主人", value: "dominant" }, { text: "遵命的学生、侍从或宠物", value: "submissive" }] },
        { text: "关于疼痛，我更像是：", options: [{ text: "体验者，能把痛转化为愉悦", value: "masochist" }, { text: "施与者，把痛当作表达与掌控", value: "sadist" }] },
        { text: "让我兴奋的场景是：", options: [{ text: "引发对方强烈情绪与生理反馈", value: "sadist" }, { text: "把自己彻底托付给可信赖的人", value: "masochist" }] },
        { text: "角色扮演时我更倾向：", options: [{ text: "高位、权威与支配的角色", value: "dominant" }, { text: "被拥有、被引导与被教导的角色", value: "submissive" }] },
        { text: "“取悦伴侣”对我的意义是：", options: [{ text: "我希望对方努力去做到的事", value: "dominant" }, { text: "我的优先事项与价值来源", value: "submissive" }] },
        { text: "关于切换角色（主↔从），我：", options: [{ text: "可以，也乐在其中", value: "switch" }, { text: "不太愿意更换既定角色", value: "N/A" }] },
        { text: "有仪式感的流程：", options: [{ text: "能帮助我稳固结构与气氛", value: "dominant" }, { text: "能让我更快进入臣服状态", value: "submissive" }] },
        { text: "当对方完全屈从时，我会：", options: [{ text: "感到满足并承担起照料责任", value: "dominant" }, { text: "对此并无特殊感觉", value: "N/A" }] },
        { text: "想到通过刺激（甚至痛感）令对方愉悦时，我：", options: [{ text: "感到力量与快感", value: "sadist" }, { text: "对此设想并不适应", value: "N/A" }] },
        { text: "把快感的控制权交给伴侣这个念头让我：", options: [{ text: "释放、安心且期待", value: "masochist" }, { text: "紧张与排斥", value: "N/A" }] },
        { text: "我对主从双向体验的态度：", options: [{ text: "看情况与搭档，乐意尝试", value: "switch" }, { text: "更喜欢固定的一面", value: "N/A" }] },
        { text: "“惩罚/奖励”系统对我来说：", options: [{ text: "是管理与引导的工具", value: "dominant" }, { text: "是让我专注与投入的框架", value: "submissive" }] },
        { text: "刺激的偏好上，我更可能：", options: [{ text: "实施鞭打、滴蜡等外界刺激", value: "sadist" }, { text: "接受外界刺激并体会其变化", value: "masochist" }] },
        { text: "谈及“崇拜”，我更偏向：", options: [{ text: "被仰望与被臣服", value: "dominant" }, { text: "仰望并臣服于某人", value: "submissive" }] },
        { text: "角色可否流动更有趣？", options: [{ text: "是，灵活切换让我兴奋", value: "switch" }, { text: "否，我偏好稳定不变", value: "N/A" }] },
        { text: "面对一场互动，我更愿意：", options: [{ text: "事先设计流程与细节", value: "dominant" }, { text: "交出掌控权并迎接未知", value: "submissive" }] },
        { text: "对他人反应我会：", options: [{ text: "主动塑造并微调其节奏", value: "sadist" }, { text: "更专注自身的感受变化", value: "masochist" }] },
        { text: "“权力”对我而言更像：", options: [{ text: "性感且令人上瘾", value: "dominant" }, { text: "略显压迫，需要适应", value: "submissive" }] },
        { text: "我在不同关系/时期的角色偏好会：", options: [{ text: "随人而变，具有流动性", value: "switch" }, { text: "基本固定不变", value: "N/A" }] },
        { text: "我会从以下中获得更多满足：", options: [{ text: "让对方在心理上对我产生依附", value: "dominant" }, { text: "在信任中向对方完全敞开", value: "submissive" }] },
        { text: "对“羞耻/羞辱”的理解更接近：", options: [{ text: "可被设计为强烈而有效的刺激", value: "sadist" }, { text: "愿为信任的对象探索其边界", value: "masochist" }] },
        { text: "我是否同时享受主控与被控？", options: [{ text: "是的，两者皆可", value: "switch" }, { text: "不，只喜欢其中之一", value: "N/A" }] },
        { text: "在关系框架里，我更看重：", options: [{ text: "明确的领导者与执行", value: "dominant" }, { text: "清晰的指令与安全感", value: "submissive" }] },
        { text: "我好奇的探索方向是：", options: [{ text: "对方身心的边界与反应", value: "sadist" }, { text: "自身身心的边界与反应", value: "masochist" }] },
        { text: "理想关系应否允许权力流动？", options: [{ text: "应当，视场景互换", value: "switch" }, { "text": "不应，保持稳定结构", value: "N/A" }] }
      ],
      // Paper C
      [
        { text: "当亲密发生时，我通常：", options: [{ text: "自然而然承担带领与掌控", value: "dominant" }, { text: "更愿意跟随并接受安排", value: "submissive" }] },
        { text: "对于明晰的规训与口令，我会：", options: [{ text: "制定并执行它们", value: "dominant" }, { text: "遵循并因此更安心", value: "submissive" }] },
        { text: "在权力动态中，我更像：", options: [{ text: "刺激的给予者与导演", value: "sadist" }, { text: "刺激的体验者与探索者", value: "masochist" }] },
        { text: "我主要被吸引的是：", options: [{ text: "令人臣服的精神影响力", value: "dominant" }, { text: "让身体被束缚的真实感", value: "submissive" }] },
        { text: "“服务”二字更让我想到：", options: [{ text: "恭顺与奉献所带来的满足", value: "submissive" }, { text: "被照料与被侍奉的尊荣", value: "dominant" }] },
        { text: "在脑海剧情里，我多半是：", options: [{ text: "制定规矩、给出命令的人", value: "dominant" }, { text: "遵命受教、听话乖巧的人", value: "submissive" }] },
        { text: "谈到痛感，我会：", options: [{ text: "用它作为自我解放的媒介", value: "masochist" }, { text: "用它作为影响他人的工具", value: "sadist" }] },
        { text: "最能点燃我的是：", options: [{ text: "观察对方因我而起的强烈反应", value: "sadist" }, { text: "把身心交托给深信的人", value: "masochist" }] },
        { text: "角色扮演里我偏向：", options: [{ text: "高权威、高地位的设定", value: "dominant" }, { text: "被照看、被拥有的设定", value: "submissive" }] },
        { text: "对我来说，“取悦对方”更像是：", options: [{ text: "对方需要努力完成的任务", value: "dominant" }, { text: "我甘愿投入的首要目标", value: "submissive" }] },
        { text: "关于角色切换，我：", options: [{ text: "乐于在主与从之间游走", value: "switch" }, { text: "不喜欢改变固定位置", value: "N/A" }] },
        { text: "仪式化的流程对我而言：", options: [{ text: "用于建立场景与边界", value: "dominant" }, { text: "用于让我更快沉浸入戏", value: "submissive" }] },
        { text: "伴侣的完全臣服会让我：", options: [{ text: "强烈满足并更愿负责照护", value: "dominant" }, { text: "没有特别的兴奋", value: "N/A" }] },
        { text: "想到以强烈刺激让对方获得快感时，我：", options: [{ text: "觉得兴奋且充满掌控感", value: "sadist" }, { text: "对此设想并不舒服", value: "N/A" }] },
        { text: "当我的满足交由伴侣掌控时，我：", options: [{ text: "感到释然、被承接与安全", value: "masochist" }, { text: "会变得不安甚至抗拒", value: "N/A" }] },
        { text: "我对双向体验（主↔从）的观点：", options: [{ text: "依情境与对象而定，皆可", value: "switch" }, { text: "固定角色才让我踏实", value: "N/A" }] },
        { text: "关于奖惩体系，我认为：", options: [{ text: "能有效维系结构与秩序", value: "dominant" }, { text: "能让我更专注于遵从与表现", value: "submissive" }] },
        { text: "在刺激方式上，我更愿意：", options: [{ text: "施加各类强度的感官体验", value: "sadist" }, { text: "接受并品味这些强度变化", value: "masochist" }] },
        { text: "“崇拜”的方向对我更像：", options: [{ text: "被崇拜与被臣服", value: "dominant" }, { text: "主动崇拜、献上忠诚", value: "submissive" }] },
        { text: "角色的灵活与否会影响趣味吗？", options: [{ text: "会，灵活更有趣", value: "switch" }, { text: "不会，我偏好固定", value: "N/A" }] },
        { text: "面对一次互动，我通常：", options: [{ text: "提前构思脚本与节奏", value: "dominant" }, { text: "把控制权交出去并沉浸", value: "submissive" }] },
        { text: "对他人反应的态度上，我：", options: [{ text: "主动诱发并调控其反应", value: "sadist" }, { text: "更关注自身体验的细腻度", value: "masochist" }] },
        { text: "“权力”二字在我心中是：", options: [{ text: "性感、迷人且令人沉醉", value: "dominant" }, { text: "带点压迫，需要依附与保护", value: "submissive" }] },
        { text: "不同阶段/对象下，我的角色偏好：", options: [{ text: "会变化并随情景切换", value: "switch" }, { text: "总体保持相对固定", value: "N/A" }] },
        { text: "更能让我满足的是：", options: [{ text: "心理征服与依恋的建立", value: "dominant" }, { text: "在信任里身心都被承接", value: "submissive" }] },
        { text: "对“羞耻/羞辱”的态度更像：", options: [{ text: "可被精心安排为有力刺激", value: "sadist" }, { text: "愿在信任框架下探索", value: "masochist" }] },
        { text: "我是否喜欢同时体验主控与被控？", options: [{ text: "是，两种我都享受", value: "switch" }, { text: "否，更偏单一取向", value: "N/A" }] },
        { text: "关系的理想结构在我看来：", options: [{ text: "有清晰领导与执行边界", value: "dominant" }, { text: "有明确指令与被守护感", value: "submissive" }] },
        { text: "我的探索兴趣更多指向：", options: [{ text: "测试并扩展对方的极限", value: "sadist" }, { text: "测试并扩展自我的极限", value: "masochist" }] },
        { text: "我更青睐可否互换权力的关系？", options: [{ text: "青睐，能随情境流动", value: "switch" }, { "text": "不青睐，更偏稳定结构", "value": "N/A" }] }
      ]
    ],

    results: {
      "dominant": { type: "Dominant", title: "支配者 (Dominant)", description: "您倾向于掌控节奏，引导伴侣探索。享受责任与权力的快感。", suggestion: "权力意味着责任。请始终关注 SSC 原则，确保伴侣的安全与舒适。", color: "#212121" },
      "submissive": { type: "Submissive", title: "臣服者 (Submissive)", description: "您倾向于交付控制权，享受信任与追随的安宁。在服务与奉献中获得满足。", suggestion: "了解自己的底线（Hard Limits）至关重要。信任是臣服的前提。", color: "#BDBDBD" },
      "sadist": { type: "Sadist", title: "施虐倾向 (Sadist)", description: "您从施加刺激（心理或生理）中获得快感。享受对他人反应的掌控。", suggestion: "学习人体安全知识，从轻度开始。同理心是区分施虐与伤害的关键。", color: "#D32F2F" },
      "masochist": { type: "Masochist", title: "受虐倾向 (Masochist)", description: "您从承受刺激中获得快感或宣泄。痛苦、羞耻或束缚能转化为愉悦。", suggestion: "确保有一个安全词。余后关怀（Aftercare）对平复情绪非常重要。", color: "#7B1FA2" },
      "switch": { type: "Switch", title: "切换者 (Switch)", description: "您是灵活的多面手。既能享受支配的快感，也能体验臣服的安宁。", suggestion: "在不同关系或场景中明确当下的角色，沟通比单一角色更重要。", color: "#9C27B0" }
    }
  },
] as TestData[]; 

// ----------------------------------------------------------------------
// 👇 每日一签数据库 (31条，覆盖整月轮播)
// ----------------------------------------------------------------------
const TIPS_POOL: DailyTip[] = [
  {
    id: '1',
    title: '接纳当下的自己',
    content: '无论此刻你的状态如何，都请试着接纳它。情绪就像天气，有晴天也有雨天。不要因为感到焦虑或低落而责备自己，允许情绪流淌，它们终会过去。',
    tag: '情绪调节',
    colorTheme: 'green'
  },
  {
    id: '2',
    title: '暂停的艺术',
    content: '当你感到不知所措时，停下来并非一种退缩。尝试深呼吸三次，仅仅是感受空气进出肺部的感觉。这短暂的空白，是你重建内心秩序的基石。',
    tag: '正念练习',
    colorTheme: 'blue'
  },
  {
    id: '3',
    title: '赞美清单',
    content: '今天试着写下三个关于你自己的优点，哪怕很小（比如“我今天按时吃了早餐”）。我们在批评自己时总是很大声，却忘了在做得好时给自己掌声。',
    tag: '自我关怀',
    colorTheme: 'yellow'
  },
  {
    id: '4',
    title: '划定边界',
    content: '说“不”并不意味着你是个坏人，它意味着你尊重自己的能量。今天，试着拒绝一个让你感到勉强或消耗的请求，保护属于你的空间。',
    tag: '人际关系',
    colorTheme: 'purple'
  },
  {
    id: '5',
    title: '感知微小幸福',
    content: '阳光落在桌面的角度、一杯咖啡的香气、路边不知名的小花。专注于这些微小的美好瞬间，是治愈心灵最温和的方式。',
    tag: '生活美学',
    colorTheme: 'yellow'
  },
  {
    id: '6',
    title: '允许自己“做不到”',
    content: '不需要每时每刻都保持完美。今天，试着对某件力不从心的事情说：“我尽力了，这样就好。”承认局限性，也是一种勇敢。',
    tag: '自我和解',
    colorTheme: 'blue'
  },
  {
    id: '7',
    title: '给电子设备放个假',
    content: '睡前一小时，试着放下手机。蓝光会欺骗大脑以为还在白天，影响褪黑素分泌。给自己一段不被通知打扰的宁静时光。',
    tag: '睡眠卫生',
    colorTheme: 'purple'
  },
  {
    id: '8',
    title: '身体扫描',
    content: '此时此刻，注意一下你的肩膀是否耸起？眉头是否紧锁？试着在呼气时，让双肩下沉，松开咬紧的牙关。身体的放松会带动心灵的放松。',
    tag: '身心连结',
    colorTheme: 'green'
  },
  {
    id: '9',
    title: '停止比较',
    content: '社交媒体上展示的通常是别人生活的高光时刻，而不是幕后的混乱。不要用你的“后台”去和别人的“前台”做比较。你按照自己的节奏走就好。',
    tag: '认知调整',
    colorTheme: 'yellow'
  },
  {
    id: '10',
    title: '拥抱内心的孩童',
    content: '如果你今天感到委屈或脆弱，想象心里住着一个小时候的自己。你会对那个孩子说什么？请用同样的温柔，安抚现在的自己。',
    tag: '内在小孩',
    colorTheme: 'purple'
  },
  {
    id: '11',
    title: '愤怒是信使',
    content: '愤怒不是坏事，它通常在告诉你：你的边界被侵犯了，或者你的需求未被满足。不要压抑它，试着解读它背后想传达的信息。',
    tag: '情绪觉察',
    colorTheme: 'green'
  },
  {
    id: '12',
    title: '5-4-3-2-1 着陆法',
    content: '焦虑时，试着找：5个能看到的东西，4个能摸到的东西，3个能听到的声音，2个能闻到的气味，1个能尝到的味道。这能帮你迅速回到当下。',
    tag: '焦虑急救',
    colorTheme: 'blue'
  },
  {
    id: '13',
    title: '高质量的独处',
    content: '独处不是孤独，而是与自己约会。今天留出20分钟，不看手机，只做一件让自己开心的事——阅读、泡澡，或者发呆。',
    tag: '自我滋养',
    colorTheme: 'purple'
  },
  {
    id: '14',
    title: '被讨厌的勇气',
    content: '你不可能让所有人都满意，这完全没关系。为了迎合他人而委屈自己，是对自己人生的不负责。做真实的自己，自然会吸引同频的人。',
    tag: '阿德勒心理学',
    colorTheme: 'yellow'
  },
  {
    id: '15',
    title: '完成比完美更重要',
    content: '完美主义往往是拖延症的伪装。别等准备好了再开始，先迈出笨拙的第一步。粗糙的完成，好过完美的空想。',
    tag: '行动力',
    colorTheme: 'green'
  },
  {
    id: '16',
    title: '书写疗愈',
    content: '如果你脑子很乱，试着把想法写在纸上。哪怕是语无伦次的碎碎念，一旦落笔，它们就不再占据大脑的内存，压力也会随之释放。',
    tag: '表达性艺术',
    colorTheme: 'blue'
  },
  {
    id: '17',
    title: '感恩练习',
    content: '感恩不是无视痛苦，而是选择关注美好。当你开始寻找值得感恩的事物时，你的大脑会逐渐建立起“积极关注”的神经回路。',
    tag: '积极心理学',
    colorTheme: 'yellow'
  },
  {
    id: '18',
    title: '像朋友一样对自己',
    content: '当朋友犯错时，你会安慰他还是辱骂他？如果你的答案是安慰，为什么对自己犯错时却那么苛刻？请做自己最好的朋友。',
    tag: '自我同情',
    colorTheme: 'purple'
  },
  {
    id: '19',
    title: '不仅是听，要在场',
    content: '在与人交谈时，放下手机，看着对方的眼睛。全然的“在场”和倾听，是你能给对方最珍贵的礼物，也能加深你们的连结。',
    tag: '人际沟通',
    colorTheme: 'green'
  },
  {
    id: '20',
    title: '允许悲伤',
    content: '悲伤是流动的爱。当我们失去什么时，悲伤是必经的疗愈过程。不要急着“好起来”，给悲伤一点时间，它会带走内心的淤泥。',
    tag: '丧失与哀伤',
    colorTheme: 'blue'
  },
  {
    id: '21',
    title: '掌控可控的',
    content: '世界上有三件事：老天的事、别人的事、自己的事。焦虑往往源于想控制前两件。回到“自己的事”上，你会发现力量又回来了。',
    tag: '斯多葛哲学',
    colorTheme: 'yellow'
  },
  {
    id: '22',
    title: '大自然的疗愈',
    content: '如果你觉得闷，去看看树，看看云，或者摸摸家里的植物。人类有亲近自然的本能（Biophilia），大自然能自动降低你的皮质醇水平。',
    tag: '生态心理学',
    colorTheme: 'green'
  },
  {
    id: '23',
    title: '拒绝内耗',
    content: '当你反复纠结“他这句话什么意思”时，提醒自己：这是内耗。事实往往很简单，过度解读只会创造出不存在的烦恼。',
    tag: '思维反刍',
    colorTheme: 'purple'
  },
  {
    id: '24',
    title: '设定微习惯',
    content: '想改变不要玩大的。每天只做一个俯卧撑，或者只读一页书。微小的、毫无负担的开始，是养成长期习惯的秘密。',
    tag: '行为心理学',
    colorTheme: 'yellow'
  },
  {
    id: '25',
    title: '除了快乐，还有意义',
    content: '生活不总是快乐的，但可以是“有意义”的。即使在痛苦中，找到这件事对你成长的意义，痛苦就变得可以忍受了。',
    tag: '意义疗法',
    colorTheme: 'blue'
  },
  {
    id: '26',
    title: '助人的快乐',
    content: '心情不好时，试着帮别人一个小忙。善意是双向流动的，在这个过程中，你会感受到自己的价值和与世界的联系。',
    tag: '利他主义',
    colorTheme: 'green'
  },
  {
    id: '27',
    title: '打破二元对立',
    content: '事情很少是非黑即白的。一个人可以既勇敢又害怕，既聪明又犯傻。容忍模糊性，接受人性的复杂，你会活得更轻松。',
    tag: '认知弹性',
    colorTheme: 'purple'
  },
  {
    id: '28',
    title: '睡个好觉',
    content: '如果你觉得世界很糟糕，可能你只是累了。睡眠是大脑的清洁工。在这个快节奏的时代，好好睡觉就是最顶级的自律。',
    tag: '生理基础',
    colorTheme: 'blue'
  },
  {
    id: '29',
    title: '每个人都在挣扎',
    content: '记住，你并不孤单。那个看起来光鲜亮丽的人，可能也在经历你无法想象的困难。对他人多一份慈悲，也是对自己多一份宽容。',
    tag: '共情能力',
    colorTheme: 'green'
  },
  {
    id: '30',
    title: '庆祝小胜利',
    content: '不要等到达成终极目标才庆祝。今天你早起了、或者控制住了脾气，这都值得庆祝。正向反馈能让你走得更远。',
    tag: '强化理论',
    colorTheme: 'yellow'
  },
  {
    id: '31',
    title: '你可以重新开始',
    content: '无论过去发生了什么，每一个清晨、每一次呼吸，都是重新开始的机会。你永远有权利按下重启键，书写新的篇章。',
    tag: '希望感',
    colorTheme: 'purple'
  }
];

// 👇 修改后的获取函数：根据日期自动轮播
export const getDailyTip = (): DailyTip => {
  // 1. 获取今天是“今年第几天”或者“几号”，这里用简单的日期取模算法
  const today = new Date();
  const dayIndex = today.getDate(); // 获取今天是几号 (1-31)
  
  // 2. 用日期的数字去“语录库”里取对应的条目
  // 使用 % (取余数) 确保即使日期超过了语录数量，也会循环回到第一条，不会报错
  const tipIndex = dayIndex % TIPS_POOL.length;
  
  return TIPS_POOL[tipIndex];
};

export const getTestBySlug = (slug: string): TestData | undefined => {
  return MOCK_TESTS.find(test => test.slug === slug);
};