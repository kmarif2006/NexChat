import React, { useState, useEffect } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("light"); // Default theme is 'light'

  useEffect(() => {
    // Apply the selected theme to the document element
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="bg-base-100 p-6 rounded-lg shadow-xl space-y-4">
        <h1 className="text-2xl font-bold text-center">Theme Settings</h1>
        <p className="text-center text-gray-600">Choose a theme:</p>

        <div className="flex justify-center gap-4">
          {/* Radio buttons for theme selection */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={handleThemeChange}
              className="radio radio-primary"
            />
            Light
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={handleThemeChange}
              className="radio radio-secondary"
            />
            Dark
          </label>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Current theme: <span className="font-medium">{theme}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
