import s from "./MainPage.module.scss";

import { Map } from "../../components/Map/Map";
import { useAppSelector } from "../../redux/store";
import { PrizeList } from "../../components/PrizeList/PrizeList";

export const MainPage = () => {
  let data = useAppSelector((state) => state.tempSlice.data);
  let attemps = useAppSelector((state) => state.tempSlice.user.attemps);

  return (
    <div className={s.mainPageWrapper}>
      <div className={s.mainPageContainer}>
        <PrizeList />
        <Map data={data} attemps={attemps} />
      </div>
    </div>
  );
};
