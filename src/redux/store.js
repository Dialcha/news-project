import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

export default store;