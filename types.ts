// ----------------------------------------------------------------------
// 定义通用接口
// ----------------------------------------------------------------------

// 选项接口
export interface Option {
  text: string;
  value: string; // 分数或类型标识符
}

// 问题接口
export interface Question {
  id?: number;
  text: string;
  options: Option[];
}

// 测试结果接口
export interface TestResult {
  type: string;
  title: string;
  description: string;
  suggestion: string;
  color?: string;
  // 可以根据需要添加更多字段，如详细报告链接、推荐阅读等
}

// 用户评价接口
export interface Review {
  user: string;
  rating: number;
  content: string;
  date: string;
}

// 常见问题接口
export interface FAQ {
  q: string;
  a: string;
}

// ✨✨✨ 富文本介绍章节接口 ✨✨✨
export interface IntroSection {
  title: string; // 章节标题，例如 "什么是 MBTI？"
  content: string[]; // 章节内容，数组形式，每个元素是一段话
  image?: string; // 该章节配图的路径（可选）
  imageSide?: 'left' | 'right'; // 图片在左侧还是右侧（可选，默认右侧）
}

// ✨✨✨ 参考文献接口 ✨✨✨
export interface Reference {
  text: string; // 参考文献文本
  link?: string; // 链接（可选）
}

// 测试数据总接口
export interface TestData {
  id: string;
  slug: string; // URL 中显示的缩略名，如 'mbti'
  title: string;
  description: string; // 简短描述，用于卡片展示
  topic: 'Personality' | 'Emotion' | 'Career' | 'Fun' | 'Adult'; // 所属分类
  duration: string; // 预计时长
  image: string; // 封面图 (用于列表卡片)

  // ✨✨✨ 新增：介绍页专用大图 (可选，去背版) ✨✨✨
  heroImage?: string; 

  // --- 扩展元数据 (用于构建丰富的介绍页) ---
  meta?: {
    createdAt?: string;
    author?: string;
    participants?: number;
    rating?: number;
    // ✨ 新增：结构化的富文本介绍内容
    richIntro?: IntroSection[];
    // ✨ 新增：专业参考文献背书
    references?: Reference[];

    // 旧的字段，为了兼容性暂时保留，后续可以逐步迁移到 richIntro 中
    theory?: string;
    theoryType?: 'mbti' | 'ocean' | 'general' | string;
    highlights?: string[];
    disclaimer?: string;
    reviews?: Review[];
    faqs?: FAQ[];
  };

  // 问题池 (支持多套试卷)
  questionPools: Question[][];

  // 结果映射表 (根据最高分或组合类型匹配结果)
  results: Record<string, TestResult>;
}

// 导航项接口
export interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
}

// 每日一签接口
export interface DailyTip {
  id: string;
  title: string;
  content: string;
  tag: string; // 例如 "心理调适", "职场人际"
  colorTheme: 'green' | 'yellow' | 'purple' | 'blue'; // 用于卡片配色
}