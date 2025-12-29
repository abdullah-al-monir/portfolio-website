import { motion } from "framer-motion";
import Title from "../components/Title";
import { FaCheckSquare, FaArrowRight } from "react-icons/fa";
import { SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
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
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 min-h-screen">
      <div className="text-center mb-16">
        <Title text={"My Expertise"} />
        <p className="text-white/50 mt-4 max-w-2xl mx-auto">
          I provide specialized solutions in modern web development, bridging the gap between complex backend logic and intuitive frontend design.
        </p>
      </div>

      {/* Changed from rows to an adaptive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            // Asymmetric sizing: Every 3rd item spans 2 columns on large screens
            className={`relative group bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-[2rem] overflow-hidden ${
                idx % 3 === 0 ? "md:col-span-2 lg:col-span-2" : "col-span-1"
            }`}
          >
            {/* Inner Card Content */}
            <div className="bg-[#0a0f24] rounded-[2rem] p-8 h-full flex flex-col lg:flex-row gap-8 items-center">
              
              {/* Image Container: Smaller and more styled */}
              <div className="w-full lg:w-1/3 aspect-video lg:aspect-square overflow-hidden rounded-2xl border border-white/10 relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={service.img}
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-[#2EDEF5]/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                    <span className="text-[#2EDEF5] font-mono text-sm tracking-tighter">0{idx + 1}</span>
                    <div className="h-[1px] w-8 bg-[#2EDEF5]/30"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#2EDEF5] transition-colors">
                      {service.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-white/70 text-sm">
                      <FaCheckSquare className="text-[#2EDEF5] mt-1 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#2EDEF5]/10 blur-[80px] group-hover:bg-[#2EDEF5]/20 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;