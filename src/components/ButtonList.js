import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "live",
    "news",
    "sports",
    "music",
    "movies",
    "trending",
    "most liked",
    "gaming",
    "comedy",
  ];

  return (
    <div className="flex space-x-3">
      {buttons.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
