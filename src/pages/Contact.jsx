import { motion } from "framer-motion";
import Title from "../components/Title";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaUser,
  FaCommentAlt,
  FaPaperPlane,
  FaPaperclip,
  FaRocket,
  FaTerminal
} from "react-icons/fa";

const Contact = () => {
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
        background: "#144182",
        color: "#fff",
        confirmButtonColor: "#2EDEF5",
      });
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          title: "Message sent successfully!",
          text: "I'll get back to you soon! 🚀",
          icon: "success",
          background: "#144182",
          color: "#fff",
          confirmButtonColor: "#2EDEF5",
        });
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to send",
          text: "Something went wrong. Try again later.",
          background: "#144182",
          color: "#fff",
          confirmButtonColor: "#2EDEF5",
        });
      });
  };

  return (
    <div className="container mx-auto p-5 md:p-10 lg:p-20 min-h-screen overflow-hidden">
      <Title text={"Contact Me"} />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mt-16">
        {/* Animated Icons Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-8"
        >
          {/* Main Large Icon */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2EDEF5]/30 via-[#88afdd]/30 to-[#4776b9]/30 rounded-full blur-3xl animate-pulse" />
            <FaRocket className="relative text-8xl md:text-9xl text-[#2EDEF5] drop-shadow-2xl" />
          </motion.div>

          {/* Floating Orbiting Icons */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Envelope */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2"
            >
              <FaEnvelope className="text-4xl text-[#88afdd] drop-shadow-lg" />
            </motion.div>

            {/* Terminal */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
            >
              <FaTerminal className="text-4xl text-[#4776b9] drop-shadow-lg" />
            </motion.div>

            {/* Paperclip Left */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -left-8 -translate-y-1/2"
            >
              <FaPaperclip className="text-4xl text-[#2EDEF5] drop-shadow-lg rotate-45" />
            </motion.div>

            {/* Paperclip Right */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -right-8 -translate-y-1/2"
            >
              <FaPaperclip className="text-4xl text-[#88afdd] drop-shadow-lg -rotate-45" />
            </motion.div>
          </div>

          <p className="text-white/70 text-center text-lg mt-6">
            Ready to launch your next project?
          </p>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 max-w-2xl"
        >
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-[#2EDEF5]/30 rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#2EDEF5]/50 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#2EDEF5]/50 rounded-bl-3xl" />

            <h3 className="text-2xl md:text-3xl font-bold text-[#2EDEF5] mb-2">
              Let's Connect
            </h3>
            <p className="text-white/60 mb-8">
              Have a project in mind? Drop me a message!
            </p>

            <form onSubmit={handleSendMessage} className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Your Name</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2EDEF5]/50 text-lg" />
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-slate-800/50 border border-[#2EDEF5]/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/30 focus:border-[#2EDEF5] focus:ring-2 focus:ring-[#2EDEF5]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2EDEF5]/50 text-lg" />
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-slate-800/50 border border-[#2EDEF5]/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/30 focus:border-[#2EDEF5] focus:ring-2 focus:ring-[#2EDEF5]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Your Message</label>
                <div className="relative">
                  <FaCommentAlt className="absolute left-4 top-4 text-[#2EDEF5]/50 text-lg" />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-slate-800/50 border border-[#2EDEF5]/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/30 focus:border-[#2EDEF5] focus:ring-2 focus:ring-[#2EDEF5]/20 outline-none transition-all resize-none"
                  />
                </div>
              </div>
              <button className="relative px-10 py-4 bg-transparent border border-[#2EDEF5]/50 text-[#2EDEF5] rounded-full font-bold overflow-hidden group w-full " type="submit">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaPaperPlane /> <span>Send Message</span>
                </span>
                <div className="absolute inset-0 bg-[#2EDEF5] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                <div className="absolute inset-0 group-hover:bg-[#2EDEF5] opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Using a hover effect that changes text color to black */}
                <style jsx>{`
                            button:hover span { color: #040615; }
                          `}</style>
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;