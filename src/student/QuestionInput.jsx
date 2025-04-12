import React from "react";

export default function QuestionInput({ question, setQuestion }) {
  return (
    <div>
      <label className="block text-lg font-semibold mb-2">Enter your question:</label>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows="4"
        placeholder="Type your question here..."
        className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
