import { faEnvelopeOpen, faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { faAddressCard, faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Navbar.scss'


const Navbar = () => {
  return (
    <div className='grid gap-5 right-6 top-40 fixed'>

      <span className='p-4 bg-gray-800 rounded-full hover:bg-green-500'><a href="#"><FontAwesomeIcon icon={faHome} className='text-2xl text-gray-400 hover:text-w'></FontAwesomeIcon></a></span><p className='text-white text font-bold'>Home</p>
      
      <span className='p-4 bg-gray-800 rounded-full hover:bg-green-500'><a href="#"><FontAwesomeIcon icon={faAddressCard} className='text-2xl text-gray-400 '></FontAwesomeIcon></a></span>
      
      <span className='p-4 bg-gray-800 rounded-full hover:bg-green-500'><a href="#"><FontAwesomeIcon icon={faBriefcase} className='text-2xl text-gray-400 '></FontAwesomeIcon></a></span>
      
      <span className='p-4 bg-gray-800 rounded-full hover:bg-green-500'><a href="#"><FontAwesomeIcon icon={faNewspaper} className='text-2xl text-gray-400 '></FontAwesomeIcon></a></span>
      
      <span className='p-4 bg-gray-800 rounded-full hover:bg-green-500'><a href="#"><FontAwesomeIcon icon={faEnvelopeOpen} className='text-2xl text-gray-400 '></FontAwesomeIcon></a></span>
      
    </div>
  )
}

export default Navbar