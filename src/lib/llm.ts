interface Message {
  role: "user" | "assistant";
  text: string;
}

export async function sendMessage(messages: Message[]): Promise<string> {
  const prompt = messages
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.text}`)
    .join("\n") + "\nAssistant:";

  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "llama3.2", prompt, stream: false }),
  });

  if (!res.ok) {
    throw new Error(`Ollama error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.response;
}
