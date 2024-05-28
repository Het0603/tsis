import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "src/store/slices/user.slice";

const userSelector = createSelector(
  (state) => state.user,
  (data) => data
);

export function useUserInfo() {
  let userData = useSelector(userSelector);
  return userData;
}

export function useVerifyUser(){
    const dispatch = useDispatch();
    const tryVerify = () => {
        dispatch(verifyUser());
    }
    return {
        tryVerify
    }
}
