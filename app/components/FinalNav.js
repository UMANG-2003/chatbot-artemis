"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React, { useRef, useState } from "react";
import gsap from "gsap";

function FinalNav() {
  const sidebarRef = useRef(null);
  const [icon, setIcon] = useState(faBars);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const imgBotToggle = useRef(null);

  const toggleSidebar = () => {
    if (!sidebarRef.current) return;

    setIsSidebarOpen((prev) => !prev);
    setIcon(!isSidebarOpen ? faXmark : faBars);

    if (!isSidebarOpen) {
      gsap.to(sidebarRef.current, {
        width: "250px",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to("#sidebarContent", {
        autoAlpha: 1,
        x: 0,
        duration: 0.5,
        delay: 0.2,
      });

      gsap.fromTo(
        "#sidebarContent li",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    } else {
      gsap.to("#sidebarContent", { autoAlpha: 0, x: -50, duration: 0.3 });
      gsap.to(sidebarRef.current, {
        width: "0px",
        duration: 0.2,
        ease: "power2.inOut",
      });
    }
  };

  const toggleChatbot = () => {
    const chatbot = document.querySelector(".bot-interface");
    if (chatbot) chatbot.classList.toggle("hide");

    setIsChatbotOpen((prev) => !prev);
    if (imgBotToggle.current) {
      imgBotToggle.current.src = isChatbotOpen
        ? "/chatbot logo.png"
        : "/close.png";
    }
  };

  return (
    <>
      <Navbar Sidebarbtn={toggleSidebar} icon={icon} />
      <Sidebar ref={sidebarRef} />
    </>
  );
}

export default FinalNav;
