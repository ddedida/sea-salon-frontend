import React from "react";
import Image from "next/image";
import haircutModel from "../../../../public/images/model-haircut.png";
import manicureModel from "../../../../public/images/model-manicure.png";
import facialModel from "../../../../public/images/model-facial.png";

const Service = () => {
  return (
    <section className="flex h-fit items-center justify-center bg-bw-surface">
      <div className="my-20 flex h-fit w-[1280px] items-start justify-between">
        {/* Header */}
        <header className="flex w-80 flex-col gap-y-8">
          <h1 className="font-playFairDisplay text-5xl font-bold text-bw-primary">
            Our Services
          </h1>
          <p className="font-inter text-xl font-normal text-bw-primary">
            Beyond haircuts and styling, dliscover a comprehensive range of
            services, from manicure and pedicure to facial treatments
          </p>
        </header>

        {/* Service Images */}
        <div className="flex gap-x-5">
          <figure className="relative h-80 w-[280px] rounded-2xl bg-project-20">
            <Image
              alt="Haircut and Styling Model"
              src={haircutModel}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
            />
            <figcaption className="absolute right-5 top-5 flex h-fit w-fit items-center justify-center rounded-full bg-bw-primary px-4 py-2 font-inter text-base font-bold text-white">
              Haircuts and Styling
            </figcaption>
          </figure>
          <figure className="relative h-[400px] w-[280px] rounded-2xl bg-project-60">
            <Image
              alt="Manicure and Pedicure Model"
              src={manicureModel}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
            />
            <figcaption className="absolute right-5 top-5 flex h-fit w-fit items-center justify-center rounded-full bg-bw-primary px-4 py-2 font-inter text-base font-bold text-white">
              Manicure and Pedicure
            </figcaption>
          </figure>
          <figure className="relative h-80 w-[280px] rounded-2xl bg-project-40">
            <Image
              alt="Facial Treatments Model"
              src={facialModel}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
            />
            <figcaption className="absolute right-5 top-5 flex h-fit w-fit items-center justify-center rounded-full bg-bw-primary px-4 py-2 font-inter text-base font-bold text-white">
              Facial Treatments
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Service;
