import { SocialIcon } from 'react-social-icons'
import motion from '../app/libraries/motion'
import { type Social } from '@/typings'
import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
  socials?: Social[]
}

const Header = ({ socials = [] }: Props) => {
  return (
    <header className='sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center'>
      <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row items-center'>
        {socials.map((social: Social) => (
          <SocialIcon key={social._id} url={social.link} fgColor='gray' bgColor='transparent' target="_blank"/>
        ))}
      </motion.div>
      <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex cursor-pointer flex-row items-center text-gray-300'>
          <SocialIcon url='#contact' network='email' fgColor='gray' bgColor='transparent'/>
          <a href="#contact">
            <p className='hidden text-sm uppercase text-gray-400 md:inline-flex'>Get In Touch</p>
          </a>
      </motion.div>
    </header>
  )
}

export default Header
