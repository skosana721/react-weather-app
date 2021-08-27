import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { weatherReducer } from "../reducer/weather";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  weatherReducer,
  composeEnhancer(applyMiddleware(thunk))
);
