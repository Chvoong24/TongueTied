import { Bot, Video, FileText, Coffee, Mic } from "lucide-react";

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

export function NavPage() {
  return (
    <div className="px-6 mb-6">
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard
          icon={<Bot className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title="AI Interview Simulation"
          subtitle="Practice CV-based questions."
          bgColor="#E0F2FE"
        />
        <FeatureCard
          icon={<Video className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title="Peer Practice (Guided)"
          subtitle="Real-time conversation."
          bgColor="#D1FAE5"
        />
        <FeatureCard
          icon={<FileText className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title="CV-to-Vocab Engine"
          subtitle="Custom vocab from your resume."
          bgColor="#FEF3C7"
        />
        <FeatureCard
          icon={<Coffee className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title="Micro-Scenarios"
          subtitle="Quick 2-min workplace chats."
          bgColor="#FEE2E2"
        />
        <FeatureCard
          icon={<Mic className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title="Pronunciation Lab"
          subtitle="AI grading for pacing & tone."
          bgColor="#F3E8FF"
        />
      </div>
    </div>
  );
}
