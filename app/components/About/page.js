/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './About.css'
import Link from 'next/link'
function About() {
  return (
    <div className=''>
      <div className="content">
        <div className="flex gap-4 max-[600px]:justify-center">
          <div className="font-bold text-[3rem]">About</div>
          <div className="text-[#A91D3A] font-bold text-[3rem] ">Me</div>
        </div>
      </div>
      <div className="flex justify-between items-center max-[600px]:block">
        <div>
          <div className="font-semibold text-[1.5rem] max-[600px]:text-[1.125rem] max-[600px]:mb-2">I like to improving about coding.</div>
          <button className=" font-semibold text-[1rem] text-white py-2 px-4 rounded-full CV mt-6 max-[600px]:hidden">
            <Link download href="./Chisanuponh Limsakul.pdf" passHref className='flex items-center justify-center gap-2 rounded-[12px]'>
              <img src="./images/play.png" className='w-[50px]' alt="This is logo download of cv" />
              <div className="font-bold text-white">DOWNLOAD CV</div>
            </Link>
          </button>
        </div>
        <div className="font-semibold text-[1rem]">
          <span className="block max-[600px]:inline">
            ผมเป็นที่ชอบเขียนโค๊ดแล้วเห็นการเปลี่ยนแปลง
          </span>
          <span className="block max-[600px]:inline">
            หน้าเว็บไซต์ซึ่งทำให้ผมได้แรงบันดาลใจในการเขียนโคํด
          </span>
          <span className="block max-[600px]:inline">
            และพัฒนาตัวเองในการทำส่วนของหน้าตาเว็บไซต์ และ
          </span>
          <span className="block max-[600px]:inline">
            ผมสามารถทำงานเป็นที
            มได้โดยผมสามารถปรับตัว
          </span>
          <span className="block max-[600px]:inline">
            ไปใช้ Framework ที่ไม่เคยใช้ผ่านการเรียนรู้
          </span>
        </div>
        <button className=" font-semibold text-[1rem] text-white py-2 px-4 rounded-full CV mt-6 sm:hidden flex mx-auto">
          <Link download href="./Chisanuponh Limsakul.pdf" passHref className='flex items-center justify-center gap-2 rounded-[12px]'>
            <img src="./images/play.png" className='w-[50px]' alt="This is logo download of cv" />
            <div className="font-bold text-white">DOWNLOAD CV</div>
          </Link>
        </button>

      </div>
    </div>
  )
}

export default About