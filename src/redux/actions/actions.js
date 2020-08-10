import fetch from "isomorphic-fetch";
import { REQUEST_CATEGORY, RECEIVE_NEWS } from "./actionTypes";
import * as moment from "moment";

export function requestNews(category) {
  return {
    type: REQUEST_CATEGORY,
    category,
  };
}

export function receiveNews(category, json) {
  return {
    type: RECEIVE_NEWS,
    category,
    news: json.map((child) => child),
    receivedAt: Date.now(),
  };
}

export function fetchNews(category, keyword) {
  return function (dispatch) {
    if (category === 0) {
      let today = moment().format("YYYY-MM-DD");
      dispatch(requestNews(category));
      return fetch(`https://api.canillitapp.com/latest/${today}`)
        .then((response) => response.json())
        .then((json) => {
          const news = json.slice(0, 10);
          dispatch(receiveNews(category, news));
        });
    } else if (category === "search") {
      dispatch(requestNews(category));
      return fetch(`https://api.canillitapp.com/search/${keyword}`)
        .then((response) => response.json())
        .then((json) => {
          const news = json.slice(0, 10);
          dispatch(receiveNews(category, news));
        });
    } else {
      dispatch(requestNews(category));
      return fetch(`https://api.canillitapp.com/news/category/${category}`)
        .then((response) => response.json())
        .then((json) => {
          const news = json.slice(0, 10);
          dispatch(receiveNews(category, news));
        });
    }
  };
}
