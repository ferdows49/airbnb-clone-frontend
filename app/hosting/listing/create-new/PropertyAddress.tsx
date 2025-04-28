import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setPropertyAddress } from "@/features/property/create-property/createPropertySlice";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const PropertyAddress = (props: Props) => {
  const dispatch = useDispatch();
  const propertyAddress = useSelector(
    (state: any) => state.createProperty.propertyAddress
  );

  const handleInputChange = (field: string, value: string) => {
    dispatch(setPropertyAddress({ ...propertyAddress, [field]: value }));
  };

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
          <Select
            value={propertyAddress?.country || ""}
            onValueChange={(value) => handleInputChange("country", value)}
          >
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
                <SelectItem value="UK">UK</SelectItem>
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
              value={propertyAddress?.street || ""}
              onChange={(e) => handleInputChange("street", e.target.value)}
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
              value={propertyAddress?.city || ""}
              onChange={(e) => handleInputChange("city", e.target.value)}
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
              value={propertyAddress?.state || ""}
              onChange={(e) => handleInputChange("state", e.target.value)}
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
              value={propertyAddress?.postalCode || ""}
              onChange={(e) => handleInputChange("postalCode", e.target.value)}
              className="w-full cursor-pointer !border-none !shadow-none !ring-0 !outline-none focus:!border-none focus:!ring-0 active:!border-none active:!ring-0 hover:!border-none hover:!ring-0 p-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyAddress;
