"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './style.css';

function Navbar() {
  const [activeId, setActiveId] = useState('#profile');
  const [activeHam,setactiveHam] =  useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 4) {
          setActiveId(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleHamburger = () => {
    setactiveHam((prevState) => !prevState);
  };

  const handleLinkClick = (id) => {
    setActiveId(id);
  };

  return (
    <>
      <nav className="fixed z-[999] shadow-lg px-[9.375rem] max-[640px]:px-5 w-full flex justify-between p-4 gap-5 items-center bg-base-200">
        <div className="logo text-[2rem]">
          <Link href="/" onClick={() => handleLinkClick('#profile')}>DREAM</Link>
        </div>
        <ul
          className={`nav justify-center gap-3 bg-base-200 xl:flex ${
            activeHam ? 'block animate-fade-down animate-once animate-duration-500 animate-delay-150 animate-ease-linear' : 'hidden'
          }`} // Always show in xl screens, toggle visibility for smaller
        >
          <li className='text-[1rem] cursor-pointer '>
            <Link href="#profile" onClick={() => handleLinkClick('#profile')} className={`smooth-scroll ${activeId === '#profile' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className='text-[1rem] cursor-pointer'>
            <Link href="#about" onClick={() => handleLinkClick('#about')} className={`smooth-scroll ${activeId === '#about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li className='text-[1rem] cursor-pointer'>
            <Link href="#skill" onClick={() => handleLinkClick('#skill')} className={`smooth-scroll ${activeId === '#skill' ? 'active' : ''}`}>
              Skill
            </Link>
          </li>
          {/* <li className={`text-[1rem] cursor-pointer ${activeId === '#contact' ? 'active' : ''}`}>
          <Link href="#contact" onClick={() => handleLinkClick('#contact')} className='smooth-scroll'>
            Contact
          </Link>
        </li> */}
        <li className='text-[1rem] cursor-pointer'>
            <Link href="#experience" onClick={() => handleLinkClick('#experience')} className={`smooth-scroll ${activeId === '#experience' ? 'active' : ''}`}>
              Experience
            </Link>
          </li>
        </ul>
      
      <div
        className={`hamburger xl:hidden ${activeHam ? 'is-active' : ''}`}
        id="hamburger-1"
        onClick={toggleHamburger}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      </nav>
      </>
      
  );
}

export default Navbar;
