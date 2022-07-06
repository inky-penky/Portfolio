import React from 'react'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button() {
  return (
       <a href="/files/Abdulazeez Ahmad.pdf" download><button type='download' className='p-2 mt-8 border-2 animate-pulse hover:animate-none hover:bg-green-600'>CV/Resume<FontAwesomeIcon icon={faDownload} className='ml-6'></FontAwesomeIcon></button></a>
  )
}

export default Button