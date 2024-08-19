/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Nav/page";
import About from "./components/About/page";
import Profile from "./components/Profile/page";
import Skill from "./components/Skill/Skill";

export default function Home() {
  return (
    <div className="container">
      <Navbar/>
      <section className="profile w-full z-0 overflow-hidden" id="profile">
        <Profile/>
      </section>
      <section id="about" className="px-[9.375rem] block items-center mb-12 mt-12">
        <About/>
      </section>
      <section id="skill" className="px-[9.375rem] block items-center mb-12 mt-12">
        <Skill/>
      </section>
    </div>
  );
}
