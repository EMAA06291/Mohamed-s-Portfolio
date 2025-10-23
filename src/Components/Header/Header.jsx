import React, { useState, useEffect } from "react";
import NeonText from "../NeonText/NeonText.jsx";
import {
  Navbar,
  NavbarBrand,
  NavbarLink,
  NavbarToggle,
  NavbarCollapse,
} from "flowbite-react";
import DarkMoodButton from "../DarkMoodButton/DarkMoodButton.jsx";
import mohamedPhoto from "../../assets/photo_2025-10-22_01-08-05.jpg";
import triangle from "../../assets/triangle.png";
import Neonbg from "./../Neonbg";

const Header = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#Services" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeLink, setActiveLink] = useState("#home");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; 
      let current = "#home";

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop <= scrollPosition) {
          current = link.href;
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        className="!sticky !top-0 !z-[9999] !bg-[transparent] shadow-lg dark:!bg-[transparent] "
        style={{ position: "sticky", top: 0, zIndex: 9999 }}
      >
        <NavbarBrand
          className="font-bold text-white dark:text-[#6c6a7d] text-2xl"
          style={{
            fontSize: "20px",
            color: "#0891fc",
            fontFamily: '"Arial Black", Gadget, sans-serif',
            textShadow: `
      0px 0px 0 rgb(0,78,138),
      -1px 1px 0 rgb(0,61,101),
      -2px 2px 0 rgb(0,43,103),
      -3px 3px 0 rgb(0,26,86),
      -4px 4px 0 rgb(0,8,68),
      -5px 5px 0 rgb(0,9,51),
      -6px 6px 0 rgb(0,27,33),
      -7px 7px 0 rgb(0,44,16),
      -8px 8px 0 rgb(0,62,0),
      -9px 9px 0 rgb(0,80,0),
      -10px 10px 9px rgba(11,35,69,1),
      -10px 10px 1px rgba(11,35,69,0.9),
      0px 0px 9px rgba(11,35,69,0.9)
    `,
          }}
        >  
          MOHAMED
        </NavbarBrand>

        <NavbarToggle className="block lg:hidden" />
        <NavbarCollapse>
          {links.map((link) => (
            <NavbarLink
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link.href);
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`text-lg  font-poppins font-bold rounded transition-all duration-300 my-1 md:my-0 md:py-0 px-2 no-underline
                ${
                  activeLink === link.href
                    ? "bg-[#afb3f2] text-[#1d20c07c] dark:bg-[#bdaff2] dark:text-[#11103f]"
                    : "text-[#11103f] hover:!bg-[#bdaff2] hover:!text-[#11103f] dark:!text-white dark:hover:!bg-[#2b2b2b] dark:hover:!text-[#afb3f2]"
                }`}
              style={{
                textDecoration: "none",
                outline: "none",
                transition: "all 0.3s ease",
                padding: "2px 4px",
              }}
              onFocus={(e) => e.target.blur()}
            >
              {link.name}
            </NavbarLink>
          ))}
          <DarkMoodButton />
        </NavbarCollapse>
      </Navbar>

      <header
        id="home"
        className="relative h-screen flex flex-col items-center justify-center  text-center xl:px-6"
      >
        <div className="flex items-center xl:right-20  relative justify-center w-full ">
          <img
            src={triangle}
            alt="tringle"
            className="xl:w-[60%] rotate-6 w-[100%] z-1"
          />
        </div>
        <div className="image w-20 h-20 sm:w-25 sm:h-25 z-2 xl:top-[30%] top-[40%] right-[60%] xl:right-[60%] sm:top-[37%] sm:right-[50%] md:right-[60%] absolute overflow-hidden rounded-full ">
          <img
            src={mohamedPhoto}
            alt="my picture"
            className="  bg-gray-950 object-cover w-full h-full  "
          />
        </div>
        <Neonbg />
      
        <div className="z-5 absolute xl:top-[30%] left-[35%] xl:left-[40%] sm:left-[50%] " data-aos="fade-up">
      <NeonText
  text="HELLO"
  size="clamp(35px, 7vw, 80px)"
  stroke="clamp(3px, 0.8vw, 8.5px) #0a0e23"
/>

<NeonText
  text="WORLD!"
  size="clamp(35px, 7vw, 80px)"
  stroke="clamp(3px, 0.8vw, 8.5px) #0a0e23"
/>


          <p
            className="xl:text-lg text-white/90 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            i am react.js devolper
          </p>
<div data-aos="zoom-in" data-aos-delay="400">
  <button
    className="inline-block px-6 py-3 rounded-2xl 
    bg-gradient-to-br from-cyan-200 via-blue-700 to-purple-800 
    text-white font-semibold shadow-md 
    transform transition-all duration-1000 ease-in-out 
    hover:scale-110 hover:shadow-2xl"
  >
    <a href="#projects">explore my projects</a>
  </button>
</div>

        </div>
      </header>

    </>
  );
};

export default Header;
