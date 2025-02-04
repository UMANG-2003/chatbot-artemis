"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import Chatbot from "./components/Chatbot";


export default function Home() {
  const sidebarRef = useRef(null);
  const [icon, setIcon] = useState(faBars);
  const [isExpanded, setIsExpanded] = useState(false);

  const Sidebarbtn = () => {
    if (sidebarRef.current) {
      setIsExpanded((prev) => !prev);
      setIcon(isExpanded ? faBars : faXmark);
     
      if (!isExpanded) {
        gsap.to(sidebarRef.current, {
          width: "250px",
          duration: 0.1,
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
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
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
    }
  };



  return (
    <>
      <Navbar Sidebarbtn={Sidebarbtn} icon={icon} />
      <Sidebar ref={sidebarRef} />
      <Chatbot></Chatbot>
    </>
  );
}
