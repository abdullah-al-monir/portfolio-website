import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaCode } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
    // Scroll to top when entering this page
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#040615]">
        <SyncLoader color="#2EDEF5" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 min-h-screen">
      {/* Header */}
      <Title text={"All Projects"} />
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">

          <p className="text-white/50 mt-4">
            A comprehensive list of my work, including web applications, tools, and experiments.
          </p>
        </div>
        <Link to="/" className="group">
          <span className="text-[#2EDEF5] flex items-center gap-2 font-medium">
            <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Home
          </span>
        </Link>
      </div>

      {/* Full Project Grid (No Slicing) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {projects?.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
            className="group"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:border-[#2EDEF5]/30">
              <img
                className="w-full h-full object-cover object-top transition-transform duration-[3s] ease-in-out group-hover:scale-110"
                src={project.image}
                alt={project.name}
              />

              {/* Overlay with Links */}
              <div className="absolute inset-0 bg-[#040615]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 bg-white/10 rounded-full border border-white/20 text-white hover:bg-[#2EDEF5] hover:text-black transition-all transform hover:scale-110 shadow-xl"
                  data-tooltip-id="all-projects-tooltip"
                  data-tooltip-content="Live Preview"
                >
                  <FaExternalLinkAlt size={22} />
                </a>
                <a
                  href={project.front}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 bg-white/10 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all transform hover:scale-110 shadow-xl"
                  data-tooltip-id="all-projects-tooltip"
                  data-tooltip-content="Frontend Code"
                >
                  <FaGithub size={22} />
                </a>
                {project.back && (
                  <a
                    href={project.back}
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 bg-white/10 rounded-full border border-white/20 text-white hover:bg-white/80 hover:text-black transition-all transform hover:scale-110 shadow-xl"
                    data-tooltip-id="all-projects-tooltip"
                    data-tooltip-content="Backend Code"
                  >
                    <FaCode size={22} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="mt-8 space-y-4 px-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#2EDEF5] transition-colors">
                {project.name}
              </h3>
              <p className="text-white/50 line-clamp-2">
                {project.title}
              </p>

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.tech.map((iconUrl, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 p-2 bg-white/5 border border-white/10 rounded-xl hover:border-[#2EDEF5]/40 transition-all cursor-help"
                    data-tooltip-id="all-projects-tooltip"
                    data-tooltip-content={project.tech_names ? project.tech_names[i] : "Tech"}
                  >
                    <img
                      src={iconUrl}
                      alt="tech"
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tooltip Configuration */}
      <Tooltip
        id="all-projects-tooltip"
        style={{ backgroundColor: "#0a0f24", color: "#2EDEF5", borderRadius: "8px", border: "1px solid #2EDEF533", fontSize: "12px" }}
      />
    </div>
  );
};

export default AllProjects;