"use client";

import React from "react";
import Image from "next/image";

const Inicio = ({ children }) => {
  return (
    <MainLayout>
      <section
        id="home"
        className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16"
      >
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Olá, eu sou <span className="text-primary">Guilherme</span>
          </h1>
          <p className="text-textSecondary text-md md:text-lg lg:text-xl max-w-lg">
            Desenvolvedor Frontend apaixonado por criar experiências web
            incríveis e funcionais. Vamos construir algo incrível juntos!
          </p>
          <a
            href="#contato"
            className="w-40 h-11 bg-primary text-bege rounded-2xl flex items-center justify-center hover:opacity-90 transition"
          >
            <span className="text-md font-medium">Vamos conversar!</span>
          </a>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
          <Image
            src="/header.png"
            alt="Imagem de perfil de Guilherme"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default Inicio;
