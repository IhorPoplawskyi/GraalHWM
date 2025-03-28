import s from "./MapItem.module.scss";
import showel from "../../common/showel.png";
import { openCell } from "../../redux/tempSlice";
import { useAppDispatch } from "../../redux/store";

export const MapItem = ({ id, closed, attemps }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {closed ? (
        <div className={s.closedItem}>
          <img src={showel} />
        </div>
      ) : (
        <div
          className={s.item}
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
