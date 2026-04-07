import { useState } from "react";
import { ProfileHeader, HeroCarousel, FeaturesGrid, BottomNavigation, 
  ChatPage, NavPage, ProfilePage, CommunityPage} from "./components";

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [isLearningLanguage, setIsLearningLanguage] = useState(false);
  const [learningMode, setLearningMode] = useState("Professional");

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter',sans-serif]">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl relative">
        {/* Main Content */}
        <div className="pb-24">
          {currentTab === "Home" && (
            <>
              <ProfileHeader 
                isLearningLanguage={isLearningLanguage} 
                onToggleLanguage={() => setIsLearningLanguage((prev) => !prev)} 
              />
              <HeroCarousel isLearningLanguage={isLearningLanguage} />
              <FeaturesGrid isLearningLanguage={isLearningLanguage} onTabChange={setCurrentTab} learningMode={learningMode} />
            </>
          )}

          {currentTab === "Chat" && (
            <ChatPage isLearningLanguage={isLearningLanguage} />
          )}

          {currentTab === "AI" && (
            <NavPage isLearningLanguage={isLearningLanguage} learningMode={learningMode} />
          )}

          {currentTab === "Profile" && (
            <ProfilePage isLearningLanguage={isLearningLanguage} learningMode={learningMode} onModeChange={setLearningMode} />
          )}

          {currentTab === "Community" && (
            <CommunityPage isLearningLanguage={isLearningLanguage} learningMode={learningMode} />
          )}
        </div>
        
        {/* Bottom Navigation */}
        <BottomNavigation currentTab={currentTab} onTabChange={setCurrentTab} isLearningLanguage={isLearningLanguage} />
      </div>
    </div>
  );
}