"use client";

import React, { forwardRef } from "react";
import clsx from "clsx";

const variantStyles = {
  primary:
    "bg-[#2f4731] text-white cursor-pointer hover:bg-gray-300/20 hover:text-title disabled:opacity-60 disabled:pointer-events-none",

  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-60 disabled:pointer-events-none",

  danger:
    "bg-red-600 text-white hover:bg-red-700 disabled:opacity-60 disabled:pointer-events-none",

  success:
    "bg-[#3C5B3E] text-white hover:bg-[#2f4731] disabled:opacity-60 disabled:pointer-events-none",

  ghost:
    "bg-transparent text-[#3C5B3E] hover:bg-[#3C5B3E]/10 disabled:opacity-60 disabled:pointer-events-none",

  outline:
    "bg-transparent border border-[#3C5B3E] text-[#3C5B3E] hover:bg-[#3C5B3E]/10 disabled:opacity-60 disabled:pointer-events-none",
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
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading}
      className={clsx(
        "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#3C5B3E]/40",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;