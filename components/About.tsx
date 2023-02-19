import { urlFor } from '@/lib/sanity'
import { type Profile } from '@/typings'
import motion from '../libraries/motion'
import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
  profile?: Profile
}

const About = ({ profile }: Props) => {
  const profileImageUrl = (profile?.profileImage) == null ? '' : urlFor(profile?.heroImage).url()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">About</h3>
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={profileImageUrl}
        className='xs:h-32 xs:w-32 -mb-20 h-24 w-24 shrink-0 rounded-full object-cover sm:h-56 sm:w-56 md:mb-0 md:max-h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]'
      />
      <div className='space-y-5 px-0 sm:space-y-10 md:px-10'>
        <h4 className='text-xl font-semibold sm:text-4xl'>
          Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
        </h4>
        <>
          {profile?.backgroundInfo.map((item, index) => (
              <p className='text-sm sm:text-base' key={index}>
              {item}
            </p>
          ))}
        </>
      </div>
    </motion.div>
  )
}

export default About
