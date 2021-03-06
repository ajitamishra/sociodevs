import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from "../actions/types";
const initialState = {
  profile: null,
  loading: true,
  profiles: [],
  repos: [],
  errors: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };

    default:
      return {
        state,
      };
  }
}
