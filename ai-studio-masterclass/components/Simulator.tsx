


import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, SimulatorSettings, Challenge } from '../types';
import { Send, User, Sparkles, Sliders, Settings, Info, RefreshCw, X, Trophy, CheckCircle2, Play, ChevronDown, ChevronUp, ShieldAlert } from 'lucide-react';

const CHALLENGES: Challenge[] = [
  {
    id: 'chall_pirate',
    title: 'The Pirate Captain',
    description: 'Configure the System Instructions so the AI responds like a Pirate.',
    hint: 'Try adding "You are a pirate" to the System Instruction box.',
    xpReward: 500,
    winCondition: (settings, response) => {
      // Check if response contains pirate words
      const pirateWords = ['arr', 'matey', 'ship', 'sea', 'booty', 'captain', 'ahoy'];
      const lower = response.toLowerCase();
      // Must contain pirate word AND have pirate system instruction
      return settings.systemInstruction.toLowerCase().includes('pirate') && pirateWords.some(w => lower.includes(w));
    }
  },
  {
    id: 'chall_json',
    title: 'The JSON Bot',
    description: 'Force the AI to ONLY output JSON data.',
    hint: 'Tell the system to "Output JSON only" and not use markdown.',
    xpReward: 500,
    winCondition: (settings, response) => {
      const lowerSys = settings.systemInstruction.toLowerCase();
      const trimmed = response.trim();
      return lowerSys.includes('json') && (trimmed.startsWith('{') || trimmed.startsWith('['));
    }
  },
  {
    id: 'chall_teacher',
    title: 'The 5-Year-Old Teacher',
    description: 'Make the AI explain Quantum Physics simply.',
    hint: 'Set System Instruction to "Explain like I am 5".',
    xpReward: 750,
    winCondition: (settings, response) => {
      const lowerSys = settings.systemInstruction.toLowerCase();
      return (lowerSys.includes('5') || lowerSys.includes('child') || lowerSys.includes('kid')) && response.length < 150;
    }
  },
  {
    id: 'chall_lazy',
    title: 'The Lazy Dev (Anti-Cheat)',
    description: 'Prevent the AI from using placeholders like "// ...rest of code".',
    hint: 'Instruct the system to "Always output full files" and "No placeholders".',
    xpReward: 1000,
    winCondition: (settings, response) => {
      const lowerSys = settings.systemInstruction.toLowerCase();
      // Must have instruction to be full/complete/no placeholder
      const hasInstruction = lowerSys.includes('full') || lowerSys.includes('complete') || lowerSys.includes('placeholder');
      // Response must NOT contain lazy markers
      const isNotLazy = !response.includes('// ...');
      return hasInstruction && isNotLazy;
    }
  }
];

interface SimulatorProps {
  onChallengeComplete?: (id: string, xp: number) => void;
  completedChallenges?: string[];
}

export const Simulator: React.FC<SimulatorProps> = ({ onChallengeComplete, completedChallenges = [] }) => {
  // SETTINGS STATE (The "Right Sidebar")
  const [settings, setSettings] = useState<SimulatorSettings>({
    model: 'gemini-1.5-flash',
    temperature: 1.0,
    topK: 64,
    topP: 0.95,
    systemInstruction: ''
  });

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // Mobile toggle
  const [showTrainingMenu, setShowTrainingMenu] = useState(false);
  
  // New UI Toggles
  const [showAdvanced, setShowAdvanced] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    // 1. Add User Message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // 2. SIMULATE RESPONSE based on Settings
    setTimeout(() => {
      const response = generateSimulatedResponse(input, settings);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: response,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);

      // CHECK CHALLENGE WIN CONDITION
      if (activeChallenge) {
         if (activeChallenge.winCondition(settings, response)) {
            // Victory!
            const successMsg: ChatMessage = {
               id: (Date.now() + 2).toString(),
               role: 'system',
               text: `🎉 CHALLENGE COMPLETE! You earned ${activeChallenge.xpReward} XP.`,
               timestamp: Date.now()
            };
            setMessages(prev => [...prev, successMsg]);
            if (onChallengeComplete) onChallengeComplete(activeChallenge.id, activeChallenge.xpReward);
            
            // Celebration delay then reset
            setTimeout(() => {
              setActiveChallenge(null);
            }, 2000);
         }
      }

    }, 1200);
  };

  // THE SIMULATION ENGINE
  // This function fakes how Gemini would respond based on the parameters
  const generateSimulatedResponse = (query: string, config: SimulatorSettings): string => {
    
    // Check System Instruction first
    const sys = config.systemInstruction.toLowerCase();
    
    // 1. Pirate Logic
    if (sys.includes('pirate')) {
      return "Arrr! " + query.split(' ').reverse().join(' ') + " matey! The seas be rough today! 🏴‍☠️";
    }
    
    // 2. JSON Logic
    if (sys.includes('json')) {
       return `{\n  "query": "${query}",\n  "timestamp": ${Date.now()},\n  "status": "success"\n}`;
    }

    // 3. ELI5 Logic
    if (sys.includes('5') || sys.includes('child') || sys.includes('kid')) {
       return "Okay buddy! Imagine your toy box. " + query.substring(0, 10) + "... is like a big bouncy ball!";
    }

    // 4. Lazy Dev Logic (Challenge)
    if (activeChallenge?.id === 'chall_lazy') {
       // If they haven't fixed it, be lazy
       const hasFix = sys.includes('full') || sys.includes('complete') || sys.includes('placeholder');
       if (!hasFix) {
          return `// ... imports\n\nfunction App() {\n  // ... existing code\n  return <div>${query}</div>;\n}`;
       }
       return `import React from 'react';\n\n// FULL FILE GENERATED\nfunction App() {\n  const [data, setData] = useState(null);\n  return <div>${query} - Full Content Loaded.</div>;\n}\nexport default App;`;
    }

    // Default System Acknowledgment
    if (config.systemInstruction.length > 5) {
      return `[System Persona: Active]\n\nI am following your instructions to be: "${config.systemInstruction}".\n\nResponse to "${query}": Affirmative.`;
    }

    // Check Temperature
    if (config.temperature < 0.3) {
      return `[Temp ${config.temperature}]: Precise answer. Logic path A -> B.`;
    }
    if (config.temperature > 1.5) {
      return `[Temp ${config.temperature}]: Woah! Colors are loud today! Did you know "${query}" backwards is "${query.split('').reverse().join('')}"? 🎨✨`;
    }

    // Default
    return `[Model: ${config.model}]\nI received your message: "${query}". \n\nMy temperature is ${config.temperature}, so I am giving a standard, balanced response.`;
  };

  const getTemperatureDescription = (temp: number) => {
    if (temp < 0.3) return "Precise, deterministic, robotic.";
    if (temp < 0.8) return "Balanced, coherent.";
    if (temp < 1.3) return "Creative, playful.";
    return "Random, chaotic, hallucination-prone.";
  };

  return (
    <div className="flex h-full relative bg-slate-50 overflow-hidden">
      
      {/* CENTER: CHAT AREA */}
      <div className="flex-1 flex flex-col h-full relative z-0">
        
        {/* Header */}
        <div className="bg-white p-3 border-b border-slate-200 flex justify-between items-center shadow-sm relative z-10">
          <div className="flex items-center gap-2">
            <button 
               onClick={() => setShowTrainingMenu(!showTrainingMenu)} 
               className={`p-1.5 rounded transition-colors flex items-center gap-2 px-3 ${activeChallenge ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
            >
               <Trophy size={16} />
               {activeChallenge && <span className="text-xs font-bold">ACTIVE</span>}
            </button>
            <div>
               <h2 className="text-sm font-bold text-slate-800">
                  {activeChallenge ? activeChallenge.title : 'Sandbox Mode'}
               </h2>
               <p className="text-[10px] text-slate-500 font-mono">
                  {activeChallenge ? 'Modify Settings to Win' : `T=${settings.temperature} • ${settings.model}`}
               </p>
            </div>
          </div>
          <button 
            onClick={() => setShowSidebar(!showSidebar)}
            className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
          >
             <Settings size={20} />
          </button>
        </div>

        {/* Training Menu Dropdown */}
        {showTrainingMenu && (
           <div className="absolute top-14 left-0 w-full bg-white border-b border-slate-200 shadow-xl z-20 p-4 animate-in slide-in-from-top-2">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="font-bold text-slate-700">Select Challenge</h3>
                 <button onClick={() => setShowTrainingMenu(false)}><X size={18} className="text-slate-400"/></button>
              </div>
              <div className="grid gap-3 max-h-[60vh] overflow-y-auto">
                 <button 
                    onClick={() => { setActiveChallenge(null); setShowTrainingMenu(false); }}
                    className={`p-3 rounded-xl border text-left ${!activeChallenge ? 'bg-blue-50 border-blue-500' : 'bg-white border-slate-200'}`}
                 >
                    <div className="font-bold text-sm">Sandbox (Free Play)</div>
                    <div className="text-xs text-slate-500">Just experiment with no goals.</div>
                 </button>
                 
                 {CHALLENGES.map(chall => {
                    const isCompleted = completedChallenges.includes(chall.id);
                    return (
                       <button
                          key={chall.id}
                          onClick={() => { setActiveChallenge(chall); setShowTrainingMenu(false); }}
                          className={`p-3 rounded-xl border text-left flex justify-between items-center group transition-colors ${activeChallenge?.id === chall.id ? 'bg-yellow-50 border-yellow-500' : 'bg-white border-slate-200 hover:border-blue-300'}`}
                       >
                          <div>
                             <div className="font-bold text-sm flex items-center gap-2">
                                {chall.title}
                                {isCompleted && <CheckCircle2 size={14} className="text-green-500"/>}
                             </div>
                             <div className="text-xs text-slate-500">{chall.description}</div>
                          </div>
                          <div className={`text-xs font-bold ${isCompleted ? 'text-green-600' : 'text-blue-600'}`}>
                             {isCompleted ? 'DONE' : `+${chall.xpReward} XP`}
                          </div>
                       </button>
                    );
                 })}
              </div>
           </div>
        )}

        {/* System Instruction Banner */}
        {settings.systemInstruction && (
           <div className="bg-slate-50 p-2 text-xs text-slate-500 border-b border-slate-200 truncate px-4 flex items-center gap-2">
              <Settings size={12} />
              <span className="font-bold text-slate-700">System:</span> 
              <span className="italic">"{settings.systemInstruction}"</span>
           </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
             <div className="h-full flex flex-col items-center justify-center text-slate-400">
                {!activeChallenge ? (
                   <div className="w-full max-w-xs space-y-4">
                      <div className="text-center">
                        <Sparkles size={48} className="mx-auto mb-2 text-blue-300" />
                        <h3 className="text-lg font-bold text-slate-700">The Lab</h3>
                        <p className="text-sm text-slate-500 mb-6">Experiment with Gemini settings or train in the Prompt Gym.</p>
                      </div>

                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Prompt Gym</p>
                      {CHALLENGES.map(chall => {
                        const isCompleted = completedChallenges.includes(chall.id);
                        return (
                           <button 
                             key={chall.id}
                             onClick={() => setActiveChallenge(chall)}
                             className="w-full p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 hover:border-blue-400 hover:shadow-sm transition-all text-left"
                           >
                              <div className={`p-2 rounded-full ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-500'}`}>
                                 {isCompleted ? <CheckCircle2 size={16} /> : <Play size={16} />}
                              </div>
                              <div>
                                 <div className="font-bold text-sm text-slate-800">{chall.title}</div>
                                 <div className="text-xs text-slate-500">+ {chall.xpReward} XP</div>
                              </div>
                           </button>
                        );
                      })}
                   </div>
                ) : (
                   <div className="text-center opacity-60">
                      <Trophy size={48} className="mx-auto mb-2 text-yellow-500" />
                      <p className="text-sm px-6 max-w-xs leading-relaxed font-bold text-slate-600">
                         Mission: {activeChallenge.description}
                      </p>
                      <p className="text-xs text-slate-400 mt-2">{activeChallenge.hint}</p>
                   </div>
                )}
             </div>
          )}
          
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2`}>
               <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' : msg.role === 'system' ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                  {msg.role === 'ai' ? <Sparkles size={14} /> : msg.role === 'system' ? <Trophy size={14} /> : <User size={14} />}
               </div>
               <div className={`p-3 rounded-2xl text-sm max-w-[85%] leading-relaxed shadow-sm ${
                  msg.role === 'ai' 
                  ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-none' 
                  : msg.role === 'system'
                  ? 'bg-green-50 border border-green-200 text-green-800 font-bold'
                  : 'bg-blue-600 text-white rounded-tr-none'
               }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
               </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex gap-2 items-center text-xs text-slate-400 ml-12 animate-pulse">
                <RefreshCw size={12} className="animate-spin" /> Gemini is thinking...
             </div>
          )}
          <div ref={scrollRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-200 pb-24 md:pb-4">
           <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={activeChallenge ? "Test your prompt..." : "Type message..."}
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 pl-5 pr-12 focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-1 top-1 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:bg-slate-300"
              >
                 <Send size={16} />
              </button>
           </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR (SETTINGS) */}
      <div className={`
        fixed inset-y-0 right-0 w-80 bg-white border-l border-slate-200 transform transition-transform duration-300 z-20 shadow-xl md:relative md:transform-none md:shadow-none flex flex-col
        ${showSidebar ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
         <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
            <h3 className="font-bold text-slate-700 flex items-center gap-2">
               <Sliders size={18} /> Model Configuration
            </h3>
            <button onClick={() => setShowSidebar(false)} className="md:hidden text-slate-400">
               <X size={20} />
            </button>
         </div>

         <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {activeChallenge && (
               <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg mb-4 animate-in zoom-in">
                  <div className="flex items-center gap-2 mb-1">
                     <Trophy size={14} className="text-yellow-600"/>
                     <span className="text-xs font-bold text-yellow-700">ACTIVE CHALLENGE</span>
                  </div>
                  <p className="text-xs text-yellow-800 leading-tight mb-2">
                     {activeChallenge.description}
                  </p>
                  <div className="bg-white/50 p-2 rounded text-[10px] text-yellow-800/70 italic border border-yellow-200">
                     Hint: {activeChallenge.hint}
                  </div>
               </div>
            )}

            {/* SYSTEM INSTRUCTION */}
            <div className="space-y-2">
               <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                  System Instructions {activeChallenge && <span className="text-blue-500 animate-pulse">●</span>}
               </label>
               <textarea 
                 value={settings.systemInstruction}
                 onChange={(e) => setSettings(prev => ({ ...prev, systemInstruction: e.target.value }))}
                 className="w-full h-32 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-blue-500 resize-none font-mono focus:ring-2 ring-blue-100 transition-all"
                 placeholder="You are a helpful assistant..."
               />
               <p className="text-[10px] text-slate-400">Give the AI a persona or rules.</p>
            </div>

            {/* MODEL */}
            <div className="space-y-2">
               <label className="text-xs font-bold text-slate-500 uppercase">Model</label>
               <div className="relative">
                  <select 
                    value={settings.model}
                    onChange={(e) => setSettings(prev => ({ ...prev, model: e.target.value as any }))}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:border-blue-500 appearance-none"
                  >
                     <option value="gemini-1.5-flash">Gemini 1.5 Flash (Fast)</option>
                     <option value="gemini-1.5-pro">Gemini 1.5 Pro (Smart)</option>
                     <option value="gemini-1.0-pro">Gemini 1.0 Pro (Legacy)</option>
                  </select>
                  <div className="absolute right-3 top-3 pointer-events-none text-slate-400">
                     <Settings size={14} />
                  </div>
               </div>
            </div>

            {/* TEMPERATURE */}
            <div className="space-y-3">
               <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-500 uppercase">Temperature</label>
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                     {settings.temperature.toFixed(1)}
                  </span>
               </div>
               <input 
                 type="range" 
                 min="0" max="2" step="0.1"
                 value={settings.temperature}
                 onChange={(e) => setSettings(prev => ({ ...prev, temperature: parseFloat(e.target.value) }))}
                 className="w-full accent-blue-600 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
               />
               <p className="text-[10px] text-slate-500 bg-slate-50 p-2 rounded border border-slate-100 leading-relaxed">
                  <Info size={10} className="inline mr-1 text-blue-500" />
                  {getTemperatureDescription(settings.temperature)}
               </p>
            </div>

            {/* ADVANCED SETTINGS TOGGLE */}
            <div className="pt-2 border-t border-slate-100">
               <button 
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="w-full flex items-center justify-between p-2 hover:bg-slate-50 rounded text-slate-600 text-xs font-bold"
               >
                  <span>Advanced Settings</span>
                  {showAdvanced ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
               </button>

               {showAdvanced && (
                  <div className="space-y-4 pt-4 animate-in slide-in-from-top-2">
                     
                     {/* SAFETY SETTINGS */}
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                           <ShieldAlert size={12} /> Safety Filters
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                           {['Harassment', 'Hate Speech', 'Explicit', 'Dangerous'].map(f => (
                              <div key={f} className="text-[10px] bg-slate-50 border border-slate-200 p-2 rounded flex justify-between items-center text-slate-500">
                                 <span>{f}</span>
                                 <span className="text-orange-500 font-bold">BLOCK</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* TOP-P */}
                     <div className="space-y-2">
                        <div className="flex justify-between">
                           <label className="text-xs font-bold text-slate-500 uppercase">Top P</label>
                           <span className="text-xs font-mono text-purple-600">{settings.topP}</span>
                        </div>
                        <input 
                          type="range" min="0" max="1" step="0.05"
                          value={settings.topP}
                          onChange={(e) => setSettings(prev => ({ ...prev, topP: parseFloat(e.target.value) }))}
                          className="w-full accent-purple-600 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        />
                     </div>

                     {/* TOP-K */}
                     <div className="space-y-2">
                        <div className="flex justify-between">
                           <label className="text-xs font-bold text-slate-500 uppercase">Top K</label>
                           <span className="text-xs font-mono text-indigo-600">{settings.topK}</span>
                        </div>
                        <input 
                          type="range" min="1" max="100" step="1"
                          value={settings.topK}
                          onChange={(e) => setSettings(prev => ({ ...prev, topK: parseInt(e.target.value) }))}
                          className="w-full accent-indigo-600 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        />
                     </div>
                  </div>
               )}
            </div>

         </div>
      </div>

    </div>
  );
};