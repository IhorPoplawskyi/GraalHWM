import cn from "classnames";
import s from "./MapItem.module.scss";
import showel from "../../common/showel.png";
import giftBox from "../../common/giftBox.png";

import { openCell } from "../../redux/tempSlice";
import { useAppDispatch } from "../../redux/store";

export const MapItem = ({ id, closed, attemps, closedMap = false, prize }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {closed ? (
        <div className={s.closedItem} title={prize}>
          {prize === "" ? <img src={showel} /> : <img src={giftBox} />}
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
        >
          {id + 1}
        </div>
      )}
    </>
  );
};
