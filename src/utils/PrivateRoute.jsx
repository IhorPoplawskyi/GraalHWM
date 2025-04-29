import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

export const PrivateRoute = ({ component: RouteComponent }) => {
  const logged = useAppSelector((state) => state.user.token);

  if (logged.length > 1) {
    return <RouteComponent />;
  } else {
    return <Navigate to="/login" />;
  }
};
