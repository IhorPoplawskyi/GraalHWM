import s from "./App.module.scss";

import { useAppSelector } from "./redux/store";
import { PrivateRoute } from "./utils/PrivateRoute";
import { MainPage } from "./pages/MainPage/MainPage";
import { SignPage } from "./pages/SignPage/SignPage";
import { SideBar } from "./components/SideBar/SideBar";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { PrivateAdminRoute } from "./utils/PrivateAdminRoute";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const App = () => {
  const logged = useAppSelector((state) => state.tempSlice.logged);

  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <SideBar />
        <Routes>
          {logged ? (
            <Route path="*" element={<Navigate to="/" />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          {logged ? (
            <Route path="/" element={<PrivateRoute component={MainPage} />} />
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}
          <Route path="/" element={<PrivateRoute component={MainPage} />} />
          <Route
            path="history"
            element={<PrivateRoute component={HistoryPage} />}
          />
          <Route
            path="/admin"
            element={<PrivateAdminRoute component={AdminPage} />}
          />
          <Route path="/login" element={<SignPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
