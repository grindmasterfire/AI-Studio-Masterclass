

import React, { useState } from 'react';
import { Module, Lesson, UserProgress } from '../types';
import { CURRICULUM } from '../lib/data';
import { AdMobBanner } from './AdMobSimulator';
import { Layout, Cpu, Sliders, CheckCircle2, Circle, Zap, Network, Award, Star, Hammer, DollarSign, SlidersHorizontal, Shield, Briefcase, Server, Blocks, Rocket, Code, Terminal, LifeBuoy, Globe, PenTool, Lock, Scale, ShieldAlert, Share2, Compass, Search, X, Flag } from 'lucide-react';

interface DashboardProps {
  progress: UserProgress;
  onSelectLesson: (lesson: Lesson) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ progress, onSelectLesson }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Layout': return <Layout size={24} className="text-blue-500" />;
      case 'Cpu': return <Cpu size={24} className="text-purple-500" />;
      case 'Sliders': return <Sliders size={24} className="text-orange-500" />;
      case 'Network': return <Network size={24} className="text-emerald-500" />;
      case 'Zap': return <Zap size={24} className="text-yellow-500" />;
      case 'Shield': return <Shield size={24} className="text-red-500" />;
      case 'SlidersHorizontal': return <SlidersHorizontal size={24} className="text-indigo-500" />;
      case 'Briefcase': return <Briefcase size={24} className="text-slate-500" />;
      case 'Hammer': return <Hammer size={24} className="text-cyan-500" />;
      case 'DollarSign': return <DollarSign size={24} className="text-green-500" />;
      case 'Server': return <Server size={24} className="text-slate-700" />;
      case 'Blocks': return <Blocks size={24} className="text-violet-500" />;
      case 'Rocket': return <Rocket size={24} className="text-pink-500" />;
      case 'Code': return <Code size={24} className="text-gray-600" />;
      case 'Terminal': return <Terminal size={24} className="text-black" />;
      case 'LifeBuoy': return <LifeBuoy size={24} className="text-red-400" />;
      case 'Globe': return <Globe size={24} className="text-teal-500" />;
      case 'PenTool': return <PenTool size={24} className="text-fuchsia-500" />;
      case 'Lock': return <Lock size={24} className="text-zinc-600" />;
      case 'Scale': return <Scale size={24} className="text-amber-700" />;
      case 'ShieldAlert': return <ShieldAlert size={24} className="text-rose-600" />;
      case 'Share2': return <Share2 size={24} className="text-blue-400" />;
      case 'Compass': return <Compass size={24} className="text-sky-500" />;
      case 'Flag': return <Flag size={24} className="text-orange-600" />;
      default: return <Layout size={24} />;
    }
  };

  const totalLessons = CURRICULUM.reduce((acc, mod) => acc + mod.lessons.length, 0);
  const completedCount = progress.completedLessonIds.length;
  const percentage = Math.round((completedCount / totalLessons) * 100);

  // Calculate Rank based on XP
  const getRank = (xp: number) => {
    if (xp < 500) return { title: 'Novice Cadet', color: 'text-slate-600', bg: 'bg-slate-100', icon: Award };
    if (xp < 1500) return { title: 'Prompt Engineer', color: 'text-blue-600', bg: 'bg-blue-100', icon: Zap };
    if (xp < 3000) return { title: 'System Architect', color: 'text-purple-600', bg: 'bg-purple-100', icon: Network };
    return { title: 'Grandmaster', color: 'text-yellow-600', bg: 'bg-yellow-100', icon: Star };
  };

  const rank = getRank(progress.totalXp);
  const RankIcon = rank.icon;

  // Search Logic
  const filteredCurriculum = searchQuery.trim() === '' 
    ? CURRICULUM 
    : CURRICULUM.map(mod => ({
        ...mod,
        lessons: mod.lessons.filter(l => 
          l.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          mod.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(mod => mod.lessons.length > 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-24 relative">
      
      {/* HEADER CARD */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
         <div className="relative z-10">
            <div className="flex justify-between items-start">
               <div>
                  <h1 className="text-2xl font-bold text-slate-900">Builder Academy</h1>
                  <p className="text-slate-500 mt-1 text-sm">Master Google AI Studio.</p>
               </div>
               <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${rank.bg} ${rank.color}`}>
                  <RankIcon size={14} /> {rank.title}
               </div>
            </div>
            
            <div className="mt-6">
               <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-500">COURSE PROGRESS</span>
                  <span className="text-blue-600">{percentage}%</span>
               </div>
               <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
               </div>
            </div>

            <div className="mt-4 flex gap-4 text-xs font-mono text-slate-500">
               <div className="flex items-center gap-1">
                  <Zap size={14} className="text-yellow-500" /> 
                  <span className="font-bold text-slate-700">{progress.totalXp}</span> KP EARNED
               </div>
               <div className="flex items-center gap-1">
                   <Star size={14} className="text-purple-500" />
                   <span className="font-bold text-slate-700">{progress.completedChallenges.length}</span> LABS DONE
               </div>
            </div>
         </div>
         
         {/* Background Decor */}
         <div className="absolute right-0 bottom-0 opacity-5">
            <Layout size={140} className="text-blue-600" />
         </div>
      </div>

      {/* STICKY SEARCH & AD */}
      <div className="sticky top-0 z-30 space-y-2">
         {/* Ad - Only show if NOT premium */}
         {!progress.isPremium && (
            <div className="shadow-md rounded-b-xl overflow-hidden">
               <AdMobBanner />
            </div>
         )}
         
         {/* Search */}
         <div className="relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={18} />
            <input 
               type="text" 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               placeholder="Search lessons (e.g., 'JSON', 'Safety')..." 
               className="w-full bg-white/90 backdrop-blur border border-slate-200 rounded-xl py-3 pl-10 pr-10 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            {searchQuery && (
               <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
               >
                  <X size={18} />
               </button>
            )}
         </div>
      </div>

      {/* CURRICULUM */}
      <div className="space-y-6">
         {filteredCurriculum.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
               <p>No lessons found matching "{searchQuery}"</p>
            </div>
         ) : (
            filteredCurriculum.map((module) => (
               <div key={module.id} className="bg-white/50 rounded-2xl border border-slate-100 p-4 transition-all hover:border-blue-100">
                  <div className="flex items-center gap-3 mb-4 px-2">
                     <div className="p-2 bg-white border border-slate-100 rounded-lg shadow-sm">
                        {getIcon(module.icon)}
                     </div>
                     <div>
                        <h3 className="font-bold text-slate-900">{module.title}</h3>
                        <p className="text-xs text-slate-500">{module.description}</p>
                     </div>
                  </div>

                  <div className="space-y-3">
                     {module.lessons.map((lesson) => {
                        const isDone = progress.completedLessonIds.includes(lesson.id);
                        return (
                           <button
                              key={lesson.id}
                              onClick={() => onSelectLesson(lesson)}
                              className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                                 isDone 
                                    ? 'bg-slate-50 border-slate-200 opacity-70' 
                                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-md hover:scale-[1.01]'
                              }`}
                           >
                              <div>
                                 <h4 className={`font-bold text-sm ${isDone ? 'text-slate-500' : 'text-slate-800 group-hover:text-blue-700'}`}>
                                    {lesson.title}
                                 </h4>
                                 <p className="text-[10px] text-slate-400 mt-1 font-mono">
                                    {lesson.duration} • {lesson.xpReward} KP
                                 </p>
                              </div>
                              
                              <div className={isDone ? 'text-green-500' : 'text-slate-300 group-hover:text-blue-500'}>
                                 {isDone ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                              </div>
                           </button>
                        );
                     })}
                  </div>
               </div>
            ))
         )}
      </div>
    </div>
  );
};
