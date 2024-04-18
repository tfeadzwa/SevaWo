import { Button } from "@/components/ui/button";
import React from "react";

const CourseEnroll = () => {
  const membership = false;

  return (
    <div className="p-4 text-center rounded-sm bg-primary">
      {membership ? (
        <div className="flex flex-col gap-3">
          <h2 className="text-[1.25rem] font-bold text-white">
            Enroll to the course
          </h2>
          <h2 className="text-white">
            Enroll Now to start Learning and building your project
          </h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary">
            Enroll Now
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h2 className="text-[1.25rem] font-bold text-white">
            Enroll to the course
          </h2>
          <h2 className="text-white">
            Buy Membership and Get Access to All Courses
          </h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary">
            Buy Membership Just $2.99
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseEnroll;
