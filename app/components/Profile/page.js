/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './style.css'

function Profile() {
  return (
    <div className="mx-auto px-[6.375rem] max-lg:px-[3rem] w-full overflow-hidden">
      {/* Ensure parent is relative */}
      <div className="content mt-[150px] max-sm:mt-[65px] relative flex h-[50vh] max-sm:h-[80vh] justify-between w-full">
        {/* Profile image */}
        <img
          src="./images/Profile.png"
          alt="This profile for me"
          className='w-[50%] max-sm:w-full profile absolute left-0 bottom-0 animate-jump-in animate-once animate-duration-700 animate-delay-500 animate-ease-in-out'
        />
        {/* Profile text */}
        <div className="absolute lg:right-0 max-lg:w-full content top-[10%]">
          <div className="name font-bold w-full text-center">
            Chisanupong Limsakul
          </div>
          <div className="Job text-job text-center font-bold animate-fade-right animate-once animate-duration-700 animate-delay-300 animate-ease-in">
            Front End
          </div>
          <div className="Job text-job2 mt-[-20px] max-[600px]:mt-[-10px] text-center font-bold animate-fade-left animate-once animate-duration-700 animate-delay-300 animate-ease-in">
            Developer
          </div>
          <div className=" text-[1rem] font-semibold mt-4 max-[600px]:mt-2 text-center">
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
