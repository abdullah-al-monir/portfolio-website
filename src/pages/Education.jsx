import { motion } from "framer-motion";
import Title from "../components/Title";
import { FaGraduationCap, FaUniversity, FaBookOpen } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      period: "2018 - 2024",
      degree: "Bachelor of Science",
      institution: "National University",
      department: "Department of Mathematics",
      icon: <FaGraduationCap />,
      color: "from-[#2EDEF5] to-blue-500",
    },
    {
      period: "2017",
      degree: "Higher Secondary Certificate",
      institution: "Uttar Kattali Al-Haj Mostofa Hakim Degree College",
      department: "Science Group",
      icon: <FaUniversity />,
      color: "from-[#88afdd] to-indigo-500",
    },
    {
      period: "2015",
      degree: "Secondary School Certificate",
      institution: "Bangladesh Railway Govt. High School",
      department: "Science Group",
      icon: <FaBookOpen />,
      color: "from-[#4776b9] to-purple-500",
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-20 py-20 min-h-screen">
      <Title text={"My Education Journey"} />

      <div className="relative mt-20 max-w-5xl mx-auto">
        {/* Central Vertical Line (Hidden on mobile) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#2EDEF5]/50 via-[#88afdd]/20 to-transparent hidden md:block" />

        <div className="space-y-12 md:space-y-24">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center justify-between w-full ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card Section */}
              <div className="w-full md:w-[45%]">
                <div className="group relative bg-[#0a0f24]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#2EDEF5]/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${edu.color} text-white text-2xl shadow-lg`}>
                      {edu.icon}
                    </div>
                    <div>
                      <span className="text-[#2EDEF5] font-mono text-sm">{edu.period}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-4 font-medium italic">{edu.institution}</p>
                  
                  <div className="inline-flex items-center px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-[#2EDEF5]/80 uppercase tracking-widest">
                    {edu.department}
                  </div>

                  {/* Mobile-only connector */}
                  <div className="absolute top-1/2 -left-2 w-4 h-4 bg-[#2EDEF5] rotate-45 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                </div>
              </div>

              {/* Timeline Center Dot (Hidden on mobile) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#0a0f24] border-4 border-[#2EDEF5] z-10 shadow-[0_0_15px_#2EDEF5]" />
              </div>

              {/* Empty Space for the other side (Hidden on mobile) */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;