import s from "./SideBarItem.module.scss";

import { useNavigate } from "react-router-dom";

export const SideBarItem = ({ image, path }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(path)} className={s.wrapper}>
      <img src={image} />
    </div>
  );
};
