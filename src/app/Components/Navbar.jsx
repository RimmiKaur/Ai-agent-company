"use client";
import React, { useState } from "react";

export default function Navbar({ isMenuOpen, toggleMenu }) {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-3 bg-white shadow-md fixed top-0 left-0 z-10">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {!isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="text-purple-600 focus:outline-none"
          >
            <img src="/images/hamburger.svg" alt="Menu" className="w-5 h-5" />
          </button>
        )}
        <div className="text-lg font-medium text-gray-800">Overview</div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="hidden border px-2 rounded-lg lg:flex items-center">
          <img
            src="/images/search.png"
            alt="Search"
            className="w-5 h-5 text-purple-600 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/sun.svg"
            alt="Theme"
            className="w-5 h-5 text-purple-600 cursor-pointer"
          />
          <img
            src="/images/bell.svg"
            alt="Notifications"
            className="w-5 h-5 text-purple-600 cursor-pointer"
          />

          {/* Profile */}
          <div className="relative flex items-center space-x-2 cursor-pointer">
            <img
              src="/images/profile.svg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <img
              src="/images/downarrow.png"
              alt="Dropdown"
              className="w-4 h-4 text-gray-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
