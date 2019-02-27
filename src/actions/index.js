export const FETCH_GIFS_SUCCESS = "FETCH_GIFS_SUCCESS";

const API_KEY = "?api_key=h27HxzLMIYiXkgjgkLI4cg2FJa8ka6hM";
const API_URL = `https://api.giphy.com/v1/gifs`;

export const fetchGifs = term => async dispatch => {
  try {
    const query = term.replace(/ /g, "+");
    const url = `${API_URL}/search${API_KEY}&q=the office+${query}`;
    const response = await fetch(url, {
      method: "GET",
      credentials: "same-origin"
    });
    const gifs = await response.json();
    dispatch({
      type: FETCH_GIFS_SUCCESS,
      payload: gifs.data
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchGif = id => async dispatch => {
  try {
    const url = `${API_URL}/${id}${API_KEY}`;
    const response = await fetch(url, {
      method: "GET",
      credentials: "same-origin"
    });
    const gif = await response.json();
    dispatch({
      type: FETCH_GIFS_SUCCESS,
      payload: [gif.data]
    });
  } catch (error) {
    console.error(error);
  }
};
