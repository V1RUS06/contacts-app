import {combineReducers} from "redux";
import {userReducer} from "./userReducer";


export const rootReduce = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof rootReduce>
