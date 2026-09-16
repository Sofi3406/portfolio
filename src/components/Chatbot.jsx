import { useState } from "react";
import { FaCommentDots, FaPaperPlane, FaTimes } from "react-icons/fa";
import { personalInfo, projects, skills } from "../data";

const quickPrompts = ["About Me", "Skills", "Projects", "Experience", "Education", "Contact"];

const getReply = (message) => {
  const prompt = message.toLowerCase();

  if (prompt.includes("project") || prompt.includes("work")) {
    return `Sofiya has built ${projects.length} featured projects, including ${projects[0].title} and ${projects[1].title}. You can explore them in the Projects section.`;
  }
  if (prompt.includes("experience")) {
    return `Sofiya has worked with Brolftech, Codveda Technology, Kuraz Tech, and Syntecxhub across frontend and full-stack development roles.`;
  }
  if (prompt.includes("education") || prompt.includes("degree")) {
    return "Sofiya graduated in Computer Science from Addis Ababa University (2022–2026). She also completed the Qiyas Intelligent Data & AI Engineering program and the ALX Ethiopia Data Analysis Program in 2026.";
  }
  if (prompt.includes("about") || prompt.includes("who")) {
    return personalInfo.summary;
  }
  if (prompt.includes("contact") || prompt.includes("email") || prompt.includes("hire")) {
    return `The best way to reach Sofiya is by email at ${personalInfo.email}. She is also based in ${personalInfo.location}.`;
  }
  if (prompt.includes("skill") || prompt.includes("tech") || prompt.includes("do")) {
    return `Sofiya is a full-stack developer working with React, Node.js, Express, AI, Data Analysis, ${skills.databases.join(", ")}, and more.`;
  }
  return `I can tell you about Sofiya's work, skills, projects, or contact details. What would you like to know?`;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("Offline");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Sofiya's Portfolio Assistant. Ask me about her skills, projects, experience, or education." },
  ]);

  const sendMessage = (text = message) => {
    const trimmedMessage = text.trim();
    if (!trimmedMessage) return;
    setMessages((currentMessages) => [
      ...currentMessages,
      { from: "user", text: trimmedMessage },
      { from: "bot", text: getReply(trimmedMessage) },
    ]);
    setMessage("");
  };

  return (
    <div className="chatbot fixed bottom-5 right-5 z-[60]">
      {isOpen && (
        <div className="chatbot-panel mb-3 flex w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-white">SofiAI Assistant</p>
              <p className="mt-1 text-xs text-slate-400">Portfolio questions, answered simply</p>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="text-slate-400 transition hover:text-white" aria-label="Close chatbot">
              <FaTimes />
            </button>
          </div>
          <div className="flex items-center gap-2 px-4 pb-3">
            {["Offline", "GPT"].map((option) => <button key={option} type="button" onClick={() => setMode(option)} className={`rounded-full px-3 py-1 text-xs font-semibold ${mode === option ? "bg-cyan-400 text-slate-950" : "border border-slate-700 text-slate-400"}`}>{option}{option === "GPT" && " (soon)"}</button>)}
          </div>
          <div className="flex max-h-72 flex-col gap-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((chatMessage, index) => (
              <p key={`${chatMessage.from}-${index}`} className={`max-w-[88%] rounded-xl px-3 py-2 text-sm leading-relaxed ${chatMessage.from === "user" ? "self-end bg-cyan-400 text-slate-950" : "bg-slate-800 text-slate-200"}`}>
                {chatMessage.text}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 px-4 pb-3">
            {quickPrompts.map((prompt) => (
              <button key={prompt} type="button" onClick={() => sendMessage(prompt)} className="rounded-full border border-slate-700 px-3 py-1.5 text-left text-xs text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300">
                {prompt}
              </button>
            ))}
          </div>
          <form onSubmit={(event) => { event.preventDefault(); sendMessage(); }} className="flex gap-2 border-t border-slate-800 p-3">
            <input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask a question..." aria-label="Ask the portfolio assistant" className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400" />
            <button type="submit" className="rounded-lg bg-cyan-400 px-3 text-slate-950 transition hover:bg-cyan-300" aria-label="Send message"><FaPaperPlane /></button>
          </form>
        </div>
      )}
      <button type="button" onClick={() => setIsOpen((open) => !open)} className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25 transition hover:scale-105 hover:bg-cyan-300" aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}>
        {isOpen ? <FaTimes size={20} /> : <FaCommentDots size={22} />}
      </button>
    </div>
  );
};

export default Chatbot;