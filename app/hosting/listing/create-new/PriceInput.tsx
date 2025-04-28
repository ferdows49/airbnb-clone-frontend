import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { LiaDollarSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "@/features/property/create-property/createPropertySlice";

type Props = {};

const PriceInput = (props: Props) => {
  const dispatch = useDispatch();
  const price = useSelector((state: any) => state.createProperty.price);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d{0,6}$/.test(value)) {
      const cleanedValue = value.replace(/^0+(?!$)/, "");
      dispatch(setPrice(Number(cleanedValue)));
    }
  };

  return (
    <div className="px-6 md:px-0 mb-48 mt-0 md:mt-12 w-full md:w-auto">
      <h3 className="text-2xl md:text-4xl font-medium text-[#222222] mb-1 md:mb-2">
        Now, set your price
      </h3>
      <p className="text-base md:text-lg font-normal text-[#6A6A6A] mb-6 md:mb-8">
        You can change it anytime.
      </p>
      <div className="flex items-center ms-0 md:ms-32 mt-14">
        <p className="text-9xl text-black font-bold">$</p>
        <Input
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={handleChange}
          value={price || 0}
          className="h-32 text-9xl p-0 md:text-9xl max-w-[600px] border-none bg-white rounded-lg shadow-none focus-visible:outline-none focus-visible:ring-0 font-bold"
        />
      </div>
    </div>
  );
};

export default PriceInput;
