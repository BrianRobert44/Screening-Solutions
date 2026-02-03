import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap } from 'lucide-react';

const approachData = [
  {
    title: "Trust & Reliability",
    description: "We prioritize data security and confidentiality in all our screening processes, ensuring complete trust in our services.",
    icon: <ShieldCheck size={40} strokeWidth={2.5} className="text-[#2EC4B6]" />
  },
  {
    title: "Precision & Accuracy",
    description: "Our multi-layered verification approach ensures accurate results, helping you make informed hiring decisions.",
    icon: <Target size={40} strokeWidth={2.5} className="text-[#2EC4B6]" />
  },
  {
    title: "Efficiency & Speed",
    description: "We leverage technology and streamlined processes to deliver timely results without compromising on quality.",
    icon: <Zap size={40} strokeWidth={2.5} className="text-[#2EC4B6]" />
  }
];

const ApproachComponent = () => {
  return (
    <section className="bg-[#0B1F2A] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Approach</h2>
        <div className="w-24 h-1.5 bg-[#2EC4B6] mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-lg uppercase tracking-widest font-bold">
          How we deliver exceptional value to our clients
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {approachData.map((item, index) => (
          <div 
            key={index} 
            className="sticky top-32 w-full"
            style={{ 
              paddingTop: `${index * 20}px` 
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0F2E3C] border border-white/10 rounded-[2.5rem] p-10 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-10 hover:border-[#2EC4B6]/50 transition-colors group"
            >
              <div className="w-24 h-24 rounded-3xl bg-[#2EC4B6]/10 flex items-center justify-center text-[#2EC4B6] shadow-[0_0_30px_rgba(46,196,182,0.2)] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              
              <div className="absolute top-8 right-10 text-white/5 text-7xl font-black italic select-none">
                0{index + 1}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="h-[20vh]" />
    </section>
  );
};

export default ApproachComponent;