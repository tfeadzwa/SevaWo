"use client";
import React from "react";
import HomeBanner from "./_components/HomeBanner";
import CourseList from "./_components/CourseList";
import SideBanners from "./_components/SideBanners";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      {/* Left Container */}
      <div className="col-span-3">
        <HomeBanner />

        {/* Course list section */}
        <CourseList />
      </div>
      {/* Right Container */}
      <div className="p-5 bg-white rounded-xl">
        <SideBanners />
      </div>
    </div>
  );
};

export default Courses;
