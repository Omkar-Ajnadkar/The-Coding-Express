import React from 'react'
import { type Experience } from '@/typings'
import moment from 'moment'

// import { urlFor } from '@/lib/sanity'
// import motion from '../app/libraries/motion'

interface Props {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  // const companyLogoImageUrl = (experience.companyImage) == null ? '' : urlFor(experience.companyImage).url()
  return (
    <article
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
  )
}

export default ExperienceCard
