import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GeminiGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI('AIzaSyAp2M-PeSr8NRKEPY-Nma-ylMziWRhl3_8');

  const generate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const response = await model.generateContent(prompt);
      const output = response.response.text();

      setResult(output);
    } catch (error) {
      console.error("Error:", error);
      setResult("⚠️ Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>⚡ Gemini AI Generator</h2>
      <textarea
        rows="4"
        style={{ width: "100%", padding: "10px" }}
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <br />
      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>

      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#f4f4f4",
            borderRadius: "5px",
          }}
        >
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiGenerator;
