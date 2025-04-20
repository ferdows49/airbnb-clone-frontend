"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image1 from "../../public/images/image-1.jpg";
import Image2 from "../../public/images/image-2.jpg";
import { FaStar } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";

type PropertyCardPropsTypes = {};

const PropertyCard: FC<PropertyCardPropsTypes> = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="property-card cursor-pointer">
      <div className="h-56 w-full overflow-hidden rounded-2xl cursor-pointer relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full w-full property-card-swiper"
        >
          <SwiperSlide>
            <Image src={Image1} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image2} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image1} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
        <div className="h-full absolute z-10 top-0 left-0 right-0 p-4 w-full flex flex-col items-end pointer-events-none">
          {isFavorite ? (
            <MdFavorite
              className="text-red-500 h-6 w-6 cursor-pointer pointer-events-auto"
              onClick={() => setIsFavorite(!isFavorite)}
            />
          ) : (
            <MdFavoriteBorder
              className="text-white h-6 w-6 cursor-pointer pointer-events-auto"
              onClick={() => setIsFavorite(!isFavorite)}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between mt-2">
          <p className="text-[15px] text-[#222222] font-medium leading-5">
            Pokhara, Nepal
          </p>
          <div className="flex items-center gap-1">
            <FaStar className="text-[#222222] h-3 w-3" />
            <p className="text-[15px] text-[#222222] font-medium leading-5">
              4.5
            </p>
          </div>
        </div>
        <p className="text-[15px] text-[#6A6A6A] font-medium leading-5">
          Phewa Lake
        </p>
        <p className="text-[15px] text-[#6A6A6A] font-medium leading-5">
          Apr 27 - May 01
        </p>
        <p className="text-[15px] font-medium leading-5">
          <span className="text-[#222222] font-semibold underline">$1,000</span>{" "}
          for 1 night
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
