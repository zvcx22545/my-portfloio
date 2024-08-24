"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './style.css';

function Navbar() {
  const [activeId, setActiveId] = useState('#profile');


  const handleLinkClick = (id) => {
    setActiveId(id);
  };

  return (
    <nav className="fixed z-[999] shadow-lg px-[9.375rem] w-full flex justify-between p-4 gap-5 items-center bg-base-200">
      <div className="logo text-[2rem]">
        <Link href="/" onClick={() => handleLinkClick('#profile')}>DREAM</Link>
      </div>
      <ul className="nav flex justify-center gap-3">
        <li className={`text-[1rem] cursor-pointer ${activeId === '#profile' ? 'active' : ''}`}>
          <Link href="#profile" onClick={() => handleLinkClick('#profile')} className='smooth-scroll'>
            Home
          </Link>
        </li>
        <li className={`text-[1rem] cursor-pointer ${activeId === '#about' ? 'active' : ''}`}>
          <Link href="#about" onClick={() => handleLinkClick('#about')} className='smooth-scroll'>
            About
          </Link>
        </li>
        <li className={`text-[1rem] cursor-pointer ${activeId === '#skill' ? 'active' : ''}`}>
          <Link href="#skill" onClick={() => handleLinkClick('#skill')} className='smooth-scroll'>
            Skill
          </Link>
        </li>
        <li className={`text-[1rem] cursor-pointer ${activeId === '#contact' ? 'active' : ''}`}>
          <Link href="#contact" onClick={() => handleLinkClick('#contact')} className='smooth-scroll'>
            Contact
          </Link>
        </li>
        <li className={`text-[1rem] cursor-pointer ${activeId === '#experience' ? 'active' : ''}`}>
          <Link href="#experience" onClick={() => handleLinkClick('#experience')} className='smooth-scroll'>
            Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
