import React, { useState, useEffect, useRef, useCallback } from 'react';

const images = [
  'https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/07/opener-w-Bugatti-3.webp?size=*:675',
  'https://media.architecturaldigest.com/photos/66758a12539a07cf706eefaa/2:3/w_1500,h_2250,c_limit/EMBARGO-BUGATTI-World-Premiere-Presskit-Images-26.jpg',
  'https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Revuelto/9770/1750061323804/front-left-side-47.jpg',
  'https://www.thrustzone.com/wp-content/uploads/2019/09/Lamborghini-sian-hybrid-sports-car-1.jpg',
  'https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2560%2Cc_limit/DSC_5903.jpg',
];

const ImageSlider = ({ autoSlide = true, autoSlideInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  }, [images.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    if (!autoSlide) return;

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      goToNextSlide();
    }, autoSlideInterval);

    return () => {
      resetTimeout();
    };
  }, [currentSlide, autoSlide, autoSlideInterval, goToNextSlide]);

  return (
    // Outer container for responsive width - This one is just a wrapper for shadow/roundness.
    // The actual sizing will be handled by its child.
    <div className="relative w-full mx-auto h-full overflow-hidden rounded-lg shadow-xl">
      {/*
        KEY CHANGE: Added mx-auto here to center the 80% width slider
      */}
      <div className="relative w-[90%] rounded-md mx-auto pb-[56.25%] overflow-hidden" style={{ paddingTop: 'unset' }}>
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Navigation Arrows (inside the aspect ratio container) */}
        <div className="absolute inset-0 flex items-center justify-between p-3 md:p-4">
          <button
            onClick={goToPrevSlide}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Dots (inside the aspect ratio container) */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 md:bottom-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;