import { useDispatch } from "react-redux";
import useAuthState from "./redux/auth/useAuthState";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { loadSession } from "./redux/auth/authActions";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import PropTypes from "prop-types";

AppInitializer.propTypes = {
  children: PropTypes.node.isRequired,
};
function AppInitializer({ children }) {
  const dispatch = useDispatch();

  const authState = useAuthState();

  const [searchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(!authState.hasLoadedSession);

  useEffect(() => {
    const token = searchParams.get("token") || null;

    dispatch(loadSession({ token }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(!authState.hasLoadedSession);
  }, [authState.hasLoadedSession]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return children;
}

export default AppInitializer;
