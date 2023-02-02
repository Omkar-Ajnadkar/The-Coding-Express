import { urlFor } from '@/lib/sanity'
import { type Profile } from '@/typings'
import motion from '../app/libraries/motion'
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
        className='-mb-20 h-56 w-56 shrink-0 rounded-full object-cover md:mb-0 md:max-h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
        </h4>
        <>
          {profile?.backgroundInfo.map((item, index) => (
              <p className='text-base' key={index}>
              {item}
            </p>
          ))}
        </>
      </div>
    </motion.div>
  )
}

export default About
