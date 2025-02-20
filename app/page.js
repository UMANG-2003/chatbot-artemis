"use client";
import React, { useRef, useState } from "react";
import Chatbot from "./components/Chatbot";
import Interface from "./components/Interface";
import Section1 from "./components/Section1";
import FianalNav from "./components/FianalNav";
import BottomNav from "./components/BottomNav";

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
            className="w-10 fixed right-5 max-md:bottom-20 bottom-6 cursor-pointer rounded-full border-2 border-white bg-purple-950 z-30 p-1"
            src="/chatbot logo.png"
            onClick={openChatbot}
            alt=""
          />
          <div className="bot-interface hide">
            <Chatbot></Chatbot>
          </div>
        </div>

     <BottomNav></BottomNav>
      </div>
    </>
  );
}
