"use client";

import React from "react";
import MainLayout from "@/components/Layout/MainLayout/page";
import NavBar from "@/components/Layout/NavBar/page";
import Header from "@/components/Sections/Header/page";
import About from "@/components/Sections/About/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
    </>
  );
}
