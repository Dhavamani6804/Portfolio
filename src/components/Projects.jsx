import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal developer portfolio built with React & TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    link: "https://github.com/Dhavamani6804/Portfolio.git",
  },
  {
    id: 2,
    title: "ConnectAll",
    description: "Real-time chat app using MERN Stack and Socket.IO.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    link: "https://github.com/Dhavamani6804/ConnectAll.git",
  },
  {
    id: 3,
    title: "FinTrack",
    description: "A finance tracker with budgeting, expense analysis, and a clean dashboard experience.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Dhavamani6804/FinTrack",
  },
  {
    id: 4,
    title: "GestVoice",
    description: "A voice and gesture-based interactive project focused on accessibility and hands-free control.",
    tech: ["Python", "OpenCV", "Speech Recognition", "AI"],
    link: "https://github.com/Dhavamani6804/gest-voice-final-Main",
  },
  {
    id: 5,
    title: "Password Sanitizer (Java)",
    description: "A Java program to validate and sanitize passwords.",
    tech: ["Java"],
    link: "https://github.com/Dhavamani6804/Password_sanitizer.git",
  },
  {
    id: 6,
    title: "Railway Reservation System (Java)",
    description: "Java-based reservation system with ticket booking, RAC, and waiting list.",
    tech: ["Java"],
    link: "https://github.com/Dhavamani6804/railway_ticket_reservation_system_.git",
  },
  {
    id: 7,
    title: "Personal Blog",
    description: "Blog platform to share thoughts and updates.",
    tech: ["React", "Markdown", "TailwindCSS"],
    link: "https://github.com/Dhavamani6804/Dhava-s-blog.git",
  },
  {
    id: 8,
    title: "Weather App",
    description: "Weather app using OpenWeatherMap API and React.",
    tech: ["React", "API"],
    link: "https://github.com/Dhavamani6804/weather-app.git",
  },
];

const Projects = () => {
  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-16 sm:py-20">
      <div className="max-w-screen-lg px-4 sm:px-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check out some of my GitHub work</p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-0 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {projects.map(({ id, title, description, tech, link }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/80 p-5 shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                    Featured
                  </span>
                  <span className="text-xs text-gray-500">GitHub</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-400">{description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {tech.map((item, index) => (
                    <span key={index} className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 transition group-hover:text-cyan-300"
                >
                  View on GitHub <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
