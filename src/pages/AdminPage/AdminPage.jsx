import s from "./AdminPage.module.scss";

import { useEffect } from "react";
import { getUsersThunk } from "../../redux/thunks";
import { UserList } from "../../components/UserList/UserList";
import { Preloader } from "../../components/Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { AdminPanel } from "../../components/AdminPanel/AdminPanel";

export const AdminPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.admin.users);
  const status = useAppSelector((state) => state.admin.status);
  const token = useAppSelector((state) => state.user.user.token);
  const isAdmin = useAppSelector((state) => state.user.user.role);
  const checkedUsers = useAppSelector((state) => state.admin.checkedUsers);

  useEffect(() => {
    dispatch(getUsersThunk(token));
  }, [dispatch]);

  return (
    <>
      {status === "pending" && <Preloader />}
      <div className={s.adminPageWrapper}>
        <div className={s.adminPageContainer}>
          <AdminPanel
            dispatch={dispatch}
            token={token}
            checkedUsers={checkedUsers}
            role={isAdmin}
          />
          <UserList users={users} />
        </div>
      </div>
    </>
  );
};
