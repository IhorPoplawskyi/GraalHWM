import s from "./SideBar.module.scss";
import graal from "../../common/graal.png";
import adminP from "../../common/admin.png";
import logoutP from "../../common/logout.png";
import history from "../../common/history.png";
import settings from "../../common/settings.png";

import { logout } from "../../redux/userSlice";
import { UserInfo } from "../UserInfo/UserInfo";
import { SideBarItem } from "../SideBarItem/SideBarItem";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const SideBar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const role = useAppSelector((state) => state.user.user.role);
  const logged = useAppSelector((state) => state.user.user.token);

  if (logged.length > 0)
    return (
      <>
        <div className={s.container}>
          <UserInfo user={user} />
          <div className={s.sideBarItems}>
            <SideBarItem image={graal} path="/home" />
            <SideBarItem image={history} path="history" />
            <SideBarItem image={settings} path="settings" />
            {role === "SUPER_ADMIN" || role === "ADMIN" ? (
              <SideBarItem image={adminP} path="admin" />
            ) : null}
          </div>
          <div
            className={s.logout}
            onClick={() => {
              dispatch(logout());
            }}
          >
            <SideBarItem image={logoutP} />
          </div>
        </div>
      </>
    );
  return null;
};
