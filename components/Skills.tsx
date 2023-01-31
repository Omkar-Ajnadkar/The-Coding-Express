'use client'

import React, { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import SingleSkill from './Skill'
import { type Skill } from '@/typings'

interface Props {
  children?: ReactNode
  skills?: Skill[]
}

const Skills = ({ skills = [] }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10'>
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">Skills</h3>
      {/* <h3 className='absolute top-36 text-sm uppercase tracking-[3px] text-gray-500'>Hover over skill for current proficiency</h3> */}
      <div className='grid grid-cols-4 gap-5'>
        {skills.map(skill => (
          <SingleSkill key={skill._id} skill={skill}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
