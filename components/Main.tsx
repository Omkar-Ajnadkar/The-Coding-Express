'use client'

import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import { type Data } from '@/typings'

interface Props {
  data: Data
}

const Main = ({ data }: Props) => {
  return (
    <>
      <Header socials={data?.socials}/>
      <section id="hero" className="snap-start">
        <Hero profile={data?.profile}/>
      </section>
      <section id='about' className="snap-center">
        <About profile={data?.profile}/>
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={data?.experiences}/>
      </section>
      <section id='skills' className='snap-start'>
        <Skills skills={data?.skills}/>
      </section>
      <section id='projects' className='snap-start'>
        <Projects projects={data?.projects}/>
      </section>
      <section id="contact" className='snap-start'>
        <ContactMe profile={data?.profile}/>
      </section>
      <Footer/>
    </>
  )
}

export default Main
