import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Instagram, Phone, MapPin, Send } from 'lucide-react';

const whatsappNumber = "918825887511";
const message = "Hello Team, We are exploring background verification and screening solutions for our organization. Kindly connect us with a representative to discuss requirements and onboarding";

const handleApply = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

const instagramUsername = "rohiltechnologies";

const openInstagram = () => {
  window.open(`https://www.instagram.com/${instagramUsername}/`, "_blank");
};


const ContactSection = () => {
  return (
    <section className="bg-[#0B1F2A] py-24 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Contact our team</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Got any questions about our screening process or scaling your team? We're here to help. 
            Chat to our friendly team and get started in minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">First name</label>
                <input type="text" placeholder="First name" className="w-full bg-[#0F2E3C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2EC4B6] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Last name</label>
                <input type="text" placeholder="Last name" className="w-full bg-[#0F2E3C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2EC4B6] transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email</label>
              <input type="email" placeholder="you@company.com" className="w-full bg-[#0F2E3C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2EC4B6] transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Phone number</label>
              <div className="flex gap-2">
                <select className="bg-[#0F2E3C] border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none">
                  <option>IN</option>
                  <option>US</option>
                </select>
                <input type="tel" placeholder="+91 00000 00000" className="flex-1 bg-[#0F2E3C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2EC4B6] transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea rows={4} placeholder="Leave us a message..." className="w-full bg-[#0F2E3C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2EC4B6] transition-colors resize-none" />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-slate-300">Services</label>
              <div className="grid grid-cols-2 gap-4">
                {['Background Check', 'Staffing', 'IT Recruitment', 'Compliance', 'Vendor Check', 'Other'].map((service) => (
                  <label key={service} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-[#0F2E3C] text-[#2EC4B6] focus:ring-[#2EC4B6]" />
                    <span className="text-slate-400 group-hover:text-white transition-colors">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-[#2EC4B6] hover:bg-[#27a89d] text-[#0B1F2A] font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
              Send message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          <div className="space-y-12 lg:pl-12">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Chat with us</h3>
              <p className="text-slate-400 mb-6 text-sm">Speak to our friendly team via live chat.</p>
              <ul className="space-y-4">
                <a onClick={handleApply}><li className="flex mb-5 items-center gap-3 text-[#2EC4B6] hover:underline cursor-pointer">
                  <MessageSquare size={20} /> <span className="font-semibold underline">Start a live chat</span>
                </li></a>
                <a href="mailto:rohiltechnologies@gmail.com"><li className="flex mb-5 items-center gap-3 text-[#2EC4B6] hover:underline cursor-pointer">
                  <Mail size={20} /> <span className="font-semibold underline">Shoot us an email</span>
                </li></a>
                <a onClick={openInstagram}><li className="flex mb-5 items-center gap-3 text-[#2EC4B6] hover:underline cursor-pointer">
                  <Instagram size={20} /> <span className="font-semibold underline">Message us on Instagram</span>
                </li></a>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-xl mb-4">Call us</h3>
              <p className="text-slate-400 mb-4 text-sm">Call our team Mon-Fri from 9am to 6pm.</p>
              <div className="flex items-center gap-3 text-[#2EC4B6] font-semibold text-lg">
                <Phone size={20} /> +91 12345 67890
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-xl mb-4">Visit us</h3>
              <p className="text-slate-400 mb-4 text-sm">Chat to us in person at our HQ.</p>
              <div className="flex items-start gap-3 text-[#2EC4B6] font-semibold">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>2nd Floor, Canara Bank Building, Madura Coats Colony,<br/> Sivagami Puram, Virudhunagar, Tamil Nadu 626001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;