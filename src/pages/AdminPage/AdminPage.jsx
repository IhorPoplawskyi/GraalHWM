import cn from "classnames";
import s from "./AdminPage.module.scss";

import { useEffect, useState } from "react";
import { getUsersThunk } from "../../redux/thunks";
import { UserList } from "../../components/UserList/UserList";
import { Preloader } from "../../components/Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { AdminPanel } from "../../components/AdminPanel/AdminPanel";
import { AdminPageBtn } from "./AdminPageBtn";

export const AdminPage = () => {
  const dispatch = useAppDispatch();
  const [panelType, setPanelType] = useState("users");
  const [active, setActive] = useState("users");
  const users = useAppSelector((state) => state.admin.users);
  const status = useAppSelector((state) => state.admin.status);
  const token = useAppSelector((state) => state.user.user.token);
  const isAdmin = useAppSelector((state) => state.user.user.role);
  const checkedUsers = useAppSelector((state) => state.admin.checkedUsers);
  
  const handlePanelTypes = (type) => {
    setActive(type);
    setPanelType(type);
  };

  useEffect(() => {
    dispatch(getUsersThunk(token));
  }, [dispatch]);

  return (
    <>
      {status === "pending" && <Preloader />}
      <div className={s.adminPageWrapper}>
        <div className={s.toogleHeader}>
          <AdminPageBtn
            text="Users panel"
            func={handlePanelTypes}
            type="users"
            className={cn(s.toogleBtn, active === "users" ? s.active : null)}
          />
          <AdminPageBtn
            text="Graal panel"
            func={handlePanelTypes}
            type="graal"
            className={cn(s.toogleBtn, active === "graal" ? s.active : null)}
          />
        </div>
        {panelType === "users" && (
          <div className={s.adminPageContainer}>
            <AdminPanel
              dispatch={dispatch}
              token={token}
              checkedUsers={checkedUsers}
              role={isAdmin}
            />
            <UserList users={users} />
          </div>
        )}
      </div>
    </>
  );
};
