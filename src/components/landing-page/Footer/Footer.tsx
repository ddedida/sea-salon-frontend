import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-fit w-full items-center justify-center bg-bw-primary">
      <div className="my-20 flex h-fit w-[1280px] flex-col gap-y-10">
        {/* Main */}
        <div className="flex h-fit w-full items-start justify-between">
          <h1 className="font-playFairDisplay text-5xl font-bold text-white">
            SEA Salon
          </h1>
          <div className="flex h-fit w-fit flex-col items-end gap-y-6">
            <h2 className="font-inter text-2xl font-semibold text-white">
              Contact Us
            </h2>
            <div className="flex flex-col items-end gap-y-3 font-inter text-lg font-light text-white">
              <p>08123456789 (Thomas)</p>
              <p>08164829372 (Sekar)</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex h-fit w-full flex-col items-center gap-y-6">
          <hr className="w-full border-t border-white" />
          <p className="font-inter text-lg font-light text-white">
            SEA Salon 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
