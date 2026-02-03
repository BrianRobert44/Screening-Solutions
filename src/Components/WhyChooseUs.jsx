import React,{useEffect} from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from "react-countup";


export default function WhyChooseUs() {
    useEffect(() => {
        AOS.init();
      },[])

  const benefits = [
    { title: "99.9% Accuracy", desc: "Rigorous double-check protocols for every report." },
    { title: "Industry Compliance", desc: "Fully aligned with global and local labor laws." },
    { title: "Fast TAT", desc: "Most reports delivered within 48-72 hours." },
    { title: "Secure Portal", desc: "Bank-grade encryption for all sensitive candidate data." },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#0B1F2A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div  className="animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
          <h2 data-aos="fade-down-right" className="text-[#2EC4B6] font-bold tracking-widest uppercase text-sm">
            The Rohil Advantage
          </h2>
          
          <h3 data-aos="fade-down-right" className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Why HR Leaders <br/> Trust Us
          </h3>
          
          <p data-aos="zoom-in-right" className="text-white/70 text-lg mb-10 max-w-lg">
            We don't just provide data; we provide certainty. Our screening solutions are built to scale with your hiring needs while maintaining the highest integrity.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <div 
              data-aos="zoom-in-right"
                key={i} 
                className="flex gap-4 group cursor-default transition-transform duration-300 hover:translate-x-2"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-[#2EC4B6] transition-transform duration-300 group-hover:scale-125" size={22} />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg">{b.title}</h5>
                  <p className="text-white/50 text-sm mt-1 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
         
          <div className="absolute -inset-1 bg-[#2EC4B6]/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700"></div>
          
          <div className="relative aspect-square rounded-3xl bg-[#0F2E3C] border border-white/10 flex items-center justify-center p-12 overflow-hidden shadow-2xl">
            
           
            <div className="absolute animate-pulse">
              <ShieldCheck size={350} className="text-[#2EC4B6] opacity-10" />
            </div>

            <div className="text-center z-10" data-aos="fade-down-left">
             <div className="text-8xl font-black text-white mb-2 tracking-tighter">
            <CountUp
                 start={1}
                 end={10000}
                 duration={6.5}
                 separator=","
               />
               +
             </div>
              <div className="text-[#2EC4B6] font-bold tracking-[0.2em] uppercase text-sm">
                Verified Monthly
              </div>
              
              <div className="mt-8 flex justify-center items-end gap-1.5 h-10">
                 {[0, 1, 2, 3, 4].map((i) => (
                   <div 
                    key={i}
                    className="w-1.5 bg-[#2EC4B6] rounded-full animate-bounce"
                    style={{ 
                        height: `${Math.random() * 100}%`,
                        animationDuration: `${1 + i * 0.2}s` 
                    }}
                   />
                 ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}