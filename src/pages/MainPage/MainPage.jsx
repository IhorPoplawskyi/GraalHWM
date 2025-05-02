import s from "./MainPage.module.scss";

import { Map } from "../../components/Map/Map";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { PrizeList } from "../../components/PrizeList/PrizeList";
import { useEffect } from "react";
import { getCurrentUserThunk } from "../../redux/thunks";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.user.token);
  useEffect(() => {
    dispatch(getCurrentUserThunk(token))
  }, [dispatch])
  let data = useAppSelector((state) => state.tempSlice.data);
  let attempts = useAppSelector((state) => state.user.user.attempts);

  return (
    <div className={s.mainPageWrapper}>
      <div>Attempts: {attempts}</div>
      <div className={s.mainPageContainer}>
        <PrizeList />
        <Map data={data} attemps={attempts} />
      </div>
    </div>
  );
};
