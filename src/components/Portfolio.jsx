import React from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import chat from "../assets/portfolio/chat.jpeg";
import port from "../assets/portfolio/portfolioimg.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactWeather,
      codeLink:"https://github.com/Dhavamani6804/weather-app.git"
    },
    {
      id: 2,
      src: port,
      codeLink:"https://github.com/Dhavamani6804/Portfolio.git"
    },
    {
      id: 3,
      src: chat,
      codeLink:"https://github.com/Dhavamani6804/ConnectAll.git"
    },
  ];

  return (
    <div
      name="portfolio"
      className="scroll-mt-24 bg-gradient-to-b from-black via-gray-900 to-gray-800 w-full text-white md:h-screen pt-20"
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
          {portfolios.map(({ id, src,codeLink }) => (
            <div
              key={id}
className="shadow-lg shadow-cyan-700/30 rounded-lg bg-gray-900 hover:scale-105 hover:shadow-cyan-500/50 duration-500 transition-all ease-in-out"            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
  <img src={src} alt={`Project ${id}`} className="w-full h-full object-cover" />
</div>

              <div className="flex items-center justify-center">
                <a href={codeLink} target="_blank" rel="noreferrer"/>
                <button className="w-full px-6 py-3 m-4 font-semibold text-cyan-400 bg-transparent border border-cyan-500 hover:text-white hover:bg-cyan-700 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-cyan-500/40">
  View Code
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
