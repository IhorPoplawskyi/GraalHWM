import { SideBar } from "./components/SideBar/SideBar";
import { MainPage } from "./pages/MainPage/MainPage";
import s from "./App.module.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { PrivateRoute } from "./utils/PrivateRoute";
import { AdminPage } from "./pages/AdminPage/AdminPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <SideBar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<MainPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route
            path="/admin"
            element={<PrivateRoute component={AdminPage} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
