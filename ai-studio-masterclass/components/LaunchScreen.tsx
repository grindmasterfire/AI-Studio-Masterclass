
import React, { useEffect, useState } from 'react';
import { Sparkles, Cpu } from 'lucide-react';

interface LaunchScreenProps {
  onComplete: () => void;
}

export const LaunchScreen: React.FC<LaunchScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2500); // Show for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Background Pulse */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="relative">
           <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 animate-pulse"></div>
           <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-2xl relative">
              <Sparkles size={64} className="text-blue-500" />
           </div>
        </div>

        <div className="text-center space-y-2">
           <h1 className="text-3xl font-bold text-white tracking-tight font-display">
             AI Studio <span className="text-blue-500">Masterclass</span>
           </h1>
           <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-mono tracking-widest uppercase">
              <Cpu size={12} />
              <span>Powered by CipherWorks</span>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 text-slate-600 text-[10px] font-mono">
         INITIALIZING PROTOCOL v1.0
      </div>
    </div>
  );
};
