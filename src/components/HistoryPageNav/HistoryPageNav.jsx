import { useState } from "react";
import { HistoryPageNavItem } from "../HistoryPageNavItem/HistoryPageNavItem";
import s from "./HistoryPageNav.module.scss";

export const HistoryPageNav = ({ history }) => {
  
  const [active, setActive] = useState(0);

  return (
    <div className={s.container}>
      {history.map((el, i) => <HistoryPageNavItem key={i} index={i} date={el.date} isActive={active === i} setActive={setActive}/>)}
    </div>
  )
}
