import html from '../assets/skills/html5-original.svg'
import css from '../assets/skills/css3-original.svg'
import javascript from '../assets/skills/javascript-original.svg'
import reactImage from '../assets/skills/react-original.svg'
import tailwind from '../assets/skills/tailwindcss-original.svg'
import node from '../assets/skills/nodejs-original.svg'
import express from '../assets/skills/express-original.svg'
import mongo from '../assets/skills/mongodb-original.svg'
import mysql from '../assets/skills/mysql-original.svg'
import python from '../assets/skills/python-original.svg'
import c from '../assets/skills/c-original.svg'
import java from '../assets/skills/java-original.svg'
import git from '../assets/skills/github-original.svg'
import vscode from '../assets/skills/vscode-original.svg'
import canva from '../assets/skills/canva-original.svg'
import intellij from '../assets/skills/intellij-original.svg'

const SkillSection = ({ title, skills }) => (
  <div className='mb-10'>
    <h3 className='text-2xl font-semibold mb-4 border-b-2 border-gray-500 inline-block'>{title}</h3>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center'>
      {skills.map(({ id, src, title, style }) => (
        <div
          key={id}
          className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
        >
          <img src={src} alt={title} className='w-20 h-20 mx-auto' />
          <p className='mt-4'>{title}</p>
        </div>
      ))}
    </div>
  </div>
)

const Skills = () => {
  const frontendSkills = [
    { id: 1, src: html, title: 'HTML5', style: 'shadow-orange-500' },
    { id: 2, src: css, title: 'CSS3', style: 'shadow-blue-500' },
    { id: 3, src: javascript, title: 'JavaScript', style: 'shadow-yellow-500' },
    { id: 4, src: reactImage, title: 'ReactJS', style: 'shadow-blue-600' },
    { id: 5, src: tailwind, title: 'TailwindCSS', style: 'shadow-sky-400' },
  ]

  const backendSkills = [
    { id: 6, src: node, title: 'Node.js', style: 'shadow-green-600' },
    { id: 7, src: express, title: 'Express.js', style: 'shadow-gray-500' },
    { id: 8, src: mongo, title: 'MongoDB', style: 'shadow-green-400' },
    { id: 9, src: mysql, title: 'MySQL', style: 'shadow-blue-400' },
  ]

  const languageSkills = [
    { id: 10, src: python, title: 'Python', style: 'shadow-yellow-300' },
    { id: 11, src: c, title: 'C', style: 'shadow-gray-500' },
    { id: 12, src: java, title: 'Java', style: 'shadow-red-500' },
  ]

  const tools = [
    { id: 13, src: git, title: 'GitHub', style: 'shadow-gray-400' },
    { id: 14, src: vscode, title: 'VS Code', style: 'shadow-blue-500' },
    { id: 15, src: intellij, title: 'IntelliJ IDEA', style: 'shadow-pink-400' },
    { id: 16, src: canva, title: 'Canva', style: 'shadow-cyan-300' },
  ]

  return (
    <div name="skills" className="scroll-mt-24 bg-gradient-to-b from-gray-800 to-black text-white w-full min-h-screen px-6 py-12">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 mb-10 inline-block">Skills</h2>
        <SkillSection title="Frontend" skills={frontendSkills} />
        <SkillSection title="Backend & Database" skills={backendSkills} />
        <SkillSection title="Programming Languages" skills={languageSkills} />
        <SkillSection title="Tools & Platforms" skills={tools} />
      </div>
    </div>
  )
}

export default Skills
