import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { TestData } from '../types';

interface Props {
  test: TestData;
}

const TestCard: React.FC<Props> = ({ test }) => {
  // REMOVED: All error state logic that was hiding the image.
  // Now, if the image path is wrong, the browser will show a broken image icon.
  // This helps confirm if the path is actually being attempted.

  return (
    <Link to={`/tests/${test.slug}`} className="group h-full">
      <article className="h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-transparent hover:border-brand-yellow/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col">
        
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-brand-cream">
            <img 
              src={test.image} 
              alt={test.title} 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-700"
            />
          
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-green shadow-sm flex items-center gap-1 z-10">
            <Tag size={12} />
            {test.topic === 'Adult' ? '成人' : test.topic}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-display font-bold text-xl text-brand-primary mb-3 group-hover:text-brand-green transition-colors">
            {test.title}
          </h3>
          <p className="text-brand-secondary text-sm leading-relaxed mb-6 line-clamp-2">
            {test.description}
          </p>
          
          <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={14} />
              {test.duration}
            </div>
            <span className="flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:translate-x-1 transition-transform duration-300">
              开始测试 <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TestCard;