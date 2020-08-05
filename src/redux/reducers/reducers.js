import { combineReducers } from "redux";
import {
    SEARCH_NEWS,
    SELECT_CATEGORY,
    REQUEST_CATEGORY,
    RECEIVE_NEWS,
  } from "../actions/actionTypes";


function selectedCategory(state = 'principales', action) {
    switch (action.type) {
        case SELECT_CATEGORY:
            return action.category;
        default:
            return state;
    }
}

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

  function newsByCategory(state = {}, action) {
    switch (action.type) {
        case RECEIVE_NEWS:
        case REQUEST_CATEGORY:
            return Object.assign({}, state, {
                [action.category]: news(state[action.category], action)
            })
        default:
            return state
    }
}


const rootReducer = combineReducers({
    selectedCategory,
    newsByCategory,
})

export default rootReducer;