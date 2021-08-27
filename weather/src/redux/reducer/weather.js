import { GET_WEATHER } from "../actionTypes/weather";

const initialState = {
  data: null,
};
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
