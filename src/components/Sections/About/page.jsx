import React from "react";

import MainLayout from "@/components/Layout/MainLayout/page";
import Button from "@/components/UI/Button/page";

export default function About() {
  return (
    <section id="about" className="bg-verde w-full min-h-screen py-28">
      <MainLayout>
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Sobre
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <p className="text-base md:text-lg text-white leading-relaxed">
                Iniciei minha carreira como Desenvolvedor Front-end em 2024, na
                Taxcel, atuando no desenvolvimento de soluções fiscais digitais.
                Com foco em React, Next.js e TypeScript, participei de projetos
                desafiadores ponta a ponta, desde a estruturação do design
                system e modelagem de interfaces até integrações com APIs REST
                e deploy em ambiente produtivo.
              </p>

              <p className="text-base md:text-lg text-white leading-relaxed">
                Ao longo dessa trajetória, adquiri experiência em organização
                de arquitetura front-end, padronização de componentes,
                versionamento com Git, fluxos de CI/CD e boas práticas de
                performance e UX/UI. Busco sempre desenvolver soluções
                escaláveis, bem estruturadas e orientadas à melhor experiência
                do usuário, agregando valor real ao produto e ao negócio.
              </p>

              <div>
                <h2 className="text-lg font-semibold text-white mb-4">
                  Principais tecnologias
                </h2>

                <h3 className="text-sm font-medium text-white/70 mb-3">
                  Front-end
                </h3>

                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="sm">
                    React
                  </Button>

                  <Button variant="primary" size="sm">
                    Next.js
                  </Button>

                  <Button variant="primary" size="sm">
                    TypeScript
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </section>
  );
}