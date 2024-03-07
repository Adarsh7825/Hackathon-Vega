import React, { useState } from 'react';

const EnhancedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-4">
            <div>
              <a href="#" className="flex items-center text-white hover:text-blue-300">
                <svg className="h-8 w-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="font-bold text-xl">Campus Placement</span>
              </a>
            </div>
          </div>
          {/* Primary Navigation */}
          <div className="hidden md:flex items-center space-x-4">
          <a href="/home" className="block py-2 px-4 text-sm hover:bg-blue-700">Home</a>
        <a href="/dashboard" className="block py-2 px-4 text-sm hover:bg-blue-700">Company Portal</a>
        <a href="/pm" className="block py-2 px-4 text-sm hover:bg-blue-700">Preparation Materials</a>
        <a href="/calender" className="block py-2 px-4 text-sm hover:bg-blue-700">Placement Calender</a>
        <a href="/profile" className="block py-2 px-4 text-sm hover:bg-blue-700">My Profile</a>
            <a href="/query" className="block py-2 px-4 text-sm hover:bg-blue-700">Query Forum</a>
            <button href="/match"className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Match
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
      <a href="/home" className="block py-2 px-4 text-sm hover:bg-blue-700">Home</a>
        <a href="/dashboard" className="block py-2 px-4 text-sm hover:bg-blue-700">Company Portal</a>
        <a href="/pm" className="block py-2 px-4 text-sm hover:bg-blue-700">Preparation Materials</a>
        <a href="/calender" className="block py-2 px-4 text-sm hover:bg-blue-700">Placement Calender</a>
        <a href="/profile" className="block py-2 px-4 text-sm hover:bg-blue-700">My Profile</a>
            <a href="/query" className="block py-2 px-4 text-sm hover:bg-blue-700">Query Forum</a>
      </div>
    </nav>
  );
};

export default EnhancedNavbar;