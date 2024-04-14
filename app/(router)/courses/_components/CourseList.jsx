import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect } from "react";

const CourseList = () => {
  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      console.log(resp);
    });
  };
  return <div>Course List</div>;
};

export default CourseList;
