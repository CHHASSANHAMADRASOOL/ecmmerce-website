"use client";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { div } from 'framer-motion/m';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => { setMounted(true); }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // VIP Password Check
    if (password === 'admin123') {
      router.push('/admin/dashboard');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (!mounted) return null;

  return (
    

<div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
        
        {/* Decorative Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/20 blur-[80px]" />

        <div className="text-center mb-10">
          <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white">
            COMMAND <span className="text-blue-600">CENTER</span>
          </h2>
          <p className="text-[8px] tracking-[5px] text-gray-500 uppercase mt-2">Authorized Personnel Only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input 
              type="password" 
              placeholder="ENTER ACCESS KEY"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white text-sm tracking-widest focus:outline-none focus:border-blue-500 transition-all`}
            />
            {error && <p className="text-red-500 text-[8px] font-bold mt-2 tracking-widest uppercase">Access Denied: Invalid Key</p>}
          </div>
<Link href="/admin/dashboard">
            <button type="button" className="text-blue-500 hover:text-blue-400 text-[8px] font-bold mt-2 tracking-widest uppercase">
              Forgot Password?
            </button>
          </Link>
      <Link href="/admin/dashborad">/
          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] tracking-[5px] uppercase rounded-2xl transition-all shadow-lg active:scale-95">
            Initialize Login
          </button>
          </Link>
        </form>
        <div className="mt-8 text-center">
          <p className="text-[7px] text-gray-700 tracking-[10px] uppercase">CH HASSAN • SECURED SYSTEM</p>
        </div>
      </div>
    </div>
  );
}