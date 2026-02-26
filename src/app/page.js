"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { 
  ArrowRight, Zap, Star, CheckCircle2, Globe, Smartphone, Cloud, 
  Bot, ShieldCheck, BarChart3, Layers, Settings, Database, 
  Activity, ShoppingCart, GraduationCap, ChevronRight, Rocket, Terminal, Cpu, Server
} from "lucide-react";

// --- FIXED ANIMATED COUNTER COMPONENT ---
function RollingNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, { stiffness: 100, damping: 30 });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function Home() {
  const colors = { bg: "#F8FAFC", primary: "#2563EB" };

  const letterAnimation = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0, opacity: 1,
      transition: { delay: i * 0.05, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  const reviews = [
    { name: "Sarah Jenkins", role: "CTO, TechNova", text: "AukustinLabs transformed our outdated ERP into a lightning-fast ecosystem.", rating: 5 },
    { name: "David Chen", role: "Founder, AutomateX", text: "The AI assistant they built has automated 40% of our operations.", rating: 5 },
    { name: "James Wilson", role: "CEO, HealthDirect", text: "Our platform handles thousands of concurrent users seamlessly.", rating: 5 },
  ];

  const marqueeReviews = [...reviews, ...reviews];

  return (
    <main style={{ backgroundColor: colors.bg }} className="min-h-screen font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* 🔹 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518433278981-162f13bc7035?q=80&w=2560&auto=format&fit=crop" 
            alt="Technical Grid" 
            className="w-full h-full object-cover grayscale opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center z-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-10 bg-white border shadow-sm text-blue-600">
            <Zap size={14} fill="currentColor" /> Technology Excellence 2026
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-8">
            { "Building Scalable".split("").map((char, i) => (
              <motion.span key={i} custom={i} variants={letterAnimation} initial="hidden" animate="visible" className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            <span className="text-blue-600">
              { "Digital Solutions".split("").map((char, i) => (
                <motion.span key={i} custom={i + 15} variants={letterAnimation} initial="hidden" animate="visible" className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
            Custom software, cloud systems, and enterprise technology designed for modern businesses.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl hover:bg-blue-700 transition-all">Explore Services</Link>
            <Link href="/contact" className="px-10 py-5 border-2 border-slate-200 text-slate-900 font-bold rounded-2xl bg-white transition-all">Free Consultation</Link>
          </motion.div>
        </div>
      </section>

      {/* 🔹 2. ABOUT PREVIEW */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-slate-900 mb-8 italic tracking-tighter uppercase">Who We Are.</h2>
            <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
              <p>AukustinLabs is a specialized IT firm focused on engineering robust software backbones for global enterprises.</p>
              <p>We replace technical debt with high-performance architecture, ensuring your systems are built for long-term scalability and market leadership.</p>
              <div className="flex gap-10 pt-4">
                <div><h4 className="text-4xl font-black text-blue-600"><RollingNumber value={100}/>+</h4><p className="text-xs font-bold uppercase text-slate-400">Projects</p></div>
                <div><h4 className="text-4xl font-black text-slate-900"><RollingNumber value={5}/>+</h4><p className="text-xs font-bold uppercase text-slate-400">Years</p></div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-[3rem] overflow-hidden border shadow-2xl h-[450px]">
             <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop" 
               alt="Digital Connectivity" 
               className="w-full h-full object-cover"
             />
          </motion.div>
        </div>
      </section>

      {/* 🔹 3. SERVICES OVERVIEW */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900 italic tracking-tighter uppercase">Strategic Services.</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Web Development", i: <Globe />, d: "React & Next.js mastery for ultra-fast platforms." },
            { t: "Mobile Apps", i: <Smartphone />, d: "Cross-platform excellence for iOS & Android." },
            { t: "Cloud Solutions", i: <Cloud />, d: "AWS & Azure setup with automated scaling." },
            { t: "UI/UX Design", i: <Layers />, d: "Interfaces built for conversion & intuition." },
            { t: "DevOps", i: <Settings />, d: "Streamlined CI/CD and deployment automation." },
            { t: "AI & Automation", i: <Bot />, d: "Autonomous data agents & LLM integration." }
          ].map((s, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">{s.i}</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">{s.t}</h3>
              <p className="text-slate-500 mb-8 text-sm leading-relaxed">{s.d}</p>
              <Link href="/services" className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest">Learn More <ArrowRight size={14}/></Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 5. WHY CHOOSE US */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative rounded-[4rem] overflow-hidden shadow-2xl h-[500px]">
             <img 
               src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2560&auto=format&fit=crop" 
               alt="AI Neural Networks" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
          </div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
            <h2 className="text-4xl font-black text-slate-900 mb-10 italic tracking-tighter uppercase">Why Partner With Us?</h2>
            <div className="space-y-4">
              {[
                { t: "Expert Team", d: "Senior-only engineering talent." },
                { t: "Custom Solutions", d: "No templates. Built for your specific logic." },
                { t: "Scalable Architecture", d: "Built for 10x business growth." },
                { t: "24/7 Support", d: "Global infrastructure monitoring." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-600 transition-colors">
                  <CheckCircle2 className="text-blue-600" />
                  <div>
                    <span className="font-bold text-slate-800 block uppercase text-sm">{item.t}</span>
                    <span className="text-slate-400 text-xs">{item.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 11. PROCESS SECTION */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900">Our Process.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Discovery", "Planning", "Development", "Deployment"].map((step, i) => (
              <div key={i} className="p-12 bg-white rounded-[3rem] border border-slate-100 relative group overflow-hidden shadow-sm">
                <span className="absolute -right-4 -top-4 text-7xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">0{i+1}</span>
                <h4 className="text-xl font-black mb-4 relative z-10 uppercase">{step}</h4>
                <p className="text-slate-400 text-sm relative z-10 leading-relaxed">Systematic agile execution ensuring precision delivery.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 8. STATISTICS SECTION */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { v: 150, l: "Projects Completed" },
            { v: 50, l: "Happy Clients" },
            { v: 10, l: "Industries Served" },
            { v: 98, l: "Success Rate", s: "%" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-2 italic">
                <RollingNumber value={stat.v}/>{stat.s || "+"}
              </h3>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stat.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 6. TESTIMONIALS */}
      <section className="py-32 overflow-hidden bg-white border-y">
        <div className="text-center mb-16 px-6"><h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">The Market Verdict.</h2></div>
        <div className="flex overflow-hidden">
          <motion.div className="flex gap-8 whitespace-nowrap" animate={{ x: [0, -1728] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
            {marqueeReviews.map((review, i) => (
              <div key={i} className="w-[450px] shrink-0 bg-slate-50 p-12 rounded-[4rem] border border-slate-100">
                <div className="flex gap-1 mb-8">{[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />)}</div>
                <p className="text-xl font-medium mb-10 whitespace-normal italic text-slate-700">"{review.text}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl">{review.name.charAt(0)}</div>
                  <div><h4 className="font-bold text-slate-900">{review.name}</h4><p className="text-xs font-bold uppercase text-slate-400">{review.role}</p></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔹 7. CALL TO ACTION */}
      <section className="py-40 px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="max-w-7xl mx-auto rounded-[5rem] p-16 md:p-32 text-center bg-blue-600 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2560&auto=format&fit=crop" 
               alt="Server Room" 
               className="w-full h-full object-cover opacity-20"
             />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase italic leading-none">Ready to Build <br className="hidden md:block"/> the Future?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-7 text-xl font-black bg-white text-blue-600 rounded-full hover:scale-105 transition-all shadow-2xl">Start Project <ArrowRight /></Link>
              <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-7 text-xl font-black bg-transparent border-2 border-white text-white rounded-full transition-all hover:bg-white/10">Talk to Experts</Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}