import { motion } from "framer-motion";
import Title from "../components/Title";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useState } from "react";
import {
  FaEnvelope,
  FaUser,
  FaCommentAlt,
  FaPaperPlane,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/abdullah-al-monir" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/aam364" },
  { icon: <FaEnvelope />, label: "Email", href: "mailto:abdullahalmonir364@gmail.com" },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
        background: "#0a0f24",
        color: "#fff",
        confirmButtonColor: "#2EDEF5",
      });
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          title: "Message Sent! 🚀",
          text: "I'll get back to you soon!",
          icon: "success",
          background: "#0a0f24",
          color: "#fff",
          confirmButtonColor: "#2EDEF5",
        });
        form.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed to send",
          text: "Something went wrong. Try again later.",
          background: "#0a0f24",
          color: "#fff",
          confirmButtonColor: "#2EDEF5",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="container mx-auto p-5 md:p-10 lg:p-20 overflow-x-hidden">
        <Title text="Contact Me" />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mt-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-10"
          >
            {/* Rocket */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-48 h-48 bg-[#2EDEF5]/10 rounded-full blur-3xl animate-pulse" />
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaRocket className="relative text-8xl md:text-9xl text-[#2EDEF5] drop-shadow-[0_0_30px_#2EDEF5]" />
              </motion.div>
            </div>

            {/* Text */}
            <div className="text-center space-y-4 max-w-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Let's build something{" "}
                <span className="text-[#2EDEF5]">amazing</span> together
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Whether you have a project idea, a job opportunity, or just want
                to say hi — my inbox is always open.
              </p>
              <p className="text-white/30 text-xs">
                ⚡ Typically responds within 24 hours
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 max-w-2xl"
          >
            <div className="relative bg-[#0a0f24]/60 backdrop-blur-xl border border-[#2EDEF5]/20 rounded-3xl p-8 md:p-10 shadow-2xl">

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2EDEF5]/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Send a <span className="text-[#2EDEF5]">Message</span>
              </h3>
              <p className="text-white/40 text-sm mb-8">
                Fill out the form below and I'll respond as soon as possible.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-5">

                {/* Name */}
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#2EDEF5] transition-colors text-sm" />
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#2EDEF5]/50 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-all duration-300 text-sm"
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#2EDEF5] transition-colors text-sm" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#2EDEF5]/50 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-all duration-300 text-sm"
                  />
                </div>

                {/* Message */}
                <div className="relative group">
                  <FaCommentAlt className="absolute left-4 top-4 text-white/30 group-focus-within:text-[#2EDEF5] transition-colors text-sm" />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#2EDEF5]/50 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-all duration-300 resize-none text-sm"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full py-4 bg-[#2EDEF5]/10 border border-[#2EDEF5] text-[#2EDEF5] rounded-full font-bold hover:bg-[#2EDEF5] hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FaPaperPlane /> Send Message
                    </span>
                  )}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;