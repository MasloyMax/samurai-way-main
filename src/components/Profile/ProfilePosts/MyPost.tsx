import StyleMyPost from './newPost.module.css'
import {MyPostPageAr, MyPostPageType} from "../../../Redux/state";
import NewPost from "./NewPost/NewPost";
import CreatePost from "./CreatePost/CreatePost";
import {useState} from "react";

type PropsType ={
    messages: Array<MyPostPageType>
}

const MyPost = (props: PropsType) => {

    let [statePost, setStatePost] = useState(props.messages)

    function onClickHundlerPost(title:string): void {
        let newElement = {id: 3, messages: title}
        setStatePost(statePost => [...statePost,newElement])
    }

    let newPosts = statePost.map((t) => <NewPost messages={t.messages} id={t.id}/>)
    return (
        <div>
            <CreatePost onClickHundlerPost={onClickHundlerPost} />
            {newPosts}
        </div>
    )
}

export default MyPost