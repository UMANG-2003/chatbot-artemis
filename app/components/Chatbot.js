import { faFile, faSmile, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useEffect } from "react";
import React from "react";
import dynamic from "next/dynamic";

function Chatbot() {
  useEffect(() => {
    const messageInput = document.querySelector("#message-input");
    const chatBotBody = document.querySelector(".chatbot-body");
    const submitChatbtn = document.querySelector("#submit-chat");
    const chatbotContainer = document.querySelector(".chatbot-container");
    const dataMessage = {
      message: null,
    };

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
          "border",
          "border-indigo-400",
          "bg-white/10",
          "backdrop-blur-md",
          "max-w-[70%]",
          "text-gray-100",
          "text-sm",
          "px-4",
          "py-2",
          "font-medium",
          "rounded-2xl",
          "rounded-bl-none",
          "shadow-md",
          "shadow-indigo-500/20"
        );
        botMessageDiv.innerText = apiResponse;
        messageContainer.appendChild(botMessageDiv);
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
      } else if (e.key === "Enter") {
        e.preventDefault();
      }
    };

    const handleOutgoingMessage = (e) => {
      if (e && e.preventDefault) e.preventDefault();
      dataMessage.message = messageInput.value.trim();
      if (!dataMessage.message) return;
      messageInput.value = "";

      const messageContent = `<div class="user-message border border-green-400 bg-green-100/10 text-green-200 max-w-[70%] text-sm px-4 py-2 font-medium rounded-2xl rounded-br-none shadow-md shadow-green-500/10">
        <div class="message-text">${dataMessage.message}</div>
      </div>`;

      const outGoingMessageDiv = createMessageElement(
        messageContent,
        "flex justify-end my-3"
      );
      outGoingMessageDiv.querySelector(".message-text").textContent = dataMessage.message;
      chatBotBody.appendChild(outGoingMessageDiv);

      chatbotContainer?.scrollTo({ top: chatbotContainer.scrollHeight, behavior: "smooth" });

      setTimeout(() => {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("think", "flex", "my-3", "gap-2");

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

        chatbotContainer?.scrollTo({ top: chatbotContainer.scrollHeight, behavior: "smooth" });

        messageContainer.appendChild(img);
        messageContainer.appendChild(typingIndicator);
        chatBotBody.appendChild(messageContainer);

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

        generateBotResponse(messageContainer).then(() => {
          chatbotContainer?.scrollTo({ top: chatbotContainer.scrollHeight, behavior: "smooth" });
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
    <div className="h-[70vh] chatbot backdrop-blur-xl border border-indigo-500 bg-gradient-to-br from-[#0f172a]/80 to-[#1e293b]/80 w-80 my-4 md:my-12 rounded-3xl shadow-[0_0_20px_rgba(99,102,241,0.3)] fixed top-16 right-20 max-md:top-16 max-md:left-10 z-50 ring-1 ring-indigo-500/20">
      {/* Header */}
      <div className="chatbot-header bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-700 flex justify-between items-center px-4 py-3 rounded-t-3xl sticky top-0 z-10 shadow-inner border-b border-indigo-400">
        <div className="flex gap-3 items-center">
          <img className="h-8 w-8 rounded-full border border-white/20" src="/chatbot logo.png" alt="Logo" />
          <span className="font-bold text-sm tracking-widest text-white uppercase">Artemis AI</span>
        </div>
        <FontAwesomeIcon icon={faSmile} className="text-white text-lg hover:text-yellow-300 transition" />
      </div>

      {/* Chat Body */}
      <div className="overflow-y-auto h-[54vh] overflow-x-hidden chatbot-container px-4 py-2 text-white scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-transparent">
        <div className="chatbot-body w-full text-sm">
          <div className="flex gap-3 my-3 items-start">
            <img className="h-6 rounded-full" src="/chatbot logo.png" alt="Bot" />
            <div className="bot-message max-w-[70%] bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl rounded-bl-none text-gray-100 text-sm border border-indigo-400 shadow-md shadow-indigo-500/20">
              Hey there 👋<br />
              How can I assist your mind today?
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-3 left-0 right-0 px-4">
        <form
          className="flex items-center gap-3 p-2 border border-indigo-500 rounded-full bg-gradient-to-r from-[#1e293b] to-[#0f172a] shadow-inner shadow-indigo-500/10"
          id="form"
        >
          <input
            type="text"
            placeholder="Type your thought..."
            className="flex-grow bg-transparent text-white placeholder-gray-400 text-sm px-4 py-1 outline-none rounded-full w-[50%]"
            id="message-input"
          />
          <div className="chat-btn flex items-center gap-2">
            <FontAwesomeIcon icon={faSmile} className="text-indigo-300 hover:text-yellow-300 cursor-pointer transition text-sm" />
            <FontAwesomeIcon icon={faFile} className="text-indigo-300 hover:text-cyan-400 cursor-pointer transition text-sm" />
            <button
              type="submit"
              id="submit-chat"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition px-3 py-1 rounded-full text-xs text-green-300 shadow shadow-green-400/30"
            >
              <FontAwesomeIcon icon={faUpLong} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Chatbot), { ssr: false });
