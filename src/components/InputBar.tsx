import React from "react";

interface InputBarProps {
  input: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function InputBar({ input, loading, onChange, onSend }: InputBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) onSend();
  };

  return (
    <div className="input-bar">
      <input
        className="input-bar__field"
        type="text"
        placeholder="Type a message..."
        value={input}
        disabled={loading}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="input-bar__button"
        onClick={onSend}
        disabled={loading || input.trim() === ""}
      >
        Send
      </button>
    </div>
  );
}
