import axios from "axios";
import logHttpResponse from "./logHttpResponse";
import { getTokenFromStorage } from "src/utils/storage";

let BASE_URL = null;
let BASE_URL_IMAGE = null

const { host } = window.location;

if (host.includes("localhost") || host.includes("127.0.0.1")) {
  BASE_URL = "http://127.0.0.1:8000/sgi-api";
}

if (host.includes("erp-qa.sunshinegrouprajkot.com")) {
  BASE_URL = "https://api-qa.sunshinegrouprajkot.com/sgi-api";
}

if (host.includes("localhost")) {
  // BASE_URL = "http://10.10.1.3:8000/tiepltd-api";
  // BASE_URL = "http://127.0.0.1:8000/";
  // BASE_URL = "https://api-dev.tsis.edu.in";
  // BASE_URL = "https://api-qa.tsis.edu.in/";
}

// BASE_URL = 'http://127.0.0.1:8000/sgi-api'
// BASE_URL = 'http://10.10.1.3:8000'
// BASE_URL =  'http://10.10.1.3:8000'
// SUB_DOMAIN =  '/sgi-api'
BASE_URL = "https://api-qa.sunshinegrouprajkot.com/sgi-api";
BASE_URL_IMAGE = "https://api-qa.sunshinegrouprajkot.com";
// BASE_URL = 'https://api-qa.sunshinegrouprajkot.com/sgi-api'

export const sgiApiClient = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {},
});

let headers = {
  Authorization: `Bearer ${getTokenFromStorage()}`,
};

sgiApiClient.interceptors.response.use(
  (response) => {
    logHttpResponse({ axiosResponse: response });

    return response;
  },
  // Custom error handler to flag any non-500 errors from our server.
  // Components can handle these errors specifically by checking for
  // the presence of 'topError'.
  (error) => {
    const { response } = error;
    const topError = response && response.status <= 500;

    logHttpResponse({ isError: true, axiosResponse: response });

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      topError,
      error,
    });
  }
);

export { BASE_URL, headers,BASE_URL_IMAGE };
