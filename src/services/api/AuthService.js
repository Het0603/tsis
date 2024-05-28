import { sgiApiClient } from "../sgiApiClient";

export default {
  createSession,
  destroySession,
  setApiClientAuthHeader,
  removeApiClientAuthHeader,
  setApiClientInterceptor,
};

async function createSession(body) {
  const url = "/auth";

  const res = await sgiApiClient.post(url, body);

  const { access } = res.data;

  if (!access) {
    throw new Error("Authentication Failed");
  }
  return res.data;
}

async function destroySession() {
  const url = "/token";

  await sgiApiClient.delete(url);
}

function setApiClientAuthHeader(token) {
  sgiApiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeApiClientAuthHeader() {
  delete sgiApiClient.defaults.headers.common.Authorization;
}

function setApiClientInterceptor({ onLogout }) {
  sgiApiClient.interceptors.response.use(
    setApiClientInterceptorSuccessCallback,
    setApiClientInterceptorRejectCallback({ onLogout })
  );
}

function setApiClientInterceptorSuccessCallback(response) {
  return response;
}

function setApiClientInterceptorRejectCallback({ onLogout }) {
  return (err) => {
    const { error } = err;

    if (error.response && error.response.status === 401) {
      if (onLogout) {
        onLogout();
      }
    }
    return Promise.reject(err);
  };
}
