import axios from "axios";

const baseURL = `http://localhost:4000`;

export const sendSignup = signupData => async dispatch => {
  const response = await axios.post(`${baseURL}/signup`, signupData);
  dispatch(usersignedup(response.data));
};
const usersignedup = data => {
  return {
    type: "USER_SIGNEDUP",
    payload: data
  };
};

export const sendLogin = loginData => async dispatch => {
  const response = await axios.post(`${baseURL}/login`, loginData);
  dispatch(userloggedin(response.data));
};
const userloggedin = data => {
  return {
    type: "USER_LOGGEDIN",
    payload: data
  };
};
