"use client";
import FianalNav from "../components/FianalNav";
import { faFile, faSmile, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useEffect } from "react";
import React from "react";
import dynamic from "next/dynamic";

function page() {
  useEffect(() => {
    const messageInput = document.querySelector("#message-input");
    const chatBotBody = document.querySelector(".chatbot-body");
    const submitChatbtn = document.querySelector("#submit-chat");
    const chatbotContainer = document.querySelector(".chatbot-container");
    const dataMessage = {
      message: null,
    };

    const API_KEY = "AIzaSyDZNehi_jPx7HK5ZT9WjoYZnPqFUx79w1Y";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const generateBotResponse = async (messageContainer) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: dataMessage.message }],
            },
          ],
        }),
      };
      try {
        const response = await fetch(API_URL, requestOptions);
        {
          const data = await response.json();
          if (!response.ok) throw new Error(data.error.message);
          const apiResponse =
            data.candidates[0]?.content.parts[0]?.text?.trim() ||
            "Sorry, I couldn't understand that.";
          messageContainer.innerHTML = "";

          const botMessageDiv = document.createElement("div");
          botMessageDiv.classList.add(
            "bot-message",
            "border-2",
            "border-gray-500",
            "bg-slate-200",
            "max-w-44",
            "text-gray-700",
            "text-xs",
            "px-2",
            "py-1",
            "font-semibold",
            "rounded-lg",
            "rounded-bl-none"
          );
          botMessageDiv.innerText = apiResponse;
          messageContainer.appendChild(botMessageDiv);
        }
      } catch (error) {
        console.log(error);
      }
    };

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

    const handleOutgoingMessage = (e) => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }
      dataMessage.message = messageInput.value.trim();
      if (!dataMessage.message) return;
      messageInput.value = "";

      const messageContent = `<div class="user-message my-1 border-2 border-gray-500 bg-slate-200 max-w-44 text-gray-700 text-xs px-2 py-1 font-semibold rounded-lg rounded-br-none">
      <div class="message-text">
      ${dataMessage.message}
      </div>
      </div>`;
      const outGoingMessageDiv = createMessageElement(
        messageContent,
        "flex justify-end my-2"
      );
      outGoingMessageDiv.querySelector(".message-text").textContent =
        dataMessage.message;
      chatBotBody.appendChild(outGoingMessageDiv);
      if (chatbotContainer) {
        setTimeout(() => {
          chatbotContainer.scrollTo({
            top: chatbotContainer.scrollHeight,
            behavior: "smooth",
          });
        }, 100);
      }

      setTimeout(() => {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("think", "flex", "my-2", "gap-2");

        const img = document.createElement("img");
        img.width = 20;
        img.classList.add("h-5", "mb-[10px]", "rounded-full");
        img.src = "/chatbot logo.png";
        img.alt = "";

        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add(
          "bg-slate-200",
          "text-gray-700",
          "w-12",
          "h-6",
          "border-2",
          "border-gray-500",
          "rounded-full",
          "rounded-bl-none",
          "flex",
          "gap-1",
          "px-2"
        );

        for (let i = 1; i <= 3; i++) {
          const span = document.createElement("span");
          const dot = document.createElement("i");
          dot.classList.add("fas", "fa-circle", "text-[6px]");
          dot.id = `dot${i}`;
          span.appendChild(dot);
          typingIndicator.appendChild(span);
        }
        setTimeout(() => {
          chatbotContainer.scrollTo({
            top: chatbotContainer.scrollHeight,
            behavior: "smooth",
          });
        }, 0);

        messageContainer.appendChild(img);
        messageContainer.appendChild(typingIndicator);

        chatBotBody.appendChild(messageContainer);

        setTimeout(() => {
          const animationDelays = [0.5, 1, 1.5];

          for (let i = 1; i <= 3; i++) {
            gsap.fromTo(
              `#dot${i}`,
              { y: 0, opacity: 0 },
              {
                y: -3,
                opacity: 1,
                duration: 1,
                delay: animationDelays[i - 1],
                repeat: -1,
                yoyo: true,
              }
            );
          }
        }, 0);

        generateBotResponse(messageContainer).then(() => {
          setTimeout(() => {
            chatbotContainer.scrollTo({
              top: chatbotContainer.scrollHeight,
              behavior: "smooth",
            });
          }, 100);
        });
      }, 700);
    };

    const createMessageElement = (content, classes) => {
      const messageElement = document.createElement("div");
      classes.split(" ").forEach((cls) => messageElement.classList.add(cls));
      messageElement.innerHTML = content;
      return messageElement;
    };

    if (messageInput) {
      messageInput.addEventListener("keydown", handleKeyDown);
      submitChatbtn.addEventListener("click", handleOutgoingMessage);
    }

    return () => {
      if (messageInput) {
        messageInput.removeEventListener("keydown", handleKeyDown);
        submitChatbtn.removeEventListener("click", handleOutgoingMessage);
      }
    };
  }, []);
  return (
    <>
      <FianalNav></FianalNav>
      <div className="h-[80vh]">
        <div className="overflow-y-auto max-h-screen overflow-x-hidden chatbot-container h-[67vh]">
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
          </div>
        </div>

        <div className="user fixed bottom-20 w-full p-2">
          <form
            className="flex p-2 justify-between border-2 rounded-full bg-gray-800"
            id="form"
          >
            <input
              type="text"
              placeholder="ask anything....."
              className="bg-transparent w-full rounded-full px-2 text-xs text-white"
              id="message-input"
            ></input>
            <div className="chat-btn flex gap-1">
              <span className=" p-1 rounded-full text-xs">
                <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
              </span>
              <span className=" p-1 rounded-full text-xs">
                <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
              </span>
              <button
                type="submit"
                id="submit-chat"
                className="border-2 px-2 py-1 border-green-300 rounded-full text-xs"
              >
                <FontAwesomeIcon icon={faUpLong}></FontAwesomeIcon>
              </button>
            </div>
          </form>
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
    </>
  );
}

export default dynamic(() => Promise.resolve(page), { ssr: false });
