import userImage from "../../common/user.png";
import s from './UserInfo.module.scss';

export const UserInfo = ({user}) => {
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
}
