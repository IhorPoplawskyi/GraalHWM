import { useNavigate } from 'react-router-dom'
import s from './SideBarItem.module.scss'

export const SideBarItem = ({ image, path }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(path)} className={s.wrapper}><img src={image}/></div>
  )
}
