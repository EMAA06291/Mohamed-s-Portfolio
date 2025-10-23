import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.css";
import { Navigation } from "swiper/modules";
import proj1 from "../../assets/proj1.jpg";
import proj2 from "../../assets/proj2.jpg";
import proj3 from "../../assets/proj3.jpg";
import { Github, Eye } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MySwiper() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "My First Project",
      img: proj1,
      desc: "A creative modern UI built with React and Tailwind.",
    },
    {
      title: "My Second Project",
      img: proj2,
      desc: "A responsive portfolio with animations and effects.",
    },
    {
      title: "My Third Project",
      img: proj3,
      desc: "An advanced web app powered by React Hooks.",
    },
  ];

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className="card group relative w-[90%] max-w-md rounded-2xl overflow-hidden shadow-lg mx-auto"
              data-aos="fade-up"
            >
              {/* 🔹 العنوان */}
              <div className="dark:bg-purple-950/25 bg-purple-500/20 "> <div className="text-center py-3 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-800 text-xl">
                {project.title}
              </div></div>
             

              {/* 🔹 الصورة + اللاير */}
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />

                {/* 🔹 اللاير عند الهوفر */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col items-center justify-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  {/* الأيقونات */}
                        <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-white hover:text-cyan-300 transition-all duration-300"
                  >
                    <Github size={32} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-cyan-300 transition-all duration-300"
                  >
                    <Eye size={32} />
                  </a>
                </div>

                  {/* الوصف */}
                  <p className="text-gray-100 text-sm px-4 text-center max-w-[80%]">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
