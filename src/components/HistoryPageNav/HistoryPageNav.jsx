import { HistoryPageNavItem } from "../HistoryPageNavItem/HistoryPageNavItem";
import s from "./HistoryPageNav.module.scss";

export const HistoryPageNav = ({history}) => {
  
  return (
    <div className={s.Container}>
      {history.map((el, i) => <HistoryPageNavItem key={i} index={i} date={el.date}/>)}
    </div>
  )
}
