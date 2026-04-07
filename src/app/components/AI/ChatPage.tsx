import { Search, ChevronRight, ChevronLeft, Send, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI (Replace with your actual API key)
// Note: For a production app, API calls should be done on a backend to protect your key!
const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY_HERE");

interface ChatPageProps {
  isLearningLanguage?: boolean;
}

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  isJapanese?: boolean;
  learningTokens?: { ja: string; en: string }[];
  showLearning?: boolean;
}

export function ChatPage({ isLearningLanguage }: ChatPageProps) {
  const [activeChat, setActiveChat] = useState<any>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Mock data for past conversations, ordered most recent to least recent
  const pastChats = [
    {
      id: 1,
      name: "Kenji Sato",
      avatar: "👨🏻‍💻",
      lastMessage: isLearningLanguage ? "後での練習はまだ予定通りですか？" : "Are we still on for practice later?",
      time: "10:42 AM",
      unread: 2,
      isOnline: true
    },
    {
      id: 2,
      name: "Yuki Tanaka",
      avatar: "👩🏻‍🏫",
      lastMessage: "発音とても良かったです！",
      time: isLearningLanguage ? "昨日" : "Yesterday",
      unread: 0,
      isOnline: false
    },
    {
      id: 3,
      name: "Hiroshi Nakamura",
      avatar: "🧑🏻",
      lastMessage: isLearningLanguage ? "了解です。また後で！" : "Sounds good. See you then!",
      time: isLearningLanguage ? "火曜日" : "Tuesday",
      unread: 0,
      isOnline: false
    }
  ];

  const aiChatWidget = {
    id: "ai",
    name: isLearningLanguage ? "フランクれいAI 言語チューター" : "FranklyAI Language Tutor",
    avatar: "🤖",
    isOnline: true,
    isAI: true
  };

  const handleChatClick = (chat: any) => {
    setActiveChat(chat);
    if (chat.id === 2) {
      setMessages([{
        id: Date.now().toString(),
        text: "発音とても良かったです！",
        isUser: false,
        isJapanese: true,
        learningTokens: [
          { ja: "発音", en: "pronunciation" },
          { ja: "とても", en: "very" },
          { ja: "良かった", en: "good" },
          { ja: "です", en: "is" },
          { ja: "！", en: "!" }
        ]
      }]);
    } else if (chat.id === 3) {
      setMessages([{
        id: Date.now().toString(),
        text: isLearningLanguage ? "了解です。また後で！" : "Sounds good. See you then!",
        isUser: false,
        isJapanese: true,
        learningTokens: [
          { ja: "了解", en: "Understood" },
          { ja: "です", en: "is" },
          { ja: "。", en: "." },
          { ja: "また", en: "again" },
          { ja: "後で", en: "later" },
          { ja: "！", en: "!" }
        ]
      }]);
    } else {
      setMessages([{ 
        id: Date.now().toString(),
        text: chat.isAI 
          ? (isLearningLanguage ? "こんにちは！今日はどのような日本語の練習をしましょうか？" : "Konnichiwa! How can I help you practice your Japanese today?")
          : (isLearningLanguage ? "こんにちは！練習の準備はいいですか？" : "Hello! Ready for our practice session?"), 
        isUser: false 
      }]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setMessages(prev => [...prev, { id: Date.now().toString(), text: userText, isUser: true }]);
    setInputValue("");
    setIsTyping(true);

    if (activeChat.isAI) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        // Feed the history into the prompt to give Gemini conversational context
        const history = messages.map(m => `${m.isUser ? 'User' : 'Tutor'}: ${m.text}`).join('\n');
        const prompt = `You are a helpful Japanese language tutor. The user is practicing Japanese.\n\nConversation so far:\n${history}\nUser: ${userText}\nTutor:`;
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        
        setMessages(prev => [...prev, { id: Date.now().toString(), text: response.text(), isUser: false }]);
      } catch (error) {
        console.error("Gemini API Error:", error);
        setMessages(prev => [...prev, { id: Date.now().toString(), text: isLearningLanguage ? "申し訳ありません。接続に問題があります。" : "Sorry, I am having trouble connecting.", isUser: false }]);
      } finally {
        setIsTyping(false);
      }
    } else {
      // Mock response for human chats
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now().toString(), 
          text: isLearningLanguage ? "それは素晴らしいですね！ 👍" : "That sounds great! 👍", 
          isUser: false,
          isJapanese: isLearningLanguage,
          learningTokens: isLearningLanguage ? [
            { ja: "それ", en: "That" },
            { ja: "は", en: "is" },
            { ja: "素晴らしい", en: "wonderful" },
            { ja: "ですね", en: "isn't it" },
            { ja: "！ 👍", en: "! 👍" }
          ] : undefined
        }]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const toggleLearning = (id: string) => {
    setMessages(prev => prev.map(msg => msg.id === id ? { ...msg, showLearning: !msg.showLearning } : msg));
  };

  // ====== ACTIVE CHAT VIEW ======
  if (activeChat) {
    return (
      <div className="flex flex-col h-[calc(100vh-5.5rem)] bg-[#F8FAFC]">
        {/* Chat Header */}
        <div className="flex items-center gap-3 p-4 bg-white border-b border-gray-100 shadow-sm z-10 sticky top-0">
          <button 
            onClick={() => setActiveChat(null)}
            className="p-2 -ml-2 rounded-full hover:bg-gray-50 text-[#2D3A50] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-xl shadow-inner border border-gray-100">
              {activeChat.avatar}
            </div>
            {activeChat.isOnline && (
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            )}
          </div>
          <div>
            <h2 className="font-semibold text-[#2D3A50] leading-tight">{activeChat.name}</h2>
            <p className="text-xs text-gray-500 font-medium">{activeChat.isOnline ? (isLearningLanguage ? 'オンライン' : 'Online') : (isLearningLanguage ? 'オフライン' : 'Offline')}</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={msg.id || index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
              <div className={`rounded-2xl px-4 py-2.5 max-w-[80%] shadow-sm ${
                msg.isUser 
                  ? "bg-[#FF6B6B] text-white rounded-tr-none" 
                  : "bg-white border border-gray-200 text-[#2D3A50] rounded-tl-none"
              }`}>
                {msg.showLearning && msg.learningTokens ? (
                  <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                    {msg.learningTokens.map((token, i) => (
                      <div key={i} className="flex flex-col items-center justify-end">
                        <span className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">{isLearningLanguage ? token.en : token.ja}</span>
                        <span className="text-sm">{isLearningLanguage ? token.ja : token.en}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                )}

                {!msg.isUser && msg.isJapanese && msg.learningTokens && (
                  <div className="mt-2 pt-2 border-t border-gray-100 flex justify-end">
                    <button 
                      onClick={() => toggleLearning(msg.id)} 
                      className="text-[10px] flex items-center gap-1 text-[#3B8FA5] font-medium hover:opacity-80 transition-opacity"
                    >
                      <Sparkles className="w-3 h-3" />
                      {msg.showLearning ? "Original Text" : "AI Breakdown"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex gap-1 items-center">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-full px-4 py-2 border border-gray-200 focus-within:border-[#FF6B6B] transition-colors">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder={isLearningLanguage ? "メッセージを入力..." : "Type a message..."} 
              className="flex-1 bg-transparent outline-none text-sm text-[#2D3A50] placeholder-gray-400"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="w-8 h-8 flex items-center justify-center bg-[#FF6B6B] rounded-full text-white shrink-0 hover:bg-[#ff5252] disabled:opacity-50 disabled:hover:bg-[#FF6B6B] transition-colors shadow-sm"
            >
              <Send className="w-4 h-4 ml-0.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ====== LIST VIEW ======
  return (
    <div className="flex flex-col h-[calc(100vh-5.5rem)] bg-[#F8FAFC]">
      {/* Header */}
      <div className="p-6 pb-4 bg-white border-b border-gray-100 shadow-sm z-10 sticky top-0">
        <h1 className="font-bold text-2xl text-[#2D3A50] mb-4">{isLearningLanguage ? "メッセージ" : "Messages"}</h1>
        
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-2xl px-4 py-2.5 border border-gray-200 focus-within:border-[#3B8FA5] transition-colors">
          <Search className="w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder={isLearningLanguage ? "メッセージを検索..." : "Search messages..."} 
            className="flex-1 bg-transparent outline-none text-sm text-[#2D3A50] placeholder-gray-500"
          />
        </div>
      </div>

      {/* Chat List Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        
        {/* Pinned AI Chat Widget */}
        <div 
          onClick={() => handleChatClick(aiChatWidget)}
          className="bg-gradient-to-r from-blue-50 to-[#E0F2FE] p-4 rounded-3xl shadow-sm border border-blue-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm border border-blue-100">
              🤖
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-bold text-[#2D3A50] truncate">{isLearningLanguage ? "フランクれいAI 言語チューター" : "FranklyAI Language Tutor"}</h2>
              <span className="text-xs font-semibold text-[#3B8FA5] shrink-0">{isLearningLanguage ? "たった今" : "Just now"}</span>
            </div>
            <p className="text-sm text-[#2D3A50]/70 truncate font-medium">{isLearningLanguage ? "こんにちは！今日はどのよう..." : "Konnichiwa! How can I help you..."}</p>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] shrink-0 shadow-sm"></div>
        </div>

        <div className="pt-3 pb-1">
          <h3 className="text-xs font-bold text-[#2D3A50]/40 uppercase tracking-wider pl-2">{isLearningLanguage ? "最近の会話" : "Recent Conversations"}</h3>
        </div>

        {/* Past Human Chats */}
        {pastChats.map(chat => (
          <div 
            key={chat.id} 
            onClick={() => handleChatClick(chat)}
            className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-all active:scale-[0.98]"
          >
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-2xl shadow-inner border border-gray-100">
                {chat.avatar}
              </div>
              {chat.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-semibold text-[#2D3A50] truncate">{chat.name}</h2>
                <span className="text-xs text-gray-400 font-medium shrink-0">{chat.time}</span>
              </div>
              <p className={`text-sm truncate ${chat.unread > 0 ? 'text-[#2D3A50] font-semibold' : 'text-gray-500'}`}>
                {chat.lastMessage}
              </p>
            </div>
            {chat.unread > 0 ? (
              <div className="w-5 h-5 rounded-full bg-[#3B8FA5] flex items-center justify-center text-[10px] font-bold text-white shrink-0 shadow-sm">
                {chat.unread}
              </div>
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-300 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}