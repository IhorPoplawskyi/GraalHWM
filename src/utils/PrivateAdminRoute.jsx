import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

export const PrivateAdminRoute = ({ component: RouteComponent }) => {
  const logged = useAppSelector((state) => state.user.token);

  if (logged.length > 0) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};

