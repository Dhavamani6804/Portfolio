import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white scroll-mt-24 animate-fade-in'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='mt-24 sm:mt-40 pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className="mt-5 text-xl leading-relaxed tracking-wide text-justify">
          I'm <span className="font-semibold text-white">Dhavamani S</span>, a passionate and results-driven <span className="font-semibold text-white">Full-Stack Developer</span> with strong proficiency in the <span className="text-cyan-400">MERN stack</span>, <span className="text-cyan-400">Java</span>, and core <span className="text-cyan-400">data structures</span>. I specialize in building <span className="font-semibold text-white">scalable</span>, <span className="font-semibold text-white">secure</span>, and <span className="font-semibold text-white">user-friendly web applications</span>, combining a clean UI with solid backend logic.
        </p>
        <br />

        <p className="text-xl leading-relaxed tracking-wide text-justify">
          I’ve engineered a <span className="font-semibold text-white">Railway Ticket Reservation System</span> that intelligently handles real-world scenarios like <span className="text-cyan-400">RAC</span> and <span className="text-cyan-400">waiting lists</span>. I’ve also developed <span className="font-semibold text-white">ConnectAll</span>, a secure <span className="text-cyan-400">real-time chat platform</span>, and a modern <span className="font-semibold text-white">portfolio website</span> showcasing my work.
        </p>
        <br />

        <p className="text-xl leading-relaxed tracking-wide text-justify">
          I take pride in writing <span className="font-semibold text-white">clean code</span>, following <span className="text-cyan-400">software engineering principles</span>, and continuously learning <span className="font-semibold text-white">new technologies</span>. Outside of tech, I’ve demonstrated <span className="font-semibold text-white">leadership</span> through my role as the <span className="text-cyan-400">Chief Advisor in NSS</span>, guiding <span className="font-semibold text-white">60+ volunteers</span> in social impact projects.
        </p>
        <br />

        <p className="text-xl leading-relaxed tracking-wide text-justify">
          When I’m not coding, you’ll find me exploring <span className="text-cyan-400">open-source projects</span> or improving my skills through <span className="font-semibold text-white">certifications</span> and <span className="text-cyan-400">community engagement</span>.
        </p>
      </div>
    </div>
  )
}

export default About
