
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ViewState, UserProgress, Lesson } from './types';
import { Dashboard } from './components/Dashboard';
import { Simulator } from './components/Simulator';
import { Profile } from './components/Profile';
import { LessonView } from './components/LessonView';
import { CheatSheet } from './components/CheatSheet';
import { LaunchScreen } from './components/LaunchScreen';
import { LayoutDashboard, FlaskConical, User, BookTemplate, Sparkles, ArrowRight, Check } from 'lucide-react';

const INITIAL_PROGRESS: UserProgress = {
  completedLessonIds: [],
  totalXp: 0,
  lastLoginDate: new Date().toISOString(),
  completedChallenges: [],
  isPremium: false,
  hasSeenOnboarding: false
};

function App() {
  const [view, setView] = useState<ViewState>('DASHBOARD');
  const [progress, setProgress] = useState<UserProgress>(INITIAL_PROGRESS);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showLaunch, setShowLaunch] = useState(true); // Default to true to show splash
  
  // SCROLL PRESERVATION REFS
  const dashboardScrollRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Persistence
  useEffect(() => {
    try {
      const saved = localStorage.getItem('masterclass_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        setProgress({ ...INITIAL_PROGRESS, ...parsed }); // Merge to ensure new fields exist
      } else {
        // If no data found, it's a fresh user, so prepare onboarding
        // But wait until Launch Screen is done to set showOnboarding true visually
      }
    } catch (e) { console.error(e); }
  }, []);

  useEffect(() => {
    localStorage.setItem('masterclass_data', JSON.stringify(progress));
  }, [progress]);

  // SCROLL RESTORATION LOGIC
  useLayoutEffect(() => {
    if (view === 'DASHBOARD' && containerRef.current) {
      containerRef.current.scrollTop = dashboardScrollRef.current;
    }
  }, [view]);

  const handleLessonSelect = (lesson: Lesson) => {
    if (containerRef.current) {
      dashboardScrollRef.current = containerRef.current.scrollTop;
    }
    setActiveLesson(lesson);
    setView('LESSON');
  };

  const handleLessonComplete = () => {
    if (activeLesson && !progress.completedLessonIds.includes(activeLesson.id)) {
      setProgress(prev => ({
        ...prev,
        completedLessonIds: [...prev.completedLessonIds, activeLesson.id],
        totalXp: prev.totalXp + activeLesson.xpReward
      }));
    }
    setView('DASHBOARD');
    setActiveLesson(null);
  };

  const handleChallengeComplete = (id: string, xp: number) => {
    if (!progress.completedChallenges.includes(id)) {
       setProgress(prev => ({
          ...prev,
          completedChallenges: [...prev.completedChallenges, id],
          totalXp: prev.totalXp + xp
       }));
    }
  };

  const handleUpgrade = () => {
    setProgress(prev => ({ ...prev, isPremium: true }));
  };

  const handleReset = () => {
    localStorage.removeItem('masterclass_data');
    setProgress(INITIAL_PROGRESS);
    setView('DASHBOARD');
    setShowOnboarding(true);
  };

  // BACKUP & RESTORE HANDLERS
  const handleImport = (data: UserProgress) => {
    setProgress(data);
    localStorage.setItem('masterclass_data', JSON.stringify(data));
    alert("Progress Restored Successfully!");
  };

  const closeOnboarding = () => {
    setShowOnboarding(false);
    setProgress(prev => ({ ...prev, hasSeenOnboarding: true }));
  };

  const handleLaunchComplete = () => {
    setShowLaunch(false);
    // Only show onboarding if they haven't seen it yet
    if (!progress.hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 flex flex-col items-center">
      
      {/* LAUNCH SCREEN OVERLAY */}
      {showLaunch && <LaunchScreen onComplete={handleLaunchComplete} />}

      <main className="w-full max-w-md bg-white min-h-screen shadow-2xl relative flex flex-col border-x border-slate-200">
        
        {/* VIEW ROUTER */}
        <div ref={containerRef} className="flex-1 relative overflow-y-auto overflow-x-hidden bg-slate-50 scroll-smooth">
           {view === 'DASHBOARD' && (
              <div className="p-4 min-h-full pb-20">
                 <Dashboard progress={progress} onSelectLesson={handleLessonSelect} />
              </div>
           )}

           {view === 'LESSON' && activeLesson && (
              <LessonView 
                lesson={activeLesson} 
                onBack={() => setView('DASHBOARD')}
                onComplete={handleLessonComplete}
                isCompleted={progress.completedLessonIds.includes(activeLesson.id)}
                isPremium={progress.isPremium}
              />
           )}

           {view === 'SIMULATOR' && (
             <div className="h-full">
                <Simulator 
                    onChallengeComplete={handleChallengeComplete} 
                    completedChallenges={progress.completedChallenges} 
                />
             </div>
           )}

           {view === 'CHEATSHEET' && <div className="h-full"><CheatSheet /></div>}

           {view === 'PROFILE' && (
              <div className="min-h-full">
                  <Profile 
                    progress={progress} 
                    onReset={handleReset} 
                    onUpgrade={handleUpgrade}
                    onImport={handleImport}
                  />
              </div>
           )}
        </div>

        {/* BOTTOM NAV */}
        {view !== 'LESSON' && (
          <nav className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 px-6 py-3 pb-6 flex justify-between items-center z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
              <button 
                onClick={() => setView('DASHBOARD')}
                className={`flex flex-col items-center gap-1 transition-all duration-300 ${view === 'DASHBOARD' ? 'text-blue-600 -translate-y-1' : 'text-slate-400 hover:text-slate-600'}`}
              >
                  <LayoutDashboard size={24} className={view === 'DASHBOARD' ? 'fill-blue-100' : ''} />
                  <span className="text-[10px] font-bold">Guide</span>
              </button>

              <button 
                onClick={() => setView('CHEATSHEET')}
                className={`flex flex-col items-center gap-1 transition-all duration-300 ${view === 'CHEATSHEET' ? 'text-blue-600 -translate-y-1' : 'text-slate-400 hover:text-slate-600'}`}
              >
                  <BookTemplate size={24} className={view === 'CHEATSHEET' ? 'fill-blue-100' : ''} />
                  <span className="text-[10px] font-bold">Cheats</span>
              </button>
              
              <button 
                onClick={() => setView('SIMULATOR')}
                className={`flex flex-col items-center gap-1 transition-all duration-300 ${view === 'SIMULATOR' ? 'text-blue-600 -translate-y-1' : 'text-slate-400 hover:text-slate-600'}`}
              >
                  <FlaskConical size={24} className={view === 'SIMULATOR' ? 'fill-blue-100' : ''} />
                  <span className="text-[10px] font-bold">Lab</span>
              </button>

              <button 
                onClick={() => setView('PROFILE')}
                className={`flex flex-col items-center gap-1 transition-all duration-300 ${view === 'PROFILE' ? 'text-blue-600 -translate-y-1' : 'text-slate-400 hover:text-slate-600'}`}
              >
                  <User size={24} className={view === 'PROFILE' ? 'fill-blue-100' : ''} />
                  <span className="text-[10px] font-bold">Me</span>
              </button>
          </nav>
        )}

        {/* ONBOARDING MODAL */}
        {showOnboarding && !showLaunch && (
           <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-500">
              <div className="bg-white w-full max-w-sm rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-10 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 
                 <div className="relative z-10 text-center">
                    <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                       <Sparkles size={40} className="text-blue-600 animate-pulse" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome to the Future</h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                       This isn't just a tutorial. It's an interactive operating manual for <strong>Google AI Studio</strong>. 
                       <br/><br/>
                       We will take you from "Chatbot User" to "AI Architect" in 24 lessons.
                    </p>

                    <div className="space-y-3 mb-8 text-left">
                       <div className="flex items-center gap-3 text-sm text-slate-700">
                          <div className="bg-green-100 text-green-600 p-1 rounded-full"><Check size={12} strokeWidth={4} /></div>
                          <span>Master the Interface</span>
                       </div>
                       <div className="flex items-center gap-3 text-sm text-slate-700">
                          <div className="bg-green-100 text-green-600 p-1 rounded-full"><Check size={12} strokeWidth={4} /></div>
                          <span>Learn Zero-Backend Code</span>
                       </div>
                       <div className="flex items-center gap-3 text-sm text-slate-700">
                          <div className="bg-green-100 text-green-600 p-1 rounded-full"><Check size={12} strokeWidth={4} /></div>
                          <span>Monetize & Launch</span>
                       </div>
                    </div>

                    <button 
                       onClick={closeOnboarding}
                       className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                    >
                       START TRAINING <ArrowRight size={18} />
                    </button>
                 </div>
              </div>
           </div>
        )}

      </main>
    </div>
  );
}

export default App;
