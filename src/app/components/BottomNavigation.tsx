import { Home, MessageCircle, Sparkles, User, Users } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function NavItem({ icon, label, isActive }: NavItemProps) {
  return (
    <button 
      className="flex flex-col items-center gap-1 flex-1 py-2 transition-colors"
      aria-label={label}
    >
      <div className={isActive ? "text-[#FF6B6B]" : "text-[#2D3A50]/50"}>
        {icon}
      </div>
      <span 
        className={`text-xs ${isActive ? "text-[#FF6B6B] font-medium" : "text-[#2D3A50]/50"}`}
      >
        {label}
      </span>
    </button>
  );
}

export function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-around px-4">
        <NavItem 
          icon={<Home className="w-6 h-6" strokeWidth={2} />} 
          label="Home" 
          isActive 
        />
        <NavItem 
          icon={<MessageCircle className="w-6 h-6" strokeWidth={2} />} 
          label="Chat" 
        />
        <NavItem 
          icon={<Sparkles className="w-6 h-6" strokeWidth={2} />} 
          label="AI" 
        />
        <NavItem 
          icon={<User className="w-6 h-6" strokeWidth={2} />} 
          label="Profile" 
        />
        <NavItem 
          icon={<Users className="w-6 h-6" strokeWidth={2} />} 
          label="Community" 
        />
      </div>
    </div>
  );
}
