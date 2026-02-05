import { Briefcase, MapPin, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";


const whatsappNumber = "918825887511";
const message = "Hi, I’m interested in applying. Please share more details.";

const handleApply = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
const openings = [
  {
    title: "Background Verification Specialist",
    type: "Full-Time",
    department: "Screening Department",
    location: "Virudhunagar, Tamil Nadu",
    experience: "0–2 Years",
    ctc:"3-3.5LPA",
    description:
      "Conduct comprehensive background checks including employment verification, education verification, and reference checks for client organizations.",
    requirements: [
      "Bachelor's degree in any discipline",
      "Excellent communication and verification skills",
      "High attention to detail and accuracy",
      "Knowledge of compliance requirements is a plus",
    ],
  },
  {
    title: "Junior Verification Analyst",
    type: "Full-Time",
    department: "Screening Department",
    location: "Virudhunagar, Tamil Nadu",
    experience: "0–1 Year",
    ctc:"2.75-3LPA",
    description:
      "Support senior analysts by verifying candidate records, documenting reports, and coordinating with external sources.",
    requirements: [
      "Any bachelor’s degree",
      "Basic computer and documentation skills",
      "Willingness to learn verification processes",
      "Good written communication",
    ],
  },
  {
    title: "Compliance & Quality Executive",
    type: "Full-Time",
    department: "Screening Department",
    location: "Virudhunagar, Tamil Nadu",
    experience: "1–3 Years",
    ctc:"2.75-3LPA",
    description:
      "Ensure verification reports meet internal quality standards and regulatory compliance guidelines.",
    requirements: [
      "Bachelor’s degree",
      "Strong eye for detail",
      "Understanding of compliance frameworks",
      "Experience in audit or QA is preferred",
    ],
  },
  {
    title: "Client Coordination Executive",
    type: "Full-Time",
    department: "Operations",
    location: "Virudhunagar, Tamil Nadu",
    experience: "1–2 Years",
     ctc:"2.75-3LPA",
    description:
      "Act as a bridge between clients and the screening team, ensuring timely updates and issue resolution.",
    requirements: [
      "Any degree",
      "Strong verbal and email communication",
      "Client-handling experience",
      "Problem-solving mindset",
    ],
    }
];

export default function CareerOpenings() {
  return (
    <section id="Openings"className="bg-[#0B1F2A] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Careers at Rohil Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join our Virudhunagar team and help organizations make safer, smarter hiring decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#112E3C] rounded-2xl p-6 shadow-lg border border-white/10"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <span className="text-sm bg-[#2EC4B6]/20 text-[#2EC4B6] px-3 py-1 rounded-full">
                  {job.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                <span className="flex items-center gap-1">
                  <Briefcase size={16} /> {job.department}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {job.experience}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-[#2EC4B6] mb-1">Job Description</h4>
                <p className="text-gray-300">{job.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-[#2EC4B6] mb-1">CTC</h4>
                <p className="text-gray-300">{job.ctc}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-[#2EC4B6] mb-1">Eligibility</h4>
                <p className="text-gray-300">{job.eligibility || "Graduates with relevant skill set"}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-[#2EC4B6] mb-1">Must-Have Skills</h4>
                <ul className="flex flex-wrap gap-2">
                  {(job.mustHaveSkills || []).map((skill, i) => (
                    <li key={i} className="text-xs bg-white/10 px-3 py-1 rounded-full">{skill}</li>
                  ))}
                </ul>
              </div>

              <ul className="space-y-2 mb-6">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-200">
                    <CheckCircle size={16} className="text-[#2EC4B6] mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>

              <button onClick={handleApply} className="w-full rounded-xl bg-[#2EC4B6] text-[#0B1F2A] font-semibold py-3 hover:opacity-90 transition">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
