import React from 'react'
import motion from '../app/libraries/motion'
import { type Skill } from '@/typings'
import { urlFor } from '@/lib/sanity'

interface Props {
  directionLeft?: boolean
  skill: Skill
}

const SingleSkill = ({ directionLeft, skill }: Props) => {
  const skillImageUrl = (skill.image) == null ? '' : urlFor(skill.image).url()
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: (directionLeft ?? false) ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="h-24 w-24 rounded-full border border-gray-500 object-cover transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
        src={skillImageUrl}
      />
      <div className='absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32'>
        <div className='flex h-full items-center justify-center'>
          <p className='text-center text-xl font-semibold text-black opacity-100'>{skill.title}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleSkill
