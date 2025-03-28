import s from "./MapItem.module.scss";
import showel from "../../common/showel.png";
import { openCell } from "../../redux/tempSlice";
import { useAppDispatch } from "../../redux/store";
import cn from "classnames";

export const MapItem = ({ id, closed, attemps }) => {
  const dispatch = useAppDispatch();
  const closedMap = false;

  return (
    <>
      {closed ? (
        <div className={s.closedItem}>
          <img src={showel} />
        </div>
      ) : (
        <div
          className={closedMap ? cn(s.item, s.closedMap) : s.item}
          onClick={() => {
            if (attemps <= 0) {
              return;
            } else if (attemps > 0) {
              dispatch(openCell(id));
            }
          }}
        ></div>
      )}
    </>
  );
};
