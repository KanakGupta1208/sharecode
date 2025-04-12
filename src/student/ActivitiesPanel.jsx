import React from "react";

export default function ActivitiesPanel() {
  const activities = [
    "Daily Practice Set",
    "Mock Quiz",
    "Interview Readiness Score",
    "Recently Solved",
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Other Activities</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {activities.map((activity, idx) => (
          <li
            key={idx}
            className="bg-blue-50 p-3 rounded-xl border hover:bg-blue-100 cursor-pointer"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}
