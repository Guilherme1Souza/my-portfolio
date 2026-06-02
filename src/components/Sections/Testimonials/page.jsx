"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { testimonials } from "@/data/testimonials";
import useInView from "@/hooks/useInView";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);
  const count = testimonials.length;

  const goTo = (index) => setActive((index + count) % count);
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <section
      id="testimonials"
      className="relative w-full bg-verde-escuro scroll-mt-24 py-24 lg:py-32 overflow-hidden"
    >
      <div
        ref={ref}
        className={[
          "w-[90%] max-w-[1100px] mx-auto transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        {/* Cabeçalho (padrão das demais seções) */}
        <header className="mb-14 lg:mb-20 text-center flex flex-col items-center">
          <p className="font-bold tracking-[0.2em] uppercase text-verde text-[11px] mb-3">
            Depoimentos
          </p>
          <div className="w-11 h-[3px] bg-verde mb-4" />
          <h2 className="font-extrabold tracking-[0.02em] leading-[0.92] text-white text-[clamp(40px,5vw,68px)]">
            O que dizem <span className="text-verde">sobre mim</span>
          </h2>
        </header>

        {/* Trilho do carrossel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="w-full shrink-0">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            type="button"
            onClick={prev}
            aria-label="Depoimento anterior"
            className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-verde/50 cursor-pointer"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para o depoimento ${i + 1}`}
                aria-current={i === active}
                className={[
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  i === active ? "w-6 bg-verde" : "w-2 bg-white/30 hover:bg-white/50",
                ].join(" ")}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Próximo depoimento"
            className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-verde/50 cursor-pointer"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
