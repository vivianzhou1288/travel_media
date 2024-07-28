import { combineReducers } from "redux";

import posts from "./posts";

export default combineReducers({ posts }); //can have multiple reducer (one for authentication, one for user profiles, one for posts --> combineReducers helps to organize these reducers into a single root reducer that the Redux store can use); reducer takes actions as arguments and return a new state
