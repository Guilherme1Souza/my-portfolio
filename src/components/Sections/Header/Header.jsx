"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import bgHeader from "@/images/header.png";
import Container from "@/components/UI/Container/Container";

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

    // burstOut já foi resetado para false em onPick; aqui só disparamos
    // a animação no frame seguinte e limpamos ao final.
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
    setBurstOut(false);
    setBurstIndex(idx);
  };

  const BurstIcon = burstIndex !== null ? ICONS[burstIndex]?.Icon : null;
  const STEP = 60;

  return (
      <section id="home">
      <header className="w-full min-h-screen">
        <Container className="min-h-screen pt-6 sm:pt-10 md:pt-14 flex flex-col">
          <div className="grid mt-22 min-h-[calc(100vh-2.5rem)] grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center ">
            <div className="order-1 md:order-2 w-full flex justify-center md:justify-end">
              <div
                className={[
                  "relative w-[min(520px,100%)] aspect-[4/3]", 
                  "md:w-[420px] md:aspect-auto md:h-[540px]",
                  "lg:w-[480px] lg:h-[320px]", 
                  "xl:w-[540px] xl:h-[320px]", 
                  "2xl:w-[400px] 2xl:h-[400px]", 
                ].join(" ")}
              >
                <Image
                  src={bgHeader}
                  alt="Imagem de perfil de Guilherme"
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="
                    (min-width: 1536px) 400px,
                    (min-width: 1280px) 540px,
                    (min-width: 1024px) 480px,
                    (min-width: 768px) 420px,
                    (min-width: 640px) 520px,
                    100vw
                  "
                />
              </div>
            </div>

          
            <div className="order-2 md:order-1 w-full flex flex-col justify-center gap-4 sm:gap-6 items-center text-start md:items-start md:text-left">
              <div className="w-full max-w-xl md:max-w-2xl">
                <h1 className="text- sm:text-4xl md:text-5xl lg:text-6xl font-bold text-title leading-tight tracking-tight">
                  Olá, eu sou o Guilherme
                </h1>

                <p className="mt-3 sm:mt-4 text-base md:text-xl lg:text-lg text-text leading-relaxed">
                Desenvolvedor Front-end Júnior com experiência em React, Next.js, Electron e Gatsby, atuando em aplicações web, cloud e desktop. Foco em performance, SEO e UX/UI, integração com APIs REST, implementação de BFF, CI/CD e otimização de estado assíncrono com TanStack Query.
                </p>
              </div>

              <div className="w-full flex justify-center md:justify-start">
                <div className="relative bg-transparent rounded-full p-2 flex flex-row gap-3">
                  {BurstIcon && burstIndex !== null && (
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
                      <BurstIcon className="text-azul/20" size={24} />
                    </span>
                  )}

                  {ICONS.map(({ key, Icon, href }, idx) => {
                    const isActive = idx === active;
                    const isMail = href.startsWith("mailto:");

                    return (
                      <a
                        key={key}
                        href={href}
                        target={isMail ? undefined : "_blank"}
                        rel={isMail ? undefined : "noreferrer"}
                        onClick={() => onPick(idx)}
                        className={[
                          "group w-12 h-12 rounded-full z-10 relative cursor-pointer",
                          "flex items-center justify-center",
                          "transition-all duration-300 ease-in-out",
                          isActive
                            ? "text-verde/80 scale-105"
                            : "text-verde/40",
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
                    className="w-12 h-12 rounded-full bg-transparent border-2 border-verde/40 absolute left-2 top-2 transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] z-0"
                    style={{ transform: `translateX(${active * STEP}px)` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
      </section>
  );
}