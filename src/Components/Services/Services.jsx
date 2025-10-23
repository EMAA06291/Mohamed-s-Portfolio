import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Rocket, Layers } from "lucide-react";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="Services"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 
      dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-700 to-blue-700 rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tr from-cyan-400 to-blue-800 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-8 md:px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">My Skills</h2>
          <div className="mx-auto my-4 w-20 h-1 bg-gradient-to-r from-cyan-300 via-blue-700 to-purple-800 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A mix of creativity, precision, and passion — turning ideas into smooth, high-performing digital experiences.
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* كارد 1 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div
              className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg
              hover:shadow-2xl transition-all duration-[2s] hover:-translate-y-2 
              dark:hover:shadow-cyan-500/40 transform hover:[transform:rotateY(360deg)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-br from-cyan-300 via-blue-700 to-purple-800 rounded-2xl"></div>
              <div className="flex justify-center mb-5">
                <Code className="w-10 h-10 text-blue-700 dark:text-cyan-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-800 dark:text-cyan-300">
                Front-End Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                Building sleek, responsive, and accessible interfaces using <b>React</b>, <b>Tailwind CSS</b>, and modern JavaScript.
                I focus on clean, scalable code that’s easy to maintain, ensuring every design is perfectly pixel-aligned and every animation feels natural.
                I’m passionate about transforming static ideas into dynamic, interactive experiences that look great on every screen size and load in a blink.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <div
              className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg
              hover:shadow-2xl transition-all duration-[2s] hover:-translate-y-2 
              dark:hover:shadow-purple-500/40 transform hover:[transform:rotateY(360deg)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-br from-purple-700 via-blue-700 to-cyan-400 rounded-2xl"></div>
              <div className="flex justify-center mb-5">
                <Rocket className="w-10 h-10 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-purple-700 dark:text-purple-400">
                Optimization & Performance
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                I take performance seriously — from reducing render time and bundle size to optimizing images, assets, and code structure.
                Every project I build is tuned for <b>SEO</b>, <b>Core Web Vitals</b>, and <b>mobile responsiveness</b>.
                I constantly analyze metrics, implement lazy loading, and ensure the smoothest possible UX no matter the device or connection speed.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div
              className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg
              hover:shadow-2xl transition-all duration-[2s] hover:-translate-y-2 
              dark:hover:shadow-blue-500/40 transform hover:[transform:rotateY(360deg)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-br from-blue-700 via-purple-800 to-cyan-400 rounded-2xl"></div>
              <div className="flex justify-center mb-5">
                <Layers className="w-10 h-10 text-blue-700 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-800 dark:text-blue-400">
                Interactive Features
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                I specialize in bringing interfaces to life with immersive interactions —
                from <b>scroll-based animations</b> and <b>3D effects</b> to dynamic components powered by React state and context.
                My focus is on delivering smooth transitions, subtle motion, and user feedback that elevate engagement and create a lasting impression.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
