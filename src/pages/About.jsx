import { motion } from "framer-motion";
import Title from "../components/Title";
import image from "../assets/monir.jpg";

const About = () => {
  return (
    <div className="container mx-auto p-5 md:p-10 lg:p-20 min-h-screen overflow-x-hidden w-full">
      <Title text={"About Me"} />

      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 lg:gap-20">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group flex justify-center"
        >
          {/* Image Container with Fixed Max Size */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#2EDEF5]/30 shadow-2xl shadow-[#2EDEF5]/20 
                          max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                          [box-shadow:0_0_60px_20px_rgba(46,222,245,0.3),0_0_100px_40px_rgba(136,175,221,0.2)]">
            <img
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              src={image}
              alt="Abdullah Al Monir"
              style={{ maxHeight: "500px" }}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#144182]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 lg:w-2/5"
        >
          <div className="relative bg-slate-900/40 backdrop-blur-xl border border-[#2EDEF5]/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#2EDEF5]/10 hover:border-[#2EDEF5]/40 transition-all duration-500">
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#2EDEF5]/50 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#2EDEF5]/50 rounded-br-3xl" />

            {/* Quote Icon */}
            <div className="text-[#2EDEF5]/20 text-6xl font-serif mb-4">"</div>

            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              I am a versatile and passionate <span className="text-[#2EDEF5] font-semibold">Web Developer</span> with nearly two years of professional experience building and maintaining high-quality web applications. I possess strong full-stack proficiency across the <span className="text-[#88afdd] font-semibold">MERN stack</span> (MongoDB, Express, React.js, Node.js), complemented by expertise in the Laravel ecosystem.
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mt-4">
              I specialize in creating dynamic user interfaces using Next.js and React.js, styled efficiently with Tailwind CSS. My technical toolkit also includes managing complex MySQL databases, integrating services like Paymob, and handling deployment configurations using Nginx, PM2, and VPS environments.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#2EDEF5]/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2EDEF5]">2+</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Years Exp</div>
              </div>
              <div className="text-center border-x border-[#2EDEF5]/20">
                <div className="text-2xl font-bold text-[#88afdd]">20+</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4776b9]">MERN</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Stack Pro</div>
              </div>
            </div>

            {/* Recommendation Letter Link */}
            {/* <div className="mt-8">
              <a 
                href="https://drive.google.com/file/d/1b0vDEEywGZRwr1_6Kt0e8n0_5UGcdGTq/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 px-6 rounded-xl border border-[#2EDEF5]/30 bg-[#2EDEF5]/10 text-[#2EDEF5] font-medium hover:bg-[#2EDEF5]/20 transition-all duration-300"
              >
                View Recommendation Letter from Synchronise IT
              </a>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;