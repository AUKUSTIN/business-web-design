"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useSpring, useTransform } from "framer-motion";
import { 
  Code, Globe, Smartphone, Cloud, Bot, ShieldCheck, 
  CheckCircle2, X, Wrench, Info, Terminal, Zap 
} from "lucide-react";

// --- ANIMATED COUNTER ---
function RollingNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  const displayValue = useTransform(springValue, (latest) => Math.round(latest));
  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function ServicesPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const colors = {
    bg: "#F8FAFC",
    section: "#FFFFFF",
    primary: "#2563EB",
    textDark: "#0F172A",
    textLight: "#64748B",
    border: "#E2E8F0",
    accentLight: "#DBEAFE"
  };

  const serviceCategories = [
    {
      title: "Custom Software",
      icon: <Code />,
      desc: "Building tailored software solutions including Enterprise systems, CRM/ERP, and SaaS platforms.",
      features: ["SaaS Architecture", "Internal Tooling", "Process Automation"],
      project: {
        name: "Nexus ERP Core",
        explanation: "A centralized resource planning system for multi-national logistics. It handles real-time inventory tracking across 50+ warehouses.",
        tools: ["Next.js 15", "PostgreSQL", "Redis", "Apache Kafka", "Docker"],
        outcome: "Reduced operational latency by 45% and automated 12 manual reporting workflows."
      }
    },
    {
      title: "Web Engineering",
      icon: <Globe />,
      desc: "High-performance web applications with optimized SEO and robust API development.",
      features: ["Frontend Mastery", "Backend Logic", "Full-Stack Ops"],
      project: {
        name: "Global Market Hub",
        explanation: "A high-traffic e-commerce platform optimized for sub-second page loads and global scalability.",
        tools: ["React", "TypeScript", "Node.js", "Tailwind CSS", "AWS"],
        outcome: "Achieved a 98/100 Lighthouse performance score and supported 10k+ concurrent users."
      }
    },
    {
      title: "Mobile Solutions",
      icon: <Smartphone />,
      desc: "Scalable mobile ecosystems for iOS and Android, focusing on customer engagement.",
      features: ["React Native", "Enterprise Mobility", "iOS/Android"],
      project: {
        name: "FinTrack Mobile",
        explanation: "A secure personal finance application featuring real-time expense tracking and investment insights.",
        tools: ["React Native", "Firebase", "Redux", "Stripe API"],
        outcome: "Maintained a 4.8/5.0 App Store rating with over 500,000 active monthly users."
      }
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud />,
      desc: "Advanced infrastructure automation, CI/CD pipelines, and cloud migration strategies.",
      features: ["Docker/K8s", "CI/CD Setup", "AWS/Azure Ops"],
      project: {
        name: "AutoDeploy Pipeline",
        explanation: "Zero-downtime deployment infrastructure utilizing blue-green deployment strategies.",
        tools: ["Terraform", "Kubernetes", "GitHub Actions", "Ansible"],
        outcome: "Deployment time reduced from 3 hours to 10 minutes with 100% success rate."
      }
    },
    {
      title: "AI & Intelligence",
      icon: <Bot />,
      desc: "Future-ready AI integration, predictive analytics, and autonomous AI agents.",
      features: ["AI Chatbots", "Machine Learning", "Data Viz"],
      project: {
        name: "Cognitive Support AI",
        explanation: "A customer support AI agent trained on proprietary datasets to handle 80% of routine inquiries.",
        tools: ["OpenAI API", "Python", "LangChain", "Vector Databases"],
        outcome: "Cut customer support ticket volume by 60% while increasing user satisfaction."
      }
    },
    {
      title: "Cybersecurity",
      icon: <ShieldCheck />,
      desc: "Security audits and identity management to build trust and protect enterprise data.",
      features: ["Secure Coding", "Audits", "Data Protection"],
      project: {
        name: "Guardian Vault",
        explanation: "Implementation of a multi-factor authentication and data encryption standard for a banking client.",
        tools: ["OAuth 2.0", "AES-256", "Bio-Auth", "Cloudflare WAF"],
        outcome: "Successfully passed 3 consecutive third-party security audits with zero vulnerabilities."
      }
    }
  ];

  return (
    <main style={{ backgroundColor: colors.bg }} className="min-h-screen pt-32 pb-40 relative overflow-hidden selection:bg-blue-100">
      
      {/* 1. BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.primary} strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. HERO HEADER - UPDATED 3-PART SPLIT ASSEMBLY */}
        <section className="text-center mb-32 overflow-hidden py-10">
          <motion.div initial="hidden" animate="visible">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ color: colors.primary }} 
              className="font-black text-xs uppercase tracking-[0.4em] mb-8 block"
            >
              Expertise_Catalog_2026
            </motion.span>

            <div className="flex flex-col items-center justify-center">
              {/* SYSTEM - Comes from up */}
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.2 }}
                style={{ color: colors.textDark }}
                className="text-5xl md:text-8xl font-black tracking-tighter italic"
              >
                SYSTEM
              </motion.div>

              {/* ARCHITECTURE - Split into ARCHI | TEC | TURE. */}
              <div className="text-5xl md:text-9xl font-black tracking-tighter italic flex flex-wrap justify-center text-blue-600 leading-none">
                
                {/* 1. ARCHI - Walking from left */}
                <motion.span
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 45, damping: 14, delay: 0.8 }}
                  className="inline-block"
                >
                  ARCHI
                </motion.span>

                {/* 2. TEC - Falling from up */}
                <motion.span
                  initial={{ y: -800, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12, delay: 1.6 }}
                  className="inline-block"
                >
                  TEC
                </motion.span>

                {/* 3. TURE. - Sliding from right to left */}
                <motion.span
                  initial={{ x: "100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 50, damping: 15, delay: 2.2 }}
                  className="inline-block"
                >
                  TURE.
                </motion.span>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
              style={{ color: colors.textLight }} 
              className="max-w-2xl mx-auto text-xl font-medium mt-10"
            >
              Click any category to explore real-world implementation details and toolsets.
            </motion.p>
          </motion.div>
        </section>

        {/* 3. SERVICE GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-48">
          {serviceCategories.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(service)}
              whileHover={{ 
                backgroundColor: colors.primary,
                y: -15,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="p-10 bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.3)] transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-10">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
                  style={{ backgroundColor: colors.accentLight, color: colors.primary }}
                >
                  {service.icon}
                </div>
                <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                  Open Project Detail
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 transition-colors duration-300 group-hover:text-white">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 transition-colors duration-300 group-hover:text-blue-100">{service.desc}</p>
              <div className="space-y-3">
                {service.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors duration-300 group-hover:text-blue-50">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* 4. MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" 
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-white"
              >
                <div className="p-10 md:p-14 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                  <div>
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest block mb-2 underline decoration-blue-200">Implementation Profile // 2026</span>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter">{selectedProject.project.name}</h2>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="p-4 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                </div>

                <div className="p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-10">
                    <section>
                      <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold">
                        <Info className="w-4 h-4 text-blue-600" /> <span>Project Overview</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{selectedProject.project.explanation}</p>
                    </section>
                    
                    <section>
                      <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold">
                        <Zap className="w-4 h-4 text-blue-600" /> <span>Measurable Outcome</span>
                      </div>
                      <div className="p-6 bg-blue-600 rounded-3xl text-white">
                        <p className="text-sm font-medium leading-relaxed italic">"{selectedProject.project.outcome}"</p>
                      </div>
                    </section>
                  </div>

                  <div className="space-y-10">
                    <section>
                      <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold">
                        <Terminal className="w-4 h-4 text-blue-600" /> <span>The Tech Stack</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProject.project.tools.map((tool) => (
                          <div key={tool} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                            <Wrench className="w-3 h-3 text-blue-600" />
                            <span className="text-[10px] font-black uppercase text-slate-600">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 5. METRICS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-24 border-y border-slate-100">
           {[{ v: 320, l: "Projects Deployed", id: "01" }, { v: 150, l: "Satisfied Clients", id: "02" }, { v: 24, l: "Support Line", id: "03" }].map((m, i) => (
             <div key={i} className="relative group">
               <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[60px] font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 {m.id}
               </span>

               <div className="relative z-10">
                 <div className="flex items-center justify-center gap-2">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                   </span>
                   
                   <h4 className="text-6xl font-black text-slate-900 tracking-tighter">
                     <RollingNumber value={m.v} />{m.v === 24 ? "/7" : "+"}
                   </h4>
                 </div>
                 
                 <div className="mt-2 flex flex-col items-center">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                     {m.l}
                   </p>
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: "24px" }}
                     className="h-[2px] bg-blue-600 mt-2"
                   />
                 </div>
               </div>
             </div>
           ))}
        </section>
      </div>
    </main>
  );
}