import Footer from "../components/Footer";
import Title from "../components/Title";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const formData = { name, email, message };
    if (name === "" || email === "" || message === "") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill up all information!",
      });
    }
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID)
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            title: "Message sent successfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container mx-auto overflow-hidden p-10 lg:p-20 pb-0 lg:pb-0 lg:px-32">
      <Title text={"Contact Me"} />
      <div className="relative   flex flex-col md:flex-row items-center">
        <img
          className="w-3/4 md:w-[40%]"
          src="https://media.giphy.com/media/q7MQP6mA2W91Yqf9pv/giphy.gif"
          alt=""
        />
        <div className="w-full md:w-1/2 mx-auto px-5">
          <div className="mx-auto">
            <form onSubmit={handleSendMessage} className="">
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-10 text-lg mb-1 text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-10 text-lg mb-1 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-10 text-lg text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="bg-[#88afdd] hover:bg-[#4776b9] focus:ring-4 shadow-lg shadow-[#abb49b]/50 font-semibold rounded-lg py-1 md:py-2 md:text-lg me-2 mb-2 uppercase w-full text-center">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
