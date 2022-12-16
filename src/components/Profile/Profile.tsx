import ProfileStyle from './profile.module.css'
import ProfileAva from "./ProfileAva/ProfileAva";
import {MyPostPageAr, MyPostPageType, ProfilePageType, RootStoreType} from "../../Redux/state";
import MyPost from "./ProfilePosts/MyPost";

type PropsType = {
    profilePage: ProfilePageType

}

const Profile = (props: PropsType) => {
    console.log(props)
    //
    return (
        <div className={ProfileStyle.profile_container}>
            <ProfileAva profileAva={props.profilePage.profileAva}/>
            <MyPost messages={props.profilePage.MyPosts}/>
        </div>
    )
}

export default Profile