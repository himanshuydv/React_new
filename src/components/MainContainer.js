import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import ButtonList from "./ButtonList";
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
    <div>
      <ButtonList />
      <div className="flex flex-wrap ">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
