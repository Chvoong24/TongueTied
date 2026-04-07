import { Bot, Video, Target, Network } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bgColor: string;
  onClick?: () => void;
}

function FeatureCard({ icon, title, subtitle, bgColor, onClick }: FeatureCardProps) {
  return (
    <div 
      className="rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <div className="mb-4">
        <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm">
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-[#2D3A50] mb-1.5 text-base">
        {title}
      </h3>
      <p className="text-[#2D3A50]/70 text-sm leading-snug">
        {subtitle}
      </p>
    </div>
  );
}

interface FeaturesGridProps {
  isLearningLanguage?: boolean;
  onTabChange?: (tab: string) => void;
}

export function FeaturesGrid({ isLearningLanguage, onTabChange }: FeaturesGridProps) {
  return (
    <div className="px-6 mb-6">
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard
          icon={<Bot className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title={isLearningLanguage ? "AI 面接シミュレーション" : "AI Interview Simulation"}
          subtitle={isLearningLanguage ? "履歴書ベースの質問を練習する" : "Practice CV-based questions."}
          bgColor="#E0F2FE"
          onClick={() => onTabChange?.("AI")}
        />
        <FeatureCard
          icon={<Video className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title={isLearningLanguage ? "ピア・プラクティス" : "Peer Practice (Guided)"}
          subtitle={isLearningLanguage ? "リアルタイムの会話" : "Real-time conversation."}
          bgColor="#D1FAE5"
          onClick={() => onTabChange?.("AI")}
        />
        <FeatureCard
          icon={<Target className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title={isLearningLanguage ? "語学検定" : "Proficiency Exams"}
          subtitle={isLearningLanguage ? "目標マップとパーソナライズ" : "Goal map & personalization."}
          bgColor="#E9D5FF"
          onClick={() => onTabChange?.("Profile")}
        />
        <FeatureCard
          icon={<Network className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title={isLearningLanguage ? "コミュニティハブ" : "Community Hub"}
          subtitle={isLearningLanguage ? "ネットワーキングと趣味" : "Networking & Interests (Opt-In)."}
          bgColor="#CFFAFE"
          onClick={() => onTabChange?.("Community")}
        />
      </div>
    </div>
  );
}
