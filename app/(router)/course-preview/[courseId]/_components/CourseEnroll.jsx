import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CourseEnroll = ({ courseInfo }) => {
  const router = useRouter();
  const { user } = useUser();
  const member = false;
  const isMember = user && (courseInfo?.free || member);

  const onEnrollToCourse = () => {
    GlobalApi.enrollToCourse(
      courseInfo?.slug,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      console.log(resp);

      if (resp) {
        // show toast on successful enroll

        // redirect to course watcher page
        router.push(`/course-progress/${resp.createUserEnrollCourse?.id}`);
      }
    });
  };

  const EnrollButton = ({ children, link }) => (
    <Link href={link || "#"}>
      <Button className="bg-white text-primary hover:bg-white hover:text-primary">
        {children}
      </Button>
    </Link>
  );

  const enrollmentHeading = isMember
    ? "Login to enroll to the course"
    : "Enroll to the course";

  const enrollmentSubheading = isMember
    ? "Enroll Now to start Learning and building your project"
    : !user
    ? "Login and Enroll Now to start Learning and building your project"
    : "Buy Membership and Get Access to All Courses";

  const enrollmentButtonText = isMember
    ? "Enroll Now"
    : !user
    ? "Enroll Now"
    : "Buy Membership Just $2.99";

  const enrollmentButtonLink = !user ? "/sign-in" : "#";

  return (
    <div className="p-4 text-center rounded-sm bg-primary">
      <div className="flex flex-col gap-3">
        <h2 className="text-[1.25rem] font-bold text-white">
          {enrollmentHeading}
        </h2>
        <h2 className="text-white">{enrollmentSubheading}</h2>
        <EnrollButton
          link={enrollmentButtonLink}
          onClick={() => onEnrollToCourse()}
        >
          {enrollmentButtonText}
        </EnrollButton>
      </div>
    </div>
  );
};

export default CourseEnroll;
