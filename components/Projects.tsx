import React, { type ReactNode } from 'react'
import motion from '../libraries/motion'
import { type Project } from '@/typings'
import moment from 'moment'

interface Props {
  children?: ReactNode
  projects?: Project[]
}

const Projects = ({ projects = [] }: Props) => {
  projects.sort(function (a, b) {
    const keyA = new Date(a.dateEnded)
    const keyB = new Date(b.dateEnded)
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
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">Projects</h3>
      <div className='flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map(project => (
          <article
            key={project._id}
            className='flex w-[500px] shrink-0 cursor-pointer snap-center snap-always flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-90 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]'>
              <h4 className='text-3xl font-light underline decoration-[#F7AB0A]'>{project.title}</h4>
              <div className='flex flex-col items-center justify-center'>
                 <a href={project.projectLink} target='_blank'>
                   <button className="projectButton">View Project</button>
                 </a>
              </div>
              <p className='py-5 text-gray-300 lg:text-lg'>
              {(moment(project.dateStarted, 'YYYY-MM-DD')).format('MMM YYYY')} - {(moment(project.dateEnded, 'YYYY-MM-DD')).format('MMM YYYY')}
              </p>
              <>
               {project.description.map((item, index) => (
                  <p className='text-center text-sm md:text-base xl:text-lg' key={index}>
                   {item}
                 </p>
               ))}
              </>
          </article>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
