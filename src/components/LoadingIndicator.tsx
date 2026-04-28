import React from "react";

export default function LoadingIndicator() {
  return (
    <div className="message-row message-row--assistant">
      <div className="message-bubble message-bubble--assistant loading-indicator">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </div>
  );
}
