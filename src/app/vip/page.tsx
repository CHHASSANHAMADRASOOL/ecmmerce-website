"use client";

import React, { useState, useEffect } from 'react';

export default function AmazonVipPayment() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setMounted(true);
  }, 0);
  return () => clearTimeout(timer);
}, []);
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Success Sound and logic
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const audio = new Audio('/success.mp3');
      audio.play().catch(() => console.log("Add success.mp3 to public folder"));
    }, 3000);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-6 flex flex-col items-center">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-yellow-500">
          AMAZON <span className="text-white">VIP PORTAL.</span>
        </h1>
        <p className="text-[10px] tracking-[8px] uppercase text-gray-500 mt-2">Secure Payment Gateway • CH HASSAN</p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE: THE VIP CARD VISUAL */}
        <div className="space-y-8">
          <div className="relative w-full h-64 bg-gradient-to-br from-gray-800 via-black to-yellow-600/20 rounded-[40px] p-8 border border-white/10 overflow-hidden shadow-2xl group">
            {/* Animated Shine */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
            
            <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-10 bg-yellow-500/20 border border-yellow-500/50 rounded-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-yellow-600/40 rounded-sm" />
              </div>
              <span className="text-xl font-black italic opacity-20">VIP ASSET</span>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-mono tracking-[6px]">**** **** **** 2026</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[8px] uppercase text-gray-500 tracking-widest">Card Holder</p>
                  <p className="text-sm font-bold tracking-widest uppercase">CH HASSAN HAMAD RASOOL</p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] uppercase text-gray-500 tracking-widest">Expiry</p>
                  <p className="text-sm font-bold font-mono">12 / 30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recharge Status / Balance Info */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[40px] flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Transfer Amount</p>
              <h2 className="text-3xl font-black italic">$45,299.00</h2>
            </div>
            <div className="text-right">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse inline-block mr-2" />
              <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Active Server</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: PAYMENT FORM */}
        <div className="bg-[#0a0a0a] border border-yellow-500/10 p-10 rounded-[50px] shadow-2xl">
          <h2 className="text-2xl font-black italic mb-8 uppercase tracking-tighter">Enter Card <span className="text-yellow-500">Details.</span></h2>
          
          <form onSubmit={handlePayment} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name on Card</label>
              <input type="text" placeholder="CH HASSAN..." required className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-yellow-500 font-mono text-sm transition-all uppercase" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Card Number</label>
              <input type="text" placeholder="0000 0000 0000 0000" required className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-yellow-500 font-mono text-sm transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Expiry Date</label>
                <input type="text" placeholder="MM / YY" required className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-yellow-500 font-mono text-sm transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">CVC / CVV</label>
                <input type="text" placeholder="***" required className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-yellow-500 font-mono text-sm transition-all" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading || success}
              className={`w-full py-6 rounded-[25px] font-black tracking-[10px] uppercase transition-all duration-500 ${
                success 
                ? 'bg-green-600 text-white' 
                : 'bg-yellow-500 text-black hover:bg-white hover:scale-105 shadow-[0_20px_40px_rgba(234,179,8,0.2)]'
              }`}
            >
              {loading ? "PROCESSING..." : success ? "PAYMENT SUCCESSFUL" : "EXECUTE PAYMENT"}
            </button>
          </form>

          <div className="mt-8 flex justify-center gap-4 opacity-20 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="mastercard" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_logo%2C_revised_2016.svg" alt="stripe" className="h-4" />
          </div>
        </div>

      </div>

      {/* Footer Branding */}
      <footer className="mt-20 opacity-20">
        <p className="text-[9px] tracking-[15px] uppercase font-bold italic">
          CH HASSAN HAMAD RASOOL • SECURE TRANSACTION SYSTEM
        </p>
      </footer>
    </div>
  );
}