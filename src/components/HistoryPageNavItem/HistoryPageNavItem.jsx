import { useAppDispatch } from "../../redux/store";
import { setCurrHistoryMap } from "../../redux/tempSlice";

export const  HistoryPageNavItem = ({ date, index }) => {
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => dispatch(setCurrHistoryMap(index))}>{date}</div>
  )
}
