import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white scroll-mt-24'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
      <div className='mt-40 pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
      </div>

      <p className="mt-5 text-xl leading-relaxed tracking-wide text-justify">
I'm Dhavamani S, a passionate and results-driven Full-Stack Developer with strong proficiency in the MERN stack, Java, and core data structures. I specialize in building scalable, secure, and user-friendly web applications, combining a clean UI with solid backend logic.</p>     <br />
      <p className="text-xl leading-relaxed tracking-wide text-justify">
 I’ve engineered a robust Railway Ticket Reservation System that intelligently handles real-world scenarios like RAC and waiting lists. I’ve also developed ConnectAll, a secure real-time chat platform enabling seamless communication, and a modern portfolio website showcasing my work.</p>      <br />
      <p className="text-xl leading-relaxed tracking-wide text-justify">
I take pride in writing clean code, following software engineering principles, and continuously learning new technologies. Outside of tech, I’ve demonstrated leadership through my role as the Chief Advisor in NSS, guiding 60+ volunteers in social impact projects.</p><br/>
      <p className="text-xl leading-relaxed tracking-wide text-justify">
        When I’m not coding, you’ll find me exploring open-source projects or improving my skills through certifications and community engagement.</p>
      </div>
    </div>
  )
}

export default About
