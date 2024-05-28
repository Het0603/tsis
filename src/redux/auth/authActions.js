import AuthService from "src/services/api/AuthService";
import getAuthStorage from "src/utils/storage/getAuthStorage";

export const LOAD_SESSION = "@auth/load-session";
export const LOGIN = "@auth/login";
export const LOGOUT = "@auth/logout";

const AuthStorage = getAuthStorage();

export function loadSession({ token } = {}) {
  return async (dispatch) => {
    // this line makes sure we clean up our legacy storage keys (will only run once on app load).
    AuthStorage.clearLegacyData();
    const authData = AuthStorage.loadData();

    let isLoggedIn = false;

    if (token || (authData && authData.token && authData.userId)) {
      AuthService.setApiClientAuthHeader(token || authData.token);

      isLoggedIn = true;
    }

    dispatch({
      type: LOAD_SESSION,
      payload: { isLoggedIn },
    });
  };
}

export function login(userId, token) {
  return async (dispatch) => {
    AuthStorage.saveData({ token, userId });

    AuthService.setApiClientAuthHeader(token);

    dispatch({
      type: LOGIN,
    });
  };
}

export function logout() {
  return async (dispatch) => {
    // We don't care about the return value of this call, but catch
    // any API errors to prevent an 'uncaught promise' message being logged.

    AuthService.destroySession().catch(() => {});
    AuthService.removeApiClientAuthHeader();

    AuthStorage.clearData();
    dispatch({ type: LOGOUT });
  };
}
