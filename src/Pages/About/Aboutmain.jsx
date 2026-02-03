import React from 'react';
import img1 from '../../assets/logo/About1.avif'
import img2 from '../../assets/logo/About2.avif'
import img3 from '../../assets/logo/About3.avif'
import { ShieldCheck, Users, Briefcase, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Comprehensive Background Verification",
    subtitle: "Thorough Screening Process",
    description: "We provide thorough employee screening with multiple verification layers to ensure complete workforce reliability and compliance.",
    points: [
      "Employment History Verification",
      "Educational Credentials Check",
      "Criminal Background Screening",
      "Identity & Address Verification",
      "Reference Checks & Database Screening"
    ],
    icon: <ShieldCheck className="w-8 h-8 text-[#2EC4B6]" />,
    image: img1,
    badge: "Multi-layer verification"
  },
  {
    title: "Expert HR Consulting Services",
    subtitle: "Strategic HR Solutions",
    description: "Our seasoned HR professionals provide strategic consulting to optimize your human resource operations and drive business growth.",
    points: [
      "Strategic HR Planning",
      "Talent Acquisition & Management",
      "Performance Management Systems",
      "HR Policy Development",
      "Organizational Development"
    ],
    icon: <Users className="w-8 h-8 text-[#2EC4B6]" />,
    image: img2,
    badge: "Expert Guidance"
  },
  {
    title: "Recruitment & Staffing Solutions",
    subtitle: "Strategic Staffing",
    description: "From executive search to bulk hiring, we provide end-to-end recruitment solutions tailored to your industry needs.",
    points: [
      "Executive & Leadership Hiring",
      "Bulk Recruitment Services",
      "Temporary & Contract Staffing",
      "Industry-Specific Recruitment",
      "Talent Pipeline Management"
    ],
    icon: <Briefcase className="w-8 h-8 text-[#2EC4B6]" />,
    image: img3 ,
    badge: "End-to-End Solutions"
  }
];

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col lg:flex-row gap-12 items-center py-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      {/* Content Side */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#2EC4B6]/10 rounded-2xl border border-[#2EC4B6]/20">
            {service.icon}
          </div>
          <span className="text-[#2EC4B6] font-bold tracking-widest text-xs uppercase bg-[#2EC4B6]/5 px-3 py-1 rounded-md">
            {service.subtitle}
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {service.title}
        </h2>
        
        <p className="text-[#CBD5E1] text-lg leading-relaxed">
          {service.description}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {service.points.map((point, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-400 group">
              <CheckCircle2 className="w-5 h-5 text-[#2EC4B6] shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full relative group">
        <div className="absolute -inset-4 bg-[#2EC4B6]/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 aspect-video lg:aspect-square shadow-2xl">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute top-4 right-4 bg-[#0B1F2A]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <p className="text-[10px] font-bold text-[#2EC4B6] uppercase tracking-widest">{service.badge}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RohilServices() {
  return (
    <section className="bg-[#0B1F2A] py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2EC4B6]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[#2EC4B6] font-bold tracking-[0.3em] uppercase text-sm">Expertise</h2>
          <p className="text-4xl md:text-5xl font-black text-white">Our Core Service Offerings</p>
          <div className="h-1 w-20 bg-[#2EC4B6] mx-auto rounded-full" />
        </div>

        <div className="divide-y divide-white/5">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}