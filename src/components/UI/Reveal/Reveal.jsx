"use client";

import clsx from "clsx";
import useInView from "@/hooks/useInView";

/**
 * Wrapper de revelação no scroll. Os filhos podem ser Server Components —
 * só a observação da viewport roda no cliente, mantendo o conteúdo fora
 * do bundle JS. Respeita prefers-reduced-motion (via useInView).
 *
 * @param {Object} props
 * @param {React.ElementType} [props.as="div"] Tag/Componente raiz.
 * @param {string} [props.className] Classes extras mescladas à animação.
 */
export default function Reveal({ as: Tag = "div", className, children, ...props }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={clsx(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
