import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const CourseItem = ({ course }) => {
  return (
    <div>
      <div className="relative max-w-[31.25rem] max-h-[12.5rem] w-full h-auto">
        <Image
          src={course?.banner?.url}
          width={500}
          height={200}
          alt="banner"
          className="w-auto h-auto object-cover rounded-t-xl"
        />
      </div>
      <div>
        <h2 className="font-medium">{course?.name}</h2>
        <h2 className="text-[0.75rem] text-gray-500">{course?.author}</h2>
      </div>
    </div>
  );
};

// CourseItem.propTypes = {
//   course: PropTypes.object,
// };

export default CourseItem;
