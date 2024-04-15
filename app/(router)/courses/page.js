"use client";
import React from "react";
import HomeBanner from "./_components/HomeBanner";
import CourseList from "./_components/CourseList";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5">
      {/* Left Container */}
      <div className="col-span-3">
        <HomeBanner />

        {/* Course list section */}
        <CourseList />
      </div>
      {/* Right Container */}
      <div>Right Section</div>
    </div>
  );
};

export default Courses;
