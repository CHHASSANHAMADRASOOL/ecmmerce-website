"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (For more security, use NextAuth.js)
    if (password === "Hassan_VIP_Secure_2026") {
      localStorage.setItem("vip_admin_token", "authorized");
      router.push("/admin/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-playfair">
      <div className="p-10 bg-zinc-900 border border-gold-600/30 rounded-3xl shadow-2xl w-96 text-center">
        <h2 className="text-3xl text-gold-500 mb-6 italic font-bold">VIP Terminal</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input 
            type="password" 
            placeholder="Enter Admin Key" 
            className="w-full bg-black border-b border-white/20 py-3 text-center outline-none focus:border-gold-500 transition-all"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-xs uppercase tracking-tighter">Access Denied: Invalid Key</p>}
          <button className="w-full py-4 bg-gold-600 text-black font-bold uppercase hover:bg-gold-500 transition-all">
            Unlock Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}