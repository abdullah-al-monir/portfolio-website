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
  FaTerminal,
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
      .catch(() => {
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
    <>
      <div className="container mx-auto p-5 md:p-10 lg:p-20 overflow-x-hidden">
        <Title text="Contact Me" />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mt-16">
          {/* LEFT SIDE (Icons) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-8 overflow-hidden"
          >
            {/* Rocket */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2EDEF5]/30 via-[#88afdd]/30 to-[#4776b9]/30 rounded-full blur-3xl animate-pulse" />
              <FaRocket className="relative text-8xl md:text-9xl text-[#2EDEF5]" />
            </motion.div>

            {/* Orbit Icons */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-1/2 -translate-x-1/2"
              >
                <FaEnvelope className="text-4xl text-[#88afdd]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
              >
                <FaTerminal className="text-4xl text-[#4776b9]" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-4 -translate-y-1/2"
              >
                <FaPaperclip className="text-4xl text-[#2EDEF5] rotate-45" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 right-4 -translate-y-1/2"
              >
                <FaPaperclip className="text-4xl text-[#88afdd] -rotate-45" />
              </motion.div>
            </div>

            <p className="text-white/70 text-center text-lg">
              Ready to launch your next project?
            </p>
          </motion.div>

          {/* RIGHT SIDE (Form) */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 max-w-2xl"
          >
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-[#2EDEF5]/30 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2EDEF5] mb-2">
                Let's Connect
              </h3>

              <p className="text-white/60 mb-8">
                Have a project in mind? Drop me a message!
              </p>

              <form onSubmit={handleSendMessage} className="space-y-6">
                <input
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-slate-800/50 border border-[#2EDEF5]/20 rounded-xl px-4 py-3 text-white"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-800/50 border border-[#2EDEF5]/20 rounded-xl px-4 py-3 text-white"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-slate-800/50 border border-[#2EDEF5]/20 rounded-xl px-4 py-3 text-white resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 border border-[#2EDEF5] text-[#2EDEF5] rounded-full font-bold hover:bg-[#2EDEF5] hover:text-black transition"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaPaperPlane /> Send Message
                  </span>
                </button>
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
