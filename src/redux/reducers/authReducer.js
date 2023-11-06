import { LOGIN, LOGOUT } from "../types/authActionType";

const initialState = {
  roles: "guest",
  access_token: "",
  email_verified: false,
  mobile_verified: false,
  profile: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        roles: "guest",
        access_token: "",
        email_verified: false,
        mobile_verified: false,
        profile: {},
      };

    default:
      return state;
  }
};

export default authReducer;
