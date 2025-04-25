import s from "./SideBar.module.scss";
import graal from "../../common/graal.png";
import admin from "../../common/admin.png";
import history from "../../common/history.png";
import settings from "../../common/settings.png";

import { UserInfo } from "../UserInfo/UserInfo";
import { useAppSelector } from "../../redux/store";
import { SideBarItem } from "../SideBarItem/SideBarItem";

export const SideBar = () => {
  const user = useAppSelector((state) => state.tempSlice.user);
  const logged = useAppSelector((state) => state.tempSlice.logged);

  if (logged)
    return (
      <>
        <div className={s.container}>
          <UserInfo user={user} />
          <div className={s.sideBarItems}>
            <SideBarItem image={graal} path="/" />
            <SideBarItem image={history} path="history" />
            <SideBarItem image={settings} path="settings" />
            {logged === true ? (
              <SideBarItem image={admin} path="admin" />
            ) : null}
          </div>
        </div>
      </>
    );
  return null;
};
