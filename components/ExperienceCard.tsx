/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react'
import {motion} from 'framer-motion';

const ExperienceCard = () => {
  return (
    <article 
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y:-100,
          opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg" 
        alt="Company Logo" 
      />
      <div>
        <h4 className='text-4xl font-light'>Job Title</h4>
        <p className='font-bold text-2xl mt-1'>Company Name</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rouned-full'
            src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg" 
            alt="" 
          />
          <img
            className='h-10 w-10 rouned-full'
            src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg" 
            alt="" 
          />
          <img
            className='h-10 w-10 rouned-full'
            src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg" 
            alt="" 
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started work... - Ended
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard