import React from "react";
import { useSelector } from "react-redux";

export const Temperature = () => {
  const weather = useSelector((state) => state.data);
  console.log(weather);
  return (
    <div className="temperature">
      <div className="degree-section">
        <h2 className="temperature-degree">{weather.current.temp}</h2>
        <span>C</span>
      </div>
      <div className="temperature-description">
        {weather.current.weather[0].description}
      </div>
    </div>
  );
};
