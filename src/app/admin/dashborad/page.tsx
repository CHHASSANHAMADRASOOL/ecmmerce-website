"use client";

import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  const stats = [
    { label: "TOTAL SALES", value: "$124,500", color: "text-blue-500" },
    { label: "VIP ASSETS", value: "50", color: "text-purple-500" },
    { label: "PENDING ORDERS", value: "12", color: "text-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-10 pt-32">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-end mb-16 border-b border-white/5 pb-10">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter uppercase">DASHBOARD.</h1>
            <p className="text-gray-500 text-[10px] tracking-[10px] uppercase font-bold mt-2">CH HASSAN Command Hub</p>
          </div>
          <button className="px-6 py-2 border border-red-500/30 text-red-500 text-[8px] font-black uppercase rounded-full hover:bg-red-500 hover:text-white transition-all">
            Terminate Session
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-10 rounded-[40px] backdrop-blur-md">
              <p className="text-[9px] font-black tracking-[4px] text-gray-500 uppercase mb-4">{stat.label}</p>
              <h2 className={`text-4xl font-black italic ${stat.color}`}>{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="mt-12 bg-white/5 border border-white/5 rounded-[40px] p-10">
          <h3 className="text-sm font-black tracking-[5px] uppercase mb-8">System Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">New VIP Order Received</span>
                <span className="text-[9px] text-blue-500 font-mono">JUST NOW</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}