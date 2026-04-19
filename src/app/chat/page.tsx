"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Circle } from "lucide-react"; // npm install lucide-react

export default function VIPChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "Welcome to the Executive Lounge. How can I assist you with our inventory today?" }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "System connection lost. Please try again." }]);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-sans">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl h-[85vh] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
      >
        {/* VIP Header */}
        <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center border border-white/20">
                <Bot size={24} className="text-white" />
              </div>
              <Circle className="absolute bottom-0 right-0 text-green-500 fill-green-500 w-3 h-3 border-2 border-[#050505] rounded-full" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tighter text-white uppercase">CH HASSAN AI</h1>
              <p className="text-[10px] text-purple-400 font-mono tracking-[0.2em] uppercase">Executive Assistant</p>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-[10px] px-3 py-1 rounded-full border border-purple-500/50 text-purple-400 font-bold uppercase tracking-widest bg-purple-500/10">
              VIP Access Only
            </span>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-3 max-w-[75%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/10 ${msg.role === "user" ? "bg-white/10" : "bg-purple-600/20"}`}>
                    {msg.role === "user" ? <User size={14} /> : <Bot size={14} className="text-purple-400" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user" 
                    ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-tr-none" 
                    : "bg-white/5 border border-white/10 text-gray-200 rounded-tl-none shadow-xl"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>

        {/* Elite Input Bar */}
        <div className="p-8 bg-black/40 backdrop-blur-md">
          <div className="relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about premium products..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-8 pr-20 outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 text-white placeholder:text-gray-500"
            />
            <button
              onClick={handleSend}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition-all shadow-lg shadow-purple-600/20 active:scale-95 group-hover:px-6 flex items-center gap-2"
            >
              <span className="hidden group-hover:block text-xs font-bold tracking-widest uppercase">Send</span>
              <Send size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}