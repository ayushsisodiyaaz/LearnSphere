import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

const API_KEY = `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`;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: newMessages,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + API_KEY  ,
          },
        }
      );

      const botReply = response.data.choices[0].message;
      setMessages([...newMessages, botReply]);
    } catch (error) {
      console.error("OpenAI API error:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>Chat with Our AI Bot!</h2>
      <div style={{ border: "1px solid #ccc", height: 300, overflowY: "auto", padding: 10 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
          </div>
        ))}
        {loading && <div><em>Bot is typing...</em></div>}
      </div>
      <div style={{ marginTop: 10 }}>
         <TextField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask something..."
          style={{ width: "80%", padding: 8 }}
        />
         
        <button onClick={handleSend} style={{ padding: 8, marginLeft: 10 }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
