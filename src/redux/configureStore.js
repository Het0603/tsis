import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
