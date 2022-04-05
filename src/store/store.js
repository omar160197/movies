import { createStore } from "redux"; 
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducer/combineReducer";



export const store =createStore(reducers,composeWithDevTools()) 