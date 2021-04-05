import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

/**
 * store
 * The object that holds the complete state of the app.
 *
 * rootReducer
 * Abstraction of all reducers combined to make Redux configuration simple.
 *
 * composeWithDevTools
 * Setup for the redux devtools
 *
 * applyMiddleware
 * Used to extend Redux with custom functionality.
 * In this case with redux-thunk
 *
 * thunk
 * Thunks are the recommended middleware for basic Redux side effects logic;
 * They are good for complex synchronous logic or simple async logic that needs access to the store.
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
