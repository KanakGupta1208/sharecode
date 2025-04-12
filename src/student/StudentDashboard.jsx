import React, { useState } from "react";
import QuestionInput from "./QuestionInput";
import AIAnswerBox from "./AIAnswerBox";
import LiveMeetingButton from "./LiveMeetingButton";
import AddFriendSection from "./AddFriendSection";
import ActivitiesPanel from "./ActivitiesPanel";

export default function StudentDashboard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleGenerateAnswer = () => {
    // Simulated AI logic (replace with real AI API call)
    if (question.trim()) {
      setAnswer(`This is an AI-generated answer for: "${question}"`);
    } else {
      setAnswer("Please enter a question first.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">🎓 Student Dashboard</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <QuestionInput question={question} setQuestion={setQuestion} />
        <div className="flex flex-col md:flex-row gap-4">
          <AIAnswerBox answer={answer} handleGenerateAnswer={handleGenerateAnswer} />
          <LiveMeetingButton />
        </div>
      </div>

      <AddFriendSection />
      <ActivitiesPanel />
    </div>
  );
}
