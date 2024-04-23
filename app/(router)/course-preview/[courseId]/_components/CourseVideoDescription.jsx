import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";

const CourseVideoDescription = ({ courseInfo }) => {
  return (
    <div>
      <h2 className="font-semibold text-[1.25rem]">{courseInfo?.name}</h2>
      <h2 className="mb-3 text-[0.875rem] text-gray-500">
        {courseInfo?.author}
      </h2>

      {/* video Player */}
      <VideoPlayer
        videoUrl={courseInfo?.chapter[0]?.video?.url}
        youtubeId={courseInfo?.chapter[0]?.youtubeId}
      />

      {/* Description */}
      <h2 className="mt-5 text-[1.0625rem] font-semibold">About This Course</h2>
      <Markdown className="font-light mt-2 leading-6 text-[0.875rem]">
        {courseInfo?.description}
      </Markdown>
    </div>
  );
};

export default CourseVideoDescription;

// https://medium.com/@seanrobenalt/a-nextjs-lazy-load-youtube-video-component-965989a0ff0e