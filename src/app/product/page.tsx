"use client";
import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// TypeScript Interface for VIP Assets
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  details: string;
}

export default function ProductsVault() {
  const [mounted, setMounted] = useState(false);

  // 10 VIP Products Data with Attached Pictures
  const products: Product[] = [
    { id: 1, name: "AI QUANTUM CORE", category: "TECH", price: "2,500", details: "Neural processing unit", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" },
    { id: 2, name: "ROLEX SUBMARINER", category: "LUXURY", price: "12,000", details: "Midnight edition", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80" },
    { id: 3, name: "RS6 GT MASTER", category: "AUTO", price: "180,000", details: "Custom matte finish", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&q=80" },
    { id: 4, name: "MACBOOK PRO MAX", category: "TECH", price: "3,499", details: "M3 Ultra chip", image: "https://tse4.mm.bing.net/th/id/OIP.N5-6WK12p476PkSzCpWbuwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 5, name: "VAULT KEY S1", category: "CRYPTO", price: "899", details: "Cold storage security", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80" },
    { id: 6, name: "PHANTOM DRONE", category: "ELITE", price: "1,200", details: "8K Stealth camera", image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&q=80" },
    { id: 7, name: "LEATHER BRIEFCASE", category: "FASHION", price: "750", details: "Italian handmade", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" },
    { id: 8, name: "SMART HUB AI", category: "HOME", price: "450", details: "Voice automation", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80" },
    { id: 9, name: "CYBER GLASSES", category: "TECH", price: "1,100", details: "AR Display integration", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80" },
    { id: 10, name: "LAND CRUISER V8", category: "AUTO", price: "95,000", details: "VIP Armored Edition", image: "https://images.unsplash.com/photo-1594568284297-7c64464062b1?w=600&q=80" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-40 pb-20 px-6 font-sans">

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
            <Link href="/chat" className="text-[9px] font-bold tracking-[3px] uppercase hover:text-blue-500 transition-all">AI CHAT</Link>         
          </div>
        </div>
      </nav>      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-6">
            ELITE <span className="text-blue-600">INVENTORY.</span>
          </h1>
          <p className="text-gray-500 tracking-[10px] uppercase text-[10px] font-bold">
            Authorized Digital Assets • CH HASSAN HAMAD RASOOL
          </p>
        </div>

        {/* 10 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group relative bg-[#0a0a0a] border border-white/5 rounded-[40px] overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2">
              
              {/* Product Image */}
              <div className="aspect-[4/5] relative overflow-hidden bg-zinc-900">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <span className="text-[8px] font-black tracking-widest text-blue-400 uppercase">{p.category}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h3 className="text-xl font-black italic tracking-tighter uppercase mb-2 group-hover:text-blue-500 transition-colors">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-[10px] tracking-widest uppercase mb-6">{p.details}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[8px] text-gray-600 uppercase font-bold">Price</span>
                    <span className="text-xl font-mono font-black">${p.price}</span>
                  </div>
                  
                  <Link href="/contact">
                    <button className="px-6 py-3 bg-white text-black text-[9px] font-black uppercase rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95">
                      Acquire
                    </button>
                  </Link>
                </div>
              </div>

              {/* VIP Glow Border */}
              <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/10 rounded-[40px] pointer-events-none transition-all" />
            </div>
          ))}
        </div>

        {/* Footer Branding */}
        <div className="mt-40 text-center opacity-20 border-t border-white/5 pt-10">
          <p className="text-[8px] tracking-[20px] uppercase font-bold italic">
            CH HASSAN • AI AUTOMATION SPECIALIST • 2026 SYSTEM
          </p>
        </div>
      </div>
    </div>
  );
}