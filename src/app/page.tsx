import React from "react";
import Hero from "@/components/landing-page/Hero/Hero";
import Service from "@/components/landing-page/Service/Service";
import Footer from "@/components/landing-page/Footer/Footer";
import Navbar from "@/components/landing-page/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Service />
      <Footer />
    </main>
  );
}
