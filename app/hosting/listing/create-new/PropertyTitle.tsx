import { Input } from "@/components/ui/input";
import { setTitle } from "@/features/property/create-property/createPropertySlice";
import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PropertyTitle: FC = () => {
  const dispatch = useDispatch();
  const title = useSelector((state: any) => state.createProperty.title);

  return (
    <div className="px-6 md:px-0 mb-48 mt-0 md:mt-12">
      <h3 className="text-2xl md:text-4xl font-medium text-[#222222] mb-1 md:mb-2">
        Now, let's give your earth home a title
      </h3>
      <p className="text-base md:text-lg font-normal text-[#6A6A6A] mb-6 md:mb-8">
        Short titles work best. Have fun with it—you can always change it later.
      </p>
      <Input
        type="text"
        onChange={(e) => {
          if (e.target.value.length <= 32) {
            dispatch(setTitle(e.target.value));
          }
        }}
        value={title || ""}
        className="h-12 bg-[#F7F7F7] border border-gray-400 rounded-lg shadow-sm focus-visible:outline-none focus-visible:ring-0 text-base md:text-lg font-normal"
      />
      <p className="text-sm font-medium text-[#6A6A6A] mt-2">
        {title?.length || 0}/32
      </p>
    </div>
  );
};

export default PropertyTitle;
