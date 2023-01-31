'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { type Experience } from '@/typings'
import { urlFor } from '@/lib/sanity'
import moment from 'moment'

interface Props {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  const companyLogoImageUrl = (experience.companyImage) == null ? '' : urlFor(experience.companyImage).url()
  return (
    <article
      className='flex w-[500px] shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-90 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='h-32 w-32 rounded-full object-cover object-center md:rounded-full xl:h-[200px] xl:w-[200px]'
        src={companyLogoImageUrl}
        alt={experience.company}
      />
      <div>
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <a href={experience.companyLink} target='_blank'>
          <p className='mt-1 text-2xl font-bold'>{experience.company}</p>
        </a>
        <div className='my-2 flex space-x-2'>
          {experience.technologies.map(technology => (
            <img
              key={technology._id}
              className='h-10 w-10 rounded-full'
              src={(technology.image) == null ? '' : urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>
        <p className='py-5 uppercase text-gray-300'>
        {(moment(experience.dateStarted, 'YYYY-MM-DD')).format('MMM YYYY')} - {experience.isCurrentlyWorking ? 'Present' : (moment(experience.dateEnded, 'YYYY-MM-DD')).format('MMM YYYY')}
        </p>
        <ul className='ml-5 list-disc space-y-4 text-lg'>
          {experience.description.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
