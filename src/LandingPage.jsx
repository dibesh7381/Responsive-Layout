import React from 'react';
import Navbar from './Navbar'; // Keep Navbar import if you're rendering it here
import ImageSlider from './ImageSlider';

const LandingPage = () => {
  return (
    <>
      <Navbar/> {/* Keep Navbar here if it's intentionally rendered within LandingPage */}

      <div className="min-h-[calc(100vh-68px)] bg-gray-50 flex items-center justify-center p-4">
        {/*
          This is the main content box.
          KEY CHANGE HERE: `w-full` for mobile, `md:w-[90%]` for desktop.
          This will make the entire white box (and thus the image within it) take full width on mobile.
        */}
        <div className="w-full md:w-[90%] mx-auto bg-white rounded-lg shadow-xl p-12
                        flex flex-col md:flex-row items-center justify-between gap-12 py-20 md:py-16">

          {/* Text Content Section (appears second on mobile, first on desktop) */}
          <div className="flex-1 text-center md:text-left animate-fade-in-right order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Unlock Your Potential with <span className="text-indigo-600">Our Solution</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Discover innovative tools and resources designed to streamline your workflow and boost productivity. Get started today!
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300">
              Start Now
            </button>
          </div>

          {/* Image Section (appears first on mobile, second on desktop) */}
          {/* This section's `w-full` will now correctly take 100% of the `w-full` parent on mobile. */}
          <div className="w-full flex justify-center items-center animate-fade-in-left order-1 md:order-2 md:flex-1">
            <div className="w-full rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src="https://www.carpro.com/hs-fs/hubfs/2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg?width=1020&name=2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg" // Your actual image path
                alt="Illustrative marketing image"
                className="w-full h-auto min-h-48 md:min-h-0 object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      <ImageSlider/>
    </>
  );
};

export default LandingPage;