import React, { FC } from "react";
import Image1 from "@/public/images/listing/about-place/apartment.jpg";
import Image from "next/image";

const AboutPlace: FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-10">
      <div className="pt-0 lg:pt-40 lg:pe-14 px-6 lg:px-0 pb-0 md:pb-32">
        <p className="text-base md:text-lg font-medium text-[#222222] mb-2 md:mb-4">
          Step 1
        </p>
        <h2 className="text-3xl md:text-5xl font-medium text-[#222222] mb-2 md:mb-6">
          Tell us about your place
        </h2>
        <p className="text-base md:text-lg font-normal text-[#222222]">
          In this step, we'll ask you which type of property you have and if
          guests will book the entire place or just a room. Then let us know the
          location and how many guests can stay.
        </p>
      </div>
      <div className="relative w-full h-[300px] md:h-[550px]">
        <Image
          src={Image1}
          alt="Apartment"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default AboutPlace;
