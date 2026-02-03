import React from "react";
import {useEffect} from "react";
import { 
  ShieldCheck, UserCheck, FileSearch, Clock, 
  CheckCircle2, Search, FileText, Zap, Award, Globe 
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function VerificationServices() {

     useEffect(() => {
        AOS.init();
      },[])

  const services = [
    {
      title: "Employment Verification",
      desc: "Detailed audits of past work history, roles, and performance benchmarks.",
      icon: UserCheck,
    },
    {
      title: "Criminal Record Checks",
      desc: "Thorough screening of national and local databases for total peace of mind.",
      icon: ShieldCheck,
    },
    {
      title: "Education Validation",
      desc: "Confirming degrees, diplomas, and certifications directly with institutions.",
      icon: Award,
    },
    {
      title: "Address Verification",
      desc: "Physical and digital confirmation of residency and contact history.",
      icon: Globe,
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#0B1F2A]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[#2EC4B6] font-bold tracking-widest uppercase text-sm" data-aos="fade-up-right">Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mt-4"data-aos="fade-up-right">Precision Verification</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div data-aos="fade-up-left" key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2EC4B6]/50 transition-all duration-300">
              <div className="mb-6 inline-block p-3 rounded-xl bg-[#2EC4B6]/10 text-[#2EC4B6] group-hover:bg-[#2EC4B6] group-hover:text-[#0B1F2A] transition-colors">
                <s.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}

export default VerificationServices