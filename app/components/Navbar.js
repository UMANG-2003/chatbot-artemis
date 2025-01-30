"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Navbar({Sidebarbtn,icon}) {
  return (
    <nav className='bg-gray-800 w-full h-16 flex items-center justify-between p-4'>
        <div className='flex items-center text-white'>
            <FontAwesomeIcon icon= {icon} className='h-6 cursor-pointer' onClick={Sidebarbtn} />     
        </div>

        <div className='flex gap-2 items-center'>
        <img className='h-8' src="/chatbot logo.png" alt="" />
        <span className='font-extrabold font-mono text-xl max-md:text-lg'>Artemis Chatbot</span>
        </div>

        <div>
          <img className='rounded-full h-7 w-7' src="/" alt="profile" />
        </div>
    </nav>
  )
}

export default Navbar