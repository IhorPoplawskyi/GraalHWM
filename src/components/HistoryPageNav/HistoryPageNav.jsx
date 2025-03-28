import { HistoryPageNavItem } from "../HistoryPageNavItem/HistoryPageNavItem";
import s from "./HistoryPageNav.module.scss";

export const HistoryPageNav = ({history, changeMap}) => {
  
  return (
    <div className={s.Container}>
      {history.map((el, i) => <HistoryPageNavItem key={i} index={i} changeMap={changeMap} date={el.date}/>)}
    </div>
  )
}
