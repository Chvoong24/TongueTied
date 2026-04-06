import { ProfileHeader } from "./components/ProfileHeader";
import { HeroCarousel } from "./components/HeroCarousel";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { BottomNavigation } from "./components/BottomNavigation";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter',sans-serif]">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl relative">
        {/* Main Content */}
        <div className="pb-24">
          {/* Header Section */}
          <ProfileHeader />
          
          {/* Hero Carousel - Swipeable Milestone & Insights */}
          <HeroCarousel />
          
          {/* Features Grid */}
          <FeaturesGrid />
        </div>
        
        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
}