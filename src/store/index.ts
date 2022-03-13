import {applyMiddleware, createStore} from "redux";
import {rootReduce} from "./reducers";
import thunk from "redux-thunk";


export const store = createStore(rootReduce, applyMiddleware(thunk))
