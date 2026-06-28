import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white scroll-mt-24 animate-fade-in'>
      <div className='max-w-screen-lg px-4 sm:px-6 py-10 sm:py-16 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='mt-24 sm:mt-40 pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className="mt-5 text-base sm:text-xl leading-relaxed tracking-wide text-left sm:text-justify">
          Ever since I wrote my first program, I've been fascinated by how software can solve real-world problems and make everyday tasks simpler. That curiosity has driven me to explore a wide range of technologies—from full-stack web development and real-time applications to embedded systems and computer vision.
        </p>
        <br />

        <p className="text-base sm:text-xl leading-relaxed tracking-wide text-left sm:text-justify">
          Today, I primarily build modern, scalable applications using the <span className="text-cyan-400">MERN stack</span>, while also working with <span className="text-cyan-400">Java</span> and <span className="text-cyan-400">Python</span> to develop efficient and reliable software. Through hands-on industry training, I've gained exposure to <span className="text-cyan-400">C, C++, Linux, Git and GitHub</span>, giving me a broader understanding of software development beyond web technologies.
        </p>
        <br />

        <p className="text-base sm:text-xl leading-relaxed tracking-wide text-left sm:text-justify">
          I enjoy turning ideas into practical solutions, whether it's creating a personal finance management platform, a professional networking application, or an intelligent gesture and voice-controlled desktop assistant. Every project I build is an opportunity to learn, improve, and write better software than I did yesterday.
        </p>
        <br />

        <p className="text-base sm:text-xl leading-relaxed tracking-wide text-left sm:text-justify">
          I'm currently looking for opportunities where I can contribute, collaborate with talented teams, and continue growing as a Software Engineer while building products that create meaningful impact.
        </p>
      </div>
    </div>
  )
}

export default About
