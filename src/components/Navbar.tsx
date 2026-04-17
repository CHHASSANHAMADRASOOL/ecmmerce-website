"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Hydration fix to prevent terminal errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // VIP Links Configuration
  const navLinks = [
    { name: "THE VAULT", path: "/", label: "HOME" },
    { name: "ELITE ASSETS", path: "/products", label: "SHOP" },
    { name: "COMMAND CENTER", path: "/admin", label: "ADMIN" },
    { name: "CONTACT HUB", path: "/contact", label: "SUPPORT" },
    { name: "VIP CARD", path: "/payment", label: "PAYMENT" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-6xl px-6">
      <nav className="relative group">
        {/* Animated Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        {/* Main Navbar Body */}
        <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-10 py-5 flex justify-between items-center shadow-2xl">
          
          {/* VIP Brand Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-black italic tracking-tighter leading-none">
              CH <span className="text-blue-600">HASSAN.</span>
            </span>
            <span className="text-[7px] tracking-[4px] uppercase font-bold text-gray-500">Automation Specialist</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link key={link.path} href={link.path} className="group/link flex flex-col items-center">
                  <span className={`text-[10px] font-black tracking-[3px] uppercase transition-all duration-300 ${
                    isActive ? 'text-blue-500' : 'text-gray-400 group-hover/link:text-white'
                  }`}>
                    {link.name}
                  </span>
                  {/* Active Indicator Line */}
                  <div className={`h-[2px] mt-1 bg-blue-600 transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <Link href="/contact">
            <button className="hidden lg:block px-6 py-2 bg-white text-black text-[9px] font-black uppercase rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-95">
              Secure Access
            </button>
          </Link>

          {/* Mobile Menu Icon (Visual Only) */}
          <div className="md:hidden flex flex-col gap-1 w-5">
            <div className="h-0.5 w-full bg-white"></div>
            <div className="h-0.5 w-full bg-blue-600"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}