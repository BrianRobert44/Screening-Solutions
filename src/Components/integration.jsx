import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Shield, Video, MessageSquare, 
  Calendar, Users, PenTool, IdCard, GraduationCap, ClipboardCheck 
} from "lucide-react";
import logo from '../assets/logos/image.png'

const integrations = [
  { label: "Bulk Hiring", icon: Briefcase, x: -160, y: -180 },
  { label: "Background check", icon: Shield, x: -250, y: -60 },
  { label: "Video Interview", icon: Video, x: -280, y: 80 },
  { label: "Policy Management", icon: MessageSquare, x: -200, y: 190 },
  { label: "Calendar", icon: Calendar, x: -60, y: 250 },
  { label: "CRM", icon: Users, x: 180, y: -190 },
  { label: "E-signature", icon: PenTool, x: 260, y: -80 },
  { label: "Identity Verification", icon: IdCard, x: 290, y: 60 },
  { label: "eHR", icon: GraduationCap, x: 220, y: 180 },
  { label: "Assessment", icon: ClipboardCheck, x: 70, y: 260 },
];

export default function IntegrationOrbit() {
  return (
    <section className="py-32 px-6 bg-[#0B1F2A] overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          Seamless <span className="text-[#2EC4B6]">Integrations</span>
        </motion.h2>
      </div>

     
      <div className="relative flex items-center justify-center h-130 w-full">
        
        {/* The Central Orb (The Source) */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#0B1F2A] border-2 border-[#2EC4B6] flex items-center justify-center shadow-[0_0_50px_rgba(46,196,182,0.4)]"
        >
          <div className="absolute inset-0 rounded-full bg-white " />
          <span className="relative z-10 w-full h-full flex items-center justify-center p-6">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-full h-full object-contain filter brightness-110" 
          />
        </span>
          
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-[#2EC4B6]/30"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: i, ease: "easeOut" }}
            />
          ))}
        </motion.div>

        {integrations.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            whileInView={{ 
              x: item.x, 
              y: item.y, 
              scale: 1, 
              opacity: 1 
            }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 50, 
              damping: 12, 
              delay: i * 0.1 
            }}
            className="absolute z-30"
          >
           
            <motion.div
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.2 
              }}
              className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#0F2E3C]/80 border border-white/10 backdrop-blur-md shadow-2xl hover:border-[#2EC4B6] hover:bg-[#2EC4B6]/10 transition-colors cursor-pointer group"
            >
              <div className="bg-[#2EC4B6]/20 p-2 rounded-lg group-hover:bg-[#2EC4B6] transition-colors">
                <item.icon className="w-4 h-4 text-[#2EC4B6] group-hover:text-[#0B1F2A]" />
              </div>
              <span className="text-white/90 text-sm  font-semibold whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}