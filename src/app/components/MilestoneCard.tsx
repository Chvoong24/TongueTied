import { Calendar, TrendingUp } from "lucide-react";

export function MilestoneCard() {
  const readinessPercentage = 68;
  
  return (
    <div className="mx-6 mb-6">
      <div className="bg-gradient-to-br from-[#2D3A50] to-[#3B8FA5] rounded-3xl p-6 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 text-white/90">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Next Interview</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-full">
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-semibold">{readinessPercentage}%</span>
          </div>
        </div>
        
        <h2 className="text-white text-xl font-semibold mb-2">
          Oct 24th - Product Manager
        </h2>
        <p className="text-white/80 text-sm mb-4">(Japanese)</p>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/90 font-medium">Interview Readiness</span>
            <span className="text-white font-semibold">{readinessPercentage}%</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] rounded-full transition-all duration-500"
              style={{ width: `${readinessPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
