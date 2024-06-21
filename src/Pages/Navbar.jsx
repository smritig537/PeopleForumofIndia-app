import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-2 mx-auto">
        <Link to="/" className="text-2xl font-bold text-indigo-600">People Forum Of India</Link>
        <div>
         <img src=''/>
          <Link to="/" className="mx-2 text-gray-200">Home</Link>
          <Link to="/about" className="mx-2 text-gray-200">About</Link>
          <Link to="/Events" className="mx-2 text-gray-200">Events</Link>
          <Link to="/contact" className="mx-2 text-gray-200">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
