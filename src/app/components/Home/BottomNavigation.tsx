import { Home, MessageCircle, Sparkles, User, Users } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

function NavItem({ icon, label, isActive, onClick }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-1 flex-1 py-2 transition-colors"
      aria-label={label}
    >
      <div className={`transition-all duration-200 ${isActive ? "text-[#FF6B6B] -translate-y-0.5" : "text-[#2D3A50]/50"}`}>
        {icon}
      </div>
      <span 
        className={`text-xs transition-colors duration-200 ${isActive ? "text-[#FF6B6B] font-medium" : "text-[#2D3A50]/50"}`}
      >
        {label}
      </span>
    </button>
  );
}

interface BottomNavigationProps {
  currentTab: string;
  isLearningLanguage?: boolean;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({isLearningLanguage, currentTab, onTabChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      <div className="max-w-md mx-auto flex items-center justify-around px-4">
        <NavItem 
          icon={<Home className="w-6 h-6" strokeWidth={currentTab === "Home" ? 2.5 : 2} />} 
          label={isLearningLanguage ? "ホーム" : "Home"} 
          isActive={currentTab === "Home"}
          onClick={() => onTabChange("Home")}
        />
        <NavItem 
          icon={<MessageCircle className="w-6 h-6" strokeWidth={currentTab === "Chat" ? 2.5 : 2} />} 
          label={isLearningLanguage ? "チャット" : "Chat"} 
          isActive={currentTab === "Chat"}
          onClick={() => onTabChange("Chat")}
        />
        <NavItem 
          icon={<Sparkles className="w-6 h-6" strokeWidth={currentTab === "AI" ? 2.5 : 2} />} 
          label="AI" 
          isActive={currentTab === "AI"}
          onClick={() => onTabChange("AI")}
        />
        <NavItem 
          icon={<User className="w-6 h-6" strokeWidth={currentTab === "Profile" ? 2.5 : 2} />} 
          label={isLearningLanguage ? "プロフィール" : "Profile"} 
          isActive={currentTab === "Profile"}
          onClick={() => onTabChange("Profile")}
        />
        <NavItem 
          icon={<Users className="w-6 h-6" strokeWidth={currentTab === "Community" ? 2.5 : 2} />} 
          label={isLearningLanguage ? "コミュニティ" : "Community"} 
          isActive={currentTab === "Community"}
          onClick={() => onTabChange("Community")}
        />
      </div>
    </div>
  );
}
