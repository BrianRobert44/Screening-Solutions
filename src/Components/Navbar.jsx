import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Briefcase,
  Building2,
  FileText,
  Users,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logos/image.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "#about", icon: Building2 },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Blog", href: "#blog", icon: FileText },
    { name: "Careers", href: "#careers", icon: Users },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-slate-100 py-2" 
          : "bg-white py-4"
      }`}
    >
      <div className="   max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Company Logo"
            className="h-10 md:h-14 w-auto object-contain "
          />
        </a>

        <nav className="hidden lg:flex items-center gap-2 font-sans ">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-teal-600 rounded-full transition-all duration-200 hover:bg-slate-50 group"
            >
              <link.icon size={16} className="text-slate-400 group-hover:text-teal-600 transition-colors" />
              {link.name}
            </a>
          ))}

          <div className="w-px h-6 bg-slate-200 mx-4" />

          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold shadow-lg shadow-teal-600/20 hover:shadow-teal-600/40 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            <MessageSquare size={18} />
            <span>Talk to our Team</span>
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 p-4 text-slate-700 hover:text-teal-600 hover:bg-teal-50/50 rounded-2xl text-lg font-bold transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-teal-100">
                    <link.icon size={20} className="text-slate-500" />
                  </div>
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 flex items-center justify-center gap-3 bg-teal-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-teal-600/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare size={22} />
                Talk to our Team
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;