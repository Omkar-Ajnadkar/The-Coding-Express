'use client';

import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flexx-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img
        initial={{opacity:0, x:-200}}
        transition={{duration:1.2}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}} 
        src="https://avatars.githubusercontent.com/u/24933586?v=4"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
    </div>
  )
}

export default About