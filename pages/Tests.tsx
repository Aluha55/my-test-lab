import React, { useState } from 'react';
import TestCard from '../components/TestCard';
import { MOCK_TESTS } from '../services/testService';
import { Search } from 'lucide-react';

const Tests: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('All');

  const filteredTests = MOCK_TESTS.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = category === 'All' || test.topic === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-10 pb-24 px-6 bg-brand-bg">
       <div className="max-w-7xl mx-auto">
         
         {/* Header */}
         <div className="text-center max-w-2xl mx-auto mb-16">
           <h1 className="font-display text-4xl font-bold text-brand-primary mb-6">心理测试库</h1>
           <p className="text-brand-secondary text-lg">
             无论你想了解性格、情绪，还是寻找成长方向，这里都有适合你的科学测评。
           </p>
         </div>

         {/* Filter Bar */}
         <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="搜索测试..." 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-green/20 text-brand-primary"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
               {['All', 'Personality', 'Emotion', 'Career', 'Fun', 'Adult'].map(cat => (
                 <button
                   key={cat}
                   onClick={() => setCategory(cat)}
                   className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all
                     ${category === cat 
                       ? 'bg-brand-primary text-white shadow-lg' 
                       : 'bg-white text-brand-secondary hover:bg-gray-50 border border-gray-100'}
                   `}
                 >
                   {cat === 'All' ? '全部' : cat === 'Adult' ? '成人' : cat}
                 </button>
               ))}
            </div>
         </div>

         {/* Grid */}
         {filteredTests.length > 0 ? (
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredTests.map(test => (
               <TestCard key={test.id} test={test} />
             ))}
           </div>
         ) : (
           <div className="text-center py-20">
             <p className="text-brand-secondary text-lg">未找到相关测试，换个关键词试试？</p>
           </div>
         )}
       </div>
    </div>
  );
};

export default Tests;