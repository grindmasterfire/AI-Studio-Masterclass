
import React, { useState, useRef } from 'react';
import { UserProgress } from '../types';
import { Trash2, BookOpen, ExternalLink, User, Globe, Linkedin, Award, Download, Check, Info, Star, CreditCard, Play, Upload, Save } from 'lucide-react';

interface ProfileProps {
  progress: UserProgress;
  onReset: () => void;
  onUpgrade: () => void;
  onImport: (data: UserProgress) => void;
}

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'jp', label: '日本語', flag: '🇯🇵' },
];

export const Profile: React.FC<ProfileProps> = ({ progress, onReset, onUpgrade, onImport }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isCertified = progress.totalXp > 500; 

  const handleLinkedInAdd = () => {
    const certName = "AI Studio Certified Architect";
    const orgName = "Mintara Cloud Academy";
    const issueYear = new Date().getFullYear();
    const issueMonth = new Date().getMonth() + 1;
    const certUrl = window.location.href; 

    // Construct LinkedIn Add-to-Profile URL
    const linkedinUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(certName)}&organizationName=${encodeURIComponent(orgName)}&issueYear=${issueYear}&issueMonth=${issueMonth}&certUrl=${encodeURIComponent(certUrl)}`;

    window.open(linkedinUrl, '_blank');
  };

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setShowLangMenu(false);
  };

  const handleBuyPremium = (method: 'CARD' | 'POINTS') => {
    setIsUpgrading(true);
    setTimeout(() => {
      onUpgrade();
      setIsUpgrading(false);
      alert(method === 'CARD' ? "Payment Successful! Ads Removed." : "Google Play Points Redeemed! Ads Removed.");
    }, 1500);
  };

  // BACKUP FUNCTIONALITY
  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(progress));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "mintara_save_file.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      fileReader.readAsText(event.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        try {
          if (e.target?.result) {
            const parsed = JSON.parse(e.target.result as string);
            // Basic validation
            if (parsed.totalXp !== undefined && Array.isArray(parsed.completedLessonIds)) {
               onImport(parsed);
            } else {
               alert("Invalid Save File");
            }
          }
        } catch (err) {
          alert("Error parsing save file");
        }
      };
    }
  };

  return (
    <div className="p-6 space-y-6 pb-24 animate-in fade-in">
       
       {/* User Card */}
       <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${progress.isPremium ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>
               {progress.isPremium ? <Star size={32} fill="currentColor" /> : <User size={32} />}
            </div>
            <div>
               <h2 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                  Student {progress.isPremium && <span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded-full border border-yellow-200">PRO</span>}
               </h2>
               <p className="text-xs text-slate-500 font-mono">XP EARNED: {progress.totalXp}</p>
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
               <Globe size={18} />
               <span className="text-xs font-bold">{LANGUAGES.find(l => l.code === currentLang)?.flag}</span>
            </button>

            {showLangMenu && (
              <div className="absolute right-0 top-12 w-48 bg-white rounded-xl border border-slate-200 shadow-xl z-20 overflow-hidden">
                <div className="bg-slate-50 p-2 text-[10px] text-slate-500 border-b border-slate-100 flex items-center gap-1">
                   <Info size={10} /> Zero-Backend Switcher
                </div>
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-slate-50 transition-colors ${currentLang === lang.code ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-600'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span> {lang.label}
                    </span>
                    {currentLang === lang.code && <Check size={14} />}
                  </button>
                ))}
              </div>
            )}
          </div>
       </div>

       {/* PREMIUM UPGRADE CARD (Only show if not premium) */}
       {!progress.isPremium && (
         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:scale-110 transition-transform duration-500">
               <Star size={120} fill="white" />
            </div>
            
            <div className="relative z-10">
               <h3 className="text-xl font-bold font-display mb-1">Remove Ads & Go Pro</h3>
               <p className="text-blue-100 text-xs mb-4 max-w-[200px]">Unlock uninterrupted learning and support the CipherWorks protocol.</p>
               
               <div className="space-y-3">
                  <button 
                     onClick={() => handleBuyPremium('CARD')}
                     disabled={isUpgrading}
                     className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold text-sm shadow-md hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                  >
                     {isUpgrading ? 'PROCESSING...' : <><CreditCard size={16} /> UPGRADE FOR $4.99</>}
                  </button>
                  
                  <button 
                     onClick={() => handleBuyPremium('POINTS')}
                     disabled={isUpgrading}
                     className="w-full py-3 bg-black/20 hover:bg-black/30 text-white border border-white/20 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                     <Play size={14} fill="currentColor" /> USE 250 PLAY POINTS
                  </button>
               </div>
            </div>
         </div>
       )}

       {/* Certification Card */}
       <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Award size={100} />
          </div>
          
          <div className="relative z-10 space-y-4">
             <div>
                <h3 className="text-lg font-display font-bold flex items-center gap-2 text-yellow-400">
                   <Award size={20} /> OFFICIAL CERTIFICATION
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                   {isCertified ? "Congratulations! You are eligible for certification." : "Complete more lessons to unlock your badge."}
                </p>
             </div>

             {isCertified ? (
               <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={handleLinkedInAdd}
                    className="w-full py-3 bg-[#0077b5] hover:bg-[#006396] text-white rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                     <Linkedin size={18} /> ADD TO LINKEDIN
                  </button>
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                     <Download size={18} /> DOWNLOAD PDF
                  </button>
               </div>
             ) : (
               <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-700">
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                     <span>PROGRESS</span>
                     <span>{progress.totalXp} / 500 XP</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                     <div className="h-full bg-yellow-500" style={{ width: `${Math.min(100, (progress.totalXp / 500) * 100)}%` }}></div>
                  </div>
               </div>
             )}
          </div>
       </div>

       {/* DATA BACKUP & RESTORE */}
       <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Save Data (Zero-Backend)</h3>
          
          <div className="grid grid-cols-2 gap-3">
             <button 
               onClick={handleExport}
               className="p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-colors flex flex-col items-center gap-2"
             >
                <Save size={20} className="text-blue-600" />
                <span className="text-xs font-bold text-slate-700">Backup Progress</span>
             </button>

             <button 
               onClick={() => fileInputRef.current?.click()}
               className="p-4 bg-white border border-slate-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-colors flex flex-col items-center gap-2 relative"
             >
                <Upload size={20} className="text-purple-600" />
                <span className="text-xs font-bold text-slate-700">Restore Progress</span>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept=".json"
                />
             </button>
          </div>
          <p className="text-[10px] text-slate-400 text-center px-4">
             Your data lives in this browser. If you clear cookies or change phones, you lose it unless you Backup first.
          </p>
       </div>

       {/* Links */}
       <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Resources</h3>
          
          <a href="https://aistudio.google.com" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 transition-colors group">
             <div className="flex items-center gap-3">
                <ExternalLink size={18} className="text-slate-400 group-hover:text-blue-500" />
                <span className="font-medium text-slate-700">Open Google AI Studio</span>
             </div>
          </a>

          <a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 transition-colors group">
             <div className="flex items-center gap-3">
                <BookOpen size={18} className="text-slate-400 group-hover:text-blue-500" />
                <span className="font-medium text-slate-700">Documentation</span>
             </div>
          </a>
       </div>

       {/* Danger Zone */}
       <div className="pt-8">
          <button 
             onClick={() => {
                if(confirm("Are you sure? This will delete all progress and badges.")) onReset();
             }}
             className="w-full p-4 flex items-center justify-center gap-2 text-red-500 bg-red-50 hover:bg-red-100 rounded-xl transition-colors font-medium text-sm"
          >
             <Trash2 size={16} /> Factory Reset App
          </button>
       </div>
       
    </div>
  );
};
