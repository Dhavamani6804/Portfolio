import React from "react";
import mine from "../assets/mine.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="scroll-mt-24 min-h-screen w-full text-white bg-gradient-to-b from-black via-black to-gray-800 pt-24 sm:pt-28 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center items-center h-full px-4 py-10 gap-8 md:flex-row md:gap-12 md:py-0">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md mx-auto md:mx-0 leading-relaxed">
            I'm a passionate and dedicated software developer with a strong
            foundation in JavaScript, React, and Node.js. I have a keen eye for
            detail and strong communication skills. I can build scalable and
            maintainable applications.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              <span className="ml-1 animate-bounce">👉</span>
              <span className="mx-1">Connect with me</span>
              <span className="group-hover:rotate-45 duration-300">
                <span className="ml-1 animate-bounce">👈</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-sm md:max-w-none">
          <img
            src={mine}
            alt="my profile"
            className="rounded-2xl mx-auto w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
