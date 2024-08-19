/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './style.css'
function Profile() {
  return (
        <div className="mx-auto px-[150px] w-full overflow-hidden">
        <div className="content mt-[150px] flex justify-between items-center">
        <img src="./images/Profiles.png" alt="This profile for me" className='w-[50%] profile animate-jump-in animate-once animate-duration-700 animate-delay-500 animate-ease-in-out' />
        <div className="mb-[55px]">
          <div className="name text-[40px] font-bold">Chisanupong Limsakul</div>
          <div className="Job text-[4rem] font-bold animate-fade-right animate-once animate-duration-700 animate-delay-300 animate-ease-in">Front End</div>
          <div className="Job text-[3rem] mt-[-20px] font-bold animate-fade-left animate-once animate-duration-700 animate-delay-300 animate-ease-in">Developer</div>
          <div className="name text-[1rem] font-semibold mt-4">ผมสนใจในการพัฒนาหน้าตาเว็บไซต์ โดยผมมี ประสบการณ์<br />ด้านการพัฒนาเว็บไซต์มาประมาณ 4 เดือนด้าน Front End<br /> และต้องการพัฒนาฝีมือต่อทางด้านเว็บไซต์</div>
        </div>
        </div>
        </div>
  )
}

export default Profile