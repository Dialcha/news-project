import fetch from "isomorphic-fetch";
import { dataMenu } from '../../assets/datamenu';
import {
  SEARCH_NEWS,
  SELECT_CATEGORY,
  REQUEST_CATEGORY,
  RECEIVE_NEWS,
} from "./actionTypes";
import * as moment from "moment";

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category,
  };
}

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

export function fetchNews(category) {
  return function (dispatch) {
    if (category === "principales") {
      let today = moment().format("YYYY-MM-DD");
      dispatch(requestNews(category));
      return fetch(`https://api.canillitapp.com/latest/${today}`)
        .then((response) => response.json())
        .then((json) => dispatch(receiveNews(category, json)));
    } else {
      dispatch(requestNews(category));
      return fetch(`https://api.canillitapp.com/news/category/1`)
        .then((response) => response.json())
        .then((json) => dispatch(receiveNews(category, json)));
    }
  };
}

export function searchNews(keyWord) {
  return {
    type: SEARCH_NEWS,
    keyWord,
  };
}
