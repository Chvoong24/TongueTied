import { Search, ShieldCheck } from "lucide-react";

interface CommunityPageProps {
  isLearningLanguage?: boolean;
  learningMode?: string;
}

export function CommunityPage({ isLearningLanguage, learningMode }: CommunityPageProps) {
  const renderHubs = (title: string, bubbles: {name: string, color: string, size: string}[]) => (
    <div className="mb-8">
      <h2 className="px-6 font-semibold text-[#2D3A50] mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x px-6 items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {bubbles.map((bubble, i) => (
          <div key={i} className={`shrink-0 rounded-full flex items-center justify-center font-bold text-center p-3 shadow-sm snap-center ${bubble.color} ${bubble.size} hover:scale-105 transition-transform cursor-pointer`}>
            <span className="text-sm leading-tight">{bubble.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] pb-24">
      <div className="p-6 pb-4 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <h1 className="font-bold text-2xl text-[#2D3A50] mb-4">
          {isLearningLanguage ? "コミュニティ" : "Community Hub"}
        </h1>
        <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-2xl px-4 py-2.5 border border-gray-200 focus-within:border-[#3B8FA5] transition-colors">
          <Search className="w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder={isLearningLanguage ? "ハブを検索..." : "Search hubs..."} 
            className="flex-1 bg-transparent outline-none text-sm text-[#2D3A50] placeholder-gray-500"
          />
        </div>
      </div>

      <div className="pt-6">
        {learningMode === "K-12" ? (
          <>
            <div className="px-6 mb-6">
              <div className="bg-blue-50 text-blue-800 p-4 rounded-2xl text-sm font-medium border border-blue-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {isLearningLanguage 
                    ? "学生証番号で学校を確認します。安全性を促進するため、特定の学区と提携しています。" 
                    : "Verify school through student ID number. Partnered with select school districts to promote safety."}
                </p>
              </div>
            </div>
            {renderHubs(
              isLearningLanguage ? "図書館リソース" : "Library Resources",
              [
                { name: isLearningLanguage ? "短編小説" : "Short Stories", color: "bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]", size: "w-24 h-24" },
                { name: isLearningLanguage ? "詩" : "Poetry", color: "bg-[#D1FAE5] text-[#059669] border border-[#A7F3D0]", size: "w-28 h-28" },
                { name: isLearningLanguage ? "歴史" : "History", color: "bg-[#FEF3C7] text-[#D97706] border border-[#FDE68A]", size: "w-24 h-24" }
              ]
            )}
            {renderHubs(
              isLearningLanguage ? "参加校" : "Participating Schools",
              [
                { name: isLearningLanguage ? "近くの生徒" : "Nearby Students", color: "bg-[#F3E8FF] text-[#7E22CE] border border-[#E9D5FF]", size: "w-28 h-28" },
                { name: isLearningLanguage ? "姉妹校" : "Sister Schools", color: "bg-[#FFE4E6] text-[#E11D48] border border-[#FECDD3]", size: "w-24 h-24" },
                { name: isLearningLanguage ? "言語交換" : "Language Exchange", color: "bg-[#CCFBF1] text-[#047857] border border-[#99F6E4]", size: "w-24 h-24" }
              ]
            )}
          </>
        ) : (
          <>
            {renderHubs(
              isLearningLanguage ? "日本語学習者" : "Japanese Learners",
              [
                { name: isLearningLanguage ? "N5 初級" : "N5 Beginners", color: "bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]", size: "w-24 h-24" },
                { name: isLearningLanguage ? "会話" : "Speaking", color: "bg-[#D1FAE5] text-[#059669] border border-[#A7F3D0]", size: "w-28 h-28" },
                { name: isLearningLanguage ? "ビジネス" : "Business", color: "bg-[#F3E8FF] text-[#7E22CE] border border-[#E9D5FF]", size: "w-20 h-20" },
                { name: isLearningLanguage ? "旅行" : "Travel", color: "bg-[#FEF3C7] text-[#D97706] border border-[#FDE68A]", size: "w-24 h-24" }
              ]
            )}
            
            {renderHubs(
              isLearningLanguage ? "日本文化" : "Japanese Culture",
              [
                { name: isLearningLanguage ? "アニメ＆漫画" : "Anime & Manga", color: "bg-[#FFE4E6] text-[#E11D48] border border-[#FECDD3]", size: "w-28 h-28" },
                { name: isLearningLanguage ? "伝統芸術" : "Traditional Arts", color: "bg-[#E0E7FF] text-[#6D28D9] border border-[#C7D2FE]", size: "w-24 h-24" },
                { name: isLearningLanguage ? "料理" : "Food", color: "bg-[#FFEDD5] text-[#B45309] border border-[#FDE047]", size: "w-20 h-20" },
              ]
            )}

            {renderHubs(
              isLearningLanguage ? "ネイティブスピーカー" : "Native Speakers",
              [
                { name: isLearningLanguage ? "言語交換" : "Language Exchange", color: "bg-[#CCFBF1] text-[#047857] border border-[#99F6E4]", size: "w-28 h-28" },
                { name: isLearningLanguage ? "東京の地元民" : "Tokyo Locals", color: "bg-[#FCE7F3] text-[#BE185D] border border-[#FBCFE8]", size: "w-24 h-24" },
                { name: isLearningLanguage ? "カジュアル" : "Casual Chat", color: "bg-[#E2E8F0] text-[#4338CA] border border-[#C7D2FE]", size: "w-24 h-24" },
              ]
            )}
          </>
        )}
      </div>
    </div>
  );
}