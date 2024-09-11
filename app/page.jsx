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

    // Listen for the page load event
    if (document.readyState === "complete") {
      // If the page is already loaded, set loading to false immediately
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad); // Clean up event listener
    };
  }, []);
  
  if (loading) {
    return <LoadingSpinner/>;
  }
  return (
    <div className="container">
      <Navbar/>
      <section className="profile w-full overflow-hidden" id="profile">
        <Profile/>
      </section>
      <section id="about" className="px-[9.375rem] w-full block items-center pb-12 pt-12">
        <About/>
      </section>
      <section id="skill" className="px-[9.375rem] max-sm:px-[5rem] block items-center pb-12 pt-12">
        <Skill/>
      </section>
      <section id="experience" className="px-[9.375rem] max-sm:px-[5rem] block items-center pb-12 pt-12">
        <Experience/>
      </section>
    </div>
  );
}
