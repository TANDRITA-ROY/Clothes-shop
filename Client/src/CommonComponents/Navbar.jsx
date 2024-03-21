import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-screen-xl flex justify-between mx-auto p-4">
        <div className="flex items-center space-x-3">
          <div className="w-full md:hidden">
            <button
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleNavbar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <a href="#" className="text-lg font-semibold">WearUs</a>
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-lg font-semibold">Men</a>
            <a href="#" className="text-lg font-semibold">Women</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="py-2 px-4 text-lg font-semibold">Contact Us</a>
          </div>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center bg-gray-800 text-white w-full">
            <a href="#" className="py-2 px-4 text-lg font-semibold">Men</a>
            <a href="#" className="py-2 px-4 text-lg font-semibold">Women</a>
            <a href="#" className="py-2 px-4 text-lg font-semibold">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
