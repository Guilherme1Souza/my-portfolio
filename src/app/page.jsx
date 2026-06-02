"use client";

import React from "react";
import NavBar from "@/components/Layout/NavBar/page";
import Header from "@/components/Sections/Header/page";
import About from "@/components/Sections/About/page";
import Projects from "@/components/Sections/Projects/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Projects />
    </>
  );
}
