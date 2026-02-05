import { Player } from "@lottiefiles/react-lottie-player";

const ServiceHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1F2A] text-white">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2EC4B6]/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0F2E3C]/60 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-widest uppercase 
            border border-[#2EC4B6]/30 bg-[#2EC4B6]/10 text-[#2EC4B6] rounded-md">
            Rohil Screening Solution
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Intelligent <span className="text-[#2EC4B6]">Screening</span>.
            <br />
            Real-Time Trust.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#CBD5E1] max-w-xl leading-relaxed">
            Automate identity verification, background checks, and compliance
            with AI-powered screening built for speed, accuracy, and scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-7 py-3 bg-[#2EC4B6] text-black font-semibold rounded-lg 
              hover:scale-105 transition-transform shadow-[0_0_25px_rgba(46,196,182,0.5)]">
              Request Demo
            </button>

            
          </div>

          <div className="mt-10 h-1.5 w-24 bg-[#2EC4B6] rounded-full shadow-[0_0_15px_rgba(46,196,182,0.6)]" />
        </div>

        <div className="relative flex justify-center">
          
          <div className="absolute top-6 right-6 px-4 py-2 text-sm font-semibold 
            bg-black/40 backdrop-blur border border-white/20 rounded-lg">
            AI-Powered Screening
          </div>

          <Player
            autoplay
            loop
            src="https://assets.lottiefiles.com/packages/lf20_jcikwtux.json"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
