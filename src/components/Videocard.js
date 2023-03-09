import React from "react";

const Videocard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="w-64 h-72 p-2 m-2 shadow-lg">
      <img className="rounded-lg" alt="video" src={thumbnails.medium.url} />
      <ul className="px-3">
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}+views</li>
      </ul>
    </div>
  );
};

export default Videocard;
