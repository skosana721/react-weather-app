import axios from "axios";
import { GET_WEATHER } from "../actionTypes/weather";

export const getWeather = (data) => {
  const { long, lat } = data;
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude={part}&appid=6db679fb9405d4e0b7d9895583dbf179`
      )
      .then((res) => {
        dispatch({
          type: GET_WEATHER,
          payload: res.data,
        });
      });
  };
};
