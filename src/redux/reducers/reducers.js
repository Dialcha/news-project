import { combineReducers } from "redux";
import { REQUEST_CATEGORY, RECEIVE_NEWS } from "../actions/actionTypes";

const initialState = {
  news: {
    isFetching: true,
    items: [],
  },
};

function news(
  state = {
    isFetching: false,
    items: [],
  },
  action
) {
  switch (action.type) {
    case REQUEST_CATEGORY:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_NEWS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.news,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

function newsByCategory(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_NEWS:
    case REQUEST_CATEGORY:
      return Object.assign({}, state, {
        news: news(state[action.category], action),
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  newsByCategory,
});

export default rootReducer;
