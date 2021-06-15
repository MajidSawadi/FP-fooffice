import * as types from "../constaints/adds.constaint";

import api from "../api";

const addsRequest = async (dispatch) => {
  try {
    const { data } = await api.addsRequest();
  } catch (error) {}
};
