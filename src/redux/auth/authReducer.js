import { LOAD_SESSION, LOGIN, LOGOUT } from "./authActions";

const initialState = {
  hasLoadedSession: false,
  isLoggedIn: false,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SESSION: {
      const { isLoggedIn } = action.payload;
      return {
        ...state,
        hasLoadedSession: true,
        isLoggedIn,
      };
    }

    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
