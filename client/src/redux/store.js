import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";


import rootReducer from "./root-reducer";
import rootSage from './root-saga'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(...middlewares) /* preloadedState, */ +
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSage);

export const persistor = persistStore(store);

export default { store, persistStore };
