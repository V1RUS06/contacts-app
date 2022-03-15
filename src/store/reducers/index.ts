import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import authReducer from "./auth";


export const rootReduce = combineReducers({
  user: userReducer,
  auth: authReducer
})

export type RootState = ReturnType<typeof rootReduce>

