import React from "react";

const VideoDetailsTab = ({ info }) => {
  const { snippet, statistics } = info;

  return (
    <div className="p-5 w-3/4  ">
      <h1 className="font-bold text-3xl">{snippet?.localized?.title}</h1>
      <div className="flex p-2 space-x-4">
        <h1 className="font-bold text-lg">{snippet?.channelTitle}</h1>
        <h1>{statistics?.likeCount} Likes</h1>
        <h1>{statistics?.viewCount} Views</h1>
      </div>
    </div>
  );
};

export default VideoDetailsTab;
