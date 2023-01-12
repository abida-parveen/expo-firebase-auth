import { SET_USER } from "../type";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload.user,
      };
    default:
      return state;
  }
};
export default authReducer;
