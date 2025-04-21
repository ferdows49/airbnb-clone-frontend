"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import React, { useState } from "react";
import { FaAirbnb } from "react-icons/fa";
import Overview from "./Overview";

type Props = {};

const CreatePropertySteps = (props: Props) => {
  const [steps, useSteps] = useState(0);

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
      <div className="flex-1 flex justify-center px-0 md:px-8">
        {steps === 0 && <Overview />}
      </div>
      <div className="absolute left-0 right-0 bottom-0 z-10">
        <Progress value={(steps / 3) * 100} className="" />
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
