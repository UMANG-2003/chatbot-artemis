import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section1() {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.innerText.split("");
    textRef.current.innerHTML = letters
      .map(
        (letter, index) =>
          `<span class="inline-block opacity-0">${letter}</span>`
      )
      .join("");

    const letterSpans = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letterSpans,
      {
        x: (index) => (index % 2 === 0 ? -50 : 50),
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: (index) => index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.from(sectionRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(imgRef.current, {
      y: -10,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "myBounce-squash",
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="botbg max-w-[92%] mx-auto h-full p-6 rounded-lg my-10"
    >
      <div className="flex flex-col justify-center items-center">
        <img
          ref={imgRef}
          src="/chatbot logo.png"
          className="w-14 rounded-full shadow-xl shadow-gray-950"
          alt="Chatbot Logo"
        />
        <div ref={textRef} className="font-bold text-2xl py-3">
          ARTEMIS
        </div>
        <div className="flex justify-center w-full p-4">
          <video
            className="rounded-xl h-full shadow-2xl shadow-black"
            src="/vid1.mp4"
            loop
            muted
            autoPlay
          ></video>
        </div>
        <div className=" bg-black rounded-xl">
          <p
            className=" text-center p-4 text-purple-200 my-2"
            style={{ letterSpacing: "1px" }}
          >
            Artemis is an intelligent AI-powered chatbot designed to provide
            quick, accurate, and interactive responses to users. Whether you
            need help with general inquiries, technical support, or casual
            conversations, Artemis is here to assist you 24/7. It is built using
            advanced machine learning and natural language processing (NLP) to
            understand and respond to user queries efficiently.
          </p>
          <span className="flex gap-4 justify-between w-[80%] mx-auto py-3 md:w-[20%]">
            {["Try Now", "Explore"].map((item, index) => (
              <button
                key={index}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  {item}
                </span>
              </button>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section1;
