import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

const team = [
  {
    name: "Aditi Sharma",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Boobalan M",
    role: "Lead Verification Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Priya Singh",
    role: "Customer Success Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Vikram Malhotra",
    role: "Compliance Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sneha Reddy",
    role: "Talent Acquisition",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
  }
];

const TeamCards = () => {
  return (
    <section className="bg-[#0B1F2A] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-[#2EC4B6] font-bold text-sm tracking-widest uppercase mb-3">Our Experts</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our team of experts are here to help
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Get support 24/7 from our award-winning network of screening and compliance professionals.
          </p>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-[#0B1F2A] font-bold text-lg leading-tight">{member.name}</h4>
                  <p className="text-slate-500 text-sm font-medium">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCards;