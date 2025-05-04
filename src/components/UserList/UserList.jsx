import { UserItem } from "../UserItem/UserItem";
import s from "./UserList.module.scss";
import {
  addAllChecked,
  delAllChecked,
  deleteCheckedUser,
  addCheckedUser,
} from "../../redux/adminSlice";
import { UserListLabel } from "../UserListLabels/UserListLabels";

export const UserList = ({ users }) => {

  return (
    <>
      <div className={s.UserListWrapper}>
        <UserListLabel
          addFunc={addAllChecked}
          delFunc={delAllChecked}
          user={users}
        />
        {users.map((user, i) => (
          <UserItem
            checked={user.checked}
            key={i}
            user={user}
            addFunc={addCheckedUser}
            delFunc={deleteCheckedUser}
          />
        ))}
      </div>
    </>
  );
};
