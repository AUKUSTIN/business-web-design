"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hexagon, Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const colors = {
  bg: "#F8FAFC",
  primary: "#2563EB",
  textDark: "#0F172A",
  textLight: "#64748B",
  border: "#E2E8F0"
};

function Footer() {
  const sitemap = [
    {
      title: "Navigation",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Project Portfolio", href: "/projects" },
        { name: "Client Reviews", href: "/#reviews" },
        { name: "Contact Liaison", href: "/contact" },
      ]
    },
    {
      title: "Specialties",
      links: [
        { name: "AI & Automation", href: "/services" },
        { name: "Web Engineering", href: "/services" },
        { name: "Cloud & DevOps", href: "/services" },
        { name: "Cybersecurity", href: "/services" },
        { name: "FinTech Logic", href: "/services" },
      ]
    }
  ];

  return (
    <footer style={{ backgroundColor: colors.bg, borderColor: colors.border }} className="border-t pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div style={{ backgroundColor: colors.textDark }} className="w-10 h-10 rounded-xl flex items-center justify-center text-white">
                <Hexagon className="w-6 h-6" />
              </div>
              <span style={{ color: colors.textDark }} className="font-black text-2xl tracking-tighter">
                Aukustin<span style={{ color: colors.primary }}>Labs.</span>
              </span>
            </Link>
            <p style={{ color: colors.textLight }} className="text-sm leading-relaxed max-w-xs">
              Architecting intelligent web platforms and custom AI assistants. Engineering the digital frontier of 2026.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/AUKUSTIN" target="_blank" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aukustin-r-c-4b1176287/" target="_blank" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {sitemap.map((section) => (
            <div key={section.title}>
              <h4 style={{ color: colors.textDark }} className="font-black text-sm uppercase tracking-widest mb-8">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} style={{ color: colors.textLight }} className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 style={{ color: colors.textDark }} className="font-black text-sm uppercase tracking-widest mb-8">Transmission</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p style={{ color: colors.textDark }} className="text-sm font-bold">aukustin03@gmail.com</p>
                  <p style={{ color: colors.textLight }} className="text-xs uppercase font-bold tracking-tighter">Email Liaison</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p style={{ color: colors.textDark }} className="text-sm font-bold">+91 8248230071</p>
                  <p style={{ color: colors.textLight }} className="text-xs uppercase font-bold tracking-tighter">Direct Line</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderColor: colors.border }} className="border-t pt-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <p>© 2026 AukustinLabs // Core_v2.6_Stable</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white antialiased`}>
        <header className="fixed top-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-xl border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                <Hexagon className="w-6 h-6" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-slate-900">
                Aukustin<span className="text-blue-600">Labs.</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-10">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`text-xs font-black uppercase tracking-widest transition-colors ${pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "text-blue-600" : "text-slate-400 hover:text-slate-900"}`}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}