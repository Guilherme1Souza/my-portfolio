"use client";

import React from "react";

const MainLayout = ({ children, wide = false, style }) => {
  return (
    <div
      style={style}
      className="
        min-h-screen bg-bege overflow-x-hidden
        px-4 sm:px-6 md:px-10 lg:px-14
      "
    >
      <main className="relative box-border flex flex-col items-stretch">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
