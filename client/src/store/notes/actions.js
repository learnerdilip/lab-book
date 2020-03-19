import axios from "axios";

const baseURL = `http://localhost:4000`;

export const getNotes = () => async (dispatch, getState) => {
  const config = { Authorization: `Bearer ${getState().user.token}` };
  const response = await axios.get(`${baseURL}/notes`, {
    headers: config
  });
  dispatch(notesFetched(response.data));
};
const notesFetched = data => ({ type: "NOTES_FETCHED", payload: data });

export const noteRegister = noteData => async (dispatch, getState) => {
  const config = { Authorization: `Bearer ${getState().user.token}` };
  const response = await axios.post(`${baseURL}/notes`, noteData, {
    headers: config
  });
  dispatch(notePosted(response.data));
};
const notePosted = data => ({ type: "NOTE_POSTED", payload: data });
