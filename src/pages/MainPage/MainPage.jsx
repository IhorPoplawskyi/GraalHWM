import s from "./MainPage.module.scss";

import { useEffect } from "react";
import { Map } from "../../components/Map/Map";
import { getCurrentUserThunk } from "../../redux/thunks";
import { PrizeList } from "../../components/PrizeList/PrizeList";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Button } from "../../components/Button/Button";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.tempSlice.data);
  const role = useAppSelector((state) => state.user.user.role);
  const token = useAppSelector((state) => state.user.user.token);
  const attempts = useAppSelector((state) => state.user.user.attempts);
  const isAdmin = Boolean((role === "ADMIN") | (role === "SUPER_ADMIN"));

    useEffect(() => {
      dispatch(getCurrentUserThunk(token));
    }, [dispatch]);

  return (
    <div className={s.mainPageWrapper}>
      <div className={s.mainPageContainer}>
        <PrizeList attempts={attempts} />
        <Map data={data} attemps={attempts} />
        {isAdmin && <div className={s.adminBlock}>
          <Button mystyle={{ width: "70px" }} text="Open" />
          <Button mystyle={{ width: "70px" }} text="Close" />
          <Button mystyle={{ width: "70px" }} text="Archive" />
        </div>}
      </div>
    </div>
  );
};
