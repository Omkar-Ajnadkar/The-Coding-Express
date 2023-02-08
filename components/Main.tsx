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
import Educations from './Education'
import Publications from './Publications'

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
      <section id='publications' className='snap-center'>
        <Publications publications={data?.publications}/>
      </section>
      <section id='educations' className='snap-center'>
        <Educations educations={data?.educations}/>
      </section>
      <section id='projects' className='snap-center'>
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
