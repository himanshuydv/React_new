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
  const [channelInfo, setChannelInfo] = useState();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
    getChannelData();
  }, []);

  const getChannelData = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_API);
    const json = await data.json();
    console.log(json);
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
          {searchParams.get("v")}
        </div>
        <LiveChat />
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
