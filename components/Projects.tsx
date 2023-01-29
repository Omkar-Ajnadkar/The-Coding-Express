'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [1, 2, 3]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>Projects</h3>
      <div className='relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project) => (
          <div className='flex h-screen w-screen shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44' key={project}>
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg"
              width={400}
              height={400}
              alt="" />
            <div className='max-w-6xl space-y-10 px-0 md:px-10'>
              <h4 className='text-center text-4xl font-semibold'>
                <span className='underline decoration-[#F7AB0A]'>
                  Project Title
                </span>
              </h4>
              <p className='text-center text-lg md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10'/>
    </motion.div>
  )
}

export default Projects
