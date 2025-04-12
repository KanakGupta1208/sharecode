import React, { useState } from "react";

export default function AddFriendSection() {
  const [friend, setFriend] = useState("");

  const handleAddFriend = () => {
    if (friend.trim() !== "") {
      alert(`Friend request sent to ${friend}`);
      setFriend("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Add a Friend</h2>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter friend's username or email"
          value={friend}
          onChange={(e) => setFriend(e.target.value)}
          className="flex-grow border rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddFriend}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          Add Friend
        </button>
      </div>
    </div>
  );
}
