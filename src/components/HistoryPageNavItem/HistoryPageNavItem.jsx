export const  HistoryPageNavItem = ({ date, index, changeMap }) => {
  return (
    <div onClick={changeMap(index)}>{date}</div>
  )
}
