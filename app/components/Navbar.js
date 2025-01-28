import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <nav className='bg-gray-800 w-full h-16 flex items-center justify-between'>
        <img className='h-10 m-2' src="/chatbot logo.png" alt="" />
        <div className='text-white'>
            <FontAwesomeIcon icon={faBars} /></div>        
    </nav>
  )
}

export default Navbar