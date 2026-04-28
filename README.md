# AI Chat App

A local AI chat application built with React and TypeScript, powered by [Ollama](https://ollama.com). Chat with a large language model entirely on your machine — no API key, no internet connection, no cost.

---

## What It Does

- Real-time chat interface with user and assistant message bubbles
- Animated loading indicator while the model is thinking
- Full conversation history sent with each message for context-aware replies
- Error handling if Ollama is unreachable
- Keyboard shortcut — press **Enter** to send

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript |
| Styling | Plain CSS |
| AI Backend | Ollama (llama3.2, runs locally) |

---

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # App title bar
│   ├── ChatWindow.tsx       # Scrollable message list
│   ├── MessageBubble.tsx    # User / assistant chat bubbles
│   ├── LoadingIndicator.tsx # Animated dots while waiting
│   └── InputBar.tsx         # Text input + Send button
├── lib/
│   └── llm.ts               # Ollama API call
├── App.tsx                  # Root component + state
└── App.css                  # Global styles
```

---

## Prerequisites

- [Node.js](https://nodejs.org) v16+
- [Ollama](https://ollama.com) installed on your machine

---

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/codebyHS/llm-chat-app.git
cd llm-chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install and start Ollama

Download Ollama from [ollama.com](https://ollama.com), then pull the model:

```bash
ollama pull llama3.2
```

Ollama runs automatically in the background after installation. To start it manually:

```bash
OLLAMA_ORIGINS="http://localhost:3000" ollama serve
```

> The `OLLAMA_ORIGINS` flag allows the React dev server to communicate with Ollama.

### 4. Start the React app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How It Works

1. User types a message and hits **Send** or **Enter**
2. The full conversation history is sent to the local Ollama API at `http://localhost:11434/api/generate`
3. Ollama runs `llama3.2` locally and returns a response
4. The response appears in the chat as an assistant message

To swap in a different model, change the model name in `src/lib/llm.ts`:

```ts
body: JSON.stringify({ model: "llama3.2", prompt, stream: false }),
```

Any model available via `ollama list` can be used.
