import React from 'react'
import Link from 'next/link'
import './style.css'

function Navbar() {
  return (
    <nav className="fixed z-[999] shadow-lg px-[9.375rem] w-full flex justify-between p-4 gap-5 items-center bg-base-200" >
        <div className="logo text-[2rem]"><Link href="/">DREAM</Link></div>
        <ul className="nav flex justify-center gap-5">
          <li className="text-[1rem]">
            <Link href="#profile" className='smooth-scroll cursor-pointer'>Home</Link>
          </li>
          <li className="text-[1rem]">
            <Link href="#about" className='smooth-scroll cursor-pointer'>About</Link>
          </li>
          <li className="text-[1rem]">
            <Link href="#skill" className='smooth-scroll cursor-pointer'>Skill</Link>
          </li>
          <li className="text-[1rem]">
            <Link href="/contact" className='smooth-scroll cursor-pointer'>Contact</Link>
          </li>
          <li className="text-[1rem]">
            <Link href="/experience" className='smooth-scroll cursor-pointer'>Experience</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar