import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "src/services/user/userService";
import { addTokenToStorage } from "src/utils/storage";

export const initUserState = {
  isLoggedIn: false,
  user: {},
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initUserState,
  reducers: {
    setUser: (state, { payload }) => {
      (state.isLoggedIn = true), (state.user = payload.user || null);
      state.token = payload.token || null;
      return state;
    },
    logout: (state) => {
      state = initUserState;
      return state;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const loginUser = createAsyncThunk("user/login", (info, thunk) => {
  const { dispatch } = thunk;
  const { callback, ...params } = info;

  console.log(params);

  // dispatch(toggle)

  UserService.auth(params)
    .then((response) => {
      dispatch(
        setUser({
          token: response.data.access,
          isLoggedIn: true,
        })
      );

      addTokenToStorage({ token: response.data.access });
    })
    .catch((response) => {
      console.warn(response);
    });
});

export const verifyUser = createAsyncThunk("user/verify", () => {
  UserService.verify().catch(() => {
    clearUserDataFromStorage();
  });
});
