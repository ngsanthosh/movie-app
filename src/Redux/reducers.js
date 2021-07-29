import { ADD_MOVIES_FAVORITE, REMOVE_MOVIES_FAVORITE } from "./actions";

// const initialState =  [],

export default function Fav(state = [], action) {
  switch (action.type) {
    case ADD_MOVIES_FAVORITE: {
      return [action.mov, ...state];
      // favs: [action.mov, ...state.favs]
    }
    case REMOVE_MOVIES_FAVORITE: {
      const newarray = state.filter((m) => m.imdbID !== action.mov.imdbID);
      return newarray;
    }
  }
}
