import { useAppDispatch } from "../../redux/store";
import s from "./UserItem.module.scss";

export const UserItem = ( { user, addFunc, delFunc } ) => {
  const dispatch = useAppDispatch();
  return (
    <div className={s.userWrapper}>
      <div className={s.nicknameItem}>{user.nickname}</div>
      <div className={s.emailItem}>{user.email}</div>
      <div className={s.roleItem}>{user.role}</div>
      <div className={s.attemptsItem}>Attempts: {user.attempts}</div>
      <input type="checkbox" checked={user.checked}  onChange={(e) => {
        if (e.target.checked === true) {
          dispatch(addFunc(user))
        } else {
          dispatch(delFunc(user))
        }
      }}/>
    </div>
  );
};