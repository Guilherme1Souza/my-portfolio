import clsx from "clsx";

/**
 * Container central do site: largura fluida (90%) com teto de 1440px,
 * sempre centralizado. Fonte única de gutter horizontal das seções.
 * Universal — funciona tanto em Server quanto em Client Components.
 *
 * @param {Object} props
 * @param {React.ElementType} [props.as="div"] Tag/Componente raiz.
 * @param {string} [props.className] Classes extras mescladas ao container.
 */
export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={clsx("mx-auto w-[90%] max-w-[1440px]", className)} {...props}>
      {children}
    </Tag>
  );
}
