import React from "react";

export default function AIAnswerBox({ answer, handleGenerateAnswer }) {
  return (
    <div className="flex-1 bg-gray-50 p-4 rounded-xl border shadow">
      <button
        onClick={handleGenerateAnswer}
        className="mb-3 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
      >
        Generate Answer with AI
      </button>
      <div className="min-h-[100px] border rounded-xl p-3 bg-white text-gray-700">
        {answer || "AI-generated answer will appear here..."}
      </div>
    </div>
  );
}
