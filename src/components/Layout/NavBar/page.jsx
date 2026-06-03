"use client";

import React, { useMemo, useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const LINKS = [
  {
    href: "#home",
    title: "Home",
    descr: "Ir para a página inicial",
    accent: "text-[#568259]/20",
  },
  {
    href: "#about",
    title: "Sobre",
    descr: "Quem é o Guilherme?",
    accent: "text-[#568259]/20",
  },
  {
    href: "#projects",
    title: "Projetos",
    descr: "Conheça alguns dos meus trabalhos",
    accent: "text-[#568259]/20",
  },
  {
    href: "#testimonials",
    title: "Testemunhas",
    descr: "O que meus clientes dizem",
    accent: "text-[#568259]/20",
  },
  {
    href: "#contact",
    title: "Contatos",
    descr: "Vamos conversar sobre o seu projeto",
    accent: "text-[#568259]/20",
  },
];

const delays = [
  "delay-[850ms]",
  "delay-[950ms]",
  "delay-[1050ms]",
  "delay-[1150ms]",
  "delay-[1250ms]",
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const numberedLinks = useMemo(
    () =>
      LINKS.map((l, i) => ({
        ...l,
        num: `0${i + 1}`,
        delay: delays[i] ?? "delay-[1250ms]",
      })),
    [],
  );

  const handleNav = (e, href) => {
  // se for "#", só fecha
  if (!href || href === "#") {
    e.preventDefault();
    setOpen(false);
    return;
  }

  // âncora tipo "#about"
  if (href.startsWith("#")) {
    e.preventDefault();
    const id = href.slice(1);

    setOpen(false);

    // espera o menu fechar (mesmo frame), depois rola
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;

      // se você tem navbar fixa, use scroll-mt-* na section (recomendado)
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // atualiza a URL (opcional, mas legal)
      history.replaceState(null, "", href);
    });

    return;
  }

  // link externo/normal
  setOpen(false);
};

  return (
    <>
      <nav
        className="
    fixed top-0 left-0 w-full z-[900] bg-verde
  "
      >
        <div className="w-[95%] max-w-[1440px] mx-auto py-5">
          <div className="flex items-center justify-between">
            <a
              href="#"
              title="Our Nice Logo"
              className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-verde text-[#2c2c2c] text-[25px] font-bold"
            ></a>

            <button
              type="button"
              title="Open Menu"
              aria-label="Open Menu"
              onClick={() => setOpen(true)}
              className="relative w-10 h-7 bg-transparent border-0 cursor-pointer group outline-none"
            >
              <span
                className="
                  absolute left-0 top-0 h-[3px] w-full rounded-[3px] bg-white
                  transition-transform duration-200
                  [transition-timing-function:cubic-bezier(0,1.07,1,2.71)]
                  group-hover:scale-x-110 group-hover:-translate-y-[3px]
                "
              />
              <span
                className="
                  absolute left-0 top-[12px] h-[3px] w-full rounded-[3px] bg-white
                  transition-transform duration-200
                  [transition-timing-function:cubic-bezier(0,1.07,1,2.71)]
                  group-hover:scale-x-90
                "
              />
              <span
                className="
                  absolute left-0 top-[24px] h-[3px] w-full rounded-[3px] bg-white
                  transition-transform duration-200
                  [transition-timing-function:cubic-bezier(0,1.07,1,2.71)]
                  group-hover:scale-x-110 group-hover:translate-y-[3px]
                "
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={[
          "fixed inset-0 z-[999]",
          open ? "opacity-100 visible" : "opacity-0 invisible",
          "transition-[opacity,visibility] duration-200",
        ].join(" ")}
        onClick={() => setOpen(false)}
      >
        <div
          className={[
            "absolute inset-0 bg-[#2c2c2c] pointer-events-none",
            "origin-left scale-x-0",
            open ? "scale-x-100" : "scale-x-0",
            "transition-transform duration-300 ease-out",
          ].join(" ")}
        />
        <div
          className={[
            "absolute inset-0 bg-white/70 pointer-events-none",
            "origin-left scale-x-0",
            open ? "scale-x-100" : "scale-x-0",
            "transition-transform duration-300 ease-out delay-[70ms]",
          ].join(" ")}
        />

        <div
          onClick={(e) => e.stopPropagation()}
          className={[
            "absolute inset-0 bg-white",
            "origin-left scale-x-0",
            open ? "scale-x-100" : "scale-x-0",
            "transition-transform duration-300 ease-out delay-[140ms]",
          ].join(" ")}
        >
          <div className="w-[95%] max-w-[1440px] mx-auto h-full py-5">
            <div className="flex flex-row-reverse justify-between items-start h-full">
              <button
                type="button"
                title="Close Menu"
                aria-label="Close Menu"
                onClick={() => setOpen(false)}
                className={[
                  "relative w-10 h-7 bg-transparent border-0 cursor-pointer outline-none",
                  open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[15px]",
                  "transition-all duration-200 delay-[650ms]",
                  "[transition-timing-function:cubic-bezier(0.14,1.01,0.54,1.38)]",
                ].join(" ")}
              >
                <span
                  className="
                    absolute left-[5%] top-[45%] h-[3px] w-[90%] rounded-[3px] bg-[#2c2c2c]
                    rotate-45 transition-transform duration-150
                    [transition-timing-function:cubic-bezier(0,1.07,1,2.71)]
                    hover:rotate-[25deg]
                  "
                />
                <span
                  className="
                    absolute left-[5%] top-[45%] h-[3px] w-[90%] rounded-[3px] bg-[#2c2c2c]
                    -rotate-45 transition-transform duration-150
                    [transition-timing-function:cubic-bezier(0,1.07,1,2.71)]
                    hover:-rotate-[25deg]
                  "
                />
              </button>

              <ul
                className={[
                  "h-full p-0 m-0 list-none",
                  open ? "opacity-100 visible" : "opacity-0 invisible",
                  "transition-[opacity,visibility] duration-0 delay-[850ms]",
                ].join(" ")}
              >
                {numberedLinks.map((l, idx) => (
                  <li
                    key={l.title}
                    className={[
                      "relative group",
                      idx !== numberedLinks.length - 1 ? "mb-[30px]" : "",
                      open
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-5 pointer-events-none",
                      "transition-all duration-100",
                      l.delay,
                    ].join(" ")}
                  >
                    <span className=" absolute inset-0 z-10 origin-left scale-x-0 bg-[#2c2c2c] pointer-events-none group-hover:animate-sweep" />
                    <span
                      className={[
                        "absolute -top-5 -left-5 -z-10 select-none pointer-events-none",
                        "text-[5rem] font-bold",
                        "opacity-0 invisible",
                        "group-hover:opacity-100 group-hover:visible",
                        "transition-[opacity,visibility] duration-200 delay-[450ms]",
                        l.accent,
                      ].join(" ")}
                    >
                      {l.num}
                    </span>

                  <a
                    href={l.href}
                    title={l.title}
                    onClick={(e) => handleNav(e, l.href)}
                    className="relative z-20 flex flex-col items-start text-[#2c2c2c]"
                  >
                    <span className="text-[3.4rem] font-bold tracking-[2px] transition-transform duration-200 ease-out group-hover:translate-x-[10px] delay-0 group-hover:delay-[450ms]">
                      {l.title}
                    </span>
                    <span className="mt-[5px] italic">{l.descr}</span>
                  </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
