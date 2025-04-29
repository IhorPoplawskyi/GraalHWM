import s from "./UserInfo.module.scss";
import userImage from "../../common/user.png";

export const UserInfo = ({ user }) => {

  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <img src={userImage} />
      </div>
      <div>{user.nickname}</div>
      <div>Attemps: {user.attempts}</div>
    </div>
  );
};
