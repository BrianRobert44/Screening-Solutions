import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../Components/ui/Button";
import { CheckCircle, Users, Search, Briefcase } from "lucide-react";
import Lottie from "lottie-react";
import {Link} from "react-router-dom"
import hrAnimation from "../../assets/logos/Recruitment.json";

const services = [
  {
    title: "Recruitment & Staffing",
    icon: Users,
    description:
      "End-to-end recruitment solutions for permanent, temporary, and contract staffing across industries.",
    points: [
      "Executive & Leadership Hiring",
      "Bulk Recruitment Services",
      "Temporary & Contract Staffing",
      "Industry-Specific Recruitment",
      "Talent Pipeline Management",
      "Campus Recruitment Drives",
    ],
    cta: "Get Recruitment Support",
  },
  {
    title: "Background Verification",
    icon: Search,
    description:
      "Comprehensive employee screening with accurate and timely verification to ensure workforce reliability.",
    points: [
      "Employment History Verification",
      "Educational Credentials Check",
      "Criminal Background Screening",
      "Identity & Address Verification",
      "Reference Checks",
      "Database & Court Record Checks",
    ],
    cta: "Request Verification Services",
  },
  {
    title: "HR Outsourcing",
    icon: Briefcase,
    description:
      "Complete HR outsourcing to streamline operations, ensure compliance, and reduce administrative overhead.",
    points: [
      "Payroll Processing & Management",
      "Statutory Compliance Services",
      "HR Policy Development",
      "Employee Lifecycle Management",
      "Performance Management Systems",
      "Employee Engagement Programs",
    ],
    cta: "Explore HR Outsourcing",
  },
];

const ScreeningServices = () => {
  return (
    <section className="bg-[#0B1F2A] py-16 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2EC4B6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[480px] opacity-90">
              <Lottie
                animationData={hrAnimation}
                loop
                autoplay
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid meet",
                }}
              />
            </div>
          </div>

          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Comprehensive HR & <br />
              <span className="text-[#2EC4B6]">Screening Solutions</span>
            </h2>
            <p className="mt-5 text-lg text-[#CBD5E1] leading-relaxed">
              Streamline hiring, ensure compliance, and build a reliable workforce
              with intelligent HR and screening solutions designed for scale.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card
                key={i}
                className="group relative overflow-hidden bg-[#0F2E3C] border-white/10 hover:border-[#2EC4B6]/50 transition-all duration-500 shadow-2xl"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-[#2EC4B6]" />

                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-[#0B1F2A] text-[#2EC4B6] border border-[#2EC4B6]/20 group-hover:bg-[#2EC4B6] group-hover:text-[#0B1F2A] transition-all duration-300">
                      <Icon size={28} />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-[#CBD5E1] mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-4">
                    {service.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm text-[#CBD5E1]/90 font-medium"
                      >
                        <CheckCircle
                          size={18}
                          className="text-[#2EC4B6] shrink-0 mt-0.5"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Link to="/TalkToOurTeam">
                  <Button className="w-full bg-[#2EC4B6] text-[#0B1F2A] font-bold py-6 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(46,196,182,0.15)]">
                    {service.cta}
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScreeningServices;
