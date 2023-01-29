import React from 'react'

const Footer = () => {
  return (
    <a href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="https://avatars.githubusercontent.com/u/24933586?v=4" alt="Footer" />
        </div>
      </footer>
    </a>
    
  )
}

export default Footer