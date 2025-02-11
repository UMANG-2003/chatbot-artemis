import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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
        </div>
        <div></div>
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
