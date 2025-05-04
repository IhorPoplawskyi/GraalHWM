import s from "./MainPage.module.scss";

import { useEffect } from "react";
import { Map } from "../../components/Map/Map";
import { getCurrentUserThunk } from "../../redux/thunks";
import { PrizeList } from "../../components/PrizeList/PrizeList";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.tempSlice.data);
  const token = useAppSelector((state) => state.user.user.token);
  const attempts = useAppSelector((state) => state.user.user.attempts);

    useEffect(() => {
      dispatch(getCurrentUserThunk(token));
    }, [dispatch]);

  return (
    <div className={s.mainPageWrapper}>
      <div className={s.mainPageContainer}>
        <PrizeList attempts={attempts}/>
        <Map data={data} attemps={attempts} />
      </div>
    </div>
  );
};
