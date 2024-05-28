import { useState } from "react";
import { BASE_URL, sgiApiClient } from "../sgiApiClient";

export default function TOPAuthentication() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  if (token) {
    (async () => {
      await verifyToken({ askForAuthenticate: null });
    })();
  }

  async function verifyToken({ askForAuthenticate }) {
    if (token) {
      await sgiApiClient
        .get(BASE_URL + "/verify", {
          headers: {
            Authorization: token,
          },
        })
        .catch((response) => {
          setToken(response.httpError !== true);
          if (askForAuthenticate) askForAuthenticate(null);
        });
    }
  }

  const saveToken = (userToken) => {
    localStorage.setItem("token", `Bearer ${userToken}`);
    setToken(`Bearer ${userToken}`);
  };

  const authenticate = async (crendetials) => {
    return sgiApiClient.post(BASE_URL + "/login", crendetials, {
      "Content-type": "application/json",
    });
  };

  return {
    setToken: saveToken,
    token,
    authenticate,
    verifyToken,
  };
}
