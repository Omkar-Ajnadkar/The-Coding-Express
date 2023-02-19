import React, { type ReactNode } from 'react'
import { type Skill } from '@/typings'

interface Props {
  children?: ReactNode
  skills?: Skill[]
}

const Skills = ({ skills = [] }: Props) => {
  const coreSkills = skills.filter(skill => skill.category === 'Core')
  return (
    <div
      className='container relative mx-auto flex min-h-screen max-w-[2000px] flex-col flex-wrap items-center justify-center overflow-hidden text-center'>
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">Skills</h3>
      <div className='columns-1 gap-3 md:columns-2'>
        {coreSkills.map(skill => (
          <div key={skill._id} className='break-inside-avoid-column border border-gray-500 p-1'>
            <div>
              <p className='text-center text-sm font-semibold opacity-60 sm:text-base md:text-xl'>{skill.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='m-5'>
        <div>
          <h4 className="text-lg tracking-[1px] text-gray-500 underline decoration-[#F7AB0A] sm:text-xl md:text-2xl">{skills.filter(skill => skill.category === 'Programming Languages')[0].category}</h4>
          <p className='p-2 text-center text-base font-light opacity-60 sm:p-5 sm:text-lg md:text-xl'>
            {skills.filter(skill => skill.category === 'Programming Languages')[0].title}
          </p>
        </div>
        <div>
          <h4 className="text-lg tracking-[1px] text-gray-500 underline decoration-[#F7AB0A] sm:text-xl md:text-2xl">{skills.filter(skill => skill.category === 'Web Frameworks')[0].category}</h4>
          <p className='p-2 text-center text-base font-light opacity-60 sm:p-5 sm:text-lg md:text-xl'>
            {skills.filter(skill => skill.category === 'Web Frameworks')[0].title}
          </p>
        </div>
        <div>
          <h4 className="text-lg tracking-[1px] text-gray-500 underline decoration-[#F7AB0A] sm:text-xl md:text-2xl">{skills.filter(skill => skill.category === 'ML Frameworks')[0].category}</h4>
          <p className='p-2 text-center text-base font-light opacity-60 sm:p-5 sm:text-lg md:text-xl'>
            {skills.filter(skill => skill.category === 'ML Frameworks')[0].title}
          </p>
        </div>
        <div>
          <h4 className="text-lg tracking-[1px] text-gray-500 underline decoration-[#F7AB0A] sm:text-xl md:text-2xl">{skills.filter(skill => skill.category === 'Data Analysis')[0].category}</h4>
          <p className='p-2 text-center text-base font-light opacity-60 sm:p-5 sm:text-xl'>
            {skills.filter(skill => skill.category === 'Data Analysis')[0].title}
          </p>
        </div>
        <div>
          <h4 className="text-lg tracking-[1px] text-gray-500 underline decoration-[#F7AB0A] sm:text-xl md:text-2xl">{skills.filter(skill => skill.category === 'Databases')[0].category}</h4>
          <p className='p-2 text-center text-base font-light opacity-60 sm:p-5 sm:text-lg md:text-xl'>
            {skills.filter(skill => skill.category === 'Databases')[0].title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
