import { NavLink } from 'react-router-dom'
import SideBarStyle from './sidebar.module.css'

type SideBarType = {
    profile:string
    dialogs: string
    music:string
    news:string
}

const SideBar = (props:SideBarType) => {
  return (
   <div className={SideBarStyle.sidebar_container}>
       <NavLink to={'/profile'}>{props.profile}</NavLink>
       <NavLink to={'/dialogs'}>{props.dialogs}</NavLink>
       <NavLink to={'/music'}>{props.music}</NavLink>
       <NavLink to={'/news'}>{props.news}</NavLink>
   </div>
  )
}

export default SideBar