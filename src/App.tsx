import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import InputBar from "./components/InputBar";
import { sendMessage } from "./lib/llm";

interface Message {
  role: "user" | "assistant";
  text: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const updated: Message[] = [...messages, { role: "user", text: trimmed }];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendMessage(updated);
      setMessages([...updated, { role: "assistant", text: reply }]);
    } catch (err) {
      const msg = err instanceof Error && err.message.includes("fetch")
        ? "Could not reach Ollama. Make sure it is running: `ollama serve`"
        : "Something went wrong. Please try again.";
      setMessages([...updated, { role: "assistant", text: msg }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <ChatWindow messages={messages} loading={loading} />
      <InputBar
        input={input}
        loading={loading}
        onChange={setInput}
        onSend={handleSend}
      />
    </div>
  );
}

export default App;
