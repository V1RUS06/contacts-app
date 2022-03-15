import {applyMiddleware, createStore} from "redux";
import {rootReduce} from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";


export const store = createStore(rootReduce, composeWithDevTools(applyMiddleware(thunk)))

export type AppDispatch = typeof store.dispatch

