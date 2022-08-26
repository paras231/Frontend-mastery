import axios from "axios";

export const login = async (email, password, dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const { data } = await axios.post(
      "https://travel-andman.herokuapp.com/api/superadmin/login/role",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: data.role });
    console.log(data.role);
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.message });
  }
};
