import axios from "axios";
import { GET_WEATHER } from "../actionTypes/weather";
require("dotenv").config();

export const getWeather = (data) => {
  const { long, lat } = data;
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude={part}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        dispatch({
          type: GET_WEATHER,
          payload: res.data,
        });
      });
  };
};
