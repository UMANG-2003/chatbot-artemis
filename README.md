📦 Gemini Chatbot with React & Next.js
This project is an interactive chatbot built with React, Next.js, and Google's Gemini (Generative AI) using the official @google/genai SDK and fetch API.

<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/3935a9ea-ac57-4624-95cc-5868dbd05f93" />


🚀 Features
____________________________________________________

🤖 Real-time responses from Gemini 1.5 Flash

💬 Dynamic message display (bot & user)

🌐 Fully responsive UI with Tailwind CSS

🔒 Environment-based API key handling

⚙️ Easily extendable and customizable
___________________________________________________


🛠️ Tech Stack
____________________
Framework: Next.js

Styling: Tailwind CSS

AI API: Google Gemini

Environment Handling: dotenv

Icons: FontAwesome


chatbot-artemis/
│
├── app/
│   ├── UserSection/
│   │   └── page.js      ← Main chatbot logic
│   └── test.js          ← API key or test script
├── public/              ← Static assets
├── .env.local           ← Environment variables
├── package.json         ← Dependencies and scripts
└── README.md            ← You're here



1. Clone the Repository
  git clone https://github.com/your-username/chatbot-artemis.git
  cd chatbot-artemis

2. Install Dependencies
   npm install

🧠 How It Works
_________________________________________
User input is captured and displayed.

The input is sent to Google Gemini API via a POST request.

Gemini generates a response.

The response is dynamically rendered inside the chat UI.

{
  "contents": [
    {
      "role": "user",
      "parts": [{ "text": "Your message here" }]
    }
  ]
}


✨ Customize
__________________________________________
You can:

Change models (e.g., gemini-pro, gemini-1.5-pro)

Modify styles in Tailwind (app/globals.css or in components)

Add more context-aware features like history, memory, etc.


📌 Notes
Ensure your .env.local is not committed to version control.

Only expose API keys with the NEXT_PUBLIC_ prefix if it's safe (Gemini Flash keys are usage-metered, not per-user authenticated).

.

🧑‍💻 Author
ARTEMIS
Feel free to connect with me or contribute!



