import React from 'react'
import mine from '../assets/mine.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className='scroll-mt-24 h-screen w-full text-white bg-gradient-to-b from-black via-black to-gray-800 mt-50'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold mt-24'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>I'm a passionate and dedicated software developer with a strong foundation in JavaScript, React, and Node.js. I have a keen eye for detail and a strong communication skills. I can build scalable and maintainable applications.</p>
            <div>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={20} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={mine} alt="my profile"  className='rounded-2xl mx-auto w-2/3 md:w-full ' />
        </div>
      </div>
    </div>
  )
}

export default Home
