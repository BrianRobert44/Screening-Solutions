import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import img1 from '../../assets/blog/img1.webp'
import img3 from '../../assets/blog/img3.jpg'

const articles = [
  {
    id: 1,
    title: "Why Employee Background Verification Is Essential for IT Companies",
    excerpt:
      "In the modern IT industry, employees handle confidential data, intellectual property, and mission-critical systems. Robust screening is the first line of defense against internal threats.",
    category: "Recruitment",
    image: img1,
    date: "Dec 19, 2025",
    readTime: "8 min read",
    author: "Rohil Screening",
    slug: "/blog/background-verification-it"
  },
  {
    id: 2,
    title: "Top 7 Benefits of Using a Professional HR Consultancy for IT Companies",
    excerpt:
      "In today's fast-paced IT industry, hiring the right talent is not just a requirement—it's a competitive advantage. From background verification to compliance and workforce management, HR challenges can slow down growth if not handled professionally.",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    date: "Jan 05, 2026",
    readTime: "6 min read",
    author: "Rohil Screening",
    slug: "/blog/digital-identity-remote"
  },
  {
    id: 3,
    title: "How HR Outsourcing Helps Small Businesses Reduce Costs",
    excerpt:
      "For small businesses, managing human resources internally can be expensive and time-consuming. HR outsourcing offers a cost-effective solution by allowing companies to delegate HR responsibilities to professionals while significantly reducing operational and administrative costs.",
    category: "Legal",
    image: img3,
    date: "Feb 02, 2026",
    readTime: "12 min read",
    author: "Legal Team",
    slug: "/blog/compliance-2026"
  }
];

export default function BlogSection() {
  return (
    <section className="bg-[#0B1F2A] py-20 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="mx-auto max-w-4xl"> {/* Reduced max-width for better single-column readability */}
        
        {/* Section Header */}
        <div className="relative mb-16 text-center">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#2EC4B6] opacity-10 blur-[100px] pointer-events-none" />
          
          <h2 className="text-4xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-5xl">
            Insights & <span className="text-[#2EC4B6]">Resources</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#CBD5E1]">
            Expert advice on background screening, compliance, and hiring technology.
          </p>
        </div>

        {/* Single Column Grid */}
        <div className="grid grid-cols-1 gap-12">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#0F2E3C] bg-[#0F2E3C]/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#2EC4B6]/50 hover:shadow-[0_20px_40px_-15px_rgba(46,196,182,0.15)]"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-[#0B1F2A]/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute left-6 top-6">
                  <span className="rounded-md bg-[#2EC4B6] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0B1F2A] shadow-[0_0_15px_rgba(46,196,182,0.4)]">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <h3 className="mb-4 text-2xl font-bold leading-tight text-[#FFFFFF] transition-colors group-hover:text-[#2EC4B6] sm:text-3xl">
                  {article.title}
                </h3>

                <p className="mb-8 text-base leading-relaxed text-[#CBD5E1]">
                  {article.excerpt}
                </p>

                {/* Meta & CTA Row */}
                <div className="mt-auto flex flex-col items-start justify-between gap-6 border-t border-[#FFFFFF]/5 pt-8 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-[#CBD5E1]/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#2EC4B6]" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#2EC4B6]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 rounded-lg border border-[#2EC4B6]/30 bg-transparent px-6 py-3 text-sm font-bold text-[#FFFFFF] transition-all duration-300 hover:bg-[#2EC4B6] hover:text-[#0B1F2A] hover:shadow-[0_0_20px_rgba(46,196,182,0.3)]">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              
              {/* Animated Accent Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2EC4B6] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}