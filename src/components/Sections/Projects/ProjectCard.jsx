"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/UI/Button/Button";
import useInView from "@/hooks/useInView";

export default function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const isOdd = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={ref}
      className={[
        "flex flex-col gap-8 lg:gap-14 items-center",
        isOdd ? "lg:flex-row-reverse" : "lg:flex-row",
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
    >
      {/* Imagem */}
      <div className="w-full lg:w-1/2">
        <div className="group relative w-full aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-verde-escuro to-verde">
              <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-sm">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Texto */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <span className="text-verde font-bold tracking-[0.2em] text-sm">
          {number}
        </span>
        <h3 className="font-extrabold tracking-[0.02em] leading-[1.05] mt-2 mb-4 text-title text-[clamp(28px,3.5vw,44px)]">
          {project.title}
        </h3>
        <p className="text-text leading-[1.8] max-w-[560px] text-[clamp(14px,1.1vw,16px)]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((tech) => (
            <Button key={tech} variant="primary" size="sm" className="cursor-default">
              {tech}
            </Button>
          ))}
        </div>

        <div className="mt-7">
          <Button
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            size="md"
            className="gap-2"
          >
            Ver no ar
            <ArrowUpRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
