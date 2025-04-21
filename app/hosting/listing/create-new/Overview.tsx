import React, { FC } from "react";
import Image1 from "@/public/images/listing/overview/1.webp";
import Image2 from "@/public/images/listing/overview/2.avif";
import Image3 from "@/public/images/listing/overview/3.avif";
import Image from "next/image";

type OverviewPropsTypes = {};

const Overview: FC<OverviewPropsTypes> = () => {
  return (
    <div className="flex flex-col md:flex-row px-6 md:px-0">
      <div className="pe-0 md:pe-10 pt-0 md:pt-52">
        <h1 className="text-4xl md:text-5xl font-medium text-[#222222] max-w-[500px] font-airbnb pb-6">
          It’s easy to get started on Airbnb
        </h1>
      </div>
      <div className="ps-0 lg:ps-40 pt-0 md:pt-6">
        <div className="flex gap-3 md:gap-4 pb-10 border-b-2 border-[#E5E5E5]">
          <div>
            <p className="text-lg md:text-2xl font-medium text-[#222222]">1</p>
          </div>
          <div className="max-w-[400px]">
            <h3 className="text-lg md:text-2xl font-medium text-[#222222]">
              Tell us about your place
            </h3>
            <p className="text-sm md:text-lg font-normal text[#6A6A6A]">
              Share some basic info, like where it is and how many guests can
              stay.
            </p>
          </div>
          <div className="h-20 md:h-28 w-20 md:w-28">
            <Image src={Image1} alt=""  />
          </div>
        </div>
        <div className="flex gap-3 md:gap-4 py-10 border-b-2 border-[#E5E5E5]">
          <div>
            <p className="text-lg md:text-2xl font-medium text-[#222222]">2</p>
          </div>
          <div className="max-w-[400px]">
            <h3 className="text-lg md:text-2xl font-medium text-[#222222]">
              Make it stand out
            </h3>
            <p className="text-sm md:text-lg font-normal text[#6A6A6A]">
              Add 5 or more photos plus a title and description—we’ll help you
              out.
            </p>
          </div>
          <div className="h-20 md:h-28 w-20 md:w-28">
            <Image src={Image2} alt=""  />
          </div>
        </div>
        <div className="flex gap-3 md:gap-4 pt-10">
          <div>
            <p className="text-lg md:text-2xl font-medium text-[#222222]">3</p>
          </div>
          <div className="max-w-[400px]">
            <h3 className="text-lg md:text-2xl font-medium text-[#222222]">
              Finish up and publish
            </h3>
            <p className="text-sm md:text-lg font-normal text[#6A6A6A]">
              Choose a starting price, verify a few details, then publish your
              listing.
            </p>
          </div>
          <div className="h-20 md:h-28 w-20 md:w-28">
            <Image src={Image3} alt=""  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
