import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import VideoCard from "./Videocard";

const MainContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);
    console.log(json);
  };

  if (!videos) {
    return null;
  }
  return (
    <div className="flex flex-wrap ">
      {videos.map((video) => (
        <VideoCard info={video} key={video.id} />
      ))}
    </div>
  );
};

export default MainContainer;
