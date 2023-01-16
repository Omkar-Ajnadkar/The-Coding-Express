'use client';

import { SocialIcon } from 'react-social-icons'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div initial={{x: -500, opacity: 0, scale: 0.5}} animate={{x: 0, opacity: 1, scale: 1}} transition={{duration: 1.5}} className='flex flex-row items-center'>
        <SocialIcon url=''fgColor='gray' bgColor='transparent'/>
        <SocialIcon url=''fgColor='gray' bgColor='transparent'/>
        <SocialIcon url=''fgColor='gray' bgColor='transparent'/>
        <SocialIcon url=''fgColor='gray' bgColor='transparent'/>
      </motion.div>
      <motion.div initial={{x: 500, opacity: 0, scale: 0.5}} animate={{x: 0, opacity: 1, scale: 1}} transition={{duration: 1.5}} className='flex flex-row items-center cursor-pointer text-gray-300'>
        <SocialIcon network='email' fgColor='gray' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
      </motion.div>
    </header>
  )
}

export default Header