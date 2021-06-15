import * as types from "../constaints/adds.constaint";

import api from "../api";


 const addsRequest = async (dispatch) => {
  dispatch( {type: types.POST_REQUEST, payload: null})
   try {
     
     const { data } = await api.addsRequest();
     dispatch({type: types.POST_REQUEST_SUCCESS, payload: data})
  } catch (error) {}
};

export const addsAction = {
  addsRequest,
}