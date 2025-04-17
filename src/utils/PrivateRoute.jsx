import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

export const PrivateRoute = ({ component: RouteComponent }) => {
  const logged = useAppSelector((state) => state.tempSlice.logged);

  if (logged) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};
