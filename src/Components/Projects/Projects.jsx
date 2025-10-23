import React from "react";
import NeonText from "../NeonText/NeonText.jsx";
import Neonbg from "./../Neonbg";
import MySwiper from "../Swiper/Swiper.jsx";
const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="relative  py-20"
      >
        <NeonText text="Projects" size="60px" stroke="5.5px #0a0e23" paddingBottom="40px" />
        <Neonbg />
        <div className="container mx-auto px-4  lg:pt-0 max-w-6xl">
          <MySwiper />
        </div>
      </section>
    </>
  );
};

export default Projects;
