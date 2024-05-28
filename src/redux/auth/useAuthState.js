import { useSelector } from 'react-redux'

export default function useAuthState() {

  const auth = useSelector((state) => state.auth)

  return {
    hasLoadedSession: auth.hasLoadedSession,
    isLoggedIn: auth.isLoggedIn,
  }
}
