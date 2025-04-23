import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {};

const PropertyPhotos = (props: Props) => {
  const [photos, setPhotos] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setPhotos((prev) => [...prev, ...selectedFiles]);
    }
  };

  return (
    <div className="px-6 md:px-0 mb-48">
      <h3 className="text-2xl md:text-4xl font-medium text-[#222222] mb-1 md:mb-2">
        Add some photos of your house
      </h3>
      <p className="text-base md:text-lg font-normal text-[#6A6A6A] mb-6 md:mb-8">
        You'll need 5 photos to get started. You can add more or make changes
        later.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="h-48 w-auto sm:w-48 rounded-xl overflow-hidden border border-gray-200 relative"
          >
            <img
              src={URL.createObjectURL(photo)}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inline-block top-2 right-2 cursor-pointer"
              onClick={() =>
                setPhotos(photos.filter((item) => item.name !== photo.name))
              }
            >
              <IoIosCloseCircleOutline size={24} />
            </div>
          </div>
        ))}

        <label
          htmlFor="file"
          className="h-48 w-auto sm:w-48 border-2 border-gray-400 border-dashed rounded-xl cursor-pointer flex flex-col justify-center items-center gap-1.5 hover:bg-gray-50 transition"
        >
          <p className="text-lg font-medium text-[#6A6A6A]">Upload</p>
          <FiUpload className="text-[#6A6A6A]" size={24} />
          <Input
            id="file"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default PropertyPhotos;
