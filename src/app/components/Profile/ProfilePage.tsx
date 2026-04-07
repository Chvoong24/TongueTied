import { useState } from "react";
import { Flame, Edit2, Target, Award, Calendar, Check, BookOpen, Plus, Trash2, Bot, Video, Coffee, Globe, Compass } from "lucide-react";

interface ProfilePageProps {
  isLearningLanguage?: boolean;
  learningMode?: string;
  onModeChange?: (mode: string) => void;
}

interface Goal {
  text: string;
  current?: number;
  target?: number;
}

export function ProfilePage({ isLearningLanguage, learningMode, onModeChange }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [goals, setGoals] = useState<Goal[]>([
    { text: isLearningLanguage ? "ビジネス敬語をマスターする" : "Master Business Keigo" },
    { text: isLearningLanguage ? "技術用語を50個覚える" : "Learn 50 tech vocabulary words", current: 20, target: 50 }
  ]);

  // Handle updating a specific goal
  const updateGoal = (index: number, newText: string) => {
    const newGoals = [...goals];
    newGoals[index] = { ...newGoals[index], text: newText };
    setGoals(newGoals);
  };

  const deleteGoal = (index: number) => {
    const newGoals = goals.filter((_, i) => i !== index);
    setGoals(newGoals);
  };

  const addGoal = () => {
    setGoals([...goals, { text: isLearningLanguage ? "新しい目標" : "New Goal" }]);
  };

  const suggestedGoals = [
    {
      icon: <Bot className="w-5 h-5 text-[#3B8FA5]" />,
      text: isLearningLanguage ? "AI面接を5回完了する" : "Complete 5 AI Interviews",
      target: 5,
    },
    {
      icon: <Video className="w-5 h-5 text-[#10B981]" />,
      text: isLearningLanguage ? "ピア練習に3回参加する" : "Join 3 Peer Practices",
      target: 3,
    },
    {
      icon: <Coffee className="w-5 h-5 text-[#F59E0B]" />,
      text: isLearningLanguage ? "シナリオを10個クリア" : "Finish 10 Scenarios",
      target: 10,
    }
  ];

  const addSuggestedGoal = (goal: (typeof suggestedGoals)[0]) => {
    setGoals([...goals, { text: goal.text, current: 0, target: goal.target }]);
  };

  // Setup Data for a scrollable monthly view tracking the 12-day streak up to April 8th
  const monthsData = [
    { name: isLearningLanguage ? "3月" : "March", offset: 5, days: 31, streakStart: 27, streakEnd: 31, interview: null },
    { name: isLearningLanguage ? "4月" : "April", offset: 1, days: 30, streakStart: 1, streakEnd: 8, interview: 27 },
    { name: isLearningLanguage ? "5月" : "May", offset: 3, days: 31, streakStart: null, streakEnd: null, interview: null }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] p-6 space-y-6 pb-24">
      {/* Header & Streak Widget */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center overflow-hidden shadow-md">
            <span className="text-white font-semibold text-2xl">SL</span>
          </div>
          <div>
            <h1 className="font-semibold text-[#2D3A50] text-xl">Sarah López</h1>
            <div className="text-[#2D3A50]/60 text-sm mt-0.5">@sarah.l</div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center bg-[#FF6B6B] px-4 py-3 rounded-2xl shadow-md">
          <Flame className="w-6 h-6 text-white fill-white mb-1" />
          <div className="text-white font-bold text-xl leading-none">12</div>
          <div className="text-white/90 text-[10px] mt-1 uppercase font-semibold tracking-wide">
            {isLearningLanguage ? "日連続" : "Day Streak"}
          </div>
        </div>
      </div>

      {/* Proficiency Level & Milestone Completion */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#3B8FA5]" />
            <h2 className="font-semibold text-[#2D3A50]">{isLearningLanguage ? "現在のレベル" : "Current Level"}</h2>
          </div>
          <span className="px-3 py-1 bg-[#2D3A50] text-white text-xs font-medium rounded-full">
            {isLearningLanguage ? "CEFR B2 中級" : "CEFR B2 Intermediate"}
          </span>
        </div>

        <div className="space-y-2 mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#2D3A50]/80 font-medium">
              {isLearningLanguage ? "次のマイルストーン: C1" : "Next Milestone: C1 Advanced"}
            </span>
            <span className="text-[#3B8FA5] font-semibold">68%</span>
          </div>
          <div className="h-3 bg-[#F8FAFC] rounded-full overflow-hidden border border-gray-100">
            <div 
              className="h-full bg-gradient-to-r from-[#3B8FA5] to-[#4FD1C5] rounded-full transition-all duration-1000 ease-out"
              style={{ width: '68%' }}
            />
          </div>
        </div>
      </div>

      {/* Language Profile */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-[#F59E0B]" />
          <h2 className="font-semibold text-[#2D3A50]">{isLearningLanguage ? "言語プロファイル" : "Language Profile"}</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
            <span className="text-sm font-medium text-gray-500">{isLearningLanguage ? "母国語" : "Native"}</span>
            <span className="text-sm font-bold text-[#2D3A50]">English</span>
          </div>
          <div className="flex items-center justify-between p-2.5 bg-[#E0F2FE]/50 rounded-xl border border-[#E0F2FE]">
            <span className="text-sm font-medium text-[#0284C7]">{isLearningLanguage ? "学習中" : "Learning"}</span>
            <span className="text-sm font-bold text-[#0284C7]">Japanese</span>
          </div>
          <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
            <span className="text-sm font-medium text-gray-500">{isLearningLanguage ? "学びたい" : "Wants to Learn"}</span>
            <span className="text-sm font-bold text-[#2D3A50]">Spanish</span>
          </div>
        </div>
      </div>

      {/* Learning Purpose */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <Compass className="w-5 h-5 text-[#8B5CF6]" />
          <h2 className="font-semibold text-[#2D3A50]">{isLearningLanguage ? "学習目的" : "Learning Purpose"}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Travel", "Professional", "Mobility", "K-12"].map(mode => {
            const labelEn = mode === "K-12" ? "Academics K-12" : mode;
            let labelJa = mode;
            if (mode === "Travel") labelJa = "旅行";
            if (mode === "Professional") labelJa = "プロフェッショナル";
            if (mode === "Mobility") labelJa = "モビリティ";
            if (mode === "K-12") labelJa = "K-12 (学業)";
            
            return (
              <button
                key={mode}
                onClick={() => onModeChange?.(mode)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${learningMode === mode ? 'bg-[#3B8FA5] text-white shadow-md scale-105' : 'bg-gray-50 text-[#2D3A50]/70 hover:bg-gray-100'}`}
              >
                {isLearningLanguage ? labelJa : labelEn}
              </button>
            )
          })}
        </div>
      </div>

      {/* Practice Calendar */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#8B5CF6]" />
            <h2 className="font-semibold text-[#2D3A50]">{isLearningLanguage ? "練習カレンダー" : "Practice Calendar"}</h2>
          </div>
        </div>
        
        {/* Scrollable Calendar Wrapper */}
        <div className="flex overflow-x-auto gap-6 snap-x pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {monthsData.map((month, mIndex) => {
            const cells = Array.from({ length: 42 }, (_, i) => {
              const dayNum = i - month.offset + 1;
              return (dayNum < 1 || dayNum > month.days) ? null : dayNum;
            });

            return (
              <div key={mIndex} className="min-w-[250px] snap-center shrink-0">
                <h3 className="text-center text-sm font-bold text-[#2D3A50]/70 mb-3">{month.name}</h3>
                <div className="grid grid-cols-7 gap-1.5">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={`header-${i}`} className="text-center text-[10px] font-bold text-gray-400">{day}</div>
                  ))}
                  {cells.map((day, i) => {
                    if (day === null) return <div key={`empty-${i}`} />;
                    const isStreak = month.streakStart !== null && day >= month.streakStart && day <= (month.streakEnd || 31);
                    const isInterview = day === month.interview;
                    return (
                      <div key={`day-${day}`} className={`aspect-square flex items-center justify-center rounded-full text-xs font-medium transition-all ${isStreak ? 'bg-[#FF6B6B] text-white shadow-sm' : ''} ${isInterview ? 'bg-[#3B8FA5] text-white ring-2 ring-offset-2 ring-[#3B8FA5] shadow-md scale-105' : ''} ${!isStreak && !isInterview ? 'text-[#2D3A50] bg-gray-50' : ''}`}>
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Legend */}
        <div className="flex items-center gap-4 mt-4 text-xs border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div><span className="text-gray-500">{isLearningLanguage ? "練習済み" : "Practiced"}</span></div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#3B8FA5]"></div><span className="text-gray-500">{isLearningLanguage ? "面接日" : "Interview"}</span></div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#FF6B6B]" />
            <h2 className="font-semibold text-[#2D3A50]">{isLearningLanguage ? "学習目標" : "Learning Goals"}</h2>
          </div>
          <button onClick={() => setIsEditing(!isEditing)} className="p-1.5 text-gray-400 hover:text-[#3B8FA5] transition-colors rounded-lg hover:bg-gray-50" aria-label="Edit goals">
            {isEditing ? <Check className="w-4 h-4 text-green-500" /> : <Edit2 className="w-4 h-4" />}
          </button>
        </div>
          
          <div className="space-y-3">
          {goals.map((goal, index) => (
            <div key={index} className="flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              {isEditing ? (
                <>
                  <input type="text" value={goal.text} onChange={(e) => updateGoal(index, e.target.value)} className="flex-1 bg-gray-50 border border-gray-200 rounded px-2 py-1 text-sm text-[#2D3A50] focus:outline-none focus:border-[#3B8FA5] transition-colors" />
                  <button onClick={() => deleteGoal(index)} className="p-1.5 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" aria-label="Delete goal">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <div className="flex-1 w-full">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm text-[#2D3A50]/90 leading-tight">{goal.text}</p>
                    {goal.target !== undefined && goal.current !== undefined && (
                      <span className="text-xs font-semibold text-[#3B8FA5] whitespace-nowrap bg-[#3B8FA5]/10 px-1.5 py-0.5 rounded">
                        {goal.current}/{goal.target}
                      </span>
                    )}
                  </div>
                  {goal.target !== undefined && goal.current !== undefined && (
                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#3B8FA5] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${(goal.current / goal.target) * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
          {isEditing && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs font-semibold text-[#2D3A50]/60 uppercase tracking-wider mb-3">
                {isLearningLanguage ? "おすすめの目標" : "Suggested Goals"}
              </p>
              <div className="flex gap-3 overflow-x-auto pb-2 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {suggestedGoals.map((goal, index) => (
                  <button 
                    key={index}
                    onClick={() => addSuggestedGoal(goal)}
                    className="flex flex-col items-center justify-center min-w-[120px] bg-gray-50 hover:bg-gray-100 p-3 rounded-2xl snap-start shrink-0 border border-gray-200 transition-colors text-center"
                  >
                    <div className="mb-2 bg-white p-1.5 rounded-lg shadow-sm">
                      {goal.icon}
                    </div>
                    <span className="text-xs font-medium text-[#2D3A50] leading-tight">{goal.text}</span>
                  </button>
                ))}
              </div>
              
              <button onClick={addGoal} className="flex items-center justify-center gap-2 w-full mt-4 py-2.5 text-sm text-[#3B8FA5] hover:text-[#2a6b7c] font-medium transition-colors hover:bg-[#3B8FA5]/10 rounded-xl border border-dashed border-[#3B8FA5]/30">
                <Plus className="w-4 h-4" />
                {isLearningLanguage ? "独自の目標を追加" : "Add Custom Goal"}
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}