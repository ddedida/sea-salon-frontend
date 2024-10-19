"use client";

import React, { useEffect, useState } from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 z-50 flex h-fit w-full justify-center">
      <div
        className={`relative h-fit w-[1280px] rounded-full px-6 py-4 transition-colors duration-300 ${scrolled ? "border border-bw-outline bg-white shadow-md" : "bg-transparent"} flex items-center justify-between`}
      >
        {/* Left Navigation */}
        <div className="flex h-fit w-fit gap-x-6">
          <NavbarButton label="Home" authButton={false} />
          <NavbarButton label="Our Services" authButton={false} />
          <NavbarButton label="Reviews" authButton={false} />
          <NavbarButton label="Contacts" authButton={false} />
        </div>

        {/* Title */}
        <h1 className="absolute left-1/2 -translate-x-1/2 transform font-playFairDisplay text-[40px] font-bold text-bw-primary">
          SEA Salon
        </h1>

        {/* Right Navigation */}
        <div className="flex h-fit w-fit gap-x-6">
          <NavbarButton
            label="Log In"
            authButton={true}
            logIn={true}
            scrolled={scrolled}
          />
          <NavbarButton label="Sign Up" authButton={true} logIn={false} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
