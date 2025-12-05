"use client";

import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="relative my-10 box-border flex flex-col items-stretch">
        {" "}
        {children}{" "}
      </main>
    </div>
  );
};
export default MainLayout;
