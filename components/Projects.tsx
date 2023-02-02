import React, { type ReactNode } from 'react'
import motion from '../app/libraries/motion'
import { type Project } from '@/typings'
import moment from 'moment'

interface Props {
  children?: ReactNode
  projects?: Project[]
}

const Projects = ({ projects = [] }: Props) => {
  projects.sort(function (a, b) {
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
      className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>Projects</h3>
      <div className='relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project: Project) => (
          <div className='flex h-screen w-screen shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44' key={project._id}>
            {/* <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg"
              width={300}
              height={300}
              alt="" /> */}
            <div className='max-w-6xl space-y-10 px-0 lg:px-10'>
              <h4 className='text-center text-4xl font-semibold'>
                <span className='underline decoration-[#F7AB0A]'>
                  {project.title}
                </span>
              </h4>
              <div className='flex flex-col items-center justify-center'>
                <a href={project.projectLink} target='_blank'>
                  <button className="projectButton">View Project</button>
                </a>
              </div>
              <p className='text-center text-xl uppercase text-gray-300'>
                {(moment(project.dateStarted, 'YYYY-MM-DD')).format('MMM YYYY')} - {(moment(project.dateEnded, 'YYYY-MM-DD')).format('MMM YYYY')}
              </p>
              <>
              {project.description.map((item, index) => (
                 <p className='text-center lg:text-2xl' key={index}>
                  {item}
                </p>
              ))}
              </>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10'/>
    </motion.div>
  )
}

export default Projects
