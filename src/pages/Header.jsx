import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { RiDownload2Line } from "react-icons/ri";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20 p-10 md:p-20">
      {/* Animated Icon */}
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
              background: "conic-gradient(from 0deg, #2EDEF5, #88afdd, #4776b9, #2EDEF5)",
              padding: "4px",
            }}
          >
            <div className="w-full h-full rounded-full bg-[#040615]" />
          </motion.div>

          {/* Inner Circle */}
          <div className="absolute inset-4 bg-gradient-to-br from-[#144182] to-[#040615] rounded-full flex items-center justify-center shadow-2xl shadow-[#2EDEF5]/20 border border-[#2EDEF5]/30">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaCode className="w-32 h-32 md:w-40 md:h-40 text-[#2EDEF5]" />
            </motion.div>
          </div>

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#2EDEF5] rounded-full"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI * 2) / 8) * 150],
                y: [0, Math.sin((i * Math.PI * 2) / 8) * 150],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="space-y-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        >
          Welcome!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white flex items-center flex-wrap gap-2"
        >
          <span>I am</span>
          <span className="bg-gradient-to-r from-[#2EDEF5] via-[#88afdd] to-[#4776b9] bg-clip-text text-transparent">
            Abdullah Al Monir
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#88afdd]"
        >
          <Typewriter
            options={{
              strings: [
                "A Software Developer",
                "A MERN Stack Developer",
                "A Frontend Developer",
                "A ReactJs Developer",
                "A JavaScript Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="pt-6"
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1R9u4lEckZwEGAiMHmccmUpKFPWRUgb2r"
            download="Resume of Abdullah Al Monir.pdf"
          >
            <button className="relative px-10 py-4 bg-transparent border border-[#2EDEF5]/50 text-[#2EDEF5] rounded-full font-bold overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                <RiDownload2Line /> Download Resume
              </span>
              <div className="absolute inset-0 bg-[#2EDEF5] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              <div className="absolute inset-0 group-hover:bg-[#2EDEF5] opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Using a hover effect that changes text color to black */}
              <style jsx>{`
                          button:hover span { color: #040615; }
                        `}</style>
            </button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;