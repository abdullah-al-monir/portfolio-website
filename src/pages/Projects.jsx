import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaCode } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
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
      <Title text={"Featured Projects"} />
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <p className="text-white/50 mt-4">
            A selection of my recent works, ranging from full-stack MERN applications to specialized frontend tools.
          </p>
        </div>
        <Link to="/allprojects" className="hidden md:block">
          <span className="text-[#2EDEF5] flex items-center gap-2 group cursor-pointer font-medium hover:underline transition-all">
            Browse all works <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </span>
        </Link>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {projects?.slice(0, 4).map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group"
          >
            {/* Image Preview Window */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
              <img
                className="w-full h-full object-cover object-top transition-transform duration-[3s] ease-in-out group-hover:scale-110"
                src={project.image}
                alt={project.name}
              />

              {/* Glassmorphism Hover Overlay */}
              <div className="absolute inset-0 bg-[#040615]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-[#2EDEF5] hover:text-black transition-all transform hover:scale-110"
                  data-tooltip-id="global-tooltip"
                  data-tooltip-content="Live Preview"
                >
                  <FaExternalLinkAlt size={22} />
                </a>
                <a
                  href={project.front}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all transform hover:scale-110"
                  data-tooltip-id="global-tooltip"
                  data-tooltip-content="Frontend Code"
                >
                  <FaGithub size={22} />
                </a>
                {project.back && (
                  <a
                    href={project.back}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/90 hover:text-black transition-all transform hover:scale-110"
                    data-tooltip-id="global-tooltip"
                    data-tooltip-content="Backend Code"
                  >
                    <FaCode size={22} />
                  </a>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="mt-8 space-y-4 px-2">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#2EDEF5] transition-colors">
                  {project.name}
                </h3>
                <p className="text-white/60 mt-2 line-clamp-2 leading-relaxed">
                  {project.title}
                </p>
              </div>

              {/* Tech Stack Icons with Tooltips */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.tech.map((iconUrl, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 p-2 bg-white/5 border border-white/10 rounded-xl hover:border-[#2EDEF5]/40 hover:bg-[#2EDEF5]/5 transition-all cursor-help"
                    data-tooltip-id="global-tooltip"
                    data-tooltip-content={project.tech_names ? project.tech_names[i] : "Technology"}
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

      {/* View All Projects Button (Centered) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 flex justify-center"
      >
        <Link to="/allprojects">
          <button className="relative px-10 py-4 bg-transparent border border-[#2EDEF5]/50 text-[#2EDEF5] rounded-full font-bold overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              VIEW ALL PROJECTS <FaArrowRight />
            </span>
            <div className="absolute inset-0 bg-[#2EDEF5] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            <div className="absolute inset-0 group-hover:bg-[#2EDEF5] opacity-0 group-hover:opacity-100 transition-opacity" />
            {/* Using a hover effect that changes text color to black */}
            <style jsx>{`
              button:hover span { color: #040615; }
            `}</style>
          </button>
        </Link>
      </motion.div>

      {/* Global Tooltip Configuration */}
      <Tooltip
        id="global-tooltip"
        place="top"
        style={{
          backgroundColor: "#0a0f24",
          color: "#2EDEF5",
          borderRadius: "10px",
          border: "1px solid rgba(46, 222, 245, 0.2)",
          fontSize: "12px",
          zIndex: 50
        }}
      />
    </div>
  );
};

export default Projects;