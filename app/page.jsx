/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Nav/page";
import About from "./components/About/page";
import Profile from "./components/Profile/page";
import Skill from "./components/Skill/Skill";
import LoadingSpinner from "./Loading/LoadingSpinner";
import React, { useState, useEffect } from 'react';
import Experience from "./components/Experience/page";


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Check when the page has fully loaded (including all assets such as images)
    const handleLoad = () => {
      setLoading(false); // Hide the spinner when page has loaded
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  
  if (loading) {
    return <LoadingSpinner/>;
  }
  return (
    <div className="containers">
      <Navbar/>
      <section className="profile w-full overflow-hidden" id="profile">
        <Profile/>
      </section>
      <section id="about" className="px-[6.375rem] max-lg:px-[3rem] w-full block items-center pb-12 pt-12">
        <About/>
      </section>
      <section id="skill" className="px-[6.375rem] max-lg:px-[3rem] block items-center pb-12 pt-12">
        <Skill/>
      </section>
      <section id="experience" className="px-[6.375rem] max-lg:px-[0rem] block items-center pb-12 pt-12  max-lg:pt-[0rem]">
        <Experience/>
      </section>
    </div>
  );
}
