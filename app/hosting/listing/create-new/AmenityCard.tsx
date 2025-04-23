import React, { FC } from "react";

type AmenityCardPropsTypes = {
  title: string;
  amenities: {
    label: string;
    icon: React.ReactNode;
  }[];
  selectedAmenities: string[] | null;
  handleSelect: (label: string) => void;
};

const AmenityCard: FC<AmenityCardPropsTypes> = ({
  title,
  amenities,
  selectedAmenities,
  handleSelect,
}) => {
  return (
    <div className="flex flex-col gap-2 mb-6 md:mb-8">
      <p className="text-lg font-medium text-[#222222] mb-3">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {amenities.map((type) => {
          const isSelected = selectedAmenities?.includes(type.label);
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

export default AmenityCard;
