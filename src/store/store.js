import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { newsReducer } from "./reducers/newsReducer";
import { authReducer } from "./reducers/authReducer";

const middleWare = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
    news: newsReducer,
    auth: authReducer
  });

export const store = createStore(rootReducer, middleWare);
