import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

const CourseEnroll = ({ courseInfo, isUserAlreadyEnrolled }) => {
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
        toast("User Enroll Successfull", {
          description: "User Enrolled to this Course",
        });
        // redirect to course watcher page
        router.push(`/course-progress/${resp.createUserEnrollCourse?.id}`);
      }
    });
  };

  return (
    <div className="p-4 text-center rounded-sm bg-primary">
      <div className="flex flex-col gap-3">
        <h2 className="text-[1.25rem] font-bold text-white">
          Enroll to the Course
        </h2>
        {user && isMember && !isUserAlreadyEnrolled ? (
          <div>
            <h2 className="text-white">
              Enroll Now to start Learning and building your project
            </h2>
            <Button
              onClick={() => onEnrollToCourse()}
              className="bg-white text-primary hover:bg-white hover:text-primary"
            >
              Enroll Now
            </Button>
          </div>
        ) : !user ? (
          <div>
            <h2 className="text-white">
              Enroll Now to start Learning and building your project
            </h2>
            <Link href={"/sign-in"}>
              <Button className="bg-white text-primary hover:bg-white hover:text-primary">
                Enroll Now
              </Button>
            </Link>
          </div>
        ) : (
          !isUserAlreadyEnrolled && (
            <div>
              <h2 className="text-white">
                Buy Monthly Membership and Get Access to All Courses
              </h2>
              <Button className="bg-white text-primary hover:bg-white hover:text-primary">
                Buy Membership Just $5.99
              </Button>
            </div>
          )
        )}

        {isUserAlreadyEnrolled && (
          <div>
            <h2 className="text-white">Continue to Learn Your Project</h2>
            <Link href={"course-progress" + isUserAlreadyEnrolled}>
              <Button className="bg-white text-primary hover:bg-white hover:text-primary">
                Continue
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseEnroll;
