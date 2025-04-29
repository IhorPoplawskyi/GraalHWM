import s from "./SideBar.module.scss";
import graal from "../../common/graal.png";
import adminP from "../../common/admin.png";
import history from "../../common/history.png";
import settings from "../../common/settings.png";

import { logout } from "../../redux/userSlice";
import { UserInfo } from "../UserInfo/UserInfo";
import { SideBarItem } from "../SideBarItem/SideBarItem";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const role = useAppSelector((state) => state.user.role);
  const logged = useAppSelector((state) => state.user.token);

  if (logged.length > 0)
    return (
      <>
        <div className={s.container}>
          <UserInfo user={user} />
          <div className={s.sideBarItems}>
            <SideBarItem image={graal} path="/" />
            <SideBarItem image={history} path="history" />
            <SideBarItem image={settings} path="settings" />
            {role === "SUPER_ADMIN" ? (
              <SideBarItem image={adminP} path="admin" />
            ) : null}
            <div className={s.logoutBtn} onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}>Log out</div>
          </div>
        </div>
      </>
    );
  return null;
};
