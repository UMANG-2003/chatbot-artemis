const API_KEY = "AIzaSyBykSwt8P2_9alflooTTlWth2w2OjE2MiE";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

async function testGeminiAPI() {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: "Say hello in one word" }],
        },
      ],
    }),
  });

  const data = await res.json();
 console.log(data.candidates[0].content.parts[0].text);

}

testGeminiAPI();import dotenv from 'dotenv';
test.js