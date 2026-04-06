import { Flame, Languages } from "lucide-react";

interface ProfileHeaderProps {
  isLearningLanguage: boolean;
  onToggleLanguage: () => void;
}

export function ProfileHeader({ isLearningLanguage, onToggleLanguage }: ProfileHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6 pb-4 relative z-20">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center overflow-hidden shadow-md">
          <span className="text-white font-semibold text-xl">SL</span>
        </div>
        
        {/* User Info */}
        <div>
          <h1 className="font-semibold text-[#2D3A50] text-lg">Sarah López</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="px-3 py-1 bg-[#2D3A50] text-white text-xs font-medium rounded-full">
              {isLearningLanguage ? "CEFR B2 中級" : "CEFR B2 Intermediate"}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Language Toggle */}
        <button 
          type="button"
          onClick={onToggleLanguage}
          className={`cursor-pointer active:scale-95 p-2.5 rounded-2xl shadow-md transition-all duration-200 ${isLearningLanguage ? 'bg-[#3B8FA5] text-white' : 'bg-white text-[#2D3A50] hover:bg-gray-50'}`}
          aria-label="Toggle language"
        >
          <Languages className="w-5 h-5 pointer-events-none" />
        </button>

        {/* Streak Badge */}
        <div className="flex items-center gap-2 bg-[#FF6B6B] px-4 py-2.5 rounded-2xl shadow-md">
          <Flame className="w-5 h-5 text-white fill-white" />
          <div className="text-white">
            <div className="font-bold text-lg leading-none">12</div>
            <div className="text-xs opacity-90">{isLearningLanguage ? "日連続" : "Day Streak"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
