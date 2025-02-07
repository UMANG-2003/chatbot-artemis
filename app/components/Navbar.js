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
          <a href="https://github.com/UMANG-2003" className='shadow-inner shadow-purple-900 flex gap-1 items-center text-white bg-white dark:bg-white dark:border-white border-2 border-white p-1 rounded-full'>  
          <img className='rounded-full w-7 h-5' src="/github.png" alt="profile" />
          </a>
        </div>
    </nav>
  )
}

export default Navbar