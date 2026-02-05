import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase, Shield, Video, MessageSquare,
  Calendar, Users, PenTool, IdCard, GraduationCap, ClipboardCheck
} from "lucide-react";
import logo from "../assets/logos/image.png";

/* BASE orbit layout (desktop) */
const integrations = [
  { label: "Bulk Hiring", icon: Briefcase, angle: 230 },
  { label: "Background Check", icon: Shield, angle: 200 },
  { label: "Video Interview", icon: Video, angle: 160 },
  { label: "Policy Management", icon: MessageSquare, angle: 130 },
  { label: "Calendar", icon: Calendar, angle: 90 },
  { label: "CRM", icon: Users, angle: 20 },
  { label: "E-signature", icon: PenTool, angle: -10 },
  { label: "Identity Verification", icon: IdCard, angle: -50 },
  { label: "eHR", icon: GraduationCap, angle: -90 },
  { label: "Assessment", icon: ClipboardCheck, angle: 50 },
];

const polarToCartesian = (angle, radius) => {
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
};

export default function IntegrationOrbit() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#0B1F2A] overflow-hidden flex flex-col items-center">
      
      <div className="max-w-4xl text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
        >
          Seamless <span className="text-[#2EC4B6]">Integrations</span>
        </motion.h2>
      </div>

      <div className="relative flex items-center justify-center w-full h-[420px] md:h-[520px] lg:h-[640px]">
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          className="relative z-20 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full 
                     bg-[#0B1F2A] border-2 border-[#2EC4B6]
                     flex items-center justify-center
                     shadow-[0_0_50px_rgba(46,196,182,0.4)]"
        >
          <div className="absolute inset-0 rounded-full bg-white" />
          <img
            src={logo}
            alt="Logo"
            className="relative z-10 w-16 md:w-20 lg:w-24 object-contain"
          />

          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-[#2EC4B6]/30"
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                delay: i,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>

        {integrations.map((item, i) => {
          const radius =
            typeof window !== "undefined" && window.innerWidth < 640
              ? 130
              : typeof window !== "undefined" && window.innerWidth < 1024
              ? 180
              : 260;

          const { x, y } = polarToCartesian(item.angle, radius);

          return (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, x, y }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 12,
                delay: i * 0.08,
              }}
              className="absolute z-30"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                className="flex items-center gap-2 md:gap-3
                           px-3 py-2 md:px-4
                           rounded-xl md:rounded-2xl
                           bg-[#0F2E3C]/80 border border-white/10 backdrop-blur
                           hover:border-[#2EC4B6] hover:bg-[#2EC4B6]/10
                           transition cursor-pointer group"
              >
                <div className="bg-[#2EC4B6]/20 p-2 rounded-lg group-hover:bg-[#2EC4B6] transition">
                  <item.icon className="w-4 h-4 text-[#2EC4B6] group-hover:text-[#0B1F2A]" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-white whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
