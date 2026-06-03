"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { EMAIL, socials } from "@/data/contact";
import useInView from "@/hooks/useInView";

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
        {/* Cabeçalho (mesmo padrão das demais seções) */}
        <header className="mb-10 lg:mb-14">
          <p className="font-bold tracking-[0.2em] uppercase text-verde text-[11px] mb-3">
            Contato
          </p>
          <div className="w-11 h-[3px] bg-verde mb-4" />
          <h2 className="font-extrabold tracking-[0.02em] leading-[0.92] text-title text-[clamp(40px,5vw,68px)]">
            Vamos<br />
            <span className="text-verde">conversar?</span>
          </h2>
        </header>

        <p className="text-text leading-[1.8] max-w-[620px] text-[clamp(14px,1.1vw,17px)] mb-10">
          Estou aberto a oportunidades e projetos como Desenvolvedor Front-end.
          Mande uma mensagem — respondo o quanto antes.
        </p>

        {/* E-mail em destaque */}
        <a
          href={`mailto:${EMAIL}`}
          className="group inline-flex items-center gap-3 text-title hover:text-verde transition-colors duration-200 break-all"
        >
          <span className="font-extrabold tracking-[0.01em] text-[clamp(22px,3.2vw,44px)]">
            {EMAIL}
          </span>
          <ArrowUpRightIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        {/* Links sociais */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-12">
          {socials.map(({ key, label, href, Icon }) => {
            const isMail = href.startsWith("mailto:");
            return (
              <a
                key={key}
                href={href}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noreferrer"}
                aria-label={label}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-title/15 text-title transition-colors duration-200 hover:border-verde hover:text-verde focus:outline-none focus:ring-2 focus:ring-verde/40"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
