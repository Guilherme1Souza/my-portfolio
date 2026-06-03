"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { EMAIL, socials } from "@/data/contact";
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
              Front-end. Use o formulário ou, se preferir, o e-mail direto.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 text-title hover:text-verde transition-colors duration-200 break-all"
            >
              <span className="font-bold text-[clamp(16px,1.8vw,22px)]">{EMAIL}</span>
              <ArrowUpRightIcon className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <div className="flex flex-wrap gap-3 mt-8">
              {socials.map(({ key, label, href, Icon }) => {
                const isMail = href.startsWith("mailto:");
                return (
                  <a
                    key={key}
                    href={href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noreferrer"}
                    aria-label={label}
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-title/15 text-title transition-colors duration-200 hover:border-verde hover:text-verde focus:outline-none focus:ring-2 focus:ring-verde/40"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{label}</span>
                  </a>
                );
              })}
            </div>
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
