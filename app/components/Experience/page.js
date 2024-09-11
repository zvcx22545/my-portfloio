/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import {ChevronLeftIcon} from '@heroicons/react/24/solid'
import {ChevronRightIcon} from '@heroicons/react/24/solid'
import './style.css'

const Experience = () => {
  const slides = [
    {
      id: 1,
      title: 'Slide 1',
      description: 'This is the first slide description.',
      imageUrl: './images/d.png',
    },
    {
      id: 2,
      title: 'Slide 2',
      description: 'This is the second slide description.',
      imageUrl: '/images/slide2.jpg',
    },
    {
      id: 3,
      title: 'Slide 3',
      description: 'This is the third slide description.',
      imageUrl: '/images/slide3.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="relative h-[30rem] overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="min-w-full relative">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="object-contain w-full h-full image"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg">
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
        onClick={goToPrevious}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
        onClick={goToNext}
      >
        <ChevronRightIcon className="h-6 w-6"/>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out ${
              index === currentIndex ? 'bg-[#40E0D0] w-12' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
