import React from 'react';
import { motion } from 'framer-motion';
import { Users2, LineChart, Scale, Award } from 'lucide-react';

const perks = [
  {
    title: "Collaborative Environment",
    description: "Work with experienced HR professionals in a team that values knowledge sharing and mutual growth.",
    icon: <Users2 size={32} strokeWidth={1.5} />,
  },
  {
    title: "Growth & Development",
    description: "Continuous learning opportunities with certifications, workshops, and clear career progression paths.",
    icon: <LineChart size={32} strokeWidth={1.5} />,
  },
  {
    title: "Work-Life Balance",
    description: "Flexible work arrangements and policies that respect your personal time and wellbeing.",
    icon: <Scale size={32} strokeWidth={1.5} />,
  },
  {
    title: "Impactful Work",
    description: "Help businesses make better hiring decisions and create safer, more reliable workplaces across India.",
    icon: <Award size={32} strokeWidth={1.5} />,
  }
];

const LifeAtRohil = () => {
  return (
    <section id="Work" className="bg-[#0B1F2A] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2EC4B6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Life at <span className="text-[#2EC4B6]">Rohil Screening Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We believe our people are our greatest asset. Here's what makes us unique and why you'll love building your career with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0F2E3C] border border-white/5 p-8 rounded-[2rem] hover:border-[#2EC4B6]/40 transition-all duration-300 group shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0B1F2A] border border-[#2EC4B6]/20 flex items-center justify-center text-[#2EC4B6] mb-6 shadow-[0_0_20px_rgba(46,196,182,0.1)] group-hover:scale-110 group-hover:bg-[#2EC4B6] group-hover:text-[#0B1F2A] transition-all duration-500">
                {perk.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#2EC4B6] transition-colors">
                {perk.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtRohil;