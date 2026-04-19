"use client";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';

export default function ContactMasterPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState("");

 useEffect(() => {
  const timer = setTimeout(() => {
    setMounted(true);
  }, 0);
  return () => clearTimeout(timer);
}, []);

  const playSuccess = () => {
    const audio = new Audio('/success.mp3');
    audio.play().catch(err => console.log("Audio file missing in public folder"));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");
    setTimeout(() => {
      setStatus("SUCCESSFULLY SENT!");
      playSuccess();
      setTimeout(() => setStatus(""), 3000);
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
            {/* --- VIP FLOATING NAVBAR --- */}
      <nav className="fixed top-6 z-50 w-full max-w-4xl px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex justify-between items-center shadow-2xl">
          <div className="text-sm font-black italic tracking-tighter">
            CH <span className="text-blue-600">HASSAN HASSAN HAMAD RASOOL</span>
          </div>
          <div className="flex gap-8">
            <Link href="/" className="text-[9px] font-bold tracking-[3px] uppercase hover:text-blue-500 transition-all">Home</Link>
            <Link href="/product" className="text-[9px] font-bold tracking-[3px] uppercase hover:text-blue-500 transition-all">Vault</Link>
            <Link href="/contact" className="text-[9px] font-bold tracking-[3px] uppercase hover:text-blue-500 transition-all">Contact</Link>
            <Link href="/admin" className="text-[9px] font-bold tracking-[3px] uppercase hover:text-blue-500 transition-all text-yellow-500">ADMIN</Link>
          </div>
        </div>
      </nav>
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black italic tracking-tighter uppercase mb-4">
            THE <span className="text-blue-600">HUB.</span>
          </h1>
          <p className="text-gray-500 tracking-[8px] uppercase text-[10px] font-bold">
            Authorized Communication Channels
          </p>
        </div>

        {/* 3 MAIN OPTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Option 1: WhatsApp/Phone */}
          <button 
            onClick={() => setActiveTab('dial')}
            className={`p-10 rounded-[40px] border transition-all flex flex-col items-center ${activeTab === 'dial' ? 'border-green-500 bg-green-500/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]' : 'border-white/5 bg-[#0a0a0a] hover:border-white/20'}`}
          >
            <span className="text-4xl mb-4">📱</span>
            <h3 className="font-black italic uppercase tracking-widest text-sm">Dial Up</h3>
          </button>

          {/* Option 2: Gmail Form */}
          <button 
            onClick={() => setActiveTab('gmail')}
            className={`p-10 rounded-[40px] border transition-all flex flex-col items-center ${activeTab === 'gmail' ? 'border-red-500 bg-red-500/5 shadow-[0_0_30px_rgba(239,68,68,0.1)]' : 'border-white/5 bg-[#0a0a0a] hover:border-white/20'}`}
          >
            <span className="text-4xl mb-4">📧</span>
            <h3 className="font-black italic uppercase tracking-widest text-sm">Gmail Form</h3>
          </button>

          {/* Option 3: Project Form */}
          <button 
            onClick={() => setActiveTab('project')}
            className={`p-10 rounded-[40px] border transition-all flex flex-col items-center ${activeTab === 'project' ? 'border-blue-500 bg-blue-600/5 shadow-[0_0_30px_rgba(37,99,235,0.1)]' : 'border-white/5 bg-[#0a0a0a] hover:border-white/20'}`}
          >
            <span className="text-4xl mb-4">📦</span>
            <h3 className="font-black italic uppercase tracking-widest text-sm">Project Vault</h3>
          </button>
        </div>

         {/* DYNAMIC CONTENT SECTION */}
        <div className="transition-all duration-500">
          
          {/* DIAL UP INTERFACE */}
          {activeTab === 'dial' && (
            <div className="bg-[#0a0a0a] border border-green-500/20 p-10 rounded-[50px] text-center animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-2xl font-black italic mb-8 uppercase text-green-500 tracking-tighter">Secure Connections</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                  <p className="text-[10px] text-gray-500 tracking-widest uppercase mb-2">Direct Number</p>
                  <a href="tel:+923146419379" className="text-3xl font-mono font-bold hover:text-green-500 transition-colors">+92 3146419379</a>
                </div>
                <a href="https://wa.me/923146419379" target="_blank" className="block w-full py-5 bg-green-600 text-white font-black tracking-[8px] uppercase rounded-2xl hover:bg-white hover:text-black transition-all">
                  Launch WhatsApp Chat
                </a>
              </div>
            </div>
          )}

          {/* GMAIL FORM INTERFACE */}
          {activeTab === 'gmail' && (
            <div className="bg-[#0a0a0a] border border-red-500/20 p-10 rounded-[50px] animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-2xl font-black italic mb-8 uppercase text-red-600 tracking-tighter">Gmail Direct Portal</h2>
              <form onSubmit={handleFinalSubmit} className="space-y-4">
                <input type="text" placeholder="USER NAME" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-red-600 font-mono text-xs uppercase" />
                <input type="email" placeholder="EMAIL ADDRESS" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-red-600 font-mono text-xs uppercase" />
                <textarea placeholder="MESSAGE CONTENT" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-red-600 font-mono text-xs uppercase h-32"></textarea>
                <button className="w-full py-5 bg-red-600 text-white font-black tracking-[8px] uppercase rounded-2xl hover:bg-white hover:text-black transition-all">
                  {status || "TRANSMIT MESSAGE"}
                </button>
              </form>
            </div>
          )}

          {/* PROJECT FORM INTERFACE */}
          {activeTab === 'project' && (
            <div className="bg-[#0a0a0a] border border-blue-500/20 p-10 rounded-[50px] animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-2xl font-black italic mb-8 uppercase text-blue-500 tracking-tighter">New Project Inquiry</h2>
              <form onSubmit={handleFinalSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <input type="text" placeholder="USER NAME" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-600 font-mono text-xs uppercase" />
                   <input type="text" placeholder="PROJECT TYPE (e.g. AI/WEB)" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-600 font-mono text-xs uppercase" />
                </div>
                <input type="email" placeholder="CONTACT EMAIL" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-600 font-mono text-xs uppercase" />
                <textarea placeholder="PROJECT DETAILS & REQUIREMENTS" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-600 font-mono text-xs uppercase h-32"></textarea>
                <button className="w-full py-5 bg-blue-600 text-white font-black tracking-[8px] uppercase rounded-2xl hover:bg-white hover:text-black transition-all shadow-lg">
                  {status || "SUBMIT PROJECT FORM"}
                </button>
              </form>
            </div>
          )}

        </div>

        {/* BRANDING */}
        <div className="mt-20 text-center opacity-20">
          <p className="text-[8px] tracking-[15px] uppercase font-bold italic">
            CH HASSAN HAMAD RASOOL • SECURE ARCHITECT
          </p>
        </div>
      </div>
    </div>
  );
}