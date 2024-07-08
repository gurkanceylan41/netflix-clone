import { ActionTypes } from "../actions/ActionsTypes";

const initialState = {
  isLoading: false,
  Error: null,
  genres: [],
};

const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GENRES_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.GENRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        genres: payload,
      };

    case ActionTypes.GENRES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default genreReducer;
