export function addUserToStorage({ user }) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromStorage() {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

export function addTokenToStorage({ token }) {
  localStorage.setItem("tsisAuthToken", JSON.stringify(token));
}

export function getTokenFromStorage() {
  const token = localStorage.getItem("tsisAuthToken");

  if (token) {
    return JSON.parse(token);
  }
  return null;
}

export function clearUserDataFromStorage() {
  localStorage.removeItem("user");
  localStorage.removeItem("tsisAuthToken");
}
