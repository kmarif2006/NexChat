import React from 'react';

const SidebarSkeleton = () => {
  return (
    <div className="flex flex-col bg-base-200 p-4 w-64 space-y-6 animate-pulse">
      {/* Skeleton for Profile */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col space-y-2">
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
          <div className="w-20 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Skeleton for Chat Rooms List */}
      <div className="space-y-3">
        <div className="w-full h-6 bg-gray-300 rounded"></div>
        <div className="w-full h-6 bg-gray-300 rounded"></div>
        <div className="w-full h-6 bg-gray-300 rounded"></div>
        <div className="w-full h-6 bg-gray-300 rounded"></div>
      </div>

      {/* Skeleton for Settings/Other Links */}
      <div className="space-y-3 mt-4">
        <div className="w-24 h-6 bg-gray-300 rounded"></div>
        <div className="w-24 h-6 bg-gray-300 rounded"></div>
        <div className="w-24 h-6 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
