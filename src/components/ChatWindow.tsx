import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import LoadingIndicator from "./LoadingIndicator";

interface Message {
  role: "user" | "assistant";
  text: string;
}

interface ChatWindowProps {
  messages: Message[];
  loading: boolean;
}

export default function ChatWindow({ messages, loading }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="chat-window">
      {messages.length === 0 && !loading && (
        <p className="empty-state">Ask me anything...</p>
      )}
      {messages.map((msg, i) => (
        <MessageBubble key={i} role={msg.role} text={msg.text} />
      ))}
      {loading && <LoadingIndicator />}
      <div ref={bottomRef} />
    </div>
  );
}
