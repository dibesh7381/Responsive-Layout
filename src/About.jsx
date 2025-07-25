import React from 'react';
import Navbar from './Navbar';

const AboutUsPage = () => {
  return (
     <>
          <Navbar/>
          <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      {/* py-20 for vertical padding, text-center for alignment */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
        {/* container mx-auto for max-width and centering, px-4 for horizontal padding on small screens */}
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 animate-fade-in-up">
            We are dedicated to innovating and providing exceptional solutions that empower our clients to achieve their goals.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Image on left for md screens, top for small screens */}
          <div className="md:w-1/2 animate-fade-in-left">
            <img
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Our Story"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          {/* Text content on right for md screens, bottom for small screens */}
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Journey: Building Success Together
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Founded in 20XX, our company began with a simple yet powerful vision: to revolutionize the industry by
              prioritizing customer needs and fostering a culture of continuous improvement. What started as a small
              team's ambitious dream has blossomed into a thriving enterprise, driven by passion and a commitment to excellence.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Over the years, we've navigated challenges, celebrated milestones, and consistently evolved to meet the
              ever-changing demands of the market. Our success is a testament to the hard work, dedication, and
              innovative spirit of every individual in our team.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center animate-fade-in-up">
              <svg className="w-16 h-16 text-indigo-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h4c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4zM12 4a2 2 0 100 4 2 2 0 000-4z"></path>
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-base leading-relaxed">
                To deliver cutting-edge technology solutions that streamline operations, enhance user experience,
                and drive sustainable growth for businesses worldwide. We strive for excellence in every product and service.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center animate-fade-in-up md:mt-0 mt-8">
              <svg className="w-16 h-16 text-purple-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM12 14c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-base leading-relaxed">
                To be a global leader in technological innovation, recognized for our commitment to quality,
                integrity, and transformative impact on industries and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Meet Our Exceptional Team
          </h2>
          {/* Grid for team members - responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fade-in-up">
              <img
                src="https://via.placeholder.com/150/818CF8/FFFFFF?text=CEO"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-200"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
              <p className="text-indigo-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-sm text-gray-600">
                Visionary leader guiding our company towards a brighter future.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fade-in-up sm:mt-0 mt-8">
              <img
                src="https://via.placeholder.com/150/A78BFA/FFFFFF?text=CTO"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-200"
              />
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-purple-600 font-medium mb-2">Chief Technology Officer</p>
              <p className="text-sm text-gray-600">
                Drives technological innovation and product development.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fade-in-up lg:mt-0 mt-8">
              <img
                src="https://via.placeholder.com/150/6EE7B7/FFFFFF?text=CMO"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-200"
              />
              <h3 className="text-xl font-semibold mb-2">Emily White</h3>
              <p className="text-green-600 font-medium mb-2">Chief Marketing Officer</p>
              <p className="text-sm text-gray-600">
                Crafts compelling strategies to connect with our audience.
              </p>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fade-in-up lg:mt-0 mt-8">
              <img
                src="https://via.placeholder.com/150/FCA5A5/FFFFFF?text=COO"
                alt="Team Member 4"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-red-200"
              />
              <h3 className="text-xl font-semibold mb-2">David Brown</h3>
              <p className="text-red-600 font-medium mb-2">Chief Operating Officer</p>
              <p className="text-sm text-gray-600">
                Ensures smooth operations and efficient resource management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="text-center p-6 rounded-lg bg-gray-800 shadow-xl animate-fade-in-right">
              <svg className="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-semibold mb-3">Integrity</h3>
              <p className="text-base leading-relaxed opacity-90">
                Upholding the highest ethical standards in all our dealings.
              </p>
            </div>
            {/* Value 2 */}
            <div className="text-center p-6 rounded-lg bg-gray-800 shadow-xl animate-fade-in-right md:mt-0 mt-8">
              <svg className="w-16 h-16 text-yellow-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h3 className="text-2xl font-semibold mb-3">Innovation</h3>
              <p className="text-base leading-relaxed opacity-90">
                Continuously seeking new ways to create value and solve problems.
              </p>
            </div>
            {/* Value 3 */}
            <div className="text-center p-6 rounded-lg bg-gray-800 shadow-xl animate-fade-in-right lg:mt-0 mt-8">
              <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M9 20v-2m3-2v2m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 10h16M13 10h4M7 10h2"></path>
              </svg>
              <h3 className="text-2xl font-semibold mb-3">Collaboration</h3>
              <p className="text-base leading-relaxed opacity-90">
                Working together, internally and with clients, to achieve shared goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Optional) */}
      <section className="py-16 md:py-24 bg-indigo-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Contact us today to discuss how we can help your business thrive.
          </p>
          <button className="bg-white text-indigo-600 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Basic Custom Animations (add these to your global CSS, e.g., index.css or App.css) */}
      {/*
      You might need to add these keyframes to your global CSS file for the animations to work.
      Tailwind doesn't generate arbitrary keyframes by default.

      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .animate-fade-in-down {
        animation: fadeInDown 0.8s ease-out forwards;
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      .animate-fade-in-left {
        animation: fadeInLeft 0.8s ease-out forwards;
      }
      .animate-fade-in-right {
        animation: fadeInRight 0.8s ease-out forwards;
      }
      */}
    </div>
     </>
  );
};

export default AboutUsPage;