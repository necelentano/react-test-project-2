import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { newsReducer } from "./reducers/newsReducer";

const middleWare = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
    news: newsReducer
  });

export const store = createStore(rootReducer, middleWare);
