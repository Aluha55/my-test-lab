import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTestBySlug } from '../services/testService';
import { TestResult, TestData, Question } from '../types';
import { ArrowLeft, RefreshCcw, Share2, CheckCircle } from 'lucide-react';

const TestQuestionnaire: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [test, setTest] = useState<TestData | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // 记录所有答案的 Values
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  // ✨ 新增：专门用来控制视觉变色的状态 (记录当前选中的是第几个选项)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  
  const [result, setResult] = useState<TestResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // 1. 初始化：加载测试并随机抽题
  useEffect(() => {
    if (slug) {
      const data = getTestBySlug(slug);
      if (data) {
        setTest(data);
        
        // 🎲 随机抽题逻辑：如果有多个题库，随机选一套
        const randomPoolIndex = Math.floor(Math.random() * data.questionPools.length);
        const selectedQuestions = data.questionPools[randomPoolIndex] || data.questionPools[0] || [];
        
        // 标准化题目格式 (兼容 q 和 text)
        const normalizedQuestions = selectedQuestions.map((q: any) => ({
            ...q,
            text: q.text || q.q
        }));
        setQuestions(normalizedQuestions);
      }
    }
  }, [slug]);

  // 3. 计算结果逻辑
  const performCalculation = (finalAnswers: Record<number, string>) => {
    setIsCalculating(true);
    
    // 模拟计算延迟，给用户一种“正在分析”的仪式感
    setTimeout(() => {
        if (!test) return;
        
        // 统计各个维度的得分
        const counts: Record<string, number> = {};
        Object.values(finalAnswers).forEach(val => {
            // 忽略 N/A 选项
            if (val !== 'N/A') {
                counts[val] = (counts[val] || 0) + 1;
            }
        });

        // 找出得分最高的那个维度
        let maxScore = -1;
        let resultKey = Object.keys(test.results)[0]; // 默认取第一个结果作为兜底

        // 遍历统计结果，找最大值
        Object.entries(counts).forEach(([key, score]) => {
            if (score > maxScore) {
                maxScore = score;
                resultKey = key;
            }
        });
        
        // MBTI 特殊处理 (因为它是四个维度的组合，不是单一维度)
        // 这里是一个简单的简化逻辑，如果要做严谨的 MBTI 组合计算，需要更复杂的算法
        // 目前逻辑：如果有对应 Key 的结果，直接显示；如果没有，显示默认的
        if (test.results[resultKey]) {
            setResult(test.results[resultKey]);
        } else {
            // 兜底：如果找不到对应的结果，显示列表里的第一个
            setResult(Object.values(test.results)[0]);
        }

        setIsCalculating(false);
    }, 1500);
  };

  // 2. 处理点击答案
  const handleAnswer = (value: string, index: number) => {
    // ✨ 立即设置视觉选中状态 (只变色点击的那个)
    setSelectedOptionIndex(index);
    
    // 延迟 300ms 后再翻页，让用户看到变色效果
    setTimeout(() => {
      const newAnswers = { ...answers, [currentQuestionIndex]: value };
      setAnswers(newAnswers);
      
      if (currentQuestionIndex < questions.length - 1) {
        // 进入下一题
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOptionIndex(null); // ✨ 重置视觉状态，下一题默认不选中
      } else {
        // 最后一题答完，提交计算
        performCalculation(newAnswers);
      }
    }, 250); // 缩短一点延迟，让体感更流畅
  };

  if (!test || questions.length === 0) return <div className="min-h-screen flex items-center justify-center text-gray-500">正在准备试卷...</div>;

  // 结果展示页面
  if (result) {
    return (
      <div className="min-h-screen bg-[#FDFCF8] py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden animate-fade-in border border-gray-100">
          {/* 结果页头部 */}
          <div className="bg-brand-primary text-brand-yellow p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <h2 className="font-display text-2xl font-bold mb-4 opacity-90 tracking-widest">测试结果</h2>
             <div className="inline-block mb-6 relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                <div 
                    className="relative w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl mx-auto border-4 border-white/10 backdrop-blur-sm"
                    style={{ backgroundColor: result.color || '#FFDE59', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                >
                    {result.type}
                </div>
             </div>
             <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">{result.title}</h1>
          </div>

          {/* 结果页内容 */}
          <div className="p-10 space-y-8">
             <div className="prose prose-lg">
                 <h3 className="font-bold text-xl text-brand-primary mb-3 flex items-center gap-2">
                    <CheckCircle size={24} className="text-brand-green"/> 
                    特质解析
                 </h3>
                 <p className="text-gray-600 leading-relaxed text-lg">
                     {result.description}
                 </p>
             </div>
             
             <div className="bg-brand-cream/50 p-8 rounded-3xl border border-brand-cream">
                 <h3 className="font-bold text-lg text-brand-primary mb-3">成长建议</h3>
                 <p className="text-gray-600 leading-relaxed">
                     {result.suggestion}
                 </p>
             </div>

             <div className="flex flex-col sm:flex-row gap-4 pt-6">
                 <button onClick={() => window.location.reload()} className="flex-1 py-4 border-2 border-gray-100 rounded-full text-center font-bold text-gray-500 hover:border-brand-yellow hover:text-brand-primary flex items-center justify-center gap-2 transition-colors">
                    <RefreshCcw size={18} /> 再测一次
                 </button>
                 <button className="flex-1 py-4 bg-brand-primary text-white rounded-full font-bold hover:bg-black shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    <Share2 size={18} /> 保存结果
                 </button>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // 计算中状态
  if (isCalculating) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCF8]">
              <div className="w-16 h-16 border-4 border-brand-cream border-t-brand-primary rounded-full animate-spin mb-6"></div>
              <h2 className="text-xl font-display font-bold text-brand-primary">正在分析你的潜意识...</h2>
              <p className="text-gray-400 mt-2 text-sm">连接心灵的信号</p>
          </div>
      )
  }

  // 答题页面
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#FDFCF8] flex flex-col">
      {/* 顶部进度条 */}
      <header className="h-20 px-6 flex items-center justify-between max-w-4xl mx-auto w-full">
         <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-brand-primary">
             <ArrowLeft size={24} />
         </button>
         <div className="font-bold text-gray-400 text-sm tracking-widest uppercase font-mono">
             {currentQuestionIndex + 1} <span className="text-gray-200">/</span> {questions.length}
         </div>
         <div className="w-10"></div>
      </header>

      <div className="w-full h-1.5 bg-gray-100">
          <div 
            className="h-full bg-brand-primary transition-all duration-500 ease-out rounded-r-full"
            style={{ width: `${progress}%` }}
          ></div>
      </div>

      {/* 题目卡片 */}
      <main className="flex-grow flex items-center justify-center p-6">
         <div className="w-full max-w-2xl animate-fade-in">
            
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-primary mb-12 leading-relaxed text-center">
                {question.text}
            </h2>

            <div className="space-y-4">
                {question.options.map((opt, idx) => (
                    <button
                        key={idx}
                        // ✨ 修复：传入 idx
                        onClick={() => handleAnswer(opt.value, idx)}
                        // ✨ 修复：判断 selectedOptionIndex === idx，而不是 value
                        className={`w-full p-5 text-center rounded-2xl border-2 transition-all duration-200 text-lg font-medium
                           ${selectedOptionIndex === idx
                             ? 'border-brand-primary bg-brand-primary text-brand-yellow shadow-lg transform scale-[1.02]' 
                             : 'border-gray-100 bg-white hover:border-brand-cream hover:bg-brand-cream/30 text-gray-700 shadow-sm'
                           }
                        `}
                    >
                        {opt.text}
                    </button>
                ))}
            </div>
         </div>
      </main>
    </div>
  );
};

export default TestQuestionnaire;