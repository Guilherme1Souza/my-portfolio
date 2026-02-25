import React from "react";
import MainLayout from "../../Layout/MainLayout/page";

export default function About() {
  return (
    <div className="bg-verde w-full min-h-screen">
    <MainLayout>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-start text-white mt-16">Sobre</h1>
       <div className="grid grid-cols-2">
      <p className="text-start text-3xl text-white mt-4">Principais tecnologias</p>
      </div>
    </MainLayout>
    </div>
  );
}