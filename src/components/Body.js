import React from "react";
import ButtonList from "./ButtonList";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex-col space-y-4">
      <div>
        <ButtonList />
      </div>
      <div className="space-x-5">
        <h1>MainContainer</h1>
      </div>
    </div>
  );
};

export default Body;
