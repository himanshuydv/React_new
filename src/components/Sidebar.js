import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="m-2 shadow-lg w-60 p-5">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Home</li>
        <li>Movies</li>
        <li>live</li>
        <li>News</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li>Trending</li>
        <li>games</li>
        <li>liked</li>
        <li>sports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
