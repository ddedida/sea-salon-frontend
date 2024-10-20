import React from "react";
import Image from "next/image";
import heroModel from "../../../../public/images/model-hero.png";

const Hero = () => {
  return (
    <section className="flex h-fit w-full justify-center bg-gradient-to-b from-[#FFDEBD] to-[#D0A579]">
      <div className="relative h-[640px] w-[1280px]">
        {/* Header */}
        <header className="absolute left-0 top-[232px] flex h-fit w-[560px] flex-col gap-y-8">
          <h1 className="font-playFairDisplay text-[56px] font-bold leading-[64px] text-project-110">
            Beauty and Elegance Redefined
          </h1>
          <button className="flex h-fit w-fit items-center justify-center rounded-full bg-white px-8 py-4 font-inter text-base font-semibold text-bw-primary">
            Booking Now
          </button>
        </header>

        {/* Model Image */}
        <figure className="absolute bottom-0 right-0 h-[440px] w-[560px] rounded-t-full bg-gradient-to-b from-[#C09162] to-[#C09162]">
          <Image
            alt="Hero Model"
            src={heroModel}
            style={{ width: "auto", height: "auto" }}
            priority={true}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
