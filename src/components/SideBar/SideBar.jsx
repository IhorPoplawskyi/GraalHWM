import { SideBarItem } from "../SideBarItem/SideBarItem";
import graal from "../../common/graal.png";
import history from "../../common/history.png";
import settings from "../../common/settings.png";
import s from "./SideBar.module.scss";
import { UserInfo } from "../UserInfo/UserInfo";
import { useAppSelector } from "../../redux/store";

export const SideBar = () => {
  const user = useAppSelector((state) => state.tempSlice.user);

  return (
    <>
      <div className={s.container}>
        <UserInfo user={user} />
        <div className={s.sideBarItems}>
          <SideBarItem image={graal} path="/" />
          <SideBarItem image={history} path="history" />
          <SideBarItem image={settings} path="settings" />
        </div>
      </div>
    </>
  );
};
