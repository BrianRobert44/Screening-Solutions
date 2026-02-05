import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aboutLottie from "../../assets/logos/about.json";
import { Link } from 'react-router-dom'


const AboutHero = () => (
  <section className="relative pt-32 pb-20 bg-[#0B1F2A] overflow-hidden font-sans">

    <div
      className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(#2EC4B6 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="inline-block text-[#2EC4B6] font-bold tracking-[0.2em] uppercase text-xs bg-[#2EC4B6]/10 px-5 py-2.5 rounded-xl border border-[#2EC4B6]/30 mb-6">
          About Rohil HR & Screening Solutions
        </span>

        <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
          Redefining Trust in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-[#018E81]">
            Modern Hiring.
          </span>
        </h1>

        <p className="text-lg text-slate-300 mt-8 leading-relaxed max-w-xl font-medium">
          Rohil Screening Solutions was born from a simple necessity: the need for
          speed without sacrificing integrity. We bridge the gap between
          ambitious companies and verified talent.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link to="/Service"><button className="px-8 py-4 bg-[#2EC4B6] text-[#0B1F2A] rounded-2xl font-bold hover:bg-white transition-all duration-300 shadow-xl shadow-[#2EC4B6]/20 active:scale-95">
            Learn More
          </button>
          </Link>

          <div>
            <p className="text-sm font-bold text-white">500+ Clients</p>
            <p className="text-[10px] text-[#2EC4B6] font-bold uppercase tracking-widest">
              Trusted Partner
            </p>
          </div>
        </div>
      </motion.div>

      <div className="relative">

        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#2EC4B6] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 -left-20 w-60 h-60 bg-[#2EC4B6] rounded-full blur-[100px] opacity-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
            <Lottie
              animationData={aboutLottie}
              loop
              className="w-full max-w-lg mx-auto"
            />

          <div className="absolute -bottom-6 -right-6 bg-[#0B1F2A] p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#2EC4B6] rounded-2xl flex items-center justify-center text-[#0B1F2A]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            <div>
              <p className="text-white text-xl font-black italic">
                VERIFIED
              </p>
              <p className="text-[#2EC4B6] text-[10px] font-bold uppercase tracking-widest">
                Secure Process
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutHero;
