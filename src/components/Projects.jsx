import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal developer portfolio built with React & TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "ConnectAll",
    description: "Real-time chat app using MERN Stack and Socket.IO.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    link: "https://github.com/yourusername/connectall",
  },
  {
    id: 3,
    title: "Password Sanitizer (Java)",
    description: "A Java program to validate and sanitize passwords.",
    tech: ["Java"],
    link: "https://github.com/yourusername/password-sanitizer-java",
  },
  {
    id: 4,
    title: "Railway Reservation System (Java)",
    description: "Java-based reservation system with ticket booking, RAC, and waiting list.",
    tech: ["Java"],
    link: "https://github.com/yourusername/railway-ticket-reservation-system-java",
  },
  {
    id: 5,
    title: "Personal Blog",
    description: "Blog platform to share thoughts and updates.",
    tech: ["React", "Markdown", "TailwindCSS"],
    link: "https://github.com/yourusername/personal-blog",
  },
  {
    id: 6,
    title: "Weather App",
    description: "Weather app using OpenWeatherMap API and React.",
    tech: ["React", "API"],
    link: "https://github.com/yourusername/weather-app",
  },
];

const Projects = () => {
  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-10">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check out some of my GitHub work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, tech, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-4 bg-gray-900">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-400 mb-2">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((item, index) => (
                  <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
