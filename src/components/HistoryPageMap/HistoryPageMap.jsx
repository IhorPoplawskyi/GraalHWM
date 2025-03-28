import { MapItem } from "../mapItem/MapItem";
import s from "./HistoryPageMap.module.scss";

export const HistoryPageMap = ({ map }) => {
  return (
    <div className={s.Container}>
        {map.data.map((el) => (
          <MapItem key={el.id} id={el.id} closed={el.closed} />
        ))}
    </div>
  );
};
