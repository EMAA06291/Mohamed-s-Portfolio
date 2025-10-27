import React from "react";


function Aboutme() {
  return (
    <>
      <section id="about"    className="relative py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 
      dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white "
    >
           <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-700 to-blue-700 rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tr from-cyan-400 to-blue-800 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>

        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
            ABOUT ME{" "}
          </h2>
          <div className="mx-auto my-4 w-20 h-1 bg-gradient-to-r from-cyan-300 via-blue-700 to-purple-800 rounded-full"></div>
         
        </div>
        <div className="container mx-auto px-4 lg:pt-0 max-w-6xl ">
          <div className="text-center mb-12" data-aos="fade-up"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div data-aos="fade-right">
              <div
                id="red-cart"
                className=" transform hover:scale-105 duration-1000  rounded-2xl shadow-md p-8 bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800  dark:bg-[black]"
              >
                <h3 className="mb-6 text-2xl font-extrabold text-blue-950 ">
                  Hello! I'm Mohamed Mamdouh
                </h3>
                <p className="text-white font-extralight ">
                  I'm Mohamed mamdoh, a passionate front-end developer with a
                  knack for crafting engaging and user-friendly web experiences.
                  With a strong foundation in HTML, CSS, and JavaScript, I
                  specialize in
                </p>
              </div>
              <div
                id="red-cart "
                className="mt-5 transform hover:scale-105 duration-1000 rounded-2xl shadow-md p-8 bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800  dark:bg-[black]"
              >
                <h3 className="mb-6 text-2xl font-extrabold text-blue-950">
                  My Skills
                </h3>
                <div className="skillsButtons flex flex-wrap gap-3">
                  <button className="px-5 py-2 border-5 rounded-4xl border-white text-white hover:bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 hover:border-blue-800 transition-all hover:ease-in-out duration-1000 font-extralight ">
                    HTML
                  </button>
                  <button className="px-5 py-2 border-5 rounded-4xl border-white text-white hover:bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 hover:border-blue-800 transition-all hover:ease-in-out duration-1000 font-extralight ">
                    CSS
                  </button>
                  <button className="px-5 py-2 border-5 rounded-4xl border-white text-white hover:bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 hover:border-blue-800 transition-all hover:ease-in-out duration-1000 font-extralight ">
                    JavaScript
                  </button>
                  <button className="px-5 py-2 border-5 rounded-4xl border-white text-white hover:bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 hover:border-blue-800 transition-all hover:ease-in-out duration-1000 font-extralight ">
                    SASS
                  </button>
                  <button className="px-5 py-2 border-5 rounded-4xl border-white text-white hover:bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 hover:border-blue-800 transition-all hover:ease-in-out duration-1000 font-extralight ">
                    tailwindcss
                  </button>
                  <button className="px-5 py-2 border-5 rounded-4xl border-white text-white hover:bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 hover:border-blue-800 transition-all hover:ease-in-out duration-1000 font-extralight ">
                    BOOTSTRAP
                  </button>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-white rounded-2xl shadow-md p-8 dark:bg-black transform hover:scale-105 duration-1000">
                <h3 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white ">
                  My Skills
                </h3>

                {[
                  { name: "HTML/CSS", value: 95 },
                  { name: "JavaScript", value: 90 },
                  { name: "bootstrap", value: 85 },
                  { name: "tailwind", value: 80 },
                  { name: "Bootstrap", value: 80 },
                  { name: "SASS", value: 75 },
                  { name: "jquery", value: 70 },
                ].map((skill, index) => (
                  <div key={index} className="mb-5">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-800 font-medium dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 font-semibold dark:text-white ">
                        {skill.value}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 ">
                      <div
                        className="bg-gradient-to-tr from-cyan-400 via-blue-900 to-purple-800  h-3 rounded-full transition-all duration-700 "
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutme;
