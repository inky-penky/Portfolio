import React from 'react'
import './Home.scss'
import Button from './Button'

export default function Home() {
  return (
    <div className=''>
      <div className='flex p-4 pl-24'>
        <div className='rounded-lg bg-gray-900 mt-12'>
          <img src="/vectors/img.png" alt="" className='h-5/6'/>
        </div>

        <div className='text-white w-5/12 ml-36 mt-48'>
          <h2 className='text-5xl'>Hi, I'm <span className='text-green-400'>Abdulazeez Ahmad.</span><br></br>A Frontend Engineer.</h2>
          <p className='mt-8'>I'm a Frontend Software Engineer with 2+ years of experience designing, developing, and managing apps and internal frameworks. Specializes in ReactJS and responsive design. An enthusiastic team player and a deep creative thinker. I'm a technical content writer, and also a technical recruiter.</p>
          <Button />
        </div>
      </div>
    </div>
  )
}
