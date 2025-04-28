import React, { FC } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { PiDoorOpen } from "react-icons/pi";
import { FaUsersRectangle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setRoomType } from "@/features/property/create-property/createPropertySlice";

const RoomType: FC = () => {
  const dispatch = useDispatch();
  const roomType: any = useSelector(
    (state: any) => state?.createProperty?.roomType
  );

  const handleSelect = (label: string) => {
    if (roomType === label) {
      dispatch(setRoomType(null));
    } else {
      dispatch(setRoomType(label));
    }
  };

  return (
    <div className="px-6 md:px-0 mb-48 mt-0 md:mt-20">
      <h3 className="text-2xl md:text-4xl font-medium text-[#222222] mb-6 md:mb-8">
        What type of place will guests have?
      </h3>
      <div className="flex flex-col gap-4">
        <div
          className={`p-6 border-2 border-gray-400 hover:border-black cursor-pointer rounded-2xl flex justify-between gap-6 ${
            roomType === "Entire Place" ? "!border-black bg-gray-100" : ""
          }`}
          onClick={() => handleSelect("Entire Place")}
        >
          <div className="max-w-[520px]">
            <h4 className="text-lg md:text-2xl font-medium text-[#222222]">
              An entire place
            </h4>
            <p className="text-xs md:text-sm font-normal text-[#6A6A6A]">
              Guests have the whole place to themselves.
            </p>
          </div>
          <div>
            <HiOutlineHome className="text-3xl md:text-4xl text-[#222222]" />
          </div>
        </div>
        <div
          className={`p-6 border-2 border-gray-400 hover:border-black cursor-pointer rounded-2xl flex justify-between gap-6 ${
            roomType === "Private Room" ? "!border-black bg-gray-100" : ""
          }`}
          onClick={() => handleSelect("Private Room")}
        >
          <div className="max-w-[520px]">
            <h4 className="text-lg md:text-2xl font-medium text-[#222222]">
              A room
            </h4>
            <p className="text-xs md:text-sm font-normal text-[#6A6A6A]">
              Guests have their own room in a home, plus access to shared
              spaces.
            </p>
          </div>
          <div>
            <PiDoorOpen className="text-3xl md:text-4xl text-[#222222]" />
          </div>
        </div>
        <div
          className={`p-6 border-2 border-gray-400 hover:border-black cursor-pointer rounded-2xl flex justify-between gap-6 ${
            roomType === "Shared Room" ? "!border-black bg-gray-100" : ""
          }`}
          onClick={() => handleSelect("Shared Room")}
        >
          <div className="max-w-[520px]">
            <h4 className="text-lg md:text-2xl font-medium text-[#222222]">
              A shared room in a hostel
            </h4>
            <p className="text-xs md:text-sm font-normal text-[#6A6A6A]">
              Guests sleep in a shared room in a professionally managed hostel
              with staff onsite 24/7.
            </p>
          </div>
          <div>
            <FaUsersRectangle className="text-3xl md:text-4xl text-[#222222]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomType;
