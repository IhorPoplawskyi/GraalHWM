import { useAppSelector } from "../../redux/store";
import s from "./PrizeList.module.scss";

export const PrizeList = () => {
  let prizes = useAppSelector((state) => state.tempSlice.data);
  prizes = prizes.filter((el) => el.prize !== "");
  prizes = prizes.filter((el) => el.closed === false);
  prizes = prizes.map((el) => el.prize);

  return (
    <div className={s.container}>
      <div>Активные призы</div>
      <div className={s.list}>
        {prizes.map((el, i) => (
          <div className={s.item}>
            {i + 1}.{el}
          </div>
        ))}
      </div>
    </div>
  );
};
