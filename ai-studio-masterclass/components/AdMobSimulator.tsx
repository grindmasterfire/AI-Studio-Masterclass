
import React, { useState, useEffect } from 'react';
import { X, Info, Lock } from 'lucide-react';

/**
 * ADMOB SIMULATOR
 * 
 * In production, you would replace this logic with calls to:
 * import { AdMob, AdOptions } from '@capacitor-community/admob';
 */

interface AdMobBannerProps {
  adUnitId?: string;
}

export const AdMobBanner: React.FC<AdMobBannerProps> = ({ adUnitId = 'ca-app-pub-3940256099942544/6300978111' }) => {
  return (
    <div className="w-full h-[50px] bg-[#f1f1f1] border-t border-gray-300 flex items-center justify-between px-4 relative overflow-hidden select-none">
      <div className="flex items-center gap-2">
        <div className="bg-[#006621] text-white text-[10px] font-bold px-1 rounded-[2px]">Ad</div>
        <div className="flex flex-col">
           <span className="text-[10px] text-gray-500 font-bold">Google AdMob Test Mode</span>
           <span className="text-[9px] text-gray-400">Nice to meet you, developer!</span>
        </div>
      </div>
      <div className="text-gray-300">
         <Info size={14} />
      </div>
      {/* Simulation of ad loading shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite] pointer-events-none"></div>
    </div>
  );
};

interface AdMobInterstitialProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdMobInterstitial: React.FC<AdMobInterstitialProps> = ({ isOpen, onClose }) => {
  const [canClose, setCanClose] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (isOpen) {
      setCanClose(false);
      setTimeLeft(5);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanClose(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Z-INDEX 100 to block everything
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white animate-in fade-in duration-200">
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20">
        <div className="flex items-center gap-2 opacity-70">
           <div className="bg-[#006621] text-white text-[10px] font-bold px-1 rounded-[2px]">Ad</div>
           <span className="text-xs font-mono">{timeLeft > 0 ? `Reward in ${timeLeft}s` : 'Reward Granted'}</span>
        </div>
        
        {/* CLOSE BUTTON - ONLY RENDERS IF CANCLOSE IS TRUE */}
        {canClose ? (
          <button 
            onClick={onClose}
            className="bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors animate-in zoom-in duration-300"
          >
            <X size={24} />
          </button>
        ) : (
          <div className="text-slate-500 flex items-center gap-2">
             <Lock size={14} />
             <div className="w-6 h-6 rounded-full border-2 border-slate-700 border-t-white animate-spin"></div>
          </div>
        )}
      </div>

      {/* Ad Content */}
      <div className="w-full max-w-sm aspect-[9/16] bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl border border-white/10">
         <h2 className="text-3xl font-display font-bold mb-4">Install Mintara Today!</h2>
         <p className="mb-8 opacity-80">The AI Masterclass aimed to make you a millionaire. Don't skip the process.</p>
         
         <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg animate-bounce hover:scale-105 transition-transform">
            INSTALL NOW
         </button>
         
         <div className="absolute bottom-4 text-[10px] text-white/50 font-mono">
            Test Ad: ca-app-pub-3940256099942544/1033173712
         </div>
      </div>
    </div>
  );
};
