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

  const front = ["JavaScript", "React", "GraphQL", "Next.js", "TypeScript", "Tailwind CSS"];
  const back = ["Node.js", "Express"];
  const versionControl = ["Git", "GitHub", "Grafana", "Prometheus"];

  return (
    <div
      ref={triggerRef}
      className="relative w-full overflow-hidden flex flex-col lg:flex-row mx-auto max-w-full"
      style={{ minHeight: "100dvh" }}
    >
      {/* Divisor central — só desktop */}
      <div className="hidden lg:block pointer-events-none absolute left-1/2 top-0 h-full w-[2px] bg-verde-escuro z-20" />

      {/* ─── COLUNA ESQUERDA — Sobre Mim ─── */}
      <div className="relative w-full lg:w-1/2 shrink-0" style={{ minHeight: "100dvh" }}>
        <div className="absolute inset-0 z-0 flex flex-col justify-start lg:justify-center overflow-y-auto bg-verde-escuro"
          style={{ padding: "clamp(3rem, 5dvh, 5rem) clamp(1.5rem, 4vw, 4rem)" }}
        >
          <p style={{ fontSize: "clamp(9px, 0.7vw, 13px)" }}
            className="font-bold tracking-[0.2em] uppercase text-white mb-2">
            Trajetória
          </p>
          <div className="bg-verde mb-4" style={{ width: "clamp(32px, 2.5vw, 48px)", height: "3px" }} />

          <h1
            className="font-extrabold tracking-[0.02em] leading-[0.92] mb-4 text-white"
            style={{ fontSize: "clamp(36px, 4.2vw, 72px)" }}
          >
            Sobre<br />
            <span className="text-verde">Mim</span>
          </h1>

          <p
            className="text-white leading-[1.75] max-w-[600px] mb-5"
            style={{ fontSize: "clamp(12px, 1vw, 17px)" }}
          >
            Iniciei minha carreira como Desenvolvedor Front-end em 2024, na Taxcel, atuando no desenvolvimento de soluções fiscais digitais. Participei de projetos desafiadores ponta a ponta, desde a estruturação do design system e modelagem de interfaces até integrações com APIs REST e deploy em ambiente produtivo.
          </p>

          <div className="flex flex-col" style={{ gap: "clamp(12px, 1.5vh, 20px)" }}>
            <div className="flex flex-col text-white">
              <p
                className="font-bold tracking-[0.2em] uppercase mb-2"
                style={{ fontSize: "clamp(9px, 0.7vw, 13px)" }}
              >
                Educação
              </p>
              <div className="flex flex-row flex-wrap items-center" style={{ gap: "clamp(6px, 0.5vw, 10px)" }}>
                <p style={{ fontSize: "clamp(12px, 1vw, 16px)" }}>Ada Tech & Santander</p>
                <Button variant="secondary" size="sm" className="text-white" style={{ fontSize: "clamp(10px, 0.7vw, 13px)" }}>
                  2024 – 2024
                </Button>
              </div>
              <p className="text-white/70 mt-0.5" style={{ fontSize: "clamp(11px, 0.85vw, 14px)" }}>
                Santander Coders / Front-End
              </p>
            </div>

            <div className="flex flex-col text-white">
              <div className="flex flex-row flex-wrap items-center" style={{ gap: "clamp(6px, 0.5vw, 10px)" }}>
                <p style={{ fontSize: "clamp(12px, 1vw, 16px)" }}>Universidade Paulista</p>
                <Button variant="secondary" size="sm" className="text-white" style={{ fontSize: "clamp(10px, 0.7vw, 13px)" }}>
                  2022 – 2024
                </Button>
              </div>
              <p className="text-white/70 mt-0.5" style={{ fontSize: "clamp(11px, 0.85vw, 14px)" }}>
                Análise e Desenvolvimento de Sistemas
              </p>
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

      {/* ─── COLUNA DIREITA — Tech Skills ─── */}
      <div className="relative w-full lg:w-1/2 shrink-0" style={{ minHeight: "100dvh" }}>
        <div
          className="absolute inset-0 z-0 flex flex-col justify-start lg:justify-center overflow-y-auto bg-verde-escuro"
          style={{ padding: "clamp(3rem, 5dvh, 5rem) clamp(1.5rem, 4vw, 4rem)" }}
        >
          <p
            className="font-bold tracking-[0.2em] uppercase text-white mb-2"
            style={{ fontSize: "clamp(9px, 0.7vw, 13px)" }}
          >
            Stack
          </p>
          <div className="bg-verde mb-4" style={{ width: "clamp(32px, 2.5vw, 48px)", height: "3px" }} />

          <h1
            className="font-extrabold tracking-[0.02em] leading-[0.92] mb-4 text-white"
            style={{ fontSize: "clamp(36px, 4.2vw, 72px)" }}
          >
            Tech<br />
            <span className="text-verde">Skills</span>
          </h1>

          <p
            className="text-white leading-[1.75] max-w-[600px] mb-4"
            style={{ fontSize: "clamp(12px, 1vw, 17px)" }}
          >
            Ao longo dessa trajetória, adquiri experiência em organização de arquitetura front-end, padronização de componentes, versionamento com Git, fluxos de CI/CD e boas práticas de performance e UX/UI.
          </p>

          {/* Frontend */}
          <p className="text-white font-semibold mb-2" style={{ fontSize: "clamp(12px, 1vw, 16px)" }}>Frontend</p>
          <div className="flex flex-wrap mb-4" style={{ gap: "clamp(6px, 0.5vw, 10px)" }}>
            {front.map((t) => (
              <Button variant="primary" size="sm" key={t} className="text-white" style={{ fontSize: "clamp(10px, 0.7vw, 13px)" }}>
                {t}
              </Button>
            ))}
          </div>

          {/* Backend */}
          <p className="text-white font-semibold mb-2" style={{ fontSize: "clamp(12px, 1vw, 16px)" }}>Backend</p>
          <div className="flex flex-wrap mb-4" style={{ gap: "clamp(6px, 0.5vw, 10px)" }}>
            {back.map((t) => (
              <Button variant="primary" size="sm" key={t} className="text-white" style={{ fontSize: "clamp(10px, 0.7vw, 13px)" }}>
                {t}
              </Button>
            ))}
          </div>

          {/* Versionamento */}
          <p className="text-white font-semibold mb-2" style={{ fontSize: "clamp(12px, 1vw, 16px)" }}>
            Versionamento & Observabilidade
          </p>
          <div className="flex flex-wrap" style={{ gap: "clamp(6px, 0.5vw, 10px)" }}>
            {versionControl.map((t) => (
              <Button variant="primary" size="sm" key={t} className="text-white" style={{ fontSize: "clamp(10px, 0.7vw, 13px)" }}>
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