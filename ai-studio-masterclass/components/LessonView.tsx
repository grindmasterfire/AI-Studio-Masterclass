
import React, { useEffect, useRef, useState } from 'react';
import { Lesson } from '../types';
import { ArrowLeft, CheckCircle, Clock, ExternalLink, BookOpen, Star } from 'lucide-react';
import { AdMobInterstitial } from './AdMobSimulator';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete: () => void;
  isCompleted: boolean;
  isPremium: boolean;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson, onBack, onComplete, isCompleted, isPremium }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    // Reset scroll when lesson changes
    if (contentRef.current) {
        contentRef.current.scrollTo(0, 0);
    }
  }, [lesson]);

  const handleFinishClick = () => {
    if (isCompleted) {
      // If already marked complete, just go back. No ad.
      onComplete(); 
    } else {
      // If Premium, SKIP the ad and complete instantly.
      if (isPremium) {
        onComplete();
      } else {
        // If Free, show Ad first.
        setShowAd(true);
      }
    }
  };

  const handleAdClose = () => {
    setShowAd(false);
    // CRITICAL: We only grant the completion AFTER the ad is closed.
    onComplete(); 
  };

  return (
    <div className="h-full flex flex-col bg-white absolute inset-0 z-50">
      
      {/* HEADER */}
      <div className="p-4 border-b border-slate-100 bg-white/80 backdrop-blur-md flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
           <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
           <h2 className="text-sm font-bold text-slate-900 truncate">{lesson.title}</h2>
           <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
             <Clock size={10} /> {lesson.duration} Read
           </p>
        </div>
        {isPremium && (
           <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
              <Star size={10} fill="currentColor" /> PRO
           </div>
        )}
      </div>

      {/* CONTENT */}
      <div ref={contentRef} className="flex-1 overflow-y-auto p-6 bg-white pb-24">
         <div 
           className="prose prose-slate prose-sm max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600"
           dangerouslySetInnerHTML={{ __html: lesson.content }}
         />

         {/* RESOURCES SECTION */}
         {lesson.resources && lesson.resources.length > 0 && (
            <div className="mt-8 pt-8 border-t border-slate-100">
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <BookOpen size={14} /> Deep Dive Resources
               </h3>
               <div className="grid gap-2">
                  {lesson.resources.map((res, idx) => (
                     <a 
                       key={idx}
                       href={res.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors group"
                     >
                        <span className="font-medium text-slate-700 group-hover:text-blue-700 text-sm">{res.title}</span>
                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500" />
                     </a>
                  ))}
               </div>
            </div>
         )}
      </div>

      {/* FOOTER - FIXED AT BOTTOM */}
      <div className="p-4 border-t border-slate-100 bg-white/95 backdrop-blur absolute bottom-0 left-0 right-0 z-20">
        <button 
          onClick={handleFinishClick}
          disabled={isCompleted}
          className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg ${
            isCompleted 
              ? 'bg-green-100 text-green-700 cursor-default border border-green-200 shadow-none' 
              : 'bg-blue-600 hover:bg-blue-500 text-white hover:scale-[1.02] shadow-blue-500/30'
          }`}
        >
          {isCompleted ? (
             <>
               <CheckCircle size={18} /> LESSON COMPLETE
             </>
          ) : (
             isPremium ? "MARK AS COMPLETE (INSTANT)" : "MARK AS COMPLETE"
          )}
        </button>
      </div>

      {/* INTERSTITIAL AD OVERLAY */}
      <AdMobInterstitial isOpen={showAd} onClose={handleAdClose} />

    </div>
  );
};
