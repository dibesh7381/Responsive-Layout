import React from 'react';
import Navbar from './Navbar';

const ContactPage = () => {
  return (
    <> 
        <Navbar/>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/*
        This is the main content box for the contact page.
        - `w-full md:w-[80%] mx-auto`: Takes full width on mobile, 80% on desktop, and centers.
        - `bg-white rounded-lg shadow-xl p-8 md:p-12`: Styling for the box.
        - `flex flex-col`: Stacks elements vertically.
        - `items-center`: Centers content horizontally within the flex column.
      */}
      <div className="w-full md:w-[80%] mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col items-center text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in-down">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl animate-fade-in-up">
          Have questions or feedback? We'd love to hear from you! Fill out the form below or reach out directly.
        </p>

        {/* Contact Form */}
        <form className="w-full max-w-2xl space-y-6 mb-10 animate-fade-in">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              placeholder="Your Email Address"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-8 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Optional: Direct Contact Info and Socials */}
        <div className="text-gray-700 space-y-4 md:space-y-0 md:flex md:space-x-10 text-lg mt-8 border-t pt-8 border-gray-200 w-full max-w-2xl justify-center animate-fade-in-up">
            <p><strong>Email:</strong> contact@yourcompany.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Main St, City, Country</p>
        </div>
        {/* You can add social media icons here */}
      </div>
    </div>
    </>
    
  );
};

export default ContactPage;