import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import { useAuthStore } from './store/useAuthStore.js';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/useThemeStore.js';

export default function App() {
  const {authUser,checkAuth,isCheckingAuth,onlineUsers}=useAuthStore();
  const {theme}=useThemeStore();
  console.log(onlineUsers);
  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  console.log({authUser});

  if(isCheckingAuth&&!authUser)return(
    <div className='flex item-center justify-center h-screen'>
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );

  return (
    <div data-theme='theme'>
      <Navbar/>
      <Routes>
        <Route path="/" element={authUser?<HomePage />:<Navigate to="/login"/>}/>
        <Route path="/signup" element={!authUser?<SignUpPage />:<Navigate to="/"/>}/>
        <Route path="/login" element={!authUser?<LoginPage />:<Navigate to="/"/>}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="/profile" element={authUser?<ProfilePage />:<Navigate to="/login"/>}/>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
};