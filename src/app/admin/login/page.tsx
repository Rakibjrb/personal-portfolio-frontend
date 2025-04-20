"use client";

import React, { useState } from "react";
import { Lock } from "lucide-react";
import { signIn } from "next-auth/react";

const AdminLoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginResponse = await signIn("credentials", { email, password });
    if (loginResponse?.error) {
      return console.log("Login Failed");
    }

    console.log("admin login successfull");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md text-gray-800"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-4 rounded-full">
            <Lock className="text-color-secondery" size={32} />
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-8">Admin Login</h2>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#52dde2] focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#52dde2] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#52dde2] text-black font-semibold py-2 rounded-xl hover:bg-[#7ccfd3] hover:cursor-pointer transition duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
