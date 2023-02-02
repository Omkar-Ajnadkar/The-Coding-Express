import { type Social, type Skill, type Profile, type Experience, type Project, type Data } from '../typings'

import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'

import Main from '@/components/Main'

const fetcherNew = async () => {
  const profileQuery = groq`*[_type == "profile"][0]`
  const profile: Profile = await sanityClient.fetch(profileQuery)

  const socialsQuery = groq`*[_type == "social"]`
  const socials: Social[] = await sanityClient.fetch(socialsQuery)

  const skillsQuery = groq`*[_type == "skill"]`
  const skills: Skill[] = await sanityClient.fetch(skillsQuery)

  const projectsQuery = groq`*[_type == "project"]{...,technologies[]->}`
  const projects: Project[] = await sanityClient.fetch(projectsQuery)

  const experiencesQuery = groq`*[_type == "experience"]{...,technologies[]->}`
  const experiences: Experience[] = await sanityClient.fetch(experiencesQuery)

  const data = { profile, socials, experiences, skills, projects }

  return data
}

export default async function Home () {
  const data: Data = await fetcherNew()

  return (
    <main className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Main data={data}/>
    </main>
  )
}
