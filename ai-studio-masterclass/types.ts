
export const ViewState = {
  DASHBOARD: 'DASHBOARD',
  LESSON: 'LESSON',
  SIMULATOR: 'SIMULATOR',
  CHEATSHEET: 'CHEATSHEET',
  PROFILE: 'PROFILE'
} as const;

export type ViewState = typeof ViewState[keyof typeof ViewState];

export interface Resource {
  title: string;
  url: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: string; // HTML/Markdown string
  xpReward: number;
  resources?: Resource[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  lessons: Lesson[];
}

export interface UserProgress {
  completedLessonIds: string[];
  totalXp: number;
  lastLoginDate: string;
  completedChallenges: string[];
  isPremium: boolean;
  hasSeenOnboarding: boolean; 
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai' | 'system';
  text: string;
  timestamp: number;
}

export interface SimulatorSettings {
  model: 'gemini-1.5-flash' | 'gemini-1.5-pro' | 'gemini-1.0-pro';
  temperature: number;
  topK: number;
  topP: number;
  systemInstruction: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  hint: string;
  winCondition: (settings: SimulatorSettings, lastResponse: string) => boolean;
  xpReward: number;
}
