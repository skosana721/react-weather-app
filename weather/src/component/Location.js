import React from "react";
import { useSelector } from "react-redux";

export const Location = () => {
  const weather = useSelector((state) => state.data);
  return (
    <div className="location">
      <h1 className="location-timezone">{weather.timezone}</h1>
    </div>
  );
};
