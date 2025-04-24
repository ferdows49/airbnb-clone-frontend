"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import React, { FC, useState } from "react";
import { FaAirbnb } from "react-icons/fa";
import Overview from "./Overview";
import AboutPlace from "./AboutPlace";
import PropertyType from "./PropertyType";
import RoomType from "./RoomType";
import PropertyAddress from "./PropertyAddress";
import PlaceBasicInfo from "./PlaceBasicInfo";
import Amenities from "./Amenities";
import PropertyPhotos from "./PropertyPhotos";
import PropertyTitle from "./PropertyTitle";
import PropertyDescription from "./PropertyDescription";
import PriceInput from "./PriceInput";

const CreatePropertySteps: FC = () => {
  const [steps, useSteps] = useState<number>(0);

  return (
    <div className="relative h-screen flex flex-col">
      <div className="max-w-screen-3xl px-4 md:px-8 lg:px-12 2xl:px-20 py-6 lg:py-12">
        <div className="flex items-center justify-between">
          <Link href="/">
            <FaAirbnb size={40} />
          </Link>
          {/* <Link href="/">
            <Button className="cursor-pointer" variant={"outline"}>
              {steps > 0 ? "save & exit" : "exit"}
            </Button>
          </Link> */}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-start px-0 md:px-8 h-auto overflow-auto">
        {steps === 0 && <Overview />}
        {steps === 1 && <AboutPlace />}
        {steps === 2 && <PropertyType />}
        {steps === 3 && <RoomType />}
        {steps === 4 && <PropertyAddress />}
        {steps === 5 && <PlaceBasicInfo />}
        {steps === 6 && <Amenities />}
        {steps === 7 && <PropertyPhotos />}
        {steps === 8 && <PropertyTitle />}
        {steps === 9 && <PropertyDescription />}
        {steps === 10 && <PriceInput />}
      </div>
      <div className="absolute left-0 right-0 bottom-0 z-10 bg-white">
        <Progress value={(steps / 11) * 100} className="" />
        <div className="px-6 md:px-8 lg:px-12 2xl:px-20 py-5 text-end flex items-center justify-between">
          {steps > 0 ? (
            <Button
              onClick={() => useSteps(steps - 1)}
              className="cursor-pointer bg-pink-600"
              size={"lg"}
            >
              Back
            </Button>
          ) : (
            <div></div>
          )}
          <Button
            onClick={() => useSteps(steps + 1)}
            className="cursor-pointer bg-pink-600"
            size={"lg"}
          >
            {steps === 0 ? "Get Started" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePropertySteps;
