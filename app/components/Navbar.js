import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar({ Sidebarbtn, icon }) {
  return (
    <nav className="bg-gray-800 w-full h-16 flex items-center justify-between p-4">
      <div className="flex items-center text-white gap-3 md:hidden">
        <FontAwesomeIcon
          icon={icon}
          className="h-6 cursor-pointer"
          onClick={Sidebarbtn}
        />
      </div>
        <div className="flex gap-2 items-center">
          <img className="h-8" src="/chatbot logo.png" alt="" />
          <span className="font-extrabold text-sm max-md:text-lg">
          Artemis Chatbot
        </span>
        </div>

      <nav
        className="flex px-5 py-3 text-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 max-md:hidden mr-24"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 gap-7 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Templates
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Flowbite
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div>
        <a
          href="https://github.com/UMANG-2003"
          className="shadow-inner shadow-purple-900 flex gap-1 items-center text-white bg-white dark:bg-white dark:border-white border-2 border-white p-1 rounded-full"
        >
          <img
            className="rounded-full w-7 h-5"
            src="/github.png"
            alt="profile"
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
