import axios from "axios";

const baseURL = `http://localhost:4000`;

export const getMonthLogs = () => async dispatch => {
  const response = await axios.get(`${baseURL}/experiments`);
  // console.log("-------------the experiemnts response DATA-----", response.data);
  dispatch(setExperiments(response.data));
};
const setExperiments = data => ({
  type: "EXPERIMENTS_LOADED",
  payload: data
});
