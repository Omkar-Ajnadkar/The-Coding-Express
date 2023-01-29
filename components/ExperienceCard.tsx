'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ExperienceCard = () => {
  return (
    <article
      className='flex w-[500px] shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='h-32 w-32 rounded-full object-cover object-center md:rounded-full xl:h-[200px] xl:w-[200px]'
        src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg"
        alt="Company Logo"
      />
      <div>
        <h4 className='text-4xl font-light'>Job Title</h4>
        <p className='mt-1 text-2xl font-bold'>Company Name</p>
        <div className='my-2 flex space-x-2'>
          <img
            className='h-10 w-10 rounded-full'
            src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg"
            alt=""
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg"
            alt=""
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg"
            alt=""
          />
        </div>
        <p className='py-5 uppercase text-gray-300'>
          Started work... - Ended
        </p>
        <ul className='ml-5 list-disc space-y-4 text-lg'>
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
