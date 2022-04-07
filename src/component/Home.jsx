import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Home.scss'

export default function 
() {
  return (
    <div className=''>
      <div className='flex p-4 pl-24'>
        <div className='rounded-lg bg-gray-900 mt-12'>
          <img src="/public/vectors/img.png" alt="" className='h-5/6'/>
        </div>
        <div className='text-white w-2/5 ml-36 mt-48'>
          <h2 className='text-5xl'>Hi, I'm <span className='text-green-400'>Abdulazeez Ahmad.</span>A Frontend Engineer.</h2>
          <p className='mt-8'>I'm a Frontend Software Engineer with 2+ years of experience designing, developing, and managing apps and internal frameworks. Specializes in ReactJS and responsive design. An enthusiastic team player and deep creative thinker. I'm a technical content writer, and also a technical recruiter.</p>
          <button type='download' className='p-2 mt-8 border-2 animate-pulse hover:animate-none hover:bg-green-600'>CV/Resume <FontAwesomeIcon icon={faDownload} className='ml-6'></FontAwesomeIcon></button>
        </div>
      </div>
    </div>
  )
}
