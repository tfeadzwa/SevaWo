import React from "react";
import HomeBanner from "./_components/HomeBanner";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5">
      {/* Left Container */}
      <div className="col-span-2">
        <HomeBanner />
      </div>
      {/* Right Container */}
      <div>Right Section</div>
    </div>
  );
};

export default Courses;
