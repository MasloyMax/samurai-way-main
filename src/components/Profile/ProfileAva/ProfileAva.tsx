import ProfileAvaStyle from './profileAva.module.css'
import {ProfileAvaType} from "../../../Redux/state";

type PropsType = {
    profileAva: ProfileAvaType
}

const ProfileAva = (props: PropsType) => {
  return(
      <div className={ProfileAvaStyle.profile_container}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5d7LJ-pf5J-6Odq-PNGwFpIyRkwii5vW_A&usqp=CAU" alt=""/>
        </div>
        <div className={ProfileAvaStyle.text}>
          <p>{props.profileAva.name}</p>
          <p>{props.profileAva.surname}</p>
          <p>{props.profileAva.age}</p>
          <p>{props.profileAva.website}</p>
        </div>
      </div>
  )
}

export default ProfileAva