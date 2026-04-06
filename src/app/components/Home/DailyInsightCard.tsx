import { Lightbulb } from "lucide-react";

interface DailyInsightCardProps {
  isLearningLanguage?: boolean;
}

export function DailyInsightCard({ isLearningLanguage }: DailyInsightCardProps) {
  return (
    <div className="mx-6 mb-6 min-w-[calc(100%-3rem)]">
      <div className="bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-2 text-white/90 mb-4">
          <Lightbulb className="w-5 h-5" />
          <span className="text-sm font-medium">{isLearningLanguage ? "文化的ビジネスインサイト" : "Cultural Business Insight"}</span>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-auto">Japanese</span>
        </div>
        
        <h2 className="text-white text-xl font-semibold mb-3">
          {isLearningLanguage ? "名刺のマナー" : "Business Card Etiquette"}
        </h2>
        
        <p className="text-white/90 text-sm leading-relaxed">
          {isLearningLanguage 
            ? "日本の企業文化では、名刺交換は正式な儀式です。必ず両手で名刺を差し出し、軽くお辞儀をして受け取ります。"
            : "In Japanese corporate culture, the exchange of business cards (Meishi) is a formal ritual. Always present and receive the card with both hands and a slight bow."}
        </p>
        
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-white/70 text-xs">
            {isLearningLanguage ? "プロのヒント • 毎日更新" : "Professional Tip • Updated Daily"}
          </p>
        </div>
      </div>
    </div>
  );
}
