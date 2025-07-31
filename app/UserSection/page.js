"use client";
import FinalNav from "../components/FinalNav";
import { faFile, faSmile, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useEffect } from "react";
import React from "react";
import dynamic from "next/dynamic";
import BottomNav from "../components/BottomNav";

function page() {
  useEffect(() => {
    const messageInput = document.querySelector("#message-input");
    const chatBotBody = document.querySelector(".chatbot-body");
    const submitChatbtn = document.querySelector("#submit-chat");
    const chatbotContainer = document.querySelector(".chatbot-container");
    const dataMessage = { message: null };

    const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

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
        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);

        const apiResponse =
          data.candidates[0]?.content.parts[0]?.text?.trim() ||
          "Sorry, I couldn't understand that.";

        messageContainer.innerHTML = "";

        const botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add(
          "bot-message",
          "bg-white/10",
          "text-white",
          "border",
          "border-cyan-400",
          "text-sm",
          "px-4",
          "py-2",
          "rounded-xl",
          "rounded-bl-none",
          "backdrop-blur-md",
          "shadow-md"
        );
        botMessageDiv.innerText = apiResponse;
        messageContainer.appendChild(botMessageDiv);
      } catch (error) {
        console.error(error);
      }
    };

    const handleKeyDown = (e) => {
      const message = e.target.value.trim();
      if (e.key === "Enter" && message) {
        e.preventDefault();
        handleOutgoingMessage();
        e.target.value = "";
      } else if (e.key === "Enter" && !message) {
        e.preventDefault();
      }
    };

    const handleOutgoingMessage = (e) => {
      if (e && e.preventDefault) e.preventDefault();
      dataMessage.message = messageInput.value.trim();
      if (!dataMessage.message) return;
      messageInput.value = "";

      const messageContent = `<div class="user-message bg-white/10 border border-green-400 text-cyan-100 text-sm px-4 py-2 rounded-xl rounded-br-none backdrop-blur-md shadow-md">
        <div class="message-text">${dataMessage.message}</div>
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

        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add(
          "bg-white/10",
          "text-cyan-100",
          "w-12",
          "h-6",
          "border",
          "border-cyan-400",
          "rounded-full",
          "rounded-bl-none",
          "flex",
          "gap-1",
          "px-2",
          "items-center",
          "backdrop-blur-md",
          "shadow"
        );

        for (let i = 1; i <= 3; i++) {
          const span = document.createElement("span");
          const dot = document.createElement("i");
          dot.classList.add("fas", "fa-circle", "text-[6px]");
          dot.id = `dot${i}`;
          span.appendChild(dot);
          typingIndicator.appendChild(span);
        }

        messageContainer.appendChild(img);
        messageContainer.appendChild(typingIndicator);
        chatBotBody.appendChild(messageContainer);

        setTimeout(() => {
          for (let i = 1; i <= 3; i++) {
            gsap.fromTo(
              `#dot${i}`,
              { y: 0, opacity: 0 },
              {
                y: -3,
                opacity: 1,
                duration: 1,
                delay: i * 0.3,
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
      <FinalNav />
      <div className="h-[80vh]">
        <div className="chatbot-container max-md:h-[67vh] h-[80vh] overflow-y-auto overflow-x-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-xl mx-4 mt-6 p-3 transition-all duration-300">
          <div className="chatbot-body p-2 w-full text-sm space-y-3">
            <div className="flex items-start gap-3 my-2">
              <img
                className="h-6 rounded-full border border-cyan-400"
                src="/chatbot logo.png"
                alt="bot"
              />
              <div className="bot-message bg-white/10 border border-cyan-400 text-cyan-100 text-sm px-4 py-2 font-medium rounded-xl rounded-bl-none shadow-md backdrop-blur-lg max-w-[70%]">
                Hey there 👋
                <br />
                How can I help you today?
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-4 max-md:bottom-20 w-full px-4 z-20">
          <form
            className="flex items-center gap-3 p-3 bg-white/10 border border-white/10 backdrop-blur-md rounded-full shadow-md transition duration-300"
            id="form"
          >
            <input
              type="text"
              placeholder="Type something futuristic..."
              className="flex-grow bg-transparent outline-none text-white placeholder:text-gray-400 text-sm px-4"
              id="message-input"
            />
            <div className="chat-btn flex items-center gap-2">
              <FontAwesomeIcon icon={faSmile} className="text-cyan-300 hover:scale-110 transition-transform duration-200" />
              <FontAwesomeIcon icon={faFile} className="text-cyan-300 hover:scale-110 transition-transform duration-200" />
              <button
                type="submit"
                id="submit-chat"
                className="border border-cyan-400 text-cyan-300 px-3 py-1 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300 text-sm"
              >
                <FontAwesomeIcon icon={faUpLong} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

export default dynamic(() => Promise.resolve(page), { ssr: false });
