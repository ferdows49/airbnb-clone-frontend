import React, { FC } from "react";
import PropertyCard from "./PropertyCard";

type Props = {};

const Home: FC<Props> = () => {
  return (
    <div className="max-w-screen-3xl px-4 md:px-8 lg:px-12 2xl:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-x-6 gap-y-10">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default Home;
