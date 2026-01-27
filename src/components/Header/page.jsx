"use client";

import React from "react";
import Image from "next/image";
import bgHeader from "@/images/header.png";
import MainLayout from "../MainLayout/page";
import ImgFundo from "@/images/headerBg.png";

const Header = () => {
  return (
    <MainLayout
      style={{
        backgroundImage: `url(${ImgFundo.src})`,
        backgroundSize: "cover",
      }}
    >
      <header>
        <div className="relative w-[546px] h-[673px]">
          <Image src={bgHeader} alt="Imagem de perfil de Guilherme" fill />
        </div>
      </header>
    </MainLayout>
  );
};

export default Header;
