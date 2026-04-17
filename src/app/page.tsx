"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function VIPHomePage() {
  const [mounted, setMounted] = useState(false);

  // Hydration fix for SSR
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col items-center justify-center px-6">
      
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

      {/* 1. BACKGROUND DYNAMICS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      {/* 2. MAIN HERO CONTENT */}
      <div className="relative z-10 text-center space-y-8 max-w-5xl mt-20">
        
        {/* Welcome Tag */}
        <div className="inline-block px-6 py-2 border border-blue-500/30 bg-blue-500/5 rounded-full backdrop-blur-md mb-4">
          <span className="text-[10px] font-black tracking-[8px] uppercase text-blue-400">
            Authorized Access Only
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-[120px] font-black italic tracking-tighter uppercase leading-[0.9] group">
          WELCOME TO MY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            ECOMMERCE
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-xl mx-auto text-gray-500 text-sm md:text-lg tracking-widest font-light uppercase leading-relaxed">
          The ultimate vault for premium assets, elite tech, and luxury fashion. curated by <span className="text-white font-bold italic">CH HASSAN.</span>
        </p>

        {/* 3. NAVIGATION LINKS (Button Style) */}
        <div className="flex flex-wrap justify-center gap-6 pt-12">
          <Link href="/products">
            <button className="group relative px-12 py-5 bg-white text-black font-black text-[11px] tracking-[6px] uppercase rounded-2xl transition-all hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              Enter Vault
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-12 py-5 bg-transparent border border-white/10 text-white font-black text-[11px] tracking-[6px] uppercase rounded-2xl transition-all hover:border-blue-500 hover:text-blue-500 active:scale-95 backdrop-blur-sm">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* 4. FOOTER BRANDING */}
      <div className="absolute bottom-12 text-center w-full">
        <p className="text-[9px] tracking-[15px] uppercase font-bold text-gray-700">
          CH HASSAN HAMAD RASOOL • AI AUTOMATION SPECIALIST
        </p>
      </div>

      {/* Side Decorative Lines */}
      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

    </div>
  );
}