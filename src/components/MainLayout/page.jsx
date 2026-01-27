"use client";

import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="px-6 py-10 md:px-12 lg:px-24 xl:px-32 bg-bege overflow-y-hidden">
      <main className="max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
