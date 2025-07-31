import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Navbar({ Sidebarbtn, icon }) {
  return (
    <nav className="w-full h-16 px-6 flex items-center justify-between backdrop-blur-md bg-white/5 border-b border-white/10 shadow-md z-50 font-[Poppins]">
      
      {/* Left: Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <FontAwesomeIcon
          icon={icon}
          className="h-6 cursor-pointer hover:text-purple-400 transition-colors"
          onClick={Sidebarbtn}
        />
      </div>

      {/* Center: Logo + Brand */}
      <div className="flex items-center gap-3 text-white font-semibold tracking-wide">
        <img src="/chatbot logo.png" className="h-8" alt="Logo" />
        <span className="text-white text-lg font-bold">Artemis Chatbot</span>
      </div>

      {/* Breadcrumb Navigation */}
      <nav
        className="hidden md:flex text-sm text-gray-300 items-center gap-7 mr-16"
        aria-label="Breadcrumb"
      >
        <Link
          href="/"
          className="hover:text-purple-400 transition-colors flex items-center gap-1"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 3.172l-6.586 6.586a1 1 0 001.414 1.414L10 5.414l5.172 5.172a1 1 0 001.414-1.414L10 3.172z" />
          </svg>
          Home
        </Link>
        <Link
          href="/UserSection"
          className="hover:text-purple-400 transition-colors"
        >
          Chatbot
        </Link>
        <Link
          href="/Aboutme"
          className=" hover:text-purple-400 transition-colors"
        >
          About
        </Link>
      </nav>

      {/* GitHub Button */}
      <div>
        <a
          href="https://github.com/UMANG-2003"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-purple-400 hover:bg-purple-400 transition duration-300"
        >
          <img
            src="/github.png"
            alt="GitHub"
            className="w-6 h-6 rounded-full"
          />
          <span className="hidden md:inline text-sm text-purple-100 group-hover:text-black font-medium transition">
            GitHub
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
