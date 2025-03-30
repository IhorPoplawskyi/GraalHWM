import { useAppDispatch } from "../../redux/store";
import { setCurrHistoryMap } from "../../redux/tempSlice";
import s from "./HistoryPageNavItem.module.scss";
import cn from "classnames";


export const HistoryPageNavItem = ({ date, index, isActive, setActive }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={isActive ? cn(s.wrapper, s.activeItem) : s.wrapper}
      onClick={() => {
        setActive(index);
        dispatch(setCurrHistoryMap(index))}
      }
    >
      {date}
    </div>
  );
};
