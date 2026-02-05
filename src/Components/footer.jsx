import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Youtube, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Globe
} from "lucide-react";
import logo from "../assets/logos/image.png";
import {Link} from "react-router-dom"
import { color } from "framer-motion";

const colorClasses = {
  linkedin: "text-blue-600 hover:bg-blue-600",
  instagram: "text-pink-600 hover:bg-pink-600",
  youtube: "text-red-700 hover:bg-red-700",
};

const socialLinks = [
  {
    icon: Youtube,
    url: "https://www.youtube.com/@rohiltechnologies",
    label: "Facebook",
    color:"youtube",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/rohiltechnologies",
    label: "Instagram",
    color:"instagram",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/rohil-technologies-56253135a/",
    label: "LinkedIn",
    color:"linkedin",
  },
];

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Service", path: "/service" },
  { label: "About Us", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          
          <div className="lg:col-span-7 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <img src={logo} alt="Rohil Logo" className="h-14 w-auto" />
                <p className="text-slate-500 leading-relaxed">
                  Trusted HR Consulting & Background Verification Partner helping businesses across India hire reliable, skilled, and verified talent.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className={`p-3 rounded-xl bg-slate-50 transition-all hover:-translate-y-1 hover:text-white ${
                          colorClasses[item.color]
                        }`}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="md:pl-10">
                <h4 className="text-slate-900 font-bold mb-6 text-lg tracking-tight">Quick Links</h4>
                <ul className="space-y-3">
                  {footerLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        className="text-slate-500 hover:text-teal-600 flex items-center gap-2 group transition-all text-sm font-medium"
                      >
                        <ArrowRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-teal-600"
                        />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <MapPin className="text-teal-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Location</p>
                  <p className="text-sm text-slate-700 font-semibold">Virudhunagar, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Mail className="text-teal-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Email Us</p>
                  <p className="text-sm text-slate-700 font-semibold">rohiltechnologies@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="absolute -top-4 -left-4 bg-teal-600 text-white py-2 px-4 rounded-lg z-10 shadow-xl flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <Globe size={14} className="animate-spin-slow" />
              Live Presence
            </div>
            
            <div className="w-full h-100 lg:h-full min-h-87.5 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white relative">
               
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15736.114782043893!2d77.9588127!3d9.5927948!3m2!1i1024!2i768!4f13.1!2m1!1srohil%20technologies!5e0!3m2!1sen!2sin!4v1770028334558!5m2!1sen!2sin"  
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                className=" contrast-[1.1] hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium uppercase tracking-widest">
          <p>© {currentYear} Rohil HR & Screening Solutions</p>
          <p>Designed By <span className="text-teal-600 font-bold underline underline-offset-4">Rohil Technologies</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer

