import { FETCH_GIFS_SUCCESS } from "../actions";

const initialState = {
  gifs: []
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case FETCH_GIFS_SUCCESS:
      return { ...state, gifs: action.payload };
    default:
      return state;
  }
}
