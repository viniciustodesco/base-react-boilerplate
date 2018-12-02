import history from "./history";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";

import rootReducer from "./reducers";

const createStoreWithMiddlewares = compose(
  applyMiddleware(routerMiddleware(history), ReduxThunk)
)(createStore);

const reducerWithRouter = connectRouter(history)(rootReducer);

const persisteConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persisteConfig, reducerWithRouter);

const store = createStoreWithMiddlewares(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor, history };
