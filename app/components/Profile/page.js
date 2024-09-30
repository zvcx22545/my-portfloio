/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './style.css'

function Profile() {
  return (
    <div className="mx-auto px-[6.375rem] w-full overflow-hidden">
      {/* Ensure parent is relative */}
      <div className="content mt-[150px] relative flex h-[50vh] justify-between w-full">
        {/* Profile image */}
        <img
          src="./images/Profile.png"
          alt="This profile for me"
          className='w-[50%] profile absolute left-0 bottom-0 animate-jump-in animate-once animate-duration-700 animate-delay-500 animate-ease-in-out'
        />
        {/* Profile text */}
        <div className="absolute right-0 top1/2">
          <div className="name text-[40px] font-bold">
            Chisanupong Limsakul
          </div>
          <div className="Job text-[4rem] font-bold animate-fade-right animate-once animate-duration-700 animate-delay-300 animate-ease-in">
            Front End
          </div>
          <div className="Job text-[3rem] mt-[-20px] font-bold animate-fade-left animate-once animate-duration-700 animate-delay-300 animate-ease-in">
            Developer
          </div>
          <div className="name text-[1rem] font-semibold mt-4">
            ผมสนใจในการพัฒนาหน้าตาเว็บไซต์ โดยผมมี ประสบการณ์<br />
            ด้านการพัฒนาเว็บไซต์มาประมาณ 4 เดือนด้าน Front End<br />
            และต้องการพัฒนาฝีมือต่อทางด้านเว็บไซต์
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
