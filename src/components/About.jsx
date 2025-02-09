import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
      </div>

      <p className='text-xl mt-20'>Hi, I'm a passionate and driven full-stack developer with a keen interest in building real-time applications and responsive web designs. I specialize in JavaScript and frameworks like React, and I’m currently exploring the MERN stack to enhance my expertise.</p>
     <br />
      <p className='text-xl'>With hands-on experience in Firebase and MERN stack, I’ve worked on projects like a real-time chat application, a Python-based voice assistant, and a sentiment analysis web application. My commitment to learning new technologies and solving complex problems has helped me contribute meaningfully to every project I’ve undertaken.</p>
      <br />
      <p className='text-xl'>Apart from coding, I’ve also participated in events like a 7-day NSS camp, showcasing my teamwork and organizational skills. Whether it's optimizing web applications or creating intuitive user interfaces, I love turning ideas into reality.</p>
      </div>
    </div>
  )
}

export default About
