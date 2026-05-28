import { useState } from "react";

import { api } from "../services/api";

export default function AIChat() {

  const [question, setQuestion] = useState("");

  const [response, setResponse] = useState("");

  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {

    setLoading(true);

    try {

      const result = await api.post(
        "/ai/chat",
        {
          question
        }
      );

      setResponse(
        result.data.response
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-slate-800">

      <h1 className="text-2xl text-white mb-4">
        AI Climate Assistant
      </h1>

      <textarea
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
        placeholder="Ask something..."
        className="w-full bg-[#0B1026] text-white p-4 rounded-xl"
        rows={4}
      />

      <button
        onClick={handleAsk}
        className="bg-cyan-500 text-black px-4 py-2 rounded-xl mt-4"
      >
        Ask AI
      </button>

      {loading && (
        <p className="text-cyan-400 mt-4">
          Generating response...
        </p>
      )}

      {response && (
        <div className="mt-6 bg-[#0B1026] p-4 rounded-xl">

          <p className="text-white whitespace-pre-line">
            {response}
          </p>

        </div>
      )}

    </div>
  );
}