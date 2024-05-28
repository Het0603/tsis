import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import useAuthState from "src/redux/auth/useAuthState";
import UserService from "src/services/user/userService";
import buildUrlSearchFromObj from "src/utils/buildUrlSearchFromObj";
import useHttpQuery from "src/hooks/useHttpQuery";
import { logout } from "src/redux/auth/authActions";

AuthGuard.propsTypes = {
  children: PropTypes.node.isRequired,
};

function AuthGuard({ children }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const verifyToken = useHttpQuery({
    key: "ValidateUser",
    apiFn: UserService.verifyToken,
  });

  const validateSession = () => {
    const _validate = async () => {
      if (verifyToken.isError) {
        await dispatch(logout());
      }
    };
    async () => {
      await _validate();
    };
  };

  validateSession();

  const authState = useAuthState();

  if (!authState.isLoggedIn) {
    const redirectUrl = `${location.pathname}${location.search}`;
    const urlSearch = buildUrlSearchFromObj({ redirectUrl });

    return <Navigate replace to={`/login${urlSearch}`} />;
  }

  return children;
}

export default AuthGuard;
