import { Map } from "../../components/Map/Map";
import { PrizeList } from "../../components/PrizeList/PrizeList";
import { useAppSelector } from "../../redux/store";
import style from "./MainPage.module.scss";

export const MainPage = () => {
  let data = useAppSelector(state => state.tempSlice.data);
  let attemps = useAppSelector(state => state.tempSlice.user.attemps);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <PrizeList />
        <Map data={data} attemps={attemps}/>
      </div>
    </div>
  );
};
