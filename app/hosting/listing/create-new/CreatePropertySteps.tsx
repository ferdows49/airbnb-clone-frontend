"use client";

import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
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
import { useDispatch, useSelector } from "react-redux";
import { setPropertyCreateStep } from "@/features/property/create-property/createPropertySlice";
import { useCreatePropertyMutation } from "@/features/property/create-property/createPropertyApiSlice";

const CreatePropertySteps: FC = () => {
  const dispatch = useDispatch();

  const steps = useSelector((state: any) => state.createProperty.step);
  const propertyData = useSelector((state: any) => state.createProperty);
  console.log("propertyData", propertyData);

  const [createProperty] = useCreatePropertyMutation();

  const handleSubmit = async () => {
    const payload = {
      host_id: 1,
      title: propertyData.title,
      description: propertyData.description,
      property_type: propertyData.propertyType,
      room_type: propertyData.roomType,
      address: propertyData.propertyAddress.street,
      city: propertyData.propertyAddress.city,
      state: propertyData.propertyAddress.state || "",
      country: propertyData.propertyAddress.country,
      zip_code: propertyData.propertyAddress.postalCode || "",
      latitude: undefined,
      longitude: undefined,
      num_bedrooms: propertyData.basicInfo.bedrooms,
      num_bathrooms: propertyData.basicInfo.baths,
      max_guests: propertyData.basicInfo.guests,
      num_beds: propertyData.basicInfo.beds,
      guest_favorite_amenities: propertyData.amenities.guestFavorite,
      standout_amenities: propertyData.amenities.standout,
      safety_amenities: propertyData.amenities.safety,
      price_per_night: propertyData.price,
      cleaning_fee: 0,
      service_fee: 0,
    };

    console.log("payload", payload);
    

    try {
      const response = await createProperty(payload).unwrap();
      console.log("Property created successfully:", response);
      // You can redirect or reset form here
    } catch (error) {
      console.error("Failed to create property:", error);
    }
  };

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
              onClick={() => dispatch(setPropertyCreateStep(steps - 1))}
              className="cursor-pointer bg-pink-600"
              size={"lg"}
            >
              Back
            </Button>
          ) : (
            <div></div>
          )}
          <Button
            onClick={() => {
              if (steps === 10) {
                handleSubmit();
              } else {
                dispatch(setPropertyCreateStep(steps + 1));
              }
            }}
            className="cursor-pointer bg-pink-600"
            size={"lg"}
          >
            {steps === 0 ? "Get Started" : steps === 10 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePropertySteps;
