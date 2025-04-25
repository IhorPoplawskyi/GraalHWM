import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

export const PrivateAdminRoute = ({ component: RouteComponent }) => {
  const logged = useAppSelector((state) => state.tempSlice.logged);
  const admin = useAppSelector((state) => state.tempSlice.admin);

  if (admin && logged) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};

