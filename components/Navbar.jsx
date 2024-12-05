// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
      <div className="navbar-start">
        {/* Logo / Brand Name */}
        <a className="btn btn-ghost normal-case text-3xl font-bold hover:text-gray-200 transition-all duration-300 ease-in-out">
          MyBrand
        </a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        {/* Desktop Navigation Links */}
        <ul className="menu menu-horizontal p-0 space-x-8">
          <li><a href="/" className="text-lg hover:bg-blue-700 px-4 py-2 rounded-md transition-all duration-200 ease-in-out hover:scale-105">Home</a></li>
          <li><a href="/about" className="text-lg hover:bg-blue-700 px-4 py-2 rounded-md transition-all duration-200 ease-in-out hover:scale-105">About</a></li>
          <li><a href="/services" className="text-lg hover:bg-blue-700 px-4 py-2 rounded-md transition-all duration-200 ease-in-out hover:scale-105">Services</a></li>
          <li><a href="/contact" className="text-lg hover:bg-blue-700 px-4 py-2 rounded-md transition-all duration-200 ease-in-out hover:scale-105">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 rounded-box w-52 transition-all duration-200 ease-in-out">
            <li><a href="/" className="text-white py-2 hover:bg-blue-700 transition-all duration-200 ease-in-out">Home</a></li>
            <li><a href="/about" className="text-white py-2 hover:bg-blue-700 transition-all duration-200 ease-in-out">About</a></li>
            <li><a href="/services" className="text-white py-2 hover:bg-blue-700 transition-all duration-200 ease-in-out">Services</a></li>
            <li><a href="/contact" className="text-white py-2 hover:bg-blue-700 transition-all duration-200 ease-in-out">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
