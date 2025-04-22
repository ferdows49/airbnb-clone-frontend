import React, { useState } from "react";
import { PiMinusCircleThin } from "react-icons/pi";
import { PiPlusCircleThin } from "react-icons/pi";

type Props = {};

const PlaceBasicInfo = (props: Props) => {
  const [guests, setGuests] = useState(1);
  const [beds, setBeds] = useState(1);
  const [baths, setBaths] = useState(1);
  const [bedrooms, setBedrooms] = useState(0);

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
                guests === 1 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (guests > 1 && guests <= 20) {
                  setGuests((prev) => prev - 1);
                }
              }}
            />
            <p className="text-xl font-normal text-[#222222] min-w-6 text-center">
              {guests}
            </p>
            <PiPlusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                guests === 20 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (guests >= 1 && guests < 20) {
                  setGuests((prev) => prev + 1);
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
                bedrooms === 0 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (bedrooms > 0 && bedrooms <= 20) {
                  setBedrooms((prev) => prev - 1);
                }
              }}
            />
            <p className="text-xl font-normal text-[#222222] min-w-6 text-center">
              {bedrooms}
            </p>
            <PiPlusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                bedrooms === 20 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (bedrooms >= 0 && bedrooms < 20) {
                  setBedrooms((prev) => prev + 1);
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
                beds === 1 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (beds > 1 && beds <= 20) {
                  setBeds((prev) => prev - 1);
                }
              }}
            />
            <p className="text-xl font-normal text-[#222222] min-w-6 text-center">
              {beds}
            </p>
            <PiPlusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                beds === 20 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (beds >= 1 && beds < 20) {
                  setBeds((prev) => prev + 1);
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
                baths === 1 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (baths > 1 && baths <= 20) {
                  setBaths((prev) => prev - 1);
                }
              }}
            />
            <p className="text-xl font-normal text-[#222222] min-w-6 text-center">
              {baths}
            </p>
            <PiPlusCircleThin
              size={35}
              className={`text-3xl md:text-4xl text-[#6A6A6A] hover:text-black cursor-pointer ${
                baths === 20 ? "text-gray-300 hover:text-gray-300" : ""
              }`}
              onClick={() => {
                if (baths >= 1 && baths < 20) {
                  setBaths((prev) => prev + 1);
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
