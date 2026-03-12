import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AskAI({ onClose }) {
  const [messages, setMessages] = useState([
    {
      bot: " 👋 ROM ROM BHAI JI ",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput("");

    // Add user message
    setMessages((prev) => [...prev, { user: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { bot: data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { bot: "⚠️ Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      className="fixed bottom-10 right-10 w-96 h-[520px] 
                 bg-white 
                 rounded-3xl 
                 shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                 border border-[#E6D5C3]
                 flex flex-col 
                 z-[999]"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center 
                      px-6 py-4 
                      rounded-t-3xl
                      bg-gradient-to-r 
                      from-[#5C3A21] 
                      to-[#3E2616]
                      text-white">
        <h3 className="font-semibold tracking-wide">
          Kundan AI 🤖
        </h3>

        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition text-lg"
        >
          ✕
        </button>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 text-sm bg-[#F8F5F1]">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                msg.user ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[75%] ${
                  msg.user
                    ? "bg-[#5C3A21] text-white rounded-br-sm"
                    : "bg-white text-[#2B1B12] border border-[#E6D5C3] rounded-bl-sm"
                }`}
              >
                {msg.user || msg.bot}
              </div>
            </motion.div>
          ))}

          {/* Typing Indicator */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="px-4 py-2 rounded-2xl bg-white text-[#2B1B12] border border-[#E6D5C3] rounded-bl-sm">
                Typing...
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={chatEndRef} />
      </div>

      {/* INPUT AREA */}
      <div className="p-4 border-t border-[#E6D5C3] bg-white rounded-b-3xl">
        <div className="flex items-center bg-[#F3EEE8] rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Ask about me..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 bg-transparent outline-none text-[#2B1B12] placeholder-[#9B8B7A]"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="ml-3 bg-[#5C3A21] hover:bg-[#7A5230] 
                       text-white px-4 py-1 rounded-full 
                       transition disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
}
