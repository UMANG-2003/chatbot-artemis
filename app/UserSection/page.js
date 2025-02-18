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
        <div className="overflow-y-auto max-h-screen overflow-x-hidden chatbot-container h-[80vh]">
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

        <div className="user fixed bottom-0 w-full p-2">
          <form
            className="flex p-2 justify-between border-2 rounded-full  bg-gray-800"
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
    </>
  );
}

export default dynamic(() => Promise.resolve(page), { ssr: false });
