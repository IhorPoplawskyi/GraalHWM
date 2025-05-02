import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

export const PrivateAdminRoute = ({ component: RouteComponent }) => {
  const logged = useAppSelector((state) => state.user.user.token);
  const isAdmin = useAppSelector((state) => state.user.user.role)

  if (logged.length > 0 && isAdmin === "SUPER_ADMIN") {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};

