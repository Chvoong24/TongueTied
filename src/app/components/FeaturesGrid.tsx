import { Bot, Video, Target, Network } from "lucide-react";

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

export function FeaturesGrid() {
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
          icon={<Target className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title="Proficiency Exams"
          subtitle="Goal map & personalization."
          bgColor="#E9D5FF"
        />
        <FeatureCard
          icon={<Network className="w-6 h-6 text-[#2D3A50]" strokeWidth={2} />}
          title="Community Hub"
          subtitle="Networking & Interests (Opt-In)."
          bgColor="#CFFAFE"
        />
      </div>
    </div>
  );
}
