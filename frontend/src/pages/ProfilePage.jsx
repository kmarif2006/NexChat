import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen pt-20 bg-base-200"> {/* DaisyUI Default Dark Background */}
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-100 rounded-xl shadow-xl p-6 space-y-8"> {/* Light Background for Card */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white-800">Profile</h1>
            <p className="mt-2 text-gray-600">Your profile information</p>
          </div>

          {/* avatar upload section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              {/* Display the uploaded image or fallback */}
              <img
                src={selectedImg || `https://ui-avatars.com/api/?name=${authUser?.fullName}&background=random&color=fff`}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full cursor-pointer transition-all duration-200 ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}`}
              >
                {/* Camera Icon */}
                <span className="text-white text-lg">📷</span>
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-white-500">{isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}</p>
          </div>

          {/* Profile Details */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-white-600 flex items-center gap-2">
                <span className="w-4 h-4 text-indigo-600">👤</span>
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border border-base-300">{authUser?.fullName}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-white-600 flex items-center gap-2">
                <span className="w-4 h-4 text-indigo-600">📧</span>
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border border-base-300">{authUser?.email}</p>
            </div>
          </div>

          {/* Account Information */}
          <div className="mt-6 bg-base-200 rounded-xl p-6">
            <h2 className="text-lg font-medium text-white-800 mb-4">Account Information</h2>
            <div className="space-y-3 text-sm text-grwhiteay-600">
              <div className="flex items-center justify-between py-2 border-b border-base-300">
                <span>Member Since</span>
                 <span>{authUser?.createdAt ? authUser.createdAt.split("T")[0] : "N/A"}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
