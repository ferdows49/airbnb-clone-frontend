import React from "react";

type Props = {};

const RoomType = (props: Props) => {
  return (
    <div>
      <h3 className="text-2xl md:text-4xl font-medium text-[#222222] mb-6 md:mb-8">
        What type of place will guests have?
      </h3>

      <div className="flex flex-col gap-4">
        <div className="p-6 border-2 border-black rounded-2xl">
          <div>
            <h4 className="text-lg md:text-2xl font-medium text-[#222222]">
              An entire place
            </h4>
            <p className="text-sm md:text-base font-normal text-[#6A6A6A]">
              Guests have the whole place to themselves.
            </p>
          </div>
          <div>

          </div>
        </div>
        <div className="p-6 border-2 border-black rounded-2xl">
          <div>
            <h4 className="text-lg md:text-2xl font-medium text-[#222222]">
              A room
            </h4>
            <p className="text-sm md:text-base font-normal text-[#6A6A6A]">
              Guests have their own room in a home, plus access to shared
              spaces.
            </p>
          </div>
          <div>

          </div>
        </div>
        <div className="p-6 border-2 border-black rounded-2xl">
          <div>
            <h4 className="text-lg md:text-2xl font-medium text-[#222222]">
              A shared room in a hostel
            </h4>
            <p className="text-sm md:text-base font-normal text-[#6A6A6A]">
              Guests sleep in a shared room in a professionally managed hostel
              with staff onsite 24/7.
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomType;
