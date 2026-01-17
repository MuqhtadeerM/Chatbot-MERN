import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import api from "../api/api";
import "../styles/chat.css";

export default function Chat() {
  const { projectId } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I help you today?" },
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setMessages((p) => [...p, { role: "user", content: message }]);
    setLoading(true);

    const res = await api.post(`/chat/${projectId}`, { message });

    setMessages((p) => [...p, { role: "assistant", content: res.data.reply }]);
    setLoading(false);
    setMessage("");
  };

  return (
    <div className="chatgpt-container">
      <div className="chatgpt-header">AI Assistant</div>

      <div className="chatgpt-messages">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`chatgpt-message ${
              m.role === "user" ? "chatgpt-user" : "chatgpt-assistant"
            }`}
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="chatgpt-message chatgpt-assistant">Typing...</div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="chatgpt-input-area">
        <div className="chatgpt-input-wrapper">
          <input
            className="chatgpt-input"
            placeholder="Send a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="chatgpt-send"
            onClick={sendMessage}
            disabled={!message.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
