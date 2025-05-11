import s from "../UserItem/UserItem.module.scss";

import { useAppDispatch } from "../../redux/store";

export const UserListLabel = ({ user, addFunc, delFunc }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={s.userWrapper} style={{ borderTop: "1px solid gray" }}>
        <div className={s.checkbox}>
          <input
            type="checkbox"
            checked={user.checked}
            onChange={(e) => {
              if (e.target.checked === true) {
                dispatch(addFunc(user));
              } else {
                dispatch(delFunc(user));
              }
            }}
          />
        </div>
        <div className={s.nicknameItem}>Nickname:</div>
        <div className={s.emailItem}>Email:</div>
        <div className={s.roleItem}>Role:</div>
        <div className={s.statusItem}>Status:</div>
        <div className={s.attemptsItem}>Attempts:</div>
      </div>
    </>
  );
};
