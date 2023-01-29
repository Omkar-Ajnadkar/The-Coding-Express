import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <main className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header/>
      <section id="hero" className="snap-start">
        <Hero/>
      </section>
      <section id='about' className="snap-center">
        <About/>
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience/>
      </section>
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>
      <section id="contact" className='snap-start'>
        <ContactMe/>
      </section>
      <Footer/>
    </main>
  )
}
