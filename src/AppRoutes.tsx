import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./utils/routes";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function AppRoutes() {
  const appRoutes = useRoutes(routes)
  return (
    <>
      <Suspense fallback={<LoadingScreen isFullScreen />}>{appRoutes}</Suspense>
    </>
  )
}
export default AppRoutes;
