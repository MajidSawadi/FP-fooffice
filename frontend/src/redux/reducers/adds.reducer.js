import * as types from "../constaints/adds.constaint";

const initialState = {
  adds: [],
  loading: false,
};

const addsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        adds: payload.adds,
      };

    default:
      return state;
  }
};

export default addsReducer;
