import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 transition duration-300 hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="text-3xl text-indigo-500 mr-3">{icon}</div>
        <h3 className="text-xl text-white font-semibold ">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

function Interface() {
  const cardsData = [
    {
      title: "Fast & Reliable",
      description:
        "Experience lightning-fast performance and unwavering reliability.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "User-Friendly",
      description: "Intuitive interface designed for seamless user experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Secure & Private",
      description:
        "Your data is safe with our robust security measures and privacy policy.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4v-6a12 12 0 1124 0 12 12 0 01-24 0z"
          />
        </svg>
      ),
    },

    {
      title: "Secure & Private",
      description:
        "Your data is safe with our robust security measures and privacy policy.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4v-6a12 12 0 1124 0 12 12 0 01-24 0z"
          />
        </svg>
      ),
    },
  ];

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const letters = textRef1.current.innerText.split("");
    textRef1.current.innerHTML = "";
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.display = "inline-block";
      textRef1.current.appendChild(span);
    });

    gsap.fromTo(
      textRef1.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    gsap.to(textRef1.current, {
      y: 10,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.fromTo(
      textRef3.current,
      { opacity: 0, scale: 0.5, rotate: -10 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 1,
      }
    );

    gsap.fromTo(
      textRef2.current,
      { opacity: 0, scale: 0.5, rotate: -10 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 1,
      }
    );

    gsap.to(imgRef.current, {
      y: -2,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "myBounce-squash",
    });

  
  }, []);

  return (
    <>
      <div className="relative">
        <video
          src="/vid.mp4"
          loop
          muted
          autoPlay
          className="md:w-[full] md:h-fit"
        ></video>
        <div className="absolute top-0 w-full">
          <p
            ref={textRef1}
            className="text-[250px] text-center font-bold font-sans max-md:text-[70px]"
          >
            ARTEMIS
          </p>
          <p
            ref={textRef2}
            className="text-[50px] font-bold text-center font-sans max-md:text-[20px]"
          >
            CHATBOT
          </p>
          <div ref={textRef3} className="my-14 flex justify-center max-md:my-2">
            <Link href={"/UserSection"}>
            <button
              type="button"
              className="flex items-center max-md:ml-2 gap-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-full max-md:py-1.5 max-md:px-3 "
              >
              <img
                ref={imgRef}
                src="/chatbot logo.png"
                className="w-8 max-md:w-6 rounded-full"
                alt=""
                />
              <p className="font-bold">ARTEMIS</p>
            </button>
                </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-8  max-md:mt-6">
        <div className="flex flex-wrap -mx-4 justify-center gap-10 max-md:w-[90vw] max-md:mx-auto">
          {cardsData.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Interface;
