import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import{Link} from 'react-router-dom';

export default function Navbar() {
  const {logout,authUser}=useAuthStore();
 return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        {/* Navbar Title */}
        <button className="btn btn-ghost text-xl">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
            NexChat
          </Link>
        </button>

        {/* Spacer to push the profile picture to the end */}
        <div className="flex-1"></div>

        {/* Profile Picture Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src={authUser?.profilePic || "https://via.placeholder.com/150"} // Default placeholder if no profile pic
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-lg z-[1] mt-3 w-60 p-3 shadow-lg"
          >
            {/* Settings Item */}
            <li className="group my-2 rounded-lg">
              <Link to="/settings">
                <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform group-hover:opacity-80 cursor-pointer">
                  Settings
                </div>
              </Link>
            </li>

            {/* Conditionally render Profile and Logout Items */}
            {authUser && (
              <>
                {/* Profile Item */}
                <li className="group my-2 rounded-lg">
                  <Link to="/profile">
                    <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform group-hover:opacity-80 cursor-pointer">
                      Profile
                    </div>
                  </Link>
                </li>

                {/* Logout Item */}
                <li className="group my-2 rounded-lg">
                  <div
                    onClick={logout}
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform group-hover:opacity-80 cursor-pointer"
                  >
                    Logout
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
