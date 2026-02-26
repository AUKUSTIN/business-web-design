"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, Zap, Globe, Smartphone, Cloud, Bot, 
  ShoppingCart, ShieldCheck, BarChart3, Briefcase, 
  ArrowRight, Cpu, Terminal 
} from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const colors = {
    bg: "#F8FAFC",
    primary: "#2563EB",
    textDark: "#0F172A",
    textLight: "#64748B",
    border: "#E2E8F0"
  };

  const allProjects = [
    {
      id: "01",
      cat: "Enterprise Solutions",
      name: "Enterprise Resource Planning (ERP) System",
      desc: "Developed a centralized ERP system to manage finance, HR, inventory, and operations for a multi-branch organization.",
      features: ["Real-time Reporting", "Employee Management", "Automated Invoicing", "RBAC"],
      tools: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
      impact: "Reduced operational cost & improved workflow automation.",
      icon: <Briefcase />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      id: "02",
      cat: "Web Applications",
      name: "Subscription-Based SaaS Platform",
      desc: "Built a scalable cloud-based SaaS product allowing businesses to manage clients and track performance.",
      features: ["Multi-tenant Architecture", "Subscription Billing", "Admin Dashboard"],
      tools: ["React", "TypeScript", "Stripe", "MongoDB"],
      impact: "Scalable to thousands of users with automated revenue systems.",
      icon: <Globe />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      id: "03",
      cat: "Mobile Applications",
      name: "On-Demand Service Booking App",
      desc: "Developed a cross-platform mobile app for booking home services with real-time tracking.",
      features: ["Live Tracking", "In-app Payments", "Push Notifications"],
      tools: ["React Native", "Firebase", "Google Maps API"],
      impact: "Increased customer engagement & improved service efficiency.",
      icon: <Smartphone />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
    },
    {
      id: "04",
      cat: "E-commerce Platforms",
      name: "Multi-Vendor Marketplace Platform",
      desc: "Designed and developed a scalable marketplace platform supporting multiple vendors and thousands of products.",
      features: ["Vendor Dashboards", "Inventory Management", "Secure Payment Gateway"],
      tools: ["Next.js", "Tailwind", "Payload CMS", "Redis"],
      impact: "Increased sales conversion & automated vendor management.",
      icon: <ShoppingCart />,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80"
    },
    {
      id: "05",
      cat: "Cloud & Infrastructure",
      name: "Cloud Infrastructure Modernization",
      desc: "Migrated legacy on-premise infrastructure to a scalable cloud environment using DevOps best practices.",
      features: ["CI/CD Automation", "Docker Containerization", "Auto-scaling"],
      tools: ["Terraform", "Kubernetes", "AWS", "GitHub Actions"],
      impact: "Reduced downtime & significantly lowered infrastructure costs.",
      icon: <Cloud />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      id: "06",
      cat: "AI & Automation",
      name: "AI-Powered Customer Support System",
      desc: "Implemented an NLP-based AI chatbot to automate customer support for an enterprise platform.",
      features: ["NLP Response System", "CRM Integration", "Auto Ticket Generation"],
      tools: ["Python", "OpenAI API", "LangChain", "Vector DB"],
      impact: "Reduced support workload & improved response time by 70%.",
      icon: <Bot />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
    },
    {
      id: "07",
      cat: "Business Intelligence",
      name: "Real-Time Analytics & Reporting System",
      desc: "Built a data analytics dashboard for performance tracking and predictive insights.",
      features: ["Interactive Data Viz", "Real-time KPI Tracking", "Predictive Forecasting"],
      tools: ["Python", "D3.js", "BigQuery", "Looker"],
      impact: "Improved decision-making through actionable business insights.",
      icon: <BarChart3 />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      id: "08",
      cat: "Cybersecurity",
      name: "Enterprise Security Architecture",
      desc: "Implemented advanced security protocols and vulnerability testing for enterprise-grade systems.",
      features: ["Data Encryption", "Secure Auth", "Security Audit Logs"],
      tools: ["OAuth 2.0", "AES-256", "Cloudflare WAF"],
      impact: "Reduced data breach risk & enhanced system integrity.",
      icon: <ShieldCheck />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
    },
    {
      id: "09",
      cat: "Industry Specific",
      name: "FinTech Payment & Logistics Tracker",
      desc: "Specialized platforms tailored for HealthTech, FinTech, and Logistics tracking systems.",
      features: ["Secure Transaction Processing", "GPS Logistics Tracking", "Health Data Privacy"],
      tools: ["Java", "Spring Boot", "Kafka", "Elasticsearch"],
      impact: "High-performance systems for sensitive industry domains.",
      icon: <Cpu />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <main style={{ backgroundColor: colors.bg }} className="min-h-screen pt-32 pb-40 relative overflow-hidden selection:bg-blue-100 font-sans">
      
      {/* 1. BLUEPRINT BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="blueprint" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.primary} strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. DYNAMIC HERO */}
        <section className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ color: colors.primary }} className="font-black text-[10px] uppercase tracking-[0.4em] mb-4 block underline decoration-blue-200">Portfolio_History_2026</span>
            <h1 style={{ color: colors.textDark }} className="text-6xl md:text-9xl font-black tracking-tighter italic mb-8">
              ENGINEERED <span className="text-blue-600">IMPACT.</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium max-w-2xl italic leading-relaxed">
              From Enterprise ERPs to AI-driven automation, we architect solutions that define the digital frontier.
            </p>
          </motion.div>
        </section>

        {/* 3. CASE STUDY GRID WITH IMAGERY */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          {allProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white border border-slate-100 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-64 overflow-hidden relative">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 right-6">
                   <span className="text-[10px] font-black uppercase text-blue-600 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-blue-50">
                    {project.cat}
                  </span>
                </div>
              </div>

              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div style={{ backgroundColor: "#EFF6FF", color: colors.primary }} className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-sm">
                    {project.icon}
                  </div>
                  <span className="text-4xl font-black text-slate-100 italic select-none">{project.id}</span>
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">{project.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">{project.desc}</p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 flex items-center gap-2"><Terminal className="w-3 h-3"/> Core Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
                          <CheckCircle2 className="w-3 h-3 text-blue-600" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5 bg-blue-50 rounded-[2rem] border border-blue-100 flex items-center gap-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <Zap className="w-5 h-5 text-blue-600 group-hover:text-white" />
                    <p className="text-xs font-bold italic">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-3 py-1.5 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* 4. FINAL CTA WITH KINETIC DESIGN */}
        <section className="text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} style={{ backgroundColor: colors.primary }} className="rounded-[4rem] p-12 md:p-32 text-center text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter italic leading-none relative z-10">READY FOR <br/> ARCHITECTURE?</h2>
            <Link href="/contact" className="relative z-10 inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-600 font-black rounded-full text-xl hover:scale-110 transition-transform shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              INITIATE PROJECT <ArrowRight />
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}