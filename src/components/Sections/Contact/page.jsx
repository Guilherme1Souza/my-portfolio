"use client";

import useInView from "@/hooks/useInView";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      className="relative w-full bg-branco scroll-mt-24 py-24 lg:py-32"
    >
      <div
        ref={ref}
        className={[
          "w-[90%] max-w-[1440px] mx-auto transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ─── Coluna esquerda: convite + contato direto ─── */}
          <div>
            <header className="mb-8 lg:mb-10">
              <p className="font-bold tracking-[0.2em] uppercase text-verde text-[11px] mb-3">
                Contato
              </p>
              <div className="w-11 h-[3px] bg-verde mb-4" />
              <h2 className="font-extrabold tracking-[0.02em] leading-[0.92] text-title text-[clamp(40px,5vw,68px)]">
                Vamos<br />
                <span className="text-verde">conversar?</span>
              </h2>
            </header>

            <p className="text-text leading-[1.8] max-w-[520px] text-[clamp(14px,1.1vw,17px)] mb-8">
              Estou aberto a oportunidades e projetos como Desenvolvedor
              Front-end. Use o formulário.
            </p>
          </div>

          {/* ─── Coluna direita: formulário ─── */}
          <div className="rounded-3xl border border-title/10 bg-cinza/60 p-6 sm:p-8 lg:p-10 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
