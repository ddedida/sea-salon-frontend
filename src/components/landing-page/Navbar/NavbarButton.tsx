import React from "react";

type NavbarButtonProps = {
  label: string;
  authButton: boolean;
  logIn?: boolean;
  scrolled?: boolean;
};

const NavbarButton: React.FC<NavbarButtonProps> = ({
  label = "Button",
  authButton = false,
  logIn = false,
  scrolled = false,
}) => {
  return (
    <>
      {authButton ? (
        <button
          className={`font-inter text-base font-semibold ${logIn ? "bg-white text-bw-primary" : "bg-bw-primary text-white"} ${scrolled ? "ring-1 ring-bw-icon" : ""} rounded-full px-6 py-2`}
        >
          {label}
        </button>
      ) : (
        <button className="flex h-fit w-fit justify-center px-2 py-2 font-inter text-base font-normal text-bw-primary">
          {label}
        </button>
      )}
    </>
  );
};

export default NavbarButton;
