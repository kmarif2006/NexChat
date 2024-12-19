import React from 'react';

const NoChatSelected = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="bg-base-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          No Chat Selected
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Please select a chat from the list on the left to begin.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
