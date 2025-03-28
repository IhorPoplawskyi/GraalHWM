import { useState } from 'react';
import { HistoryPageMap } from '../../components/HistoryPageMap/HistoryPageMap';
import { HistoryPageNav } from '../../components/HistoryPageNav/HistoryPageNav';
import { useAppSelector } from '../../redux/store';
import s from './HistoryPage.module.scss';

export const HistoryPage = () => {

  const history = useAppSelector(state => state.tempSlice.history);
  const [currMap, setCurrMap] = useState(0);

  return (
    <div className={s.Wrapper}>
      <HistoryPageNav changeMap={setCurrMap} history={history} />
      <HistoryPageMap map={history[currMap]} />
    </div>
  );
}
