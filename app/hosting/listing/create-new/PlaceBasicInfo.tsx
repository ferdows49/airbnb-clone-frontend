import { setBasicInfo } from "@/features/property/create-property/createPropertySlice";
import React, { useState } from "react";
import { PiMinusCircleThin } from "react-icons/pi";
import { PiPlusCircleThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const PlaceBasicInfo = (props: Props) => {
  const dispatch = useDispatch();
  const basicInfo = useSelector((state: any) => state.createProperty.basicInfo);  

  return (
    <div className="px-6 md:px-0 mb-48 mt-0 md:mt-20">
      <h3 className="text-2xl md:text-4xl font-medium text-[#222222] mb-1 md:mb-2">
        Share some basics about your place
      </h3>
      <p className="text-base md:text-lg font-normal text-[#6A6A6A] mb-6 md:mb-8">
        You'll add more details later, like bed types.
      </p>
      <div className="flex flex-col mt-0  md:mt-10">
        <div className="flex items-center justify-between py-6 border-b border-gray-300">
          <p className="text-lg md:text-xl font-medium text-[#222222]">
            Guests
          </p>
          <div className="flex items-center gap-1.5">
            <PiMinusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                basicInfo.guests === 1
                  ? "text-gray-300 hover:text-gray-300"
                  : ""
              }`}
              onClick={() => {
                if (basicInfo.guests > 1 && basicInfo.guests <= 20) {
                  dispatch(
                    setBasicInfo({ ...basicInfo, guests: basicInfo.guests - 1 })
                  );
                }
              }}
            />
            <p className="text-xl font-normal text-[#222222] min-w-6 text-center">
              {basicInfo.guests}
            </p>
            <PiPlusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                basicInfo.guests === 20
                  ? "text-gray-300 hover:text-gray-300"
                  : ""
              }`}
              onClick={() => {
                if (basicInfo.guests >= 1 && basicInfo.guests < 20) {
                  dispatch(
                    setBasicInfo({ ...basicInfo, guests: basicInfo.guests + 1 })
                  );
                }
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between py-6 border-b border-gray-300">
          <p className="text-lg md:text-xl font-medium text-[#222222]">
            Bedrooms
          </p>
          <div className="flex items-center gap-1.5">
            <PiMinusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                basicInfo.bedrooms === 0
                  ? "text-gray-300 hover:text-gray-300"
                  : ""
              }`}
              onClick={() => {
                if (basicInfo.bedrooms > 0 && basicInfo.bedrooms <= 20) {
                  dispatch(
                    setBasicInfo({
                      ...basicInfo,
                      bedrooms: basicInfo.bedrooms - 1,
                    })
                  );
                }
              }}
            />
            <p className="text-xl font-normal text-[#222222] min-w-6 text-center">
              {basicInfo.bedrooms}
            </p>
            <PiPlusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                basicInfo.bedrooms === 20
                  ? "text-gray-300 hover:text-gray-300"
                  : ""
              }`}
              onClick={() => {
                if (basicInfo.bedrooms >= 0 && basicInfo.bedrooms < 20) {
                  dispatch(
                    setBasicInfo({
                      ...basicInfo,
                      bedrooms: basicInfo.bedrooms + 1,
                    })
                  );
                }
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between py-6 border-b border-gray-300">
          <p className="text-lg md:text-xl font-medium text-[#222222]">Beds</p>
          <div className="flex items-center gap-1.5">
            <PiMinusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                basicInfo.beds === 1 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (basicInfo.beds > 1 && basicInfo.beds <= 20) {
                  dispatch(
                    setBasicInfo({ ...basicInfo, beds: basicInfo.beds - 1 })
                  );
                }
              }}
            />
            <p className="text-xl font-normal text-[#222222] min-w-6 text-center">
              {basicInfo.beds}
            </p>
            <PiPlusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                basicInfo.beds === 20 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (basicInfo.beds >= 1 && basicInfo.beds < 20) {
                  dispatch(
                    setBasicInfo({ ...basicInfo, beds: basicInfo.beds + 1 })
                  );
                }
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between py-6 border-b border-gray-300">
          <p className="text-lg md:text-xl font-medium text-[#222222]">
            Bathrooms
          </p>
          <div className="flex items-center gap-1.5">
            <PiMinusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                basicInfo.baths === 1 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (basicInfo.baths > 1 && basicInfo.baths <= 20) {
                  dispatch(
                    setBasicInfo({ ...basicInfo, baths: basicInfo.baths - 1 })
                  );
                }
              }}
            />
            <p className="text-xl font-normal text-[#222222] min-w-6 text-center">
              {basicInfo.baths}
            </p>
            <PiPlusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                basicInfo.baths === 20
                  ? "text-gray-300 hover:text-gray-300"
                  : ""
              }`}
              onClick={() => {
                if (basicInfo.baths >= 1 && basicInfo.baths < 20) {
                  dispatch(
                    setBasicInfo({ ...basicInfo, baths: basicInfo.baths + 1 })
                  );
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceBasicInfo;
