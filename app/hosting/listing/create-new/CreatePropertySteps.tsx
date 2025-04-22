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

const CreatePropertySteps: FC = () => {
  const [steps, useSteps] = useState<number>(5);

  return (
    <div className="relative h-screen flex flex-col">
      <div className="max-w-screen-3xl px-4 md:px-8 lg:px-12 2xl:px-20 py-6 lg:py-12">
        <div className="flex items-center justify-between">
          <Link href="/">
            <FaAirbnb size={40} />
          </Link>
          <Link href="/">
            <Button className="cursor-pointer" variant={"outline"}>
              {steps > 0 ? "save & exit" : "exit"}
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-start px-0 md:px-8 h-auto overflow-auto">
        {steps === 0 && <Overview />}
        {steps === 1 && <AboutPlace />}
        {steps === 2 && <PropertyType />}
        {steps === 3 && <RoomType />}
        {steps === 4 && <PropertyAddress />}
        {steps === 5 && <PlaceBasicInfo />}
      </div>
      <div className="absolute left-0 right-0 bottom-0 z-10">
        <Progress value={(steps / 12) * 100} className="" />
        <div className="px-6 md:px-8 lg:px-12 2xl:px-20 py-5 text-end">
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
