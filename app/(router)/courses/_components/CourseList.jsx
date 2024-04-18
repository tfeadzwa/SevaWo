import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Link from "next/link";

const CourseList = () => {
  const [courseLists, setCourseLists] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      setCourseLists(resp?.courseLists);
    });
  };
  return (
    <div className="bg-white p-5 mt-5 rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-[1.25rem] font-bold text-primary">All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Display Course List */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
        {courseLists?.length > 0
          ? courseLists.map((item, index) => (
              <Link key={index} href={`/course-preview/` + item.slug}>
                <div>
                  <CourseItem course={item} />
                </div>
              </Link>
            ))
          : [1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="w-full h-[250px] rounded-xl m-2 bg-slate-200 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default CourseList;
