import React, { type ReactNode } from 'react'
import { type Hackathon } from '@/typings'
import moment from 'moment'
// import { urlFor } from '@/lib/sanity'

interface Props {
  children?: ReactNode
  hackathons?: Hackathon[]
}

const Hackathons = ({ hackathons = [] }: Props) => {
  hackathons.sort(function (a, b) {
    const keyA = new Date(a.year)
    const keyB = new Date(b.year)
    if (keyA < keyB) return 1
    if (keyA > keyB) return -1
    return 0
  })

  return (
    <div
      className='container relative mx-auto flex min-h-screen max-w-[2000px] flex-col flex-wrap items-center justify-center overflow-hidden text-center'>
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">Hackathons</h3>
      <div className='columns-2 gap-0 sm:gap-3 md:gap-5'>
        {hackathons.map(hackathon => (
          <div key={hackathon._id} className='flex break-inside-avoid-column flex-col items-center justify-center border border-gray-500 p-2'>
            {/* <img
                className='h-10 w-10 cursor-pointer rounded-full grayscale hover:grayscale-0'
                src={(hackathon?.image) == null ? '' : urlFor(hackathon?.image).url()}
                alt="Hackathon Logo" /> */}
            <div>
              <h4 className='p-2 text-2xl font-light underline decoration-[#F7AB0A]'>{hackathon.title}</h4>
              <p className='text-center text-base font-semibold opacity-60 sm:text-xl'>{hackathon.organizer} <br/>
              <span className='text-sm'>({(moment(hackathon.year, 'YYYY-MM-DD')).format('YYYY')})</span></p>
            </div>
            <div className='flex flex-col items-center justify-center p-2'>
                {hackathon.description === 'Mentor'
                  ? <a href={hackathon.link} target='_blank'>
                  <button className="projectButton">Mentor</button>
                </a>
                  : <a href={hackathon.link} target='_blank'>
                   <button className="projectButton">View Project</button>
                 </a>}
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hackathons
