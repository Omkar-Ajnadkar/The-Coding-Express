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
      <div className='columns-2 gap-3'>
        {coreSkills.map(skill => (
          <div key={skill._id} className='break-inside-avoid-column border border-gray-500 p-2'>
            <div>
              <p className='text-center text-xl font-semibold opacity-60'>{skill.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='m-5'>
        <div>
          <h4 className="text-2xl tracking-[1px] text-gray-500 underline decoration-[#F7AB0A]">{skills.filter(skill => skill.category === 'Programming Languages')[0].category}</h4>
          <p className='p-5 text-center text-xl font-light opacity-60'>
            {skills.filter(skill => skill.category === 'Programming Languages')[0].title}
          </p>
        </div>
        <div>
          <h4 className="text-2xl tracking-[1px] text-gray-500 underline decoration-[#F7AB0A]">{skills.filter(skill => skill.category === 'Web Frameworks')[0].category}</h4>
          <p className='p-5 text-center text-xl font-light opacity-60'>
            {skills.filter(skill => skill.category === 'Web Frameworks')[0].title}
          </p>
        </div>
        <div>
          <h4 className="text-2xl tracking-[1px] text-gray-500 underline decoration-[#F7AB0A]">{skills.filter(skill => skill.category === 'ML Frameworks')[0].category}</h4>
          <p className='p-5 text-center text-xl font-light opacity-60'>
            {skills.filter(skill => skill.category === 'ML Frameworks')[0].title}
          </p>
        </div>
        <div>
          <h4 className="text-2xl tracking-[1px] text-gray-500 underline decoration-[#F7AB0A]">{skills.filter(skill => skill.category === 'Data Analysis')[0].category}</h4>
          <p className='p-5 text-center text-xl font-light opacity-60'>
            {skills.filter(skill => skill.category === 'Data Analysis')[0].title}
          </p>
        </div>
        <div>
          <h4 className="text-2xl tracking-[1px] text-gray-500 underline decoration-[#F7AB0A]">{skills.filter(skill => skill.category === 'Databases')[0].category}</h4>
          <p className='p-5 text-center text-xl font-light opacity-60'>
            {skills.filter(skill => skill.category === 'Databases')[0].title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
