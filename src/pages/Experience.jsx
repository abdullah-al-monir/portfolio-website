import { motion } from "framer-motion";
import Title from "../components/Title";
import { FaBriefcase, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/experiences.json")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#040615]">
        <div className="w-16 h-16 border-4 border-[#2EDEF5] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 md:px-20 py-20 min-h-screen">
      <Title text={"Work Experience"} />

      <div className="max-w-4xl mx-auto mt-20 relative">
        {/* The Timeline Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2EDEF5] via-[#88afdd]/30 to-transparent" />

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-24"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] md:left-[23px] top-0">
                <div className="w-5 h-5 rounded-full bg-[#040615] border-[3px] border-[#2EDEF5] z-10 shadow-[0_0_10px_#2EDEF5]" />
              </div>

              {/* Card Container */}
              <div className="group relative">
                {/* Subtle Backdrop Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#2EDEF5]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-[#0a0f24]/60 backdrop-blur-md border border-white/5 p-6 md:p-10 rounded-3xl hover:border-[#2EDEF5]/30 transition-all duration-300">
                  
                  {/* Top Row: Title and Dates */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#2EDEF5] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg text-[#88afdd] font-medium">{exp.company}</span>
                        {exp.companyLink && (
                           <a href={exp.companyLink} target="_blank" className="text-white/30 hover:text-[#2EDEF5]">
                             <FaExternalLinkAlt size={12} />
                           </a>
                        )}
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#144182]/30 rounded-full border border-[#2EDEF5]/20 text-[#2EDEF5] text-sm">
                      <FaCalendarAlt className="text-xs" />
                      <span>{exp.startDate} — {exp.endDate}</span>
                    </div>
                  </div>

                  {/* Responsibilities with "Modern List" Style */}
                  <div className="space-y-4">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/30">Primary Contributions</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 group/item">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#2EDEF5] group-hover/item:scale-150 transition-transform shadow-[0_0_8px_#2EDEF5]" />
                          <span className="text-white/70 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;