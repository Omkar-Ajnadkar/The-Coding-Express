/* eslint-disable @typescript-eslint/restrict-template-expressions */
'use client'

import useSWR from 'swr'
import { type Social, type Skill, type Profile, type Experience, type Project } from '../typings'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'

const fetcher = async () => {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProfile`)
  let resData = await res.json()
  const profile: Profile = resData.profile

  res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
  resData = await res.json()
  const socials: Social[] = resData.socials

  res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`)
  resData = await res.json()
  const experiences: Experience[] = resData.experiences

  res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
  resData = await res.json()
  const skills: Skill[] = resData.skills

  res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
  resData = await res.json()
  const projects: Project[] = resData.projects

  const data = {
    profile,
    socials,
    experiences,
    skills,
    projects
  }
  return data
}

export default function Home () {
  const { data } = useSWR('data', fetcher)
  console.log(data)

  return (
    <main className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
    </main>
  )
}
