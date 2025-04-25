import s from "./PrizeList.module.scss";

import { useAppSelector } from "../../redux/store";

export const PrizeList = () => {
  let prizes = useAppSelector((state) => state.tempSlice.data);
  let openCellsCount = useAppSelector((state) => state.tempSlice.data);
  openCellsCount = openCellsCount.filter((el) => el.closed === false);
  prizes = prizes.filter((el) => el.prize !== "");
  prizes = prizes.filter((el) => el.closed === false);
  prizes = prizes.map((el) => el.prize);

  return (
    <div className={s.container}>
      <div>Активные призы: {prizes.length}</div>
      <div>Осталось ячеек: {openCellsCount.length}</div>
      <div className={s.list}>
        {prizes.map((el, i) => (
          <div key={i} className={s.item}>
            {i + 1}.{el}
          </div>
        ))}
      </div>
    </div>
  );
};
