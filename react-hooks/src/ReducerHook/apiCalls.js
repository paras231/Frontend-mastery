import {postActions} from "./actionTypes";
import axios from "axios";
 
export const fetchPost =async (dispatch)=>{
  dispatch({tyoe: postActions.FETCH_POST_REQUEST});
  try {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({type: postActions.FETCH_POST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: postActions.FETCH_POST_FAILURE, payload: error.message});
  }
}