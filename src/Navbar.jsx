// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Control body scroll
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scroll when menu opens
    } else {
      document.body.style.overflow = 'unset'; // Restore scroll when menu closes
    }
  };

  return (
    <nav className="bg-indigo-600 p-4 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold">Your Logo</div>

        {/* Hamburger Icon (visible on mobile, hidden on desktop) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000 24/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>

        {/* Desktop Menu (hidden on mobile, visible on desktop) */}
        <ul className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-200">Home</Link>
          <Link to="/feature" className="hover:text-indigo-200">Features</Link>
          <Link to="/about" className="hover:text-indigo-200">About</Link>
          <Link to="/contact" className="hover:text-indigo-200">Contact</Link>
        </ul>
      </div>

      {/* Mobile Menu (conditionally rendered and styled as a sidebar/drawer) */}
      {/*
          IMPORTANT CHANGES:
          - `right-0`: Positions it to the right edge.
          - `w-2/3`: Makes it take up 2/3 of the screen width. You can change to `w-1/2`, `w-3/4`, or a custom value like `w-[300px]`.
          - `translate-x-full`: Still hides it by moving it fully to the right (off-screen).
          - `isMenuOpen ? 'translate-x-0' : 'translate-x-full'`: Slides it in/out.
      */}
      <div
        className={`fixed top-0 right-0 h-full bg-indigo-700 md:hidden z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          // Apply custom width for the sidebar
          // Choose one of these:
          'w-2/3' // Takes 2/3 of the screen width
          // 'w-1/2' // Takes 1/2 of the screen width
          // 'w-[300px]' // Fixed width, e.g., 300 pixels
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-8 text-white text-2xl mt-8">
          <li><Link to="/" onClick={toggleMenu} className="hover:text-indigo-200">Home</Link></li>
          <li><Link to="/feature" onClick={toggleMenu} className="hover:text-indigo-200">Features</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="hover:text-indigo-200">About</Link></li>
           <li><Link to="/contact" onClick={toggleMenu} className="hover:text-indigo-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;




