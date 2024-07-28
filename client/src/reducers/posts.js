import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload; //our actual posts
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
}; //actions (describes what should change in the state) like setVal in React, but can use everywhere within the application

//api: calls the api and receives a response
//actions: uses the api's response to do something (like fetch post)
//reducer: uses the actions' type to update state
//frontend components: uses the states to display on the frontend like displaying all posts
