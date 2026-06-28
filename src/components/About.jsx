import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white scroll-mt-24 animate-fade-in'>
      <div className='mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center px-4 py-10 sm:px-6 sm:py-16'>
        <div className='mt-24 pb-8 sm:mt-40'>
          <p className='inline border-b-4 border-gray-500 text-4xl font-bold'>About</p>
        </div>

        <div className='rounded-3xl border border-cyan-400/20 bg-gray-900/60 p-6 shadow-2xl shadow-black/30 sm:p-8'>
          <div className='mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300'>What I bring</div>
          <div className='space-y-4 text-base leading-relaxed tracking-wide text-left sm:text-xl sm:text-justify'>
            <p>
              Ever since I wrote my first program, I've been fascinated by how software can solve real-world problems and make everyday tasks simpler. That curiosity has driven me to explore a wide range of technologies—from full-stack web development and real-time applications to embedded systems and computer vision.
            </p>
            <p>
              Today, I primarily build modern, scalable applications using the <span className="text-cyan-400">MERN stack</span>, while also working with <span className="text-cyan-400">Java</span> and <span className="text-cyan-400">Python</span> to develop efficient and reliable software. Through hands-on industry training, I've gained exposure to <span className="text-cyan-400">C, C++, Linux, Git and GitHub</span>, giving me a broader understanding of software development beyond web technologies.
            </p>
            <p>
              I enjoy turning ideas into practical solutions, whether it's creating a personal finance management platform, a professional networking application, or an intelligent gesture and voice-controlled desktop assistant. Every project I build is an opportunity to learn, improve, and write better software than I did yesterday.
            </p>
            <p>
              I'm currently looking for opportunities where I can contribute, collaborate with talented teams, and continue growing as a Software Engineer while building products that create meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
