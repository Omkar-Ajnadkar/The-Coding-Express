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
import Hackathons from './Hackathons'

interface Props {
  data: Data
}

const Main = ({ data }: Props) => {
  return (
    <div className='snap-mandatory'>
      <Header socials={data?.socials}/>
      <section id="hero" className="snap-start snap-always">
        <Hero profile={data?.profile}/>
      </section>
      <section id='about' className="snap-center snap-always">
        <About profile={data?.profile}/>
      </section>
      <section id='experience' className='snap-center snap-always'>
        <WorkExperience experiences={data?.experiences}/>
      </section>
      <section id='skills' className='snap-center snap-always'>
        <Skills skills={data?.skills}/>
      </section>
      <section id='publications' className='snap-center snap-always'>
        <Publications publications={data?.publications}/>
      </section>
      <section id='hackathons' className='snap-center snap-always'>
        <Hackathons hackathons={data?.hackathons}/>
      </section>
      <section id='educations' className='snap-center snap-always'>
        <Educations educations={data?.educations}/>
      </section>
      <section id='projects' className='snap-center snap-always'>
        <Projects projects={data?.projects}/>
      </section>
      <section id="contact" className='snap-center snap-always'>
        <ContactMe profile={data?.profile}/>
      </section>
      <Footer/>
    </div>
  )
}

export default Main
