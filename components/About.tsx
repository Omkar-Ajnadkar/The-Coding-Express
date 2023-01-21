'use client';

import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img
        initial={{opacity:0, x:-200}}
        transition={{duration:1.2}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}} 
        src="https://avatars.githubusercontent.com/u/24933586?v=4"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
        </h4>
        <p className='text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis scelerisque fermentum dui faucibus. Dignissim enim sit amet venenatis urna cursus eget. In pellentesque massa placerat duis. Sit amet cursus sit amet dictum sit. Ac felis donec et odio pellentesque. Viverra vitae congue eu consequat. Mi proin sed libero enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Porttitor rhoncus dolor purus non enim praesent elementum. Purus non enim praesent elementum facilisis leo vel fringilla. Sociis natoque penatibus et magnis dis parturient montes nascetur. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Dui ut ornare lectus sit amet est placerat in egestas. Commodo ullamcorper a lacus vestibulum sed arcu.
        </p>
      </div>
    </motion.div>
  )
}

export default About