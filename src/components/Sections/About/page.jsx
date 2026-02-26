"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/UI/Button/page";

const STRIPS = 50;

export default function About() {
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const leftBoxes  = gsap.utils.toArray("[data-col='left']  [data-box]");
      const rightBoxes = gsap.utils.toArray("[data-col='right'] [data-box]");

      gsap.set(leftBoxes,  { xPercent: 110 });
      gsap.set(rightBoxes, { xPercent: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: 0.7,
          pin: true,
          start: "top top",
          end: "+=180%",
          invalidateOnRefresh: true,
        },
      });

      tl.to(leftBoxes, {
        xPercent: 0,
        ease: "power2.inOut",
        stagger: { amount: 1.05, from: "end" },
        duration: 1,
      }, 0)
      .to(leftBoxes, {
        rotation: (i) => (i % 2 === 0 ? 8 : -8),
        ease: "power2.out",
        stagger: { amount: 0.7, from: "end" },
        duration: 0.6,
      }, 0)
      .to(leftBoxes, {
        rotation: 0,
        ease: "power2.in",
        stagger: { amount: 0.6, from: "end" },
        duration: 0.6,
      }, 0.55)

      .to(rightBoxes, {
        xPercent: -110,
        ease: "power2.inOut",
        stagger: { amount: 1.05, from: "start" },
        duration: 1,
      }, 0)
      .to(rightBoxes, {
        rotation: (i) => (i % 2 === 0 ? -8 : 8),
        ease: "power2.out",
        stagger: { amount: 0.7, from: "start" },
        duration: 0.6,
      }, 0)
      .to(rightBoxes, {
        rotation: 0,
        ease: "power2.in",
        stagger: { amount: 0.6, from: "start" },
        duration: 0.6,
      }, 0.55);

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const front = ["JavaScript", "React", "GraphQL", "Next.js", "TypeScript", "Tailwind CSS", ];
  const back = ["Node.js", "Express"];
  const versionControl = ["Git", "GitHub", "Grafana", "Prometheus"];

  return (
    <div ref={triggerRef} className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row mx-auto max-w-full" >
     <div className="hidden lg:block pointer-events-none absolute left-1/2 top-0 h-[1400px] w-[2px] bg-verde-escuro z-20" />
      <div className=" relative w-full lg:w-1/2 min-h-screen lg:h-full overflow-hidden shrink-0">
        <div className="absolute inset-0 z-0 flex flex-col justify-center pt-24 px-6 sm:px-10 lg:px-[5vw] lg:pt-25 bg-verde-escuro">
          <p  className="mtext-[11px] font-bold tracking-[0.2em] uppercase text-white mb-3">
            Trajetória
          </p >
          <div className="w-11 h-[3px] bg-verde mb-4" />
          <h1 className="font-extrabold tracking-[0.02em] mt-6 leading-[0.92] mb-5 text-white text-[clamp(46px,5.5vw,76px)]">
            Sobre<br />
            <span className="text-verde">Mim</span>
          </h1>
          <p className="text-white leading-[1.8] max-w-[600px] lg:text-lg text-[clamp(13px,1.1vw,15px)]">
           Iniciei minha carreira como Desenvolvedor Front-end em 2024, na Taxcel, atuando no desenvolvimento de soluções fiscais digitais. Participei de projetos desafiadores ponta a ponta, desde a estruturação do design system e modelagem de interfaces até integrações com APIs REST e deploy em ambiente produtivo.
          </p>
          <div className="flex flex-col gap-2">
          <div className="flex flex-col text-white">
              <p className="mtext-[11px] font-bold tracking-[0.2em] uppercase my-3">Educação</p>
           <div className="flex flex-row justify-start items-center">
            <p>Ada Tech & Santander</p>
            <Button variant="secondary" size="sm" className="ml-4 text-white">
              2024 - 2024
            </Button>
           </div>
           <p>Santander Coders / Front-End</p>
          </div>
          <div className="flex flex-col text-white">
           <div className="flex flex-row justify-start items-center">
            <p>Universidade Paulista</p>
            <Button variant="secondary" size="sm" className="ml-4 text-white">
              2022 - 2024
            </Button>
           </div>
           <p>Análise e Desenvolvimento de Sistemas</p>
          </div>
          </div>
        </div>

        <div
          data-col="left"
          className="absolute inset-0 z-10 grid pointer-events-none"
          style={{ gridTemplateRows: `repeat(${STRIPS}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: STRIPS }).map((_, i) => (
            <div
              key={i}
              data-box
              className={[
                "bg-[#0b0b0b] will-change-transform",
                i !== 0 ? "-mt-px" : "",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
              ].join(" ")}
              style={{
                transform: "translateZ(0) scaleY(1.02)",
                transformOrigin: i % 2 === 0 ? "left center" : "right center",
              }}
            />
          ))}
        </div>
      </div>

     
      <div className=" relative w-full lg:w-1/2 min-h-screen lg:h-full overflow-hidden shrink-0">
        <div className="absolute inset-0 z-0 flex flex-col justify-center px-6 sm:px-10 lg:px-[5vw] lg:pt-23 bg-verde-escuro">
          <p className="mtext-[11px] font-bold tracking-[0.2em] uppercase text-white mb-3">
            Stack
          </p>
            <div className="w-11 h-[3px] bg-verde mb-4" />
          <h1 className="font-extrabold mt-6 tracking-[0.02em] leading-[0.92] mb-5 text-white text-[clamp(46px,5.5vw,76px)]">
            Tech<br />
            <span className="text-verde">Skills</span>
          </h1>
          <p className="text-white leading-[1.8] max-w-[600px] lg:text-lg text-[clamp(13px,1.1vw,15px)]">
            Ao longo dessa trajetória, adquiri experiência em organização de arquitetura front-end, padronização de componentes, versionamento com Git, fluxos de CI/CD e boas práticas de performance e UX/UI. 
          </p>
          <p className="text-white font-semibold mt-2 ">Frontend</p>
          <div className="flex flex-wrap gap-2">
            {front.map((t) => (
              <Button variant="primary" size="sm"
                key={t}
              className="text-white mt-1"
              >
                {t}
              </Button>
            ))}
          </div>
          <p className="text-white font-semibold mt-4">Backend</p>
          <div className="flex flex-wrap gap-2">
            {back.map((t) => (
              <Button variant="primary" size="sm"
                key={t}
              className="text-white mt-1"
              >
                {t}
              </Button>
            ))}
          </div>
          <p className="text-white font-semibold mt-4">Controle de verisonamento e observabilidade</p>
          <div className="flex flex-wrap gap-2">
            {versionControl.map((t) => (
              <Button variant="primary" size="sm"
                key={t}
              className="text-white mt-1"
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

      
        <div
          data-col="right"
          className="absolute inset-0 z-10 grid pointer-events-none"
          style={{ gridTemplateRows: `repeat(${STRIPS}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: STRIPS }).map((_, i) => (
            <div
              key={i}
              data-box
              className={[
                "bg-[#0b0b0b] will-change-transform",
                i !== 0 ? "-mt-px" : "",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
              ].join(" ")}
              style={{
                transform: "translateZ(0) scaleY(1.02)",
                transformOrigin: i % 2 === 0 ? "left center" : "right center",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}