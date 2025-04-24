import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Props = {};

const PropertyDescription = (props: Props) => {
  const [description, setDescription] = React.useState<string | null>(null);

  return (
    <div className="px-6 md:px-0 mb-48 mt-0 md:mt-12 w-full md:w-auto">
      <h3 className="text-2xl md:text-4xl font-medium text-[#222222] mb-1 md:mb-2">
        Create your description
      </h3>
      <p className="text-base md:text-lg font-normal text-[#6A6A6A] mb-6 md:mb-8">
        Share what makes your place special.
      </p>
      <Textarea
        onChange={(e) => {
          if (e.target.value.length <= 500) {
            setDescription(e.target.value);
          }
        }}
        value={description || ""}
        className="md:w-[500px] lg:w-[600px] !h-[150px] bg-[#F7F7F7] border border-gray-400 rounded-lg shadow-sm focus-visible:outline-none focus-visible:ring-0 text-base md:text-lg font-normal"
      />
      <p className="text-sm font-medium text-[#6A6A6A] mt-2">
        {description?.length || 0}/500
      </p>
    </div>
  );
};

export default PropertyDescription;
