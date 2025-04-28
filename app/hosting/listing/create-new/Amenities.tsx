import React, { useState } from "react";
import { FaWifi } from "react-icons/fa6";
import { HiOutlineTv } from "react-icons/hi2";
import { PiOven } from "react-icons/pi";
import { BiSolidWasher } from "react-icons/bi";
import { LuCarFront } from "react-icons/lu";
import { LuParkingMeter } from "react-icons/lu";
import { IoSnowSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlinePool } from "react-icons/md";
import { LiaHotTubSolid } from "react-icons/lia";
import { BsShop } from "react-icons/bs";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { MdOutlineBrunchDining } from "react-icons/md";
import { GiFireplace } from "react-icons/gi";
import { MdOutlineFireplace } from "react-icons/md";
import { GiPoolTableCorner } from "react-icons/gi";
import { LuPiano } from "react-icons/lu";
import { FaDumbbell } from "react-icons/fa6";
import { TbBeach } from "react-icons/tb";
import { FaPersonSkiing } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";
import { MdSmokeFree, MdLocalFireDepartment } from "react-icons/md";
import { FaKitMedical, FaFireExtinguisher } from "react-icons/fa6";
import { RiAlarmWarningLine } from "react-icons/ri";
import AmenityCard from "./AmenityCard";
import { useDispatch, useSelector } from "react-redux";
import { setAmenities } from "@/features/property/create-property/createPropertySlice";

const guestFavoriteAmenities = [
  { label: "Wifi", icon: <FaWifi size={24} /> },
  { label: "TV", icon: <HiOutlineTv size={24} /> },
  { label: "Kitchen", icon: <PiOven size={24} /> },
  { label: "Washer", icon: <BiSolidWasher size={24} /> },
  { label: "Free parking on premises", icon: <LuCarFront size={24} /> },
  { label: "Paid parking on premises", icon: <LuParkingMeter size={24} /> },
  { label: "Air conditioning", icon: <IoSnowSharp size={24} /> },
  { label: "Dedicated workspace", icon: <BsPersonWorkspace size={24} /> },
];

const standoutAmenities = [
  { label: "Pool", icon: <MdOutlinePool size={24} /> },
  { label: "Hot tub", icon: <LiaHotTubSolid size={24} /> },
  { label: "Patio", icon: <BsShop size={24} /> },
  { label: "BBQ grill", icon: <MdOutlineOutdoorGrill size={24} /> },
  { label: "Outdoor dining area", icon: <MdOutlineBrunchDining size={24} /> },
  { label: "Fire pit", icon: <GiFireplace size={24} /> },
  { label: "Pool table", icon: <GiPoolTableCorner size={24} /> },
  { label: "Indoor fireplace", icon: <MdOutlineFireplace size={24} /> },
  { label: "Piano", icon: <LuPiano size={24} /> },
  { label: "Exercise equipment", icon: <FaDumbbell size={24} /> },
  { label: "Lake access", icon: <TbBeach size={24} /> },
  { label: "Beach access", icon: <TbBeach size={24} /> },
  { label: "Ski-in/Ski-out", icon: <FaPersonSkiing size={24} /> },
  { label: "Outdoor shower", icon: <FaShower size={24} /> },
];

const safetyAmenities = [
  { label: "Smoke alarm", icon: <RiAlarmWarningLine size={24} /> },
  { label: "First aid kit", icon: <FaKitMedical size={24} /> },
  { label: "Fire extinguisher", icon: <FaFireExtinguisher size={24} /> },
  { label: "Carbon monoxide alarm", icon: <RiAlarmWarningLine size={24} /> },
];

type Props = {};

const Amenities = (props: Props) => {
  const dispatch = useDispatch();
  const amenities = useSelector((state: any) => state.createProperty.amenities);

  const handleSelect = (label: string) => {
    if (guestFavoriteAmenities.some((item) => item.label === label)) {
      if (amenities.guestFavorite.includes(label)) {
        dispatch(
          setAmenities({
            ...amenities,
            guestFavorite: amenities.guestFavorite.filter(
              (item: any) => item !== label
            ),
          })
        );
      } else {
        dispatch(
          setAmenities({
            ...amenities,
            guestFavorite: [...amenities.guestFavorite, label],
          })
        );
      }
    } else if (standoutAmenities.some((item) => item.label === label)) {
      if (amenities.standout.includes(label)) {
        dispatch(
          setAmenities({
            ...amenities,
            standout: amenities.standout.filter((item: any) => item !== label),
          })
        );
      } else {
        dispatch(
          setAmenities({
            ...amenities,
            standout: [...amenities.standout, label],
          })
        );
      }
    } else if (safetyAmenities.some((item) => item.label === label)) {
      if (amenities.safety.includes(label)) {
        dispatch(
          setAmenities({
            ...amenities,
            safety: amenities.safety.filter((item: any) => item !== label),
          })
        );
      } else {
        dispatch(
          setAmenities({
            ...amenities,
            safety: [...amenities.safety, label],
          })
        );
      }
    }
  };

  return (
    <div className="px-6 md:px-0 mb-48">
      <h3 className="text-2xl md:text-4xl font-medium text-[#222222] mb-1 md:mb-2">
        Tell guests what your place has to offer
      </h3>
      <p className="text-base md:text-lg font-normal text-[#6A6A6A] mb-6 md:mb-8">
        You can add more amenities after you publish your listing.
      </p>

      <AmenityCard
        title="What about these guest favorites?"
        amenities={guestFavoriteAmenities}
        selectedAmenities={amenities.guestFavorite}
        handleSelect={handleSelect}
      />

      <AmenityCard
        title="Do you have any standout amenities?"
        amenities={standoutAmenities}
        selectedAmenities={amenities.standout}
        handleSelect={handleSelect}
      />

      <AmenityCard
        title="Do you have any of these safety items?"
        amenities={safetyAmenities}
        selectedAmenities={amenities.safety}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default Amenities;
