"use client";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import CourseEnroll from "./_components/CourseEnroll";
import CourseContent from "./_components/CourseContent";
import { useUser } from "@clerk/nextjs";

const CoursePreview = ({ params }) => {
  const [courseInfo, setCourseInfo] = useState();
  const { user } = useUser();
  const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState(false);

  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  // get course info by Slug name
  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params?.courseId).then((resp) => {
      setCourseInfo(resp?.courseList);
      checkUserCourseEnroll();
    });
  };

  const checkUserCourseEnroll = () => {
    GlobalApi.checkUserCourseEnrollment(
      courseInfo?.slug,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      if (resp?.userEnrollCourses[0]?.id) {
        setIsUserAlreadyEnrolled(true);
      }
    });
  };

  return (
    courseInfo && (
      <div className="grid grid-col-1 md:grid-cols-3 p-5 gap-3">
        {/* Course Title, Course Video, Course Description */}
        <div className="bg-white col-span-2 p-3">
          <CourseVideoDescription courseInfo={courseInfo} />
        </div>
        {/* Course Content */}
        <div>
          <CourseEnroll courseInfo={courseInfo} />
          <CourseContent courseInfo={courseInfo} />
        </div>
      </div>
    )
  );
};

export default CoursePreview;
