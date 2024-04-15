import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const CourseItem = ({ course }) => {
  return (
    <div className="border rounded-xl hover:shadow-md hover:shadow-purple-300 cursor-pointer">
      <div className="relative max-w-[31.25rem] max-h-[12.5rem] w-full h-auto">
        <Image
          src={course?.banner?.url}
          width={500}
          height={200}
          alt="banner"
          className="w-auto h-auto object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <h2 className="font-semibold">{course?.name}</h2>
        <h2 className="text-[0.75rem] text-gray-500">{course?.author}</h2>
        {course?.chapter?.length == 0 ? (
          <div className="flex gap-2 items-center">
            <Image
              src="/chapter.png"
              alt="Chapters"
              width={20}
              height={20}
              className="w-auto h-auto"
            />
            <h2 className="text-[0.75rem] text-gray-500">Watch On YouTube</h2>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <Image
              src="/youtube.png"
              alt="watch on youtube"
              width={20}
              height={20}
              className="w-auto h-auto"
            />
            <h2 className="text-[0.75rem] text-gray-500">Watch On YouTube</h2>
          </div>
        )}
        <h2 className="">{course?.free ? "Free" : "Paid"}</h2>
      </div>
    </div>
  );
};

// CourseItem.propTypes = {
//   course: PropTypes.object,
// };

export default CourseItem;
