import Lottie from "lottie-react";
import hero from "../../assets/blog/Hero.png";
import logos from "../../assets/logos/image.png";
import jetpackLottie from "../../assets/logos/content marketing.json";

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] bg-[#0B1F2A] py-24 flex items-center">
      <div className="absolute inset-0  z-0" />

      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#2EC4B6] opacity-20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-[#0F2E3C] opacity-50 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <span className="inline-block px-4 py-2 rounded-md text-xs font-bold tracking-wider uppercase border border-[#2EC4B6]/30 bg-[#2EC4B6]/10 text-[#2EC4B6]">
            Blog & Insights
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-white max-w-4xl leading-tight">
            Latest Insights on <br />
            <span className="text-[#2EC4B6]">
              Screening, Compliance
            </span>{" "}
            & Trust
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Practical guides, expert opinions, and verified insights to help you
            build secure, compliant, and reliable teams.
          </p>

          <div className="mt-10 h-1.5 w-24 bg-[#2EC4B6] rounded-full shadow-[0_0_15px_rgba(46,196,182,0.6)]" />
        </div>

        <div className="relative flex justify-center">

          <div className="absolute inset-0 bg-gradient-to-tr from-[#2EC4B6]/20 to-transparent blur-2xl rounded-full" />

          <Lottie
            animationData={jetpackLottie}
            loop
            className="relative w-full max-w-md z-1"
          />
        </div>

      </div>
    </section>
  );
};

export default BlogHero;
