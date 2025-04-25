import s from "./Map.module.scss";

import { MapItem } from "./../MapItem/MapItem";

export const Map = ({ data, attemps, closedMap }) => {
  return (
    <div className={s.mapWrapper}>
      <div className={s.mapContainer}>
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
