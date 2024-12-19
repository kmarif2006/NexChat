import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';




export default function SignUpPage() {
  const[showPassword,setShowPassword]=useState(false);
  const [formData,setFormData]=useState({
    fullName:"",
    email:"",
    password:"",
  });
  const{signup,isSigningUp}=useAuthStore();

  const validateForm=()=>{
    if(!formData.fullName.trim())return toast.error("Full name is required");
    if(!formData.email.trim())return toast.error("Email field is required");
    if(!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if(!formData.password)return toast.error("Password is required");
    if(formData.password.length<6)return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const success=validateForm();
    if(success===true)signup(formData);
  }

  return (
  <div className="min-h-screen grid place-items-center">
    <div className="flex flex-col justify-center items-center p-6 sm:p-12 w-full max-w-md space-y-8">
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Input */}
        <label className="input input-bordered flex items-center gap-2" aria-label="Full Name">
          <span aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="grow"
            aria-label="Full Name"
          />
        </label>

        {/* Email Input */}
        <label className="input input-bordered flex items-center gap-2" aria-label="Email">
          <span aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793l7 3.5 7-3.5V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M1 6.954l7 3.5 7-3.5V11.5A1.5 1.5 0 0 1 13.5 13h-11A1.5 1.5 0 0 1 1 11.5V6.954Z" />
            </svg>
          </span>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="grow"
            aria-label="Email"
          />
        </label>

        {/* Password Input */}
        <label className="input input-bordered flex items-center gap-2" aria-label="Password">
          <span aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M8 1a4 4 0 0 0-4 4v2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a4 4 0 0 0-4-4Zm2 6V5a2 2 0 1 0-4 0v2h4Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="grow"
            aria-label="Password"
          />
          {/* Toggle Password Visibility */}
          <span
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isSigningUp}
        >
          {isSigningUp ? 'Signing Up...' : 'Sign Up'}
        </button>

        {/* Sign-in Link */}
        <div className="text-center">
          <p className="text-base-content/60">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  </div>
);

};
