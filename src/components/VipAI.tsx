"use client";
import { useState, useEffect } from 'react';

export default function VipAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! Nice to meet you. I am Hassan\'s Private AI Concierge. How can I assist you with our luxury services today?' }
  ]);

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {/* AI Button with Pulse Effect */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-400 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center justify-center text-2xl animate-pulse hover:scale-110 transition-all"
      >
        ✨
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-zinc-900/90 backdrop-blur-2xl border border-gold-500/30 rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-5">
          <div className="bg-gold-600 p-4 text-black font-black uppercase tracking-widest text-[10px]">
            VIP Digital Assistant
          </div>
          
          <div className="h-80 overflow-y-auto p-4 space-y-4 font-light text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`${msg.role === 'ai' ? 'text-gold-500 italic' : 'text-white'}`}>
                <span className="font-bold uppercase text-[9px] block mb-1">
                  {msg.role === 'ai' ? 'Assistant' : 'Client'}
                </span>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/5">
            <input 
              type="text" 
              placeholder="Ask about Hassan's expertise..."
              className="w-full bg-black/50 border border-white/10 rounded-full px-4 py-2 text-xs outline-none focus:border-gold-500 text-white"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  // Yahan aap AI logic add karenge
                  setMessages([...messages, { role: 'user', text: e.currentTarget.value }]);
                  e.currentTarget.value = "";
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}