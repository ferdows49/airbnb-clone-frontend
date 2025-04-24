import React, { useState } from "react";
import { BsHouseDoor } from "react-icons/bs";
import {
  PiBuildingApartment,
  PiBarn,
  PiBowlSteamLight,
  PiBoat,
  PiCastleTurret,
  PiShippingContainer,
  PiFarm,
  PiTent,
} from "react-icons/pi";
import {
  MdOutlineCabin,
  MdOutlineHouseboat,
  MdOutlineTempleBuddhist,
} from "react-icons/md";
import { TbCamper, TbBuildingEstate } from "react-icons/tb";
import { FaRegBuilding, FaLandmarkDome } from "react-icons/fa6";
import { GiMountainCave } from "react-icons/gi";
import { LuHotel } from "react-icons/lu";
import { HiOutlineHomeModern } from "react-icons/hi2";


const propertyTypeOptions = [
  { label: "House", icon: <BsHouseDoor size={24} /> },
  { label: "Apartment", icon: <PiBuildingApartment size={24} /> },
  { label: "Barn", icon: <PiBarn size={24} /> },
  { label: "Bed and Breakfast", icon: <PiBowlSteamLight size={24} /> },
  { label: "Boat", icon: <PiBoat size={24} /> },
  { label: "Cabin", icon: <MdOutlineCabin size={24} /> },
  { label: "Camper", icon: <TbCamper size={24} /> },
  { label: "Casaparticular", icon: <FaRegBuilding size={24} /> },
  { label: "Castle", icon: <PiCastleTurret size={24} /> },
  { label: "Cave", icon: <GiMountainCave size={24} /> },
  { label: "Container", icon: <PiShippingContainer size={24} /> },
  { label: "Dome", icon: <FaLandmarkDome size={24} /> },
  { label: "Hotel", icon: <LuHotel size={24} /> },
  { label: "Farm", icon: <PiFarm size={24} /> },
  { label: "Houseboat", icon: <MdOutlineHouseboat size={24} /> },
  { label: "Kezhan", icon: <MdOutlineTempleBuddhist size={24} /> },
  { label: "Tent", icon: <PiTent size={24} /> },
  { label: "Tinyhome", icon: <HiOutlineHomeModern size={24} /> },
  { label: "Tower", icon: <FaRegBuilding size={24} /> },
  { label: "Treehouse", icon: <TbBuildingEstate size={24} /> },
  { label: "Yurt", icon: <PiTent size={24} /> },
  { label: "Windmill", icon: <TbBuildingEstate size={24} /> },
];

type Props = {};

const PropertyType = (props: Props) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelectedType((prev) => (prev === label ? null : label));
  };

  return (
    <div className="px-6 md:px-0 mb-48">
      <h2 className="text-2xl md:text-4xl font-medium text-[#222222] mb-6 md:mb-8">
        Which of these best describes your place?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {propertyTypeOptions.map((type) => {
          const isSelected = selectedType === type.label;
          return (
            <div
              key={type.label}
              onClick={() => handleSelect(type.label)}
              className={`p-4 border rounded-md flex flex-col gap-1 cursor-pointer transition ${
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-gray-300 hover:shadow-md"
              }`}
            >
              <div
                className={`${
                  isSelected ? "text-primary" : "text-gray-700"
                } transition`}
              >
                {type.icon}
              </div>
              <span className="text-sm font-medium text-gray-800">
                {type.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyType;
