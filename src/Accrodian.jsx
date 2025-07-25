// src/components/Accordion.js

import React, { useState } from 'react';
import Navbar from './Navbar';

const Accordion = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleItemClick = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const accordionData = [
    {
      title: 'What is your refund policy?',
      content: 'Our refund policy states that you can request a full refund within 30 days of purchase if you are not satisfied with our service. Please contact our support team for more details.'
    },
    {
      title: 'How do I contact support?',
      content: 'You can contact our support team via email at support@example.com or by calling us at +1-234-567-8900 during business hours (Monday-Friday, 9 AM to 5 PM EST).'
    },
    {
      title: 'Do you offer a free trial?',
      content: 'Yes, we offer a 14-day free trial for all new users. No credit card is required to sign up for the trial. You can explore all features during this period.'
    },
    {
      title: 'Can I upgrade or downgrade my plan?',
      content: 'Absolutely! You can easily upgrade or downgrade your plan at any time from your account settings. Changes will be prorated automatically.'
    },
    {
      title: 'Is my data secure?',
      content: 'We take data security very seriously. All your data is encrypted both in transit and at rest. We also comply with industry-standard security protocols and regulations.'
    },
    {
      title: 'What payment methods do you accept?',
      content: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) and PayPal for all our services. Bank transfers are available for annual enterprise plans.'
    }
  ];

  return (
    <>
      <Navbar/>
      {/*
        Here's the change:
        - `w-[90%] mx-auto`: Sets the width to 90% and centers it.
        - `max-w-none`: Removes any maximum width constraints so it can truly be 90% of a very large parent.
        - The shadow and rounded corners are applied to the individual items now, not this container.
      */}
      <div className="w-[90%] mx-auto max-w-none bg-gray-50 mt-8">
        {accordionData.map((item, index) => {
          const isOpen = openIndices.includes(index);

          return (
            <div
              key={index}
              className={`mb-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-white
                          ${isOpen ? 'shadow-xl' : ''}`} // Add deeper shadow when open for 3D effect
            >
              <button
                className="flex justify-between items-center w-full py-3 px-4 sm:py-4 sm:px-6 text-left font-semibold
                           text-base sm:text-lg text-gray-800 focus:outline-none rounded-lg" // Removed bg-white/hover:bg-gray-50 from button as it's now on the parent div
                onClick={() => handleItemClick(index)}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <div className="relative w-5 h-5 flex items-center justify-center transition-transform duration-300">
                  <span className={`absolute h-0.5 w-4 bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}></span>
                  <span className={`absolute h-0.5 w-4 bg-gray-800 bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'rotate-90'}`}></span>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${
                  isOpen ? 'max-h-[500px] opacity-100 pt-2 pb-4 sm:pt-3 sm:pb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 text-sm sm:text-base text-gray-700">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Accordion;