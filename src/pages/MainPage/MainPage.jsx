import { MapItem } from "../../components/mapItem/MapItem";
import { useAppSelector } from "../../redux/store";
import style from "./MainPage.module.scss";

export const MainPage = () => {
  let data = useAppSelector(state => state.tempSlice.data);
  let attemps = useAppSelector(state => state.tempSlice.user.attemps);

  return (
    <div className={style.Wrapper}>
      <div className={style.Container}>
        {data.map((el) => (
          <MapItem key={el.id} id={el.id} closed={el.closed} attemps={attemps}/>
        ))}
      </div>
    </div>
  );
};
