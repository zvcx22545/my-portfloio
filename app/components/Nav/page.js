import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="fixed shadow-lg top-0 left-0 px-[9.375rem] w-full z-[10] flex justify-between p-4 gap-5 items-center text-white bg-[#A91D3A]">
        <div className="logo text-[2rem]">DREAM</div>
        <ul className="nav flex justify-center gap-5">
          <li className="text-[1rem]">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[1rem]">
            <Link href="/about">About</Link>
          </li>
          <li className="text-[1rem]">
            <Link href="/skill">Skill</Link>
          </li>
          <li className="text-[1rem]">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-[1rem]">
            <Link href="/experience">Experience</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar