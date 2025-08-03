import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  return (
    <div
      className={`fixed w-full h-20 px-4 z-50 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-black/10 backdrop-blur-md shadow-md"
          : "bg-black"
      } text-white`}
    >
      <div>
        <h1 className="text-4xl font-signature ml-2">Dhavamani</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500} offset={-80}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden z-10 text-gray-400 cursor-pointer"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-6 text-4xl capitalize cursor-pointer"
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
