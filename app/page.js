"use client";
import React, { useRef, useState } from "react";
import Chatbot from "./components/Chatbot";
import Interface from "./components/Interface";
import Section1 from "./components/Section1";
import FianalNav from "./components/FianalNav";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const imgBotToggle = useRef(null);
  const openChatbot = () => {
    const chatbot = document.querySelector(".bot-interface");
    chatbot.classList.toggle("hide");
    setIsOpen((prev) => !prev);
    if (imgBotToggle.current) {
      imgBotToggle.current.src = isOpen ? "/chatbot logo.png" : "/close.png";
    }
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <FianalNav></FianalNav>
        <Interface />
        <Section1 />
        <div>
          <img
            ref={imgBotToggle}
            className="w-10 fixed right-5 bottom-20 cursor-pointer rounded-full border-2 border-white bg-purple-950 z-30 p-1"
            src="/chatbot logo.png"
            onClick={openChatbot}
            alt=""
          />
          <div className="bot-interface hide">
            <Chatbot></Chatbot>
          </div>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 z-20 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium shadow-2xl shadow-black">
            {[
              {
                name: "Home",
                icon: "M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z",
              },
              {
                name: "Wallet",
                icon: "M11.074 4L8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z",
              },
              {
                name: "Settings",
                icon: "M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2",
              },
              {
                name: "Profile",
                icon: "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z",
              },
            ].map((item, index) => (
              <button
                key={index}
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
