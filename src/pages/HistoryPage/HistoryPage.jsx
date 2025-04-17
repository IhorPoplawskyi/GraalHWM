import { Map } from "../../components/Map/Map";
import { HistoryPageNav } from "../../components/HistoryPageNav/HistoryPageNav";
import { useAppSelector } from "../../redux/store";
import s from "./HistoryPage.module.scss";

export const HistoryPage = () => {
  const history = useAppSelector((state) => state.tempSlice.history);
  const currHistoryMap = useAppSelector(
    (state) => state.tempSlice.currHistoryMap
  );

  return (
    <div className={s.historyPageWrapper}>
      {history.length !== 0 ? (
        <div className={s.historyPageContainer}>
          <HistoryPageNav history={history} />
          <Map data={history[currHistoryMap].data} closedMap={true} />
        </div>
      ) : (
        <h1>История пока пуста :(</h1>
      )}
    </div>
  );
};
