import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  // deploy making sure redux tools not added
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(thunk))
    : compose(composeEnhancer(applyMiddleware(thunk)))
);
// :
//   const store = createStore(
//     rootReducer,
//     initialState,
//   );

export default store;
