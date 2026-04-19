"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Attempt:", { email, password });
    // Yahan aap apni API call (NextAuth ya Prisma) connect karenge
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter text-white uppercase">Welcome Back</h1>
          <p className="text-purple-400 text-xs font-mono tracking-widest mt-2">VIP EXECUTIVE ACCESS</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-4">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-purple-500 transition-all text-white"
              placeholder="admin@hassan.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-4">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-purple-500 transition-all text-white"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-500/20 transition-all active:scale-95 uppercase tracking-widest">
            Sign In
          </button>
        </form>

        <p className="text-center mt-8 text-gray-500 text-sm">
          Don't have an account? <Link href="/signup" className="text-purple-400 hover:underline">Create VIP Account</Link>
        </p>
      </motion.div>
    </div>
  );
}