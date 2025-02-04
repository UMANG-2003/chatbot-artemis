import {
  faChevronDown,
  faCircle,
  faFile,
  faSmile,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useEffect } from "react";
import React from "react";
import dynamic from "next/dynamic";

function Chatbot() {
  useEffect(() => {
    gsap.fromTo(
      "#dot1",
      { y: 0, opacity: 0 },
      { y: -3, opacity: 1, duration: 1, delay: 0.5, repeat: -1, yoyo: true }
    );
    gsap.fromTo(
      "#dot2",
      { y: 0, opacity: 0 },
      { y: -3, opacity: 1, duration: 1, delay: 1, repeat: -1, yoyo: true }
    );
    gsap.fromTo(
      "#dot3",
      { y: 0, opacity: 0 },
      { y: -3, opacity: 1, duration: 1, delay: 1.8, repeat: -1, yoyo: true }
    );
  }, []);

  useEffect(() => {
    const messageInput = document.querySelector("#message-input");
    const chatBotBody = document.querySelector(".chatbot-body");
    const handleKeyDown = (e) => {
      const message = e.target.value.trim();
      if (e.key === "Enter" && message) {
        e.preventDefault();
        handleOutgoingMessage(message);
        e.target.value = "";
      } else if (e.key === "Enter" && !message) {
        e.preventDefault();
      }
    };

    const handleOutgoingMessage = (message) => {
      const messageContent = `<div class="user-message my-1 border-2 border-gray-500 bg-slate-200 max-w-44 text-gray-700 text-xs px-2 py-1 font-semibold rounded-lg rounded-br-none">
              <div class="message-text">
                ${message}
              </div>
            </div>`;
      const outGoingMessageDiv=createMessageElement(messageContent,"flex justify-end my-2");
      chatBotBody.appendChild(outGoingMessageDiv);
    }

   const createMessageElement=(content,classes)=>{
      const messageElement=document.createElement("div");
      classes.split(" ").forEach((cls) => messageElement.classList.add(cls)); 
      messageElement.innerHTML=content;
      return messageElement;
   } 

    if (messageInput) {
      messageInput.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (messageInput) {
        messageInput.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  return (
    <>
      <div className="h-[70vh] chatbot shadow-gray-700 border-2 border-gray-600 mx-auto bg-gray-700 w-72 my-10 rounded-lg shadow-md relative">
        <div className="chatbot-header bg-indigo-700 flex justify-between p-2 rounded-t-lg sticky top-0 z-5">
          <div className="flex gap-2 items-center">
            <img className="h-7" src="/chatbot logo.png" alt="" />
            <span className="font-bold text-xs">ARTEMIS</span>
          </div>
          <span>
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          </span>
        </div>
        <div className="overflow-y-auto h-[55vh] overflow-x-hidden">
        <div className="chatbot-body p-2 w-full text-sm ">
          <div className="flex gap-2  my-2">
            <img
              className="h-5 mb-[10px] rounded-full"
              src="/chatbot logo.png"
              alt=""
            />
            <div className="bot-message float-left border-2 border-gray-500 bg-slate-200 w-44 text-gray-700 text-xs px-2 py-1 font-semibold rounded-lg">
              Hey there 👋
              <br />
              How i can help you today
            </div>
          </div>

          <div className="think flex my-2 gap-2">
            <img
              className="h-5 mb-[10px] rounded-full"
              src="/chatbot logo.png"
              alt=""
            />
            <div className="bg-slate-200  text-gray-700 w-12 h-6 border-2 border-gray-500 rounded-full rounded-bl-none flex gap-1 px-2">
              <span>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[6px]"
                  id="dot1"
                ></FontAwesomeIcon>
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[6px]"
                  id="dot2"
                ></FontAwesomeIcon>
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[6px]"
                  id="dot3"
                ></FontAwesomeIcon>
              </span>
            </div>
          </div>
        </div>
        </div>


        <div className="user mx-auto -[95%] absolute bottom-2 p-2">
          <form
            className="flex p-2 justify-between border-2 rounded-full bg-gray-800"
            id="form"
          >
            <input
              type="text"
              placeholder="ask anything....."
              className="bg-transparent w-44 rounded-full px-2 text-xs"
              id="message-input"
            ></input>
            <div className="chat-btn flex gap-1">
              <span className=" p-1 rounded-full text-xs">
                <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
              </span>
              <span className=" p-1 rounded-full text-xs">
                <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
              </span>
              <span className="border-2 px-2 py-1 border-green-300 rounded-full text-xs">
                <FontAwesomeIcon icon={faUpLong}></FontAwesomeIcon>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Chatbot), { ssr: false });
