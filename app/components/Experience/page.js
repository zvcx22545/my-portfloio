/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import './style.css';

const Experience = () => {
  const slides = [
    {
      id: 1,
      title: 'Travel to Knowledge',
      description: 'Html CSS PHP Javascript Tailwind Bootstrap Figma',
      content: 'โปรเจคนี้เป็นโปรเจคเกี่ยวกับการโปรโมทร้านค้าในมหาวิทยาลัย',
      imageUrl: '/images/d1.png',
      textbutton: 'GitHub',
      Url: 'https://github.com/zvcx22545/Webproject'
    },
    {
      id: 2,
      title: 'Slide 2',
      description: 'This is the second slide description.',
      imageUrl: '/images/slide2.jpg',
      textbutton: 'เข้าสู่เว็บไซต์',
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
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full relative">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="object-fill w-full h-full"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 max-sm:w-full -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-3 rounded-lg text-center">
                <h2 className="text-[15px] sm:text-xl md:text-2xl lg:text-3xl font-bold">{slide.title}</h2>
                <div className="flex gap-1">
                  <div className="flex gap-1">
                    <p className="text-[12px] sm:text-base">Stack</p>
                    <p className="text-[12px] sm:text-base">:</p>
                  </div>
                  <p className="text-[12px] sm:text-base text-left">{slide.description}</p>
                </div>
                <div className="flex gap-1">
                  <div className="flex gap-1">
                    <p className="text-[12px] sm:text-base">Description</p>
                    <p className="text-[12px] sm:text-base">:</p>
                  </div>
                  <p className="text-[12px] sm:text-base text-left">{slide.content}</p>
                </div>
                {slide.textbutton && slide.Url && (
                  <button className=" font-semibold text-[1rem] text-white py-2 px-4 rounded-full CV mt-6">
                    <Link href={slide.Url} passHref className='flex items-center justify-center gap-2 rounded-[12px]'>
                      <img src="./images/cursor.png" className='max-sm:w-[20px] w-[30px]' alt="This is logo download of cv" />
                      <div className="font-bold text-white enter-w">{slide.textbutton}</div>
                    </Link>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 max-[500px]:left-[-60px] left-2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
        onClick={goToPrevious}
      >
        <ChevronLeftIcon className="h-8 w-8 arrow" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 max-[500px]:right-[-60px] right-2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
        onClick={goToNext}
      >
        <ChevronRightIcon className="h-8 w-8 arrow" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom--3 gap-1 left-1/2 transform -translate-x-1/2 flex space-x-2 py-2 w-full items-center justify-center bg-white">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-500 ease-in-out origin-center ${index === currentIndex ? 'bg-[#40E0D0] scale-x-125 w-12' : 'bg-gray-500 w-3 h-3'
              }`}
          ></button>
        ))}
      </div>


    </div>
  );
};

export default Experience;
