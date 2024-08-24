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


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a network request or loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // You can adjust the time based on your actual loading time
  
    return () => clearTimeout(timer);
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
    </div>
  );
}
