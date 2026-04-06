import { Send } from "lucide-react";

export function ChatPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-5.5rem)] bg-[#F8FAFC]">
      {/* Header */}
      <div className="flex items-center p-4 bg-white border-b border-gray-100 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">
            🤖
          </div>
          <div>
            <h2 className="font-semibold text-[#2D3A50] leading-tight">AI Language Tutor</h2>
            <p className="text-xs text-green-500 font-medium">Online</p>
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Received Message */}
        <div className="flex justify-start">
          <div className="bg-white border border-gray-200 text-[#2D3A50] rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%] shadow-sm">
            <p className="text-sm">Konnichiwa! How can I help you practice your Japanese today?</p>
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex justify-end">
          <div className="bg-[#FF6B6B] text-white rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[80%] shadow-sm">
            <p className="text-sm">I'd like to practice ordering at a restaurant.</p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-full px-4 py-2 border border-gray-200 focus-within:border-[#FF6B6B] transition-colors">
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 bg-transparent outline-none text-sm text-[#2D3A50] placeholder-gray-400"
          />
          <button className="w-8 h-8 flex items-center justify-center bg-[#FF6B6B] rounded-full text-white shrink-0 hover:bg-[#ff5252] transition-colors shadow-sm">
            <Send className="w-4 h-4 ml-0.5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
