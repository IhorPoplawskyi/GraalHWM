import { MapItem } from "./../MapItem/MapItem";
import s from "./Map.module.scss";

export const Map = ({ data, attemps, closedMap }) => {

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        {data.map((el) => (
          <MapItem
            key={el.id}
            id={el.id}
            closed={el.closed}
            attemps={attemps}
            closedMap={closedMap}
            prize={el.prize}
          />
        ))}
      </div>
    </div>
  );
};
