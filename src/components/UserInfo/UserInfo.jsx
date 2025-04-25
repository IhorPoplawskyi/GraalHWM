import s from "./UserInfo.module.scss";
import userImage from "../../common/user.png";

export const UserInfo = ({ user }) => {
  const { nick, picture, attemps } = user;

  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <img src={picture ? picture : userImage} />
      </div>
      <div>{nick}</div>
      <div>Попиток: {attemps}</div>
    </div>
  );
};
