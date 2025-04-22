import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

type Props = {};

const PropertyAddress = (props: Props) => {
  return (
    <div className="px-6 md:px-0 mb-48">
      <h3 className="text-2xl md:text-4xl font-medium text-[#222222] mb-1 md:mb-2">
        Confirm your address
      </h3>
      <p className="text-base md:text-lg font-normal text-[#6A6A6A] mb-6 md:mb-8">
        Your address is only shared with guests after they’ve made a
        reservation.
      </p>
      <div className="flex flex-col gap-4">
        <div className="p-2 border border-gray-400 rounded-lg">
          <p className="text-xs md:text-sm font-medium text-[#6A6A6A]">
            Country / region
          </p>
          <Select>
            <SelectTrigger
              className="w-full cursor-pointer !border-none !shadow-none !ring-0 !outline-none focus:!border-none focus:!ring-0 active:!border-none active:!ring-0 hover:!border-none hover:!ring-0 p-0"
              size="sm"
            >
              <SelectValue placeholder="Select here" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="Germany">Germany</SelectItem>
                <SelectItem value="Uk">Uk</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="border border-gray-400 rounded-lg">
          <div className="p-2 !pb-1 border-b border-gray-400">
            <p className="text-xs md:text-sm font-medium text-[#6A6A6A]">
              Street address
            </p>
            <Input
              type="text"
              placeholder="Enter street address"
              className="w-full cursor-pointer !border-none !shadow-none !ring-0 !outline-none focus:!border-none focus:!ring-0 active:!border-none active:!ring-0 hover:!border-none hover:!ring-0 p-0"
            />
          </div>
          <div className="p-2 !pb-1 border-b border-gray-400">
            <p className="text-xs md:text-sm font-medium text-[#6A6A6A]">
              City / town / village
            </p>
            <Input
              type="text"
              placeholder="Enter city/town/village"
              className="w-full cursor-pointer !border-none !shadow-none !ring-0 !outline-none focus:!border-none focus:!ring-0 active:!border-none active:!ring-0 hover:!border-none hover:!ring-0 p-0"
            />
          </div>
          <div className="p-2 !pb-1 border-b border-gray-400">
            <p className="text-xs md:text-sm font-medium text-[#6A6A6A]">
              State / province
            </p>
            <Input
              type="text"
              placeholder="Enter state/province"
              className="w-full cursor-pointer !border-none !shadow-none !ring-0 !outline-none focus:!border-none focus:!ring-0 active:!border-none active:!ring-0 hover:!border-none hover:!ring-0 p-0"
            />
          </div>
          <div className="p-2 !pb-1">
            <p className="text-xs md:text-sm font-medium text-[#6A6A6A]">
              Postal code
            </p>
            <Input
              type="text"
              placeholder="Enter postal code"
              className="w-full cursor-pointer !border-none !shadow-none !ring-0 !outline-none focus:!border-none focus:!ring-0 active:!border-none active:!ring-0 hover:!border-none hover:!ring-0 p-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyAddress;
