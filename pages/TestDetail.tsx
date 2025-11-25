
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTestBySlug } from '../services/testService';
import { TestResult, TestData, Question } from '../types';
import { ArrowLeft, ArrowRight, RefreshCcw, Share2, CheckCircle } from 'lucide-react';

const TestDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [test, setTest] = useState<TestData | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<TestResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    if (slug) {
      const data = getTestBySlug(slug);
      if (data) {
        setTest(data);
        // Default to the first question pool
        const selectedQuestions = data.questionPools?.[0] || [];
        setQuestions(selectedQuestions);
      }
    }
  }, [slug]);

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: value }));
    
    // Add a small delay for better UX
    setTimeout(() => {
      if (questions.length > 0 && currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    }, 250);
  };

  const calculateResult = () => {
    setIsCalculating(true);
    setTimeout(() => {
        if (!test) return;
        
        // Simple majority scoring logic for demo
        const counts: Record<string, number> = {};
        Object.values(answers).forEach(val => {
            counts[val] = (counts[val] || 0) + 1;
        });

        // Find generic result key based on simple logic (mock)
        // Real logic would depend on specific test algorithm
        let resultKey = Object.keys(test.results)[0];
        
        // Special case for MBTI demo logic
        if (test.slug.includes('mbti')) {
            const e = (counts['E'] || 0) >= (counts['I'] || 0) ? 'E' : 'I';
            const n = (counts['N'] || 0) >= (counts['S'] || 0) ? 'N' : 'S';
            const f = (counts['F'] || 0) >= (counts['T'] || 0) ? 'F' : 'T';
            const p = (counts['P'] || 0) >= (counts['J'] || 0) ? 'P' : 'J';
            // Fallback to a default for this demo since we only have limited result mocks
            if (test.results['ESTJ']) resultKey = 'ESTJ'; 
            if (test.results['INFP']) resultKey = 'INFP';
        } 
        else if (test.slug.includes('color')) {
            const choice = Object.values(answers)[0]; // Single question test
            if (test.results[choice]) resultKey = choice;
        }

        setResult(test.results[resultKey] || Object.values(test.results)[0]);
        setIsCalculating(false);
    }, 1500);
  };

  if (!test || questions.length === 0) return <div className="min-h-screen flex items-center justify-center">加载中...</div>;

  // --- RESULT VIEW ---
  if (result) {
    return (
      <div className="min-h-screen bg-brand-cream/30 py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden animate-fade-in">
          <div className="bg-brand-primary text-white p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <h2 className="font-display text-2xl font-bold mb-4 opacity-90">测试结果</h2>
             <div className="inline-block mb-6">
                <div 
                    className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold shadow-lg mx-auto border-4 border-white/20"
                    style={{ backgroundColor: result.color || '#FFDE59', color: '#2D3436' }}
                >
                    {result.type}
                </div>
             </div>
             <h1 className="text-4xl font-bold mb-2">{result.title}</h1>
          </div>

          <div className="p-10 space-y-8">
             <div>
                 <h3 className="font-bold text-lg text-brand-primary mb-2 flex items-center gap-2">
                    <CheckCircle size={20} className="text-brand-green"/> 
                    性格特质
                 </h3>
                 <p className="text-brand-secondary leading-relaxed text-lg">
                     {result.description}
                 </p>
             </div>
             
             <div className="bg-brand-greenLight p-6 rounded-2xl">
                 <h3 className="font-bold text-lg text-brand-green mb-2">给你的建议</h3>
                 <p className="text-brand-primary opacity-80">
                     {result.suggestion}
                 </p>
             </div>

             <div className="flex gap-4 pt-6">
                 <Link to="/tests" className="flex-1 py-3 border border-gray-200 rounded-full text-center font-bold text-brand-secondary hover:bg-gray-50 flex items-center justify-center gap-2">
                    <RefreshCcw size={18} /> 重测
                 </Link>
                 <button className="flex-1 py-3 bg-brand-primary text-white rounded-full font-bold hover:bg-gray-800 flex items-center justify-center gap-2">
                    <Share2 size={18} /> 分享结果
                 </button>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // --- LOADING VIEW ---
  if (isCalculating) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bg">
              <div className="w-16 h-16 border-4 border-brand-yellow border-t-brand-primary rounded-full animate-spin mb-6"></div>
              <h2 className="text-xl font-display font-bold text-brand-primary">正在分析你的答案...</h2>
              <p className="text-brand-secondary mt-2">连接心灵的信号</p>
          </div>
      )
  }

  // --- QUESTION VIEW ---
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {/* Header */}
      <header className="h-20 px-6 flex items-center justify-between max-w-4xl mx-auto w-full">
         <Link to="/tests" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
             <ArrowLeft size={24} className="text-brand-primary" />
         </Link>
         <div className="font-bold text-brand-primary">{test.title}</div>
         <div className="w-10"></div> {/* Spacer */}
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200">
          <div 
            className="h-full bg-brand-green transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
      </div>

      {/* Main Card */}
      <main className="flex-grow flex items-center justify-center p-6">
         <div className="w-full max-w-2xl">
            <div className="mb-8 text-sm text-brand-secondary font-bold tracking-widest uppercase">
                Question {currentQuestionIndex + 1} / {questions.length}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-primary mb-10 leading-relaxed">
                {question.text}
            </h2>

            <div className="space-y-4">
                {question.options.map((opt, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleAnswer(opt.value)}
                        className={`w-full p-6 text-left rounded-2xl border-2 transition-all duration-200 group
                           ${answers[currentQuestionIndex] === opt.value 
                             ? 'border-brand-primary bg-brand-primary text-white shadow-lg transform scale-[1.02]' 
                             : 'border-gray-100 bg-white hover:border-brand-yellow hover:bg-brand-cream/30 text-brand-primary'
                           }
                        `}
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-lg">{opt.text}</span>
                            {answers[currentQuestionIndex] === opt.value && <CheckCircle size={20} />}
                        </div>
                    </button>
                ))}
            </div>

            <div className="mt-12 flex justify-end">
                {currentQuestionIndex === questions.length - 1 && Object.keys(answers).length === questions.length ? (
                    <button 
                        onClick={calculateResult}
                        className="px-8 py-3 bg-brand-green text-white rounded-full font-bold hover:bg-emerald-700 shadow-lg transition-colors flex items-center gap-2"
                    >
                        查看结果 <ArrowRight size={18}/>
                    </button>
                ) : (
                    <div className="h-12"></div> 
                )}
            </div>
         </div>
      </main>
    </div>
  );
};

export default TestDetail;
