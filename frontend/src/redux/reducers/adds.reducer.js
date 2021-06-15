import * as types from "../constaints/adds.constaint";

const initialState = {
  adds: [],
};

const addsReducer = (state = initialState, action) => {
  switch (action.types) {
    case "ADD_REQUEST":
      return state;

    case "CREATE_ADD":
      return state;

    default:
      return state;
  }
};

export default addsReducer;
