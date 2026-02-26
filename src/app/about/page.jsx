"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";
import { 
  ChevronRight, Rocket, ShieldCheck, Zap, BrainCircuit, Target, 
  CheckCircle2, Cpu, Settings, Users, Trophy, TrendingUp, ArrowRight 
} from "lucide-react";
import Link from "next/link";

// --- ANIMATED COUNTER COMPONENT ---
function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  const displayValue = useTransform(springValue, (latest) => Math.round(latest));
  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function AboutPage() {
  const colors = {
    bg: "#F8FAFC",
    section: "#FFFFFF",
    primary: "#2563EB",
    textDark: "#0F172A",
    textLight: "#64748B",
    border: "#E2E8F0",
    accentLight: "#DBEAFE"
  };

  const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const services = ["Web & Software Development", "Mobile Applications", "Cloud & DevOps", "AI & Data Solutions", "Cybersecurity", "Consulting"];

  return (
    <main style={{ backgroundColor: colors.bg }} className="min-h-screen pt-32 pb-20 selection:bg-blue-100 font-sans overflow-x-hidden">
      
      {/* --- 1. HERO SECTION WITH RISING NUMBERS --- */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} className="lg:col-span-6">
            <h1 style={{ color: colors.textDark }} className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              Empowering <br/><span style={{ color: colors.primary }}>Business</span> via Tech.
            </h1>
            <p style={{ color: colors.textLight }} className="text-xl leading-relaxed max-w-xl mb-10">
              AukustinLabs is a forward-thinking IT solutions provider building future-ready digital products with academic precision.
            </p>
            
            <div className="flex gap-12">
              <div>
                <h4 className="text-5xl font-black text-slate-900"><Counter value={320} />+</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">Projects Deployed</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-slate-900"><Counter value={150} />+</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">Satisfied Clients</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-slate-900"><Counter value={5} />+</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">Years Exp</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:col-span-6 relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070" alt="Tech Hardware" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. MISSION & VISION (ASYMMETRIC) --- */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-48">
          <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} variants={revealVariant} className="p-12 bg-white rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8"><Target style={{ color: colors.primary }} /></div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">Our Mission.</h3>
              <p style={{ color: colors.textLight }} className="leading-relaxed mb-8">To deliver cutting-edge digital solutions that create measurable impact, solving real-world challenges through secure systems.</p>
              <ul className="grid grid-cols-2 gap-4">
                  {['Scalable', 'Secure', 'High-performing', 'Future-ready'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400"><CheckCircle2 className="w-4 h-4 text-blue-600" /> {item}</li>
                  ))}
              </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} variants={revealVariant} className="p-12 bg-slate-900 text-white rounded-[4rem] shadow-xl relative overflow-hidden group">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8"><Rocket className="text-blue-400" /></div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">Our Vision.</h3>
              <p className="text-slate-400 leading-relaxed mb-8">To become a trusted global technology partner, recognized for innovation and excellence in digital transformation.</p>
              <div className="flex flex-wrap gap-3">
                  {['AI', 'Cloud', 'Automation', 'Cybersecurity'].map((tag) => (
                      <span key={tag} className="px-4 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase">{tag}</span>
                  ))}
              </div>
          </motion.div>
      </section>

      {/* --- 3. THE AGILE LIFECYCLE --- */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div initial="hidden" whileInView="visible" variants={revealVariant}>
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Capabilites</span>
            <h2 className="text-5xl font-black tracking-tighter mb-12 italic">The Aukustin <br/><span className="text-slate-400">Toolkit.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-700">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10"><Settings className="w-40 h-40" /></div>
             <h3 className="text-3xl font-black mb-10 italic">Our Approach</h3>
             <div className="space-y-6">
                {['Discovery', 'Architecture', 'Development', 'Testing', 'Deployment'].map((step, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <span className="text-blue-500 font-mono text-xl">0{i+1}</span>
                    <span className="font-bold uppercase tracking-widest text-sm">{step}</span>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. CALL TO ACTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <motion.div initial="hidden" whileInView="visible" variants={revealVariant} style={{ backgroundColor: colors.primary }} className="rounded-[4rem] p-12 md:p-32 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:30px_30px]" />
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter relative z-10 italic">Let's Build Something <br/> Great Together.</h2>
          <Link href="/contact" className="relative z-10 inline-flex items-center gap-4 px-12 py-6 text-xl font-black bg-white rounded-full transition-all hover:scale-105" style={{ color: colors.primary }}>
            GET STARTED <ArrowRight />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}