"use client";

import Image from "next/image";

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0] ?? "")
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({ testimonial }) {
  const { quote, name, role, company, avatar, imageAlt } = testimonial;

  return (
    <figure className="flex flex-col items-start text-left">
      {/* Aspas decorativas */}
      <span
        aria-hidden="true"
        className="font-serif text-verde leading-none select-none"
        style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
      >
        &ldquo;
      </span>

      <blockquote
        className="text-white/90 leading-[1.7] max-w-[820px] -mt-4 mb-8"
        style={{ fontSize: "clamp(16px, 1.6vw, 24px)" }}
      >
        {quote}
      </blockquote>

      {/* Autor: avatar + nome/cargo */}
      <figcaption className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-verde/60 shrink-0">
          {avatar ? (
            <Image
              src={avatar}
              alt={imageAlt ?? name}
              fill
              className="object-cover"
              sizes="56px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-verde text-white font-bold text-lg">
              {getInitials(name)}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-white font-semibold tracking-wide">{name}</span>
          <span className="text-white/60 text-sm">
            {role}
            {company ? ` · ${company}` : ""}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
