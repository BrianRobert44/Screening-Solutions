import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Building2,
  FileText,
  Users,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
    { name: "Home", to: "/", icon: Home },
    { name: "About", to: "/about", icon: Building2 },
    { name: "Services", to: "/Service", icon: Briefcase },
    { name: "Blog", to: "/Blog", icon: FileText },
    { name: "Careers", to: "/Careers", icon: Users },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow border-b border-slate-100 py-2"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 md:h-14" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-teal-600 rounded-full hover:bg-slate-50 transition"
              >
                <link.icon size={16} />
                {link.name}
              </Link>
            ))}

            <Link
              to="/TalkToOurTeam"
              className="ml-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold shadow hover:-translate-y-0.5 transition"
            >
              <MessageSquare size={18} />
              Talk to our Team
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] bg-white"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <img src={logo} className="h-10" />
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-2xl text-lg font-semibold hover:bg-teal-50"
                >
                  <link.icon size={22} />
                  {link.name}
                </Link>
              ))}

              <Link
                to="/TalkToOurTeam"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-3 bg-teal-600 text-white py-4 rounded-2xl font-bold"
              >
                <MessageSquare size={22} />
                Talk to our Team
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
