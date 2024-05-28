import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user.slice";


const rootReducer = combineReducers({
    user: userReducer
})

const RootState = typeof rootReducer
export { RootState, rootReducer }