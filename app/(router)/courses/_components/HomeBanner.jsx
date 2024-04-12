import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white p-5">
      <Image
        src="/learn-online.jpg"
        alt="online-learner"
        width={200}
        height={200}
      />
      <div>
        <h2 className="font-bold text-[1.6875rem]">
          Welcome to <span className="text-primary">SevaWo</span> Academy
        </h2>
        <h2 className="text-gray-500">
          Explore, Learn and Build All Real Life Projects
        </h2>
      </div>
    </div>
  );
};

export default HomeBanner;
