import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, MapPin, Send, Linkedin , Github} from "lucide-react";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 
      dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white "
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tr from-cyan-400 to-blue-800 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* العنوان */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
            Let's Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Have a question or want to work together? I’d love to hear from you!
          </p>
        </div>

        {/* المحتوى */}
        <div
          className="grid md:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div
                className="p-4 bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 
              text-white rounded-2xl shadow-lg dark:shadow-cyan-500/40"
              >
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-lg">mohamed@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="p-4 bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 
              text-white rounded-2xl shadow-lg dark:shadow-purple-500/40"
              >
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-lg">+20</p>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="p-4 bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 
              text-white rounded-2xl shadow-lg dark:shadow-purple-500/40"
              >
                <Linkedin className="w-6 h-6" />
              </div>
              <a href="#">visit my linkedin</a>{" "}
            </div>
            <div className="flex items-center gap-4">
              <div
                className="p-4 bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 
              text-white rounded-2xl shadow-lg dark:shadow-purple-500/40"
              >
                <Github className="w-6 h-6" />
              </div>
              <a href="#">visit my github</a>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="p-4 bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 
              text-white rounded-2xl shadow-lg dark:shadow-blue-500/40"
              >
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-lg">alexandria, Egypt</p>
            </div>
          </div>

          <form
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 
            transition-all duration-700 hover:shadow-cyan-400/30 dark:hover:shadow-purple-700/40"
            data-aos="zoom-in"
          >
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 
                bg-transparent focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 
                bg-transparent focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 
                bg-transparent focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl 
              bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 
              text-white font-semibold shadow-md 
              transform transition-all duration-1000 ease-in-out 
              hover:scale-110 hover:shadow-2xl"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
