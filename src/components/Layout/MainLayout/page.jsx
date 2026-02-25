"use client";

import React from "react";
import clsx from "clsx";

const MainLayout = ({ children, wide = false, className }) => {
  return (
    <div className="w-full min-h-screen">
      <main
        className={clsx(
          "mx-auto w-full",
          wide ? "max-w-[1536px]" : "max-w-[1440px]",
          "px-12 sm:px-8 md:px-10 lg:px-14",
          "box-border flex flex-col",
          className
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;