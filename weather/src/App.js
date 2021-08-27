import "./App.css";
import { useEffect, useState } from "react";
import { Location } from "./component/Location";
import { Temperature } from "./component/Temperature";
import { useDispatch } from "react-redux";
import { getWeather } from "./redux/actions/weather";

function App() {
  const dispatch = useDispatch();

  window.addEventListener("load", () => {
    if (navigator.geolocation) {
      let lat;
      let long;
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        dispatch(getWeather({ lat, long }));
      });
    }
  });

  return (
    <div className="App">
      <Location />
      <Temperature />
    </div>
  );
}

export default App;
