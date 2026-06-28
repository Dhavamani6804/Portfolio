import React from "react";
import mine from "../assets/mine.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  const highlights = ["MERN Stack", "Java"];

  return (
    <div
      name="home"
      className="scroll-mt-24 min-h-screen w-full text-white bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_28%),linear-gradient(to_bottom,_#000,_#0f172a_60%,_#111827)] pt-20 sm:pt-24 md:pt-8"
    >
      <div className="mx-auto flex h-full max-w-screen-lg flex-col-reverse items-center justify-center gap-8 px-4 py-8 md:flex-row md:gap-12 md:py-0">
        <div className="flex h-full flex-col justify-center text-center md:text-left">
          <div className="mb-4 inline-flex w-fit items-center self-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300 md:self-start">
            Open to opportunities
          </div>
          <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Software Engineer <span className="text-cyan-400">•</span> Full-Stack Developer
          </h2>
          <p className="mx-auto max-w-2xl py-4 leading-relaxed text-gray-400 md:mx-0">
            I build modern, scalable applications with a sharp eye for clean UI,
            reliable architecture, and user-focused experiences.
          </p>

          <div className="mb-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-700 bg-gray-900/70 px-3 py-1 text-sm text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              to="contact"
              smooth
              duration={500}
              className="group flex w-fit items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white transition hover:scale-[1.02]"
            >
              <span className="mr-2">Let’s connect</span>
              <span className="transition duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-600 px-6 py-3 text-gray-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View Resume
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-3 text-left">
              <p className="text-xl font-semibold text-white">Full-stack</p>
              <p className="text-sm text-gray-400">Web apps, dashboards, and APIs</p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-3 text-left">
              <p className="text-xl font-semibold text-white">Problem solving</p>
              <p className="text-sm text-gray-400">Focused on practical, real-world solutions</p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-3 text-left">
              <p className="text-xl font-semibold text-white">Growth mindset</p>
              <p className="text-sm text-gray-400">Always learning and improving</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm md:max-w-none">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-cyan-500/20 blur-3xl" />
            <img
              src={mine}
              alt="my profile"
              className="mx-auto h-auto w-full rounded-[2rem] border border-cyan-400/20 object-cover shadow-[0_0_40px_rgba(34,211,238,0.16)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
