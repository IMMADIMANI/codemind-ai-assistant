import { useState } from "react";
import {
  Bot,
  Code2,
  FileText,
  GitBranch,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Sparkles,
  Upload,
} from "lucide-react";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://codemind-ai-assistant.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error(error);
      setResponse(
        "Unable to connect to CodeMind AI service. Make sure the FastAPI server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <div className="flex h-screen">

        {/* SIDEBAR */}
        <aside className="hidden w-64 flex-col border-r border-white/10 bg-[#0d111c] p-4 md:flex">

          {/* Logo */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              <Bot size={22} />
            </div>

            <div>
              <h1 className="font-semibold">CodeMind</h1>
              <p className="text-xs text-gray-500">
                AI Developer Assistant
              </p>
            </div>
          </div>

          {/* New Chat */}
          <button
            onClick={() => {
              setMessage("");
              setResponse("");
            }}
            className="mb-6 flex w-full items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-500"
          >
            <Plus size={18} />
            New Chat
          </button>

          {/* Recent Chats */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Recent Chats
          </p>

          <div className="space-y-1">

            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-white/5">
              <MessageSquare size={16} />
              React API
            </button>

            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-white/5">
              <Code2 size={16} />
              Authentication
            </button>

            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-white/5">
              <FileText size={16} />
              RAG System
            </button>

          </div>

          {/* Settings */}
          <div className="mt-auto">
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-400 transition hover:bg-white/5">
              <Settings size={17} />
              Settings
            </button>
          </div>

        </aside>

        {/* MAIN */}
        <main className="flex flex-1 flex-col">

          {/* HEADER */}
          <header className="flex h-16 items-center justify-between border-b border-white/10 px-6">

            <div>
              <h2 className="font-semibold">
                AI Developer Workspace
              </h2>

              <p className="text-xs text-gray-500">
                Build smarter. Code faster.
              </p>
            </div>

            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                AI Online
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-sm font-semibold">
                M
              </div>

            </div>

          </header>

          {/* CONTENT */}
          <section className="flex flex-1 flex-col items-center overflow-y-auto px-6 py-12">

            <div className="w-full max-w-4xl">

              {/* HERO */}
              <div className="mb-10 text-center">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400">
                  <Sparkles size={30} />
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                  Welcome to CodeMind
                </h1>

                <p className="mx-auto mt-3 max-w-xl text-gray-400">
                  Your AI-powered developer assistant for coding,
                  debugging, documentation, and intelligent project analysis.
                </p>

              </div>

              {/* FEATURES */}
              <div className="mb-10 grid gap-4 md:grid-cols-3">

                <FeatureCard
                  icon={<MessageSquare size={20} />}
                  title="AI Chat"
                  description="Ask coding questions and get intelligent answers."
                />

                <FeatureCard
                  icon={<Code2 size={20} />}
                  title="Code Analysis"
                  description="Analyze, debug, refactor, and improve your code."
                />

                <FeatureCard
                  icon={<Search size={20} />}
                  title="RAG Search"
                  description="Search your documents and codebase with AI."
                />

              </div>

              {/* RESPONSE */}
              {response && (
                <div className="mb-4 rounded-2xl border border-blue-500/20 bg-[#111827] p-5 shadow-lg">

                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-400">
                    <Bot size={18} />
                    CodeMind
                  </div>

                  <p className="text-sm leading-6 text-gray-300">
                    {response}
                  </p>

                </div>
              )}

              {/* CHAT BOX */}
              <div className="rounded-2xl border border-white/10 bg-[#111827] p-4 shadow-2xl">

                <div className="flex items-end gap-3">

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    placeholder="Ask CodeMind anything..."
                    className="min-h-[90px] flex-1 resize-none bg-transparent p-2 text-sm text-white outline-none placeholder:text-gray-600"
                  />

                  <button
                    onClick={sendMessage}
                    disabled={loading || !message.trim()}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Sparkles size={19} />
                  </button>

                </div>

                {/* TOOLS */}
                <div className="mt-3 flex flex-wrap gap-2">

                  <button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 transition hover:bg-white/5">
                    <Upload size={14} />
                    Upload
                  </button>

                  <button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 transition hover:bg-white/5">
                    <Code2 size={14} />
                    Analyze Code
                  </button>

                  <button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 transition hover:bg-white/5">
                    <GitBranch size={14} />
                    Repository
                  </button>

                </div>

                {loading && (
                  <div className="mt-3 text-xs text-blue-400">
                    CodeMind is thinking...
                  </div>
                )}

              </div>

              {/* FOOTER */}
              <p className="mt-6 text-center text-xs text-gray-600">
                CodeMind AI • RAG • Code Analysis • AI Agents
              </p>

            </div>

          </section>

        </main>

      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827] p-5 transition hover:border-blue-500/30 hover:bg-[#151d2d]">

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <h3 className="mb-1 font-semibold">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-500">
        {description}
      </p>

    </div>
  );
}

export default App;