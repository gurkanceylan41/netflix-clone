import api from "../../utils/api";
import { ActionTypes } from "./ActionsTypes";

export const getPopular = () => (dispatch) => {
  dispatch({
    type: ActionTypes.MOVIES_LOADING,
  });
  const params = {
    region: "TUR",
  };
  api
    .get("/movie/popular", params)
    .then((res) =>
      dispatch({
        type: ActionTypes.GENRES_ERROR,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIES_ERROR,
        payload: err.message,
      })
    );
};
