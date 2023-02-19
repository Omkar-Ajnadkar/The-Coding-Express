import React, { type ReactNode } from 'react'
import motion from '../libraries/motion'
import { type Experience } from '@/typings'
import moment from 'moment'

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
          <article
            key={experience._id}
            className='flex w-[500px] shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-90 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[600px]'>
            <h4 className='text-3xl font-light underline decoration-[#F7AB0A]'>{experience.jobTitle}</h4>
            <a href={experience.companyLink} target='_blank'>
              <p className='mt-1 text-2xl'>{experience.company}</p>
            </a>
            <p className='text-gray-300 lg:text-lg'>
            {experience.location}  <br/>
            {(moment(experience.dateStarted, 'YYYY-MM-DD')).format('MMM YYYY')} - {experience.isCurrentlyWorking ? 'Present' : (moment(experience.dateEnded, 'YYYY-MM-DD')).format('MMM YYYY')}
            </p>
            <ul className='ml-5 list-disc space-y-4 text-left text-lg lg:text-xl'>
              {experience.description.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
