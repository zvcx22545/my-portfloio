/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Nav/page";
import About from "./components/About/page";

export default function Home() {
  return (
    <div className="containers">
      <Navbar/>
      <section className="profile relative h-[105vh] w-full overflow-hidden">
      <img src="/images/background.png" alt=""
      className="absolute z-[1] w-full object-cover shadow mt-[-150px] border-none"
       />
        <div className="mx-auto px-[150px] absolute z-[2] w-full">
        <div className="content top-[300px] ml-10 relative flex justify-between items-center">
        <img src="/images/Myprofile.png" className=" border-white border-[10px] profile  rounded-full max-[1280px]:w-[35%] object-cover w-[40%]" alt="" />
        <div className="text-white mb-[50px]">
          <div className="name text-[40px] font-medium">Chisanupong Limsakul</div>
          <div className="name text-[4rem] font-bold">Front End</div>
          <div className="name text-[3rem] font-bold ">Developer</div>
          <div className="name text-[1rem] font-medium mt-4">ผมสนใจในการพัฒนาหน้าตาเว็บไซต์ โดยผมมี ประสบการณ์<br />ด้านการพัฒนาเว็บไซต์มาประมาณ 4 เดือนด้าน Front End<br /> และต้องการพัฒนาฝีมือต่อทางด้านเว็บไซต์</div>
        </div>
        </div>
        </div>
      </section>
      <section id="about" className="px-[9.375rem]">
        <About/>
      </section>
    </div>
  );
}
