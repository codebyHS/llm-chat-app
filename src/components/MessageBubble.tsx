import React from "react";

interface MessageBubbleProps {
  role: "user" | "assistant";
  text: string;
}

export default function MessageBubble({ role, text }: MessageBubbleProps) {
  return (
    <div className={`message-row message-row--${role}`}>
      <div className={`message-bubble message-bubble--${role}`}>{text}</div>
    </div>
  );
}
