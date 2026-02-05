import React from "react";
import { ShieldCheck, UserCheck, FileSearch, Clock, ArrowRight } from "lucide-react";
import {Button} from "./ui/Button";
import heroimage from "../assets/logo/Heroimage.png";
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section 
      className=" relative min-h-[90vh] w-full flex items-center overflow-hidden bg-[#0B1F2A]"
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ 
          backgroundImage: `url(${heroimage})`,
          maskImage: 'radial-gradient(circle at center, black 90%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 90%, transparent 95%)'
        }} 
      />
    
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="max-w-2xl">
        
          <div className="inline-flex items-center rounded-full border border-[#2EC4B6]/30 bg-[#2EC4B6]/10 px-3 py-1 text-sm font-medium text-[#2EC4B6] mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2EC4B6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2EC4B6]"></span>
            </span>
            Trusted HR Solutions
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
            Screen Smarter <br />
            <span className="text-[#2EC4B6]">Hire Faster</span>
          </h1>

          <p className="mt-8 text-xl text-white/80 leading-relaxed max-w-lg">
            Rohil HR & Screening Solutions provides accurate, compliant, and fast
            background verification services to help companies eliminate hiring risks.
          </p>

          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Feature icon={UserCheck} text="Verified Education & Employment" />
            <Feature icon={ShieldCheck} text="Criminal & Address Checks" />
          </div>

          
          <div className="mt-12 flex flex-wrap gap-5">
            <Button size="lg" className="bg-[#2EC4B6] text-[#0B1F2A] font-bold hover:bg-[#27b3a6] h-14 px-8 text-lg">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>


           <Link  to='/TalkToOurTeam'>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 h-14 px-8 text-lg backdrop-blur-sm"
            >
              Talk to Our Experts
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 text-white/90">
      <div className="shrink-0 bg-[#2EC4B6] rounded-full p-1">
        <Icon className="h-4 w-4 text-[#0B1F2A]" />
      </div>
      <span className="text-sm font-semibold tracking-wide uppercase">{text}</span>
    </div>
  );
}