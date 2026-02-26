"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react"; // Install lucide-react or use SVGs

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const router = useRouter();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/Services" },
    { name: "Contact", path: "/Contact" },
  ];

  const handleNavigation = (name, path) => {
    setActiveMenu(name);
    router.push(path);
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="border-b-2 fixed w-full top-0 border-[#0051FF] bg-[#FFFFFF]/90 backdrop-blur-sm z-50">
      <div className="min-h-[5vh] py-2 flex items-center justify-between px-4 md:container mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-9 h-9 text-[#0051FF]"
            fill="none"
          >
            <path
              d="M11.922 4.79004C16.6963 3.16245 19.0834 2.34866 20.3674 3.63261C21.6513 4.91656 20.8375 7.30371 19.21 12.078L18.1016 15.3292C16.8517 18.9958 16.2267 20.8291 15.1964 20.9808C14.9195 21.0216 14.6328 20.9971 14.3587 20.9091C13.3395 20.5819 12.8007 18.6489 11.7231 14.783C11.4841 13.9255 11.3646 13.4967 11.0924 13.1692C11.0134 13.0742 10.9258 12.9866 10.8308 12.9076C10.5033 12.6354 10.0745 12.5159 9.21705 12.2769C5.35111 11.1993 3.41814 10.6605 3.0909 9.64127C3.00292 9.36724 2.97837 9.08053 3.01916 8.80355C3.17088 7.77332 5.00419 7.14834 8.6708 5.89838L11.922 4.79004Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Desktop Navigation (Unchanged as requested) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.name, link.path)}
              className={`cursor-pointer transition duration-300 font-medium border-b-2 ${
                activeMenu === link.name
                  ? "text-[#0051FF] border-[#0051FF]"
                  : "text-[#000000] border-transparent"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA Button (Hidden on very small screens, visible from md up) */}
        <div className="hidden md:block">
          <button className="cursor-pointer bg-[#0051FF] px-6 py-1.5 text-[#FFFFFF] font-semibold rounded-full hover:bg-[#000000] transition duration-300 hover:scale-110">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#0051FF]">
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-[#0051FF]/20`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.name, link.path)}
              className={`text-lg font-medium ${
                activeMenu === link.name ? "text-[#0051FF]" : "text-black"
              }`}
            >
              {link.name}
            </button>
          ))}
          <button className="mt-2 bg-[#0051FF] px-8 py-2 text-white rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
