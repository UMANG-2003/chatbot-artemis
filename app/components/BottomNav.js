import Link from 'next/link'
import React from 'react'

function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 z-20 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600">
    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium pt-2 shadow-2xl shadow-black">
      {[
        {
          "name": "Home",
          "icon": "M3 9.5V20a1 1 0 0 0 1 1h6v-6h4v6h6a1 1 0 0 0 1-1V9.5L12 2 3 9.5Z",
          "src": "/"
        },
        {
          "name": "About",
          "icon": "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 3a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm0 14a7 7 0 0 1-5.6-2.8A5 5 0 0 1 12 12a5 5 0 0 1 5.6 4.2A7 7 0 0 1 12 19Z",
          "src": "/Aboutme"
        },
        {
          "name": "Settings",
          "icon": "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.2 13.4-.4 1.7a1 1 0 0 1-1 .8 8.3 8.3 0 0 1-5.6 0 1 1 0 0 1-1-.8l-.4-1.7-1.5-1.1a1 1 0 0 1-.3-1.3 8.3 8.3 0 0 1 0-5.6 1 1 0 0 1 .3-1.3l1.5-1.1.4-1.7a1 1 0 0 1 1-.8 8.3 8.3 0 0 1 5.6 0 1 1 0 0 1 1 .8l.4 1.7 1.5 1.1a1 1 0 0 1 .3 1.3 8.3 8.3 0 0 1 0 5.6 1 1 0 0 1-.3 1.3Z",
          "src": "/"
        },
        {
          "name": "Profile",
          "icon": "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4Zm0 12a7 7 0 0 1-5.6-2.8A5 5 0 0 1 12 12a5 5 0 0 1 5.6 3.2A7 7 0 0 1 12 18Z",
          "src": "/"
        }
      ].map((item, index) => (
        <Link href={item.src}  key={index}>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
          <svg
            className="w-[2.5rem] h-6 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            >
            <path d={item.icon} />
          </svg>
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            {item.name}
          </span>
        </button>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default BottomNav