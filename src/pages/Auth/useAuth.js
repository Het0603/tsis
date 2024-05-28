import { useDispatch } from "react-redux";

export default function useAuth() {
  const dispatch = useDispatch();
  const tryLogin = (params) => {
    dispatch(loginUser(params));
  };
  return tryLogin;
}
