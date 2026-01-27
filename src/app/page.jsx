"use client";

import React from "react";
import MainLayout from "@/components/MainLayout/page";
import NavBar from "@/components/NavBar/page";
import Header from "@/components/Header/page";

export default function Home() {
  return (
    <MainLayout>
      <NavBar />
      <Header />
    </MainLayout>
  );
}
