import React, { type ReactNode } from 'react'
import motion from '../app/libraries/motion'
import ExperienceCard from './ExperienceCard'
import { type Experience } from '@/typings'

interface Props {
  children?: ReactNode
  experiences?: Experience[]
}

const WorkExperience = ({ experiences = [] }: Props) => {
  experiences.sort(function (a, b) {
    const keyA = new Date(a.dateStarted)
    const keyB = new Date(b.dateStarted)
    if (keyA < keyB) return 1
    if (keyA > keyB) return -1
    return 0
  })
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-center md:flex-row'>
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">Experience</h3>
      <div className='flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {experiences.map(experience => (
          <ExperienceCard key={experience._id} experience={experience}/>
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
