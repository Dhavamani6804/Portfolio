import React from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import chat from "../assets/portfolio/chat.jpeg";
import port from "../assets/portfolio/portfolioimg.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactWeather,
    },
    {
      id: 2,
      src: port,
    },
    {
      id: 3,
      src: chat,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 w-full text-white md:h-screen pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-300">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-lg shadow-cyan-700/30 rounded-lg bg-gray-900 hover:scale-105 duration-300"
            >
              <img
                src={src}
                alt=""
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 font-semibold text-cyan-500 hover:text-white hover:bg-cyan-700 rounded-lg">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 font-semibold text-cyan-500 hover:text-white hover:bg-cyan-700 rounded-lg">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
