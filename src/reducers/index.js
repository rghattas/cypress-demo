import { FETCH_GIFS_SUCCESS, TOGGLE_FAVORITE } from "../actions";

const initialState = {
  gifs: [],
  favorites: []
};

const toggleFavorite = (state, gif) => {
  if (state.favorites.find(favorite => favorite.id === gif.id)) {
    return {
      ...state,
      favorites: state.favorites.filter(favorite => favorite.id !== gif.id)
    };
  }
  return { ...state, favorites: [gif, ...state.favorites] };
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case FETCH_GIFS_SUCCESS:
      return { ...state, gifs: action.payload };
    case TOGGLE_FAVORITE:
      return toggleFavorite(state, action.payload);
    default:
      return state;
  }
}
