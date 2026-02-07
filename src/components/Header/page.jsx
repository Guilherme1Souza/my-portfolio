"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import bgHeader from "@/images/header.png";
import MainLayout from "../MainLayout/page";

const ICONS = [
  { key: "github", Icon: FaGithub, href: "https://github.com/Guilherme1Souza" },
  {
    key: "linkedin",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/guilhermeeduardo/",
  },
  {
    key: "email",
    Icon: FaEnvelope,
    href: "mailto:guilhermeeduardo2016@outlook.com",
  },
];

export default function Header() {
  const [active, setActive] = useState(0);
  const [burstIndex, setBurstIndex] = useState(null);
  const [burstOut, setBurstOut] = useState(false);

  useEffect(() => {
    if (burstIndex === null) return;

    setBurstOut(false);
    const raf = requestAnimationFrame(() => setBurstOut(true));

    const t = setTimeout(() => {
      setBurstIndex(null);
      setBurstOut(false);
    }, 900);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [burstIndex]);

  const onPick = (idx) => {
    setActive(idx);
    setBurstIndex(idx);
  };

  const BurstIcon = burstIndex !== null ? ICONS[burstIndex]?.Icon : null;

  const STEP = 60;

  return (
    <MainLayout>
      <header className="w-full min-h-screen">
        <div className="w-full max-w-[1440px] mx-auto min-h-screen pt-6 sm:pt-10 md:pt-14">
          <div className="grid min-h-[calc(100vh-3.5rem)] grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center">
            <div className="md:hidden w-full flex justify-center order-1">
              <div className="relative w-[min(520px,100%)] aspect-[4/3]">
                <Image
                  src={bgHeader}
                  alt="Imagem de perfil de Guilherme"
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="(max-width: 767px) 520px, 0px"
                />
              </div>
            </div>

            <div className="w-full flex flex-col justify-center gap-4 sm:gap-6order-2 md:order-1items-center text-centermd:items-start md:text-left">
              <div className="w-full max-w-[36rem] md:max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-title leading-tight tracking-tight">
                  Olá, eu sou o Guilherme
                </h1>

                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-text leading-relaxed">
                  Desenvolvedor Full-Stack apaixonado por criar soluções
                  digitais inovadoras.
                </p>
              </div>

              <div className="w-full flex justify-center md:justify-start">
                <div className="relative bg-transparent rounded-full p-2 flex flex-row gap-3">
                  {BurstIcon && (
                    <span
                      className={[
                        "absolute pointer-events-none z-0",
                        "transition-all duration-700 ease-out",
                        burstOut
                          ? "-translate-y-6 opacity-0 scale-90"
                          : "translate-y-0 opacity-100 scale-100",
                      ].join(" ")}
                      style={{
                        left: `${8 + burstIndex * STEP}px`,
                        top: "8px",
                      }}
                    >
                      <BurstIcon className="text-[#75747A]" size={24} />
                    </span>
                  )}

                  {ICONS.map(({ key, Icon, href }, idx) => {
                    const isActive = idx === active;

                    return (
                      <a
                        key={key}
                        href={href}
                        target={
                          href.startsWith("mailto:") ? undefined : "_blank"
                        }
                        rel={
                          href.startsWith("mailto:") ? undefined : "noreferrer"
                        }
                        onClick={() => onPick(idx)}
                        className={[
                          "group w-12 h-12 rounded-full z-10 relative cursor-pointer",
                          "flex items-center justify-center",
                          "transition-all duration-300 ease-in-out",
                          isActive ? "text-white scale-105" : "text-[#75747A]",
                          "hover:scale-110 hover:-translate-y-[2px]",
                          "active:scale-95",
                        ].join(" ")}
                        aria-label={key}
                      >
                        <span className="relative z-10 transition-transform duration-200 ease-out group-hover:scale-110">
                          <Icon size={24} />
                        </span>
                      </a>
                    );
                  })}

                  <div
                    className="w-12 h-12 rounded-full bg-transparent border-2 border-white/30 absolute left-2 top-2 transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] z-0"
                    style={{
                      transform: `translateX(${active * STEP}px)`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="relative hidden md:flex items-end justify-end order-2 h-full">
              <div className="relative w-[360px] h-[480px] md:w-[420px] md:h-[540px] lg:w-[480px] lg:h-[600px] xl:w-[540px] xl:h-[680px] 2xl:w-[600px] 2xl:h-[760px]">
                <Image
                  src={bgHeader}
                  alt="Imagem de perfil de Guilherme"
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="(min-width: 1536px) 600px, (min-width: 1280px) 540px, (min-width: 1024px) 480px, 420px"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </MainLayout>
  );
}
