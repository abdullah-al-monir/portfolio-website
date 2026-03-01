import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { RiDownload2Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-24 p-10 md:p-20 relative overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2EDEF5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4776b9]/8 rounded-full blur-3xl pointer-events-none" />

      {/* LEFT — Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative shrink-0"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 relative">

          {/* Rotating Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #2EDEF5, #88afdd, #4776b9, transparent, #2EDEF5)",
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-full bg-[#040615]" />
          </motion.div>

          {/* Counter-rotating inner ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-dashed border-[#2EDEF5]/20"
          />

          {/* Profile Image */}
          <div className="absolute inset-4 rounded-full overflow-hidden border border-[#2EDEF5]/30 shadow-2xl shadow-[#2EDEF5]/20">
            <img
              src="/images/avatar.png"
              alt="Abdullah Al Monir"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating orbit dots */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: i % 2 === 0 ? "#2EDEF5" : "#4776b9",
                top: "50%",
                left: "50%",
                boxShadow: `0 0 6px ${i % 2 === 0 ? "#2EDEF5" : "#4776b9"}`,
              }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 6) * 155,
                y: Math.sin((i * Math.PI * 2) / 6) * 155,
              }}
              transition={{ duration: 0 }}
            />
          ))}

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 bg-[#0a0f24] border border-[#2EDEF5]/30 rounded-full px-4 py-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/70 font-medium">Available for work</span>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT — Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="space-y-5 max-w-xl"
      >
        {/* Greeting label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-[#2EDEF5]/10 border border-[#2EDEF5]/20 rounded-full px-4 py-1.5"
        >
          <span className="text-[#2EDEF5] text-sm font-medium tracking-wide">
            👋 Hey there, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Abdullah{" "}
          <span className="bg-gradient-to-r from-[#2EDEF5] via-[#88afdd] to-[#4776b9] bg-clip-text text-transparent">
            Al Monir
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#88afdd] h-10"
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Software Developer",
                "Next.js Developer",
                "React Developer",
                "Node.js Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-white/50 text-sm md:text-base leading-relaxed"
        >
          Building scalable, production-grade web applications — from pixel-perfect
          interfaces to robust backend systems and server deployments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          {/* Download Resume */}

          <a href="https://drive.google.com/uc?export=download&id=1R9u4lEckZwEGAiMHmccmUpKFPWRUgb2r"
            download="Resume of Abdullah Al Monir.pdf"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-3.5 bg-[#2EDEF5] text-[#040615] rounded-full font-bold overflow-hidden flex items-center gap-2 text-sm"
            >
              <RiDownload2Line className="text-base" />
              Download Resume
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
            </motion.button>
          </a>

          {/* View Projects */}
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-3.5 border border-[#2EDEF5]/40 text-[#2EDEF5] rounded-full font-bold flex items-center gap-2 text-sm hover:border-[#2EDEF5] hover:bg-[#2EDEF5]/5 transition-all duration-300"
            >
              View Projects
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;