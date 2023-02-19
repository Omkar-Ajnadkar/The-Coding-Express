import React, { type ReactNode } from 'react'
import motion from '../libraries/motion'
import { type Education } from '@/typings'
import moment from 'moment'
import PortableText from '../libraries/portabletext'

interface Props {
  children?: ReactNode
  educations?: Education[]
}

const Educations = ({ educations = [] }: Props) => {
  educations.sort(function (a, b) {
    const keyA = new Date(a.dateEnded)
    const keyB = new Date(b.dateEnded)
    if (keyA < keyB) return 1
    if (keyA > keyB) return -1
    return 0
  })
  const components = {
    list: {
      bullet: ({ children }: any) => <ul className='list-disc'>{children}</ul>,
      number: ({ children }: any) => <ol>{children}</ol>
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-center md:flex-row'>
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">Education</h3>
      <div className='flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {educations.map(education => (
          <article
            key={education._id}
            className='flex w-[500px] shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-90 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]'>
              <h4 className='text-3xl font-light underline decoration-[#F7AB0A]'>{education.title}</h4>
              <a href={education.educationLink} target='_blank'>
                <p className='mt-1 text-2xl'>{education.university}</p>
              </a>
              <p className='py-5 text-gray-300 lg:text-lg'>
                {education.gpa}  <br/>
                {(moment(education.dateStarted, 'YYYY-MM-DD')).format('MMM YYYY')} - {(moment(education.dateEnded, 'YYYY-MM-DD')).format('MMM YYYY')}
              </p>
              <span className='text-left text-lg lg:text-xl'>
                <PortableText value={education.description} components={components}/>
              </span>
          </article>
        ))}
      </div>
    </motion.div>
  )
}

export default Educations
