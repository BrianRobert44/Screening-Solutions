import { ArrowRight, ShieldCheck, Users, Briefcase } from "lucide-react";
import Lottie from "lottie-react";
import careerAnimation from "../../assets/logos/businessman path.json";

export default function CareerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F2A] via-[#0F2E3A] to-[#0B1F2A]">
      
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-teal-300">
              <Briefcase className="h-4 w-4" />
              Careers at Rohil Screening Solutions
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
              Work with Us <br />
              <span className="text-teal-400 text-4xl tracking-tight">CAREER AT ROHIL</span> <br />
              Grow Your Career.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Join a team that helps organizations hire with confidence. 
              At Rohil Screening Solutions, your work directly impacts 
              compliance, security, and workforce integrity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3">
                <ShieldCheck className="h-6 w-6 text-teal-400" />
                <p className="text-slate-300 text-sm">
                  Purpose-driven screening & compliance solutions
                </p>
              </div>

              <div className="flex gap-3">
                <Users className="h-6 w-6 text-teal-400" />
                <p className="text-slate-300 text-sm">
                  Collaborative culture with real ownership
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => {document.getElementById("Openings") ?.scrollIntoView({ behavior: "smooth" });}}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600">
                View Open Roles
                <ArrowRight className="h-4 w-4" />             
                </button>


              <button onClick={() => {document.getElementById("Work") ?.scrollIntoView({ behavior: "smooth" });}}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Why Work With Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500/10 to-transparent blur-2xl" />
            <Lottie
              animationData={careerAnimation}
              loop
              className="relative w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
