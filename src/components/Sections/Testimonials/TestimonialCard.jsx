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
    <figure className="relative mx-auto max-w-[760px] flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/4 backdrop-blur-sm px-7 py-12 sm:px-14 sm:py-14 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.6)]">
      {/* Aspas decorativas */}
      <span
        aria-hidden="true"
        className="font-serif text-verde leading-none select-none mb-1"
        style={{ fontSize: "clamp(48px, 6vw, 84px)" }}
      >
        &ldquo;
      </span>

      <blockquote
        className="text-white/90 leading-[1.7] max-w-[620px] mb-9"
        style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}
      >
        {quote}
      </blockquote>

      {/* Avatar com fallback de iniciais */}
      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-verde/60 mb-3">
        {avatar ? (
          <Image
            src={avatar}
            alt={imageAlt ?? name}
            fill
            className="object-cover"
            sizes="64px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-verde text-white font-bold text-xl">
            {getInitials(name)}
          </div>
        )}
      </div>

      <figcaption className="flex flex-col">
        <span className="text-white font-semibold tracking-wide">{name}</span>
        <span className="text-white/60 text-sm">
          {role}
          {company ? ` · ${company}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}
