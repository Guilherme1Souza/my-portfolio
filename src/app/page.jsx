import React from "react";
import NavBar from "@/components/Layout/NavBar/NavBar";
import Header from "@/components/Sections/Header/Header";
import About from "@/components/Sections/About/About";
import Projects from "@/components/Sections/Projects/Projects";
import Testimonials from "@/components/Sections/Testimonials/Testimonials";
import Contact from "@/components/Sections/Contact/Contact";
import Footer from "@/components/Layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
