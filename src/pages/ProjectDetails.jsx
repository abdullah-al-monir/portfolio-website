import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { SiGithub } from "react-icons/si";
const ProjectDetails = () => {
  const project = useLoaderData();
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/70">
        Project not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 min-h-screen text-white">
      {/* Back & Title Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 md:mb-16 gap-6">
        <div>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-[#2EDEF5] hover:text-[#2EDEF5]/80 transition-colors mb-3 md:mb-0"
          >
            <FaArrowLeft className="group-hover:-translate-x-1.5 transition-transform" />
            Back to Projects
          </Link>
          <Title text={project.name} />
        </div>

        {/* Quick Action Buttons – Desktop */}
        <div className="flex items-center gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#2EDEF5]/10 hover:bg-[#2EDEF5]/20 border border-[#2EDEF5]/30 rounded-full text-[#2EDEF5] font-medium transition-all hover:scale-105 active:scale-95"
              data-tooltip-id="global-tooltip"
              data-tooltip-content="Live Demo"
            >
              <FaExternalLinkAlt size={16} />
              Live Site
            </a>
          )}

          {project.front && (
            <a
              href={project.front}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-110"
              data-tooltip-id="global-tooltip"
              data-tooltip-content="Frontend Repo"
            >
              <FaGithub size={20} />
            </a>
          )}

          {project.back && (
            <a
              href={project.back}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-110"
              data-tooltip-id="global-tooltip"
              data-tooltip-content="Backend Repo"
            >
              <FaCode size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Hero / Main Image */}
      <div className="group relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-[200%] object-cover object-top transition-all duration-[18s] ease-linear group-hover:-translate-y-1/2 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040615]/80 via-transparent to-transparent" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
        {/* Left Column – Overview & Links */}
        <div className="lg:col-span-2 space-y-10 md:space-y-14">
          {/* Overview */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#2EDEF5]">Overview</h2>
            <p className="text-white/80 leading-relaxed text-lg">
              {project.overview || project.title}
            </p>
          </section>

          {/* Key Features */}
          {project.key_features?.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#2EDEF5]">Key Features</h2>
              <ul className="space-y-3 text-white/80">
                {project.key_features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#2EDEF5] text-xl">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack – Full Width */}
          {project.technologies?.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2EDEF5]">Technologies Used</h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm md:text-base hover:border-[#2EDEF5]/50 hover:bg-[#2EDEF5]/5 transition-all"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column – Quick Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="sticky top-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[#2EDEF5]">Project Info</h3>

            <div className="space-y-6 text-white/80">
              <div>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Type</p>
                <p>{project.title}</p>
              </div>

              {project.live && (
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Live Demo</p>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2EDEF5] hover:underline inline-flex items-center gap-2"
                  >
                    Visit Live Site <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              )}

              <div>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Source Code</p>
                <div className="flex flex-col gap-2">
                  {project.front && (
                    <a
                      href={project.front}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/90 hover:text-[#2EDEF5] transition-colors"
                    >
                      <SiGithub size={18} /> Frontend
                    </a>
                  )}
                  {project.back && (
                    <a
                      href={project.back}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/90 hover:text-[#2EDEF5] transition-colors"
                    >
                      <FaCode size={18} /> Backend
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Global Tooltip */}
      <Tooltip
        id="global-tooltip"
        place="top"
        style={{
          backgroundColor: "#0a0f24",
          color: "#2EDEF5",
          borderRadius: "10px",
          border: "1px solid rgba(46, 222, 245, 0.3)",
          fontSize: "13px",
          padding: "8px 14px",
          zIndex: 50,
        }}
      />
    </div>
  );
};

export default ProjectDetails;