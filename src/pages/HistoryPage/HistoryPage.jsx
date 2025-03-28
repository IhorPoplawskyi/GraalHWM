import { useState } from 'react';
import { HistoryPageMap } from '../../components/HistoryPageMap/HistoryPageMap';
import { HistoryPageNav } from '../../components/HistoryPageNav/HistoryPageNav';
import { useAppSelector } from '../../redux/store';
import s from './HistoryPage.module.scss';

export const HistoryPage = () => {

  const history = useAppSelector(state => state.tempSlice.history);
  const currHistoryMap = useAppSelector(state => state.tempSlice.currHistoryMap)

  return (
    <div className={s.Wrapper}>
      <HistoryPageNav history={history} />
      <HistoryPageMap map={history[currHistoryMap]} />
    </div>
  );
}
