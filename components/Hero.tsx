'use client'

import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

const Hero = () => {
  const [text] = useTypewriter(
    {
      words: ['x', 'y', 'z'],
      loop: true,
      delaySpeed: 2000
    }
  )
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles/>
      <Image
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        src={'https://avatars.githubusercontent.com/u/24933586?v=4'}
        alt={'Profile Photo'}
        height={128}
        width={128}
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          Software Engineer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A"/>
        </h1>
        <div className="pt-5">
          <a href='#about'>
            <button className="heroButton">About</button>
          </a>
          <a href='#experience'>
            <button className="heroButton">Experience</button>
          </a>
          <a href='#skills'>
            <button className="heroButton">Skills</button>
          </a>
          <a href='#projects'>
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
