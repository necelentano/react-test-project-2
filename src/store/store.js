import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { newsReducer } from "./reducers/newsReducer";
import { authReducer } from "./reducers/authReducer";

const middleWare = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
    news: newsReducer,
    auth: authReducer
  });

const persistConfig = {
    key: "root",
    storage: storage
  };

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, middleWare);
export const persistor = persistStore(store);
