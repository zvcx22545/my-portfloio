/* eslint-disable @next/next/no-img-element */
'use client';

import { useState,useEffect } from 'react';
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
      title: 'MyWorld Production',
      description: 'Html CSS Javascript Tailwind',
      content: 'โปรเจคสำหรับการโปรโมทสินค้าให้กับ MyWorld',
      imageUrl: '/images/mybeer.png',
      textbutton: 'เข้าสู่เว็บไซต์',
      Url: 'https://myworld-virtual-store.com/present/'
    },
    {
      id: 3,
      title: 'MyWorld Exchange',
      description: 'Html CSS Javascript Tailwind',
      content: 'เป็นหน้าเว็บสำหรับแลกสินค้าโดยใช้แต้มสะสมที่ได้จากกิจกรรม',
      imageUrl: '/images/ExchangePoint.png',
      textbutton: 'เข้าสู่เว็บไซต์',
      Url: 'https://myworld-virtual-store.com/point/'
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const goToPrevious = () => {
    setIsFading(true);
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 500); // Matches CSS fade duration
  };

  const goToNext = () => {
    setIsFading(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 500); // Matches CSS fade duration
  };

  return (
    <div className="w-full mx-auto relative">
      <div className="relative h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] overflow-hidden">
        <div
          className={`absolute inset-0 flex transition-opacity duration-500 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className={`min-w-full ${index === currentIndex ? 'block' : 'hidden'}`}>
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="object-fill w-full h-full outline-none"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 max-sm:w-full -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-3 rounded-lg text-center">
                <h2 className="text-[15px] sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  {slide.title}
                </h2>
                <div className="flex gap-1 mt-2">
                  <div className="flex gap-1">
                    <p className="text-[12px] sm:text-base">Stack</p>
                    <p className="text-[12px] sm:text-base">:</p>
                  </div>
                  <p className="text-[12px] sm:text-base text-left">
                    {slide.description}
                  </p>
                </div>
                <div className="flex gap-1">
                  <div className="flex gap-1">
                    <p className="text-[12px] sm:text-base">Description</p>
                    <p className="text-[12px] sm:text-base">:</p>
                  </div>
                  <p className="text-[12px] sm:text-base text-left">
                    {slide.content}
                  </p>
                </div>
                {slide.textbutton && slide.Url && (
                  <button className="font-semibold text-[1rem] text-white py-2 px-4 rounded-full CV mt-6">
                    <Link
                      href={slide.Url}
                      passHref
                      className="flex items-center justify-center gap-2 rounded-[12px]"
                    >
                      <img
                        src="./images/cursor.png"
                        className="max-sm:w-[20px] w-[30px]"
                        alt="This is logo download of cv"
                      />
                      <div className="font-bold text-white enter-w">
                        {slide.textbutton}
                      </div>
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
        className="absolute top-1/2 max-[500px]:left-[-60px] left-[-4.5rem] transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
        onClick={goToPrevious}
      >
        <ChevronLeftIcon className="h-8 w-8 arrow" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 max-[500px]:right-[-60px] right-[-4.5rem] transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
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
            className={`h-3 rounded-full transition-all duration-500 ease-in-out origin-center ${
              index === currentIndex ? 'bg-[#40E0D0] scale-x-125 w-12' : 'bg-gray-500 w-3 h-3'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
