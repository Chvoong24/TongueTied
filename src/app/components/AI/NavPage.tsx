import { Bot, Video, FileText, Coffee, Mic, Book } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bgColor: string;
}

function FeatureCard({ icon, title, subtitle, bgColor }: FeatureCardProps) {
  return (
    <div 
      className="rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      style={{ backgroundColor: bgColor }}
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

interface NavPageProps {
  isLearningLanguage?: boolean;
  learningMode?: string;
}

export function NavPage({ isLearningLanguage, learningMode }: NavPageProps) {
  return (
    <div className="px-6 mb-6">
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard
          icon={<Bot className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title={isLearningLanguage ? "フランクれいAI 面接シミュレーション" : "FranklyAI Interview Simulation"}
          subtitle={isLearningLanguage ? "履歴書ベースの質問を練習する" : "Practice CV-based questions."}
          bgColor="#E0F2FE"
        />
        {learningMode === "K-12" ? (
          <FeatureCard
            icon={<Book className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
            title={isLearningLanguage ? "短編小説と詩" : "Short Stories & Poetry"}
            subtitle={isLearningLanguage ? "日本語の文学を読む" : "Read Japanese literature."}
            bgColor="#D1FAE5"
          />
        ) : (
          <FeatureCard
            icon={<Video className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
            title={isLearningLanguage ? "ピア・プラクティス" : "Peer Practice (Guided)"}
            subtitle={isLearningLanguage ? "リアルタイムの会話" : "Real-time conversation."}
            bgColor="#D1FAE5"
          />
        )}
        <FeatureCard
          icon={<FileText className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title={isLearningLanguage ? "履歴書から語彙生成" : "CV-to-Vocab Engine"}
          subtitle={isLearningLanguage ? "履歴書からカスタム語彙を作成" : "Custom vocab from your resume."}
          bgColor="#FEF3C7"
        />
        <FeatureCard
          icon={<Coffee className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title={isLearningLanguage ? "マイクロシナリオ" : "Micro-Scenarios"}
          subtitle={isLearningLanguage ? "2分間の簡単な職場チャット" : "Quick 2-min workplace chats."}
          bgColor="#FEE2E2"
        />
        <FeatureCard
          icon={<Mic className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title={isLearningLanguage ? "発音ラボ" : "Pronunciation Lab"}
          subtitle={isLearningLanguage ? "AIによるペースとトーンの採点" : "AI grading for pacing & tone."}
          bgColor="#F3E8FF"
        />
      </div>
    </div>
  );
}
