"use client";

import { motion } from "framer-motion";
import { 
  Mail, Phone, Send, Github, 
  Linkedin, Globe, ShieldCheck, Cpu 
} from "lucide-react";

export default function ContactPage() {
  const colors = {
    bg: "#F8FAFC",
    primary: "#2563EB",
    textDark: "#0F172A",
    textLight: "#64748B",
    border: "#E2E8F0"
  };

  return (
    <main style={{ backgroundColor: colors.bg }} className="min-h-screen pt-32 pb-40 relative overflow-hidden selection:bg-blue-100 font-sans">
      
      {/* 1. DEDICATED BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-[0.08] filter grayscale brightness-125"
        >
          {/* Targeted video file name as requested */}
          <source src="/contact-stream.mp4" type="video/mp4" />
        </video>
        {/* Technical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-white/60" />
      </div>

      {/* 2. BLUEPRINT GRID (Matches image_08c638.png) */}
      <div className="absolute inset-0 z-[1] opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="liaisonGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.primary} strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#liaisonGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <section className="mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ color: colors.primary }} className="font-black text-[10px] uppercase tracking-[0.4em] mb-4 block underline decoration-blue-200 decoration-4">System_Communication_v2.6</span>
            <h1 style={{ color: colors.textDark }} className="text-6xl md:text-9xl font-black tracking-tighter italic mb-8">
              INITIATE <br/> <span className="text-blue-600">CONTACT.</span>
            </h1>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LIAISON FORM (LEFT) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white/95 backdrop-blur-2xl p-8 md:p-16 rounded-[4rem] shadow-2xl border border-white relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                <Cpu className="w-64 h-64" />
            </div>
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Identify Name</label>
                  <input type="text" placeholder="Aukustin R C" className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Electronic Mail</label>
                  <input type="email" placeholder="aukustin03@gmail.com" className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Transmission Details</label>
                <textarea rows="5" placeholder="Describe technical requirements..." className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-medium resize-none"></textarea>
              </div>
              <button style={{ backgroundColor: colors.primary }} className="w-full py-6 text-white font-black rounded-full flex items-center justify-center gap-4 hover:scale-[1.01] transition-transform shadow-xl shadow-blue-500/20">
                SEND TRANSMISSION <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* TRANSMISSION DATA (RIGHT - Matches image_08515b.png) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group border border-slate-800">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform"><Globe className="w-32 h-32" /></div>
               <h3 className="text-3xl font-black mb-10 italic tracking-tight italic">Direct Liaison.</h3>
               <div className="space-y-10 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="bg-white/10 p-5 rounded-2xl flex items-center justify-center"><Mail className="text-blue-400 w-6 h-6" /></div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-1">Email Address</p>
                        <p className="text-xl md:text-2xl font-bold tracking-tight">aukustin03@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-white/10 p-5 rounded-2xl flex items-center justify-center"><Phone className="text-blue-400 w-6 h-6" /></div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-1">Direct Line</p>
                        <p className="text-xl md:text-2xl font-bold tracking-tight">+91 8248230071</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl">
               <h3 className="text-xl font-black text-slate-900 mb-6 italic">Secure Networks.</h3>
               <div className="flex gap-4">
                  <a href="https://github.com/AUKUSTIN" target="_blank" className="p-5 bg-slate-50 rounded-2xl hover:bg-slate-900 hover:text-white transition-all border border-slate-100"><Github className="w-6 h-6" /></a>
                  <a href="https://www.linkedin.com/in/aukustin-r-c-4b1176287/" target="_blank" className="p-5 bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all border border-slate-100"><Linkedin className="w-6 h-6" /></a>
               </div>
            </div>

            <div className="p-10 bg-blue-50 border border-blue-100 rounded-[3rem] flex items-center gap-6 group">
                <div className="bg-blue-600 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform"><ShieldCheck /></div>
                <p className="text-[10px] font-black uppercase text-blue-700 tracking-widest leading-relaxed">Encrypted Connection Protocols Enabled // 2026 Secured</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}