import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_CHANNEL_API } from "../utils/Constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [channelInfo, setChannelInfo] = useState([]);
  const { statistics } = channelInfo;
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
    getChannelData();
  }, []);

  const getChannelData = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_API);
    const json = await data.json();
    console.log(json.items[0]);
    setChannelInfo(json.items[0]);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex px-5">
        <div>
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChat />
      </div>
      <div className="p-5 ">
        <h1 className="font-bold text-3xl">
          {channelInfo.snippet?.localized?.title}
        </h1>
        <div className="flex p-2 space-x-4">
          <h1 className="font-bold text-lg">
            {channelInfo.snippet?.channelTitle}
          </h1>
          <h1>{channelInfo.statistics?.likeCount} Likes</h1>
          <h1>{channelInfo.statistics?.viewCount} Views</h1>
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
