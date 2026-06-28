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
    { id: 10, src: java, title: 'Java', style: 'shadow-red-500' },
    { id: 11, src: c, title: 'C', style: 'shadow-gray-500' },
    { id: 12, src: python, title: 'Python', style: 'shadow-yellow-300' },
  ]

  const tools = [
    { id: 13, src: vscode, title: 'VS Code', style: 'shadow-blue-500' },
    { id: 14, src: intellij, title: 'IntelliJ IDEA', style: 'shadow-pink-400' },
    { id: 15, src: git, title: 'GitHub', style: 'shadow-gray-400' },
    { id: 16, src: canva, title: 'Canva', style: 'shadow-cyan-300' },
  ]

  const resumeHighlights = [
    { id: 17, title: 'REST APIs', style: 'shadow-cyan-500' },
    { id: 18, title: 'Data Structures', style: 'shadow-purple-500' },
    { id: 19, title: 'Algorithms', style: 'shadow-pink-500' },
    { id: 20, title: 'Problem Solving', style: 'shadow-amber-500' },
    { id: 21, title: 'Software Engineering', style: 'shadow-emerald-500' },
    { id: 22, title: 'Responsive UI', style: 'shadow-sky-500' },
  ]

  return (
    <div name="skills" className="scroll-mt-24 bg-gradient-to-b from-gray-800 to-black text-white w-full min-h-screen px-6 py-12">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-10">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block">Skills</h2>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center rounded-full border border-cyan-400 px-4 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-500/10"
          >
            View Resume PDF
          </a>
        </div>

        <div className='mb-10'>
          <h3 className='text-2xl font-semibold mb-4 border-b-2 border-gray-500 inline-block'>Resume Highlights</h3>
          <div className='flex flex-wrap gap-3'>
            {resumeHighlights.map(({ id, title, style }) => (
              <span key={id} className={`rounded-full border border-gray-600 bg-gray-900 px-3 py-2 text-sm shadow-md ${style}`}>
                {title}
              </span>
            ))}
          </div>
        </div>

        <SkillSection title="Frontend" skills={frontendSkills} />
        <SkillSection title="Backend & Database" skills={backendSkills} />
        <SkillSection title="Programming Languages" skills={languageSkills} />
        <SkillSection title="Tools & Platforms" skills={tools} />
      </div>
    </div>
  )
}

export default Skills
