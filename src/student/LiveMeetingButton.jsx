import React from "react";

export default function LiveMeetingButton() {
  const handleLiveMeeting = () => {
    alert("Live meeting feature will be integrated soon!");
  };

  return (
    <div className="flex-1 bg-gray-50 p-4 rounded-xl border shadow flex flex-col justify-between">
      <div>
        <p className="mb-2 font-medium">Want a live explanation?</p>
        <button
          onClick={handleLiveMeeting}
          className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
        >
          Get Answer in Live Meeting
        </button>
      </div>
    </div>
  );
}
