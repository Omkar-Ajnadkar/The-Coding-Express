'use client';

import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'


const Hero = () => {
  const [text] = useTypewriter(
    {
      words: ["x", "y", "z"],
      loop: true,
      delaySpeed: 2000
    }
  )
  return (
    <div className="h-screen flex flex-col space-y-8 iterms-center justify-center text-center overflow-hidden">
      <BackgroundCircles/>
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover" 
        src={"https://avatars.githubusercontent.com/u/24933586?v=4"} 
        alt={"Profile Photo"}
        height={128}
        width={128} 
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A"/>
        </h1>
        <div className="pt-5">
          <Link href='#about'>
            <button className="heroButton">About</button>
          </Link>
          <Link href={'#experience'}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={'#projects'}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero