import axios from "axios";

export const fetchData = async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ typr: "FETCH_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_FAILURE", payload: error });
  }
};
