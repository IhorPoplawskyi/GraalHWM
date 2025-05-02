import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

export const PrivateRoute = ({ component: RouteComponent }) => {
  const logged = useAppSelector((state) => state.user.user.token);

  if (logged.length > 0) {
    return <RouteComponent />;
  } else {
    return <Navigate to="/login" />;
  }
};
