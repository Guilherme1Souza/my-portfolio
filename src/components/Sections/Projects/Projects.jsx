"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full bg-branco scroll-mt-24 py-24 lg:py-32"
    >
      <div className="w-[90%] max-w-[1440px] mx-auto">
        {/* Cabeçalho (mesmo padrão da seção About) */}
        <header className="mb-16 lg:mb-24">
          <p className="font-bold tracking-[0.2em] uppercase text-verde text-[11px] mb-3">
            Projetos
          </p>
          <div className="w-11 h-[3px] bg-verde mb-4" />
          <h2 className="font-extrabold tracking-[0.02em] leading-[0.92] text-title text-[clamp(40px,5vw,68px)]">
            Coisas que<br />
            <span className="text-verde">construí</span>
          </h2>
        </header>

        <div className="flex flex-col gap-20 lg:gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
