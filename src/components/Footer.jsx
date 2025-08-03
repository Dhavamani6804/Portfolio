import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 py-6">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Dhavamani. All rights reserved.
        </p>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Dhavamani6804"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dhavamani-s-163916257/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
