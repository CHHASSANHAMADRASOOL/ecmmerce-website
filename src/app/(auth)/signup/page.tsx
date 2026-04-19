"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter text-white uppercase">Join Elite</h1>
          <p className="text-blue-400 text-xs font-mono tracking-widest mt-2">CREATE YOUR PROFILE</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <input 
            type="text" 
            placeholder="Full Name"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 transition-all text-white"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" 
            placeholder="Email Address"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 transition-all text-white"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" 
            placeholder="Create Password"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 transition-all text-white"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/20 transition-all active:scale-95 uppercase tracking-widest">
            Register Now
          </button>
        </form>

        <p className="text-center mt-8 text-gray-500 text-sm">
          Already a member? <Link href="/login" className="text-blue-400 hover:underline">Log In</Link>
        </p>
      </motion.div>
 
    </div>
  );
}