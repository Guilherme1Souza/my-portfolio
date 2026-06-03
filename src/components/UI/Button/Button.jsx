"use client";

import React, { forwardRef } from "react";
import clsx from "clsx";

const variantStyles = {
  primary:
    "bg-verde-musgo text-white cursor-pointer hover:bg-verde hover:text-white disabled:opacity-60 disabled:pointer-events-none",

  secondary:
    "bg-transparent cursor-pointer border border-white hover:bg-gray-300 hover:text-verde-escuro disabled:opacity-60 disabled:pointer-events-none",

  danger:
    "bg-red-600 text-white hover:bg-red-700 disabled:opacity-60 disabled:pointer-events-none",

  success:
    "bg-verde-pinho text-white hover:bg-verde-musgo disabled:opacity-60 disabled:pointer-events-none",

  ghost:
    "bg-transparent text-verde-pinho hover:bg-verde-pinho/10 disabled:opacity-60 disabled:pointer-events-none",

  outline:
    "bg-transparent border border-verde-pinho text-verde-pinho hover:bg-verde-pinho/10 disabled:opacity-60 disabled:pointer-events-none",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs rounded-full",
  md: "px-8 py-2 text-sm rounded-full",
  lg: "px-9 py-3 text-base rounded-full",
};

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    className,
    type = "button",
    href,
    ...props
  },
  ref,
) {
  const isLink = href != null;
  const Comp = isLink ? "a" : "button";

  // Atributos específicos de cada elemento (evita type/disabled em <a>)
  const elementProps = isLink
    ? { href }
    : { type, disabled: disabled || loading, "aria-busy": loading };

  return (
    <Comp
      ref={ref}
      className={clsx(
        "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-verde-pinho/40",
        variantStyles[variant],
        sizeStyles[size],
        isLink && (disabled || loading) && "opacity-60 pointer-events-none",
        className,
      )}
      {...elementProps}
      {...props}
    >
      {children}
    </Comp>
  );
});

export default Button;