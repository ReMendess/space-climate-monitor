import { useState } from "react";

export default function AIChat() {

  const [question, setQuestion] = useState("");

  const [response, setResponse] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const mockResponses = [
    "Based on the latest satellite data, global CO₂ levels have increased by approximately 2.3 ppm over the past year. This trend aligns with seasonal patterns observed in recent decades, though the rate of increase remains a concern for long-term climate stability.",
    "Climate models for the next decade project a 1.2 to 1.8 °C rise in average global temperatures if current emission trends continue. However, aggressive mitigation strategies could limit this increase to around 0.8 °C.",
    "Recent satellite imagery shows a 12% reduction in Arctic sea ice extent compared to the 30-year average. This decline is accelerating and could lead to ice-free summers in the Arctic within the next 20 years.",
    "Deforestation rates in the Amazon have decreased by 15% this year compared to the same period last year, according to near-real-time satellite monitoring systems. This is a positive sign, but conservation efforts must continue.",
    "Current UV index levels are elevated in your region. It is recommended to use SPF 30+ sunscreen and limit sun exposure between 10 AM and 4 PM, especially during summer months.",
    "Weather patterns indicate a 40% probability of above-average precipitation in the southeastern region over the next two weeks, which may lead to localized flooding in low-lying areas.",
    "The ocean temperature in the equatorial Pacific has risen 0.5 °C above the seasonal average, suggesting a potential El Niño event developing over the next 3 to 6 months.",
    "Air quality index (AQI) in major urban areas has improved by 8% year-over-year, attributed to stricter emission regulations and increased adoption of renewable energy sources."
  ];

  const generateMockResponse = (userQuestion) => {
    const lowerQuestion = userQuestion.toLowerCase();

    if (lowerQuestion.includes("co2") || lowerQuestion.includes("carbon") || lowerQuestion.includes("emissão")) {
      return mockResponses[0];
    }
    if (lowerQuestion.includes("temperatura") || lowerQuestion.includes("global") || lowerQuestion.includes("aquecimento")) {
      return mockResponses[1];
    }
    if (lowerQuestion.includes("ártico") || lowerQuestion.includes("gelo") || lowerQuestion.includes("calota")) {
      return mockResponses[2];
    }
    if (lowerQuestion.includes("desmatamento") || lowerQuestion.includes("amazônia") || lowerQuestion.includes("floresta")) {
      return mockResponses[3];
    }
    if (lowerQuestion.includes("uv") || lowerQuestion.includes("sol") || lowerQuestion.includes("protetor")) {
      return mockResponses[4];
    }
    if (lowerQuestion.includes("chuva") || lowerQuestion.includes("precipitação") || lowerQuestion.includes("enchente") || lowerQuestion.includes("inundação")) {
      return mockResponses[5];
    }
    if (lowerQuestion.includes("el niño") || lowerQuestion.includes("oceano") || lowerQuestion.includes("pacifico")) {
      return mockResponses[6];
    }
    if (lowerQuestion.includes("qualidade do ar") || lowerQuestion.includes("poluição") || lowerQuestion.includes("aqi")) {
      return mockResponses[7];
    }

    const genericResponses = [
      "Thank you for your question about climate and the environment. Our AI assistant is analyzing the satellite data and climate models to provide you with accurate information. Please try asking about specific topics such as CO₂ levels, temperature trends, deforestation, air quality, or weather patterns.",
      "That's an interesting topic! Our database covers a wide range of climate and environmental data. Could you be more specific? You can ask about carbon emissions, global temperature, polar ice caps, ocean conditions, or air quality indices.",
      "I understand your curiosity about our planet's climate. The satellite monitoring system tracks various environmental indicators. Try asking something like 'What are the current CO₂ levels?' or 'How is the Amazon rainforest doing?'"
    ];

    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  };

  const simulateDelay = () =>
    new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000));

  const handleAsk = async () => {

    if (!question.trim()) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      await simulateDelay();

      const simulatedResponse = generateMockResponse(question);
      setResponse(simulatedResponse);

    } catch (error) {

      console.error(error);
      setError(
        "An unexpected error occurred. Please try again."
      );

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
        disabled={loading || !question.trim()}
        className="bg-cyan-500 text-black px-4 py-2 rounded-xl mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Processing..." : "Ask AI"}
      </button>

      {loading && (
        <p className="text-cyan-400 mt-4">
          Generating response...
        </p>
      )}

      {error && (
        <div className="mt-6 bg-red-900/30 border border-red-500/40 p-4 rounded-xl">

          <p className="text-red-300 text-sm">
            {error}
          </p>

        </div>
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
