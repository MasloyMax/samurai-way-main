import CreatePostStyle from './createPost.module.css';
import {ChangeEvent, useState} from "react";
import {MyPostPageType, ProfileAvaType, ProfilePageType} from "../../../../Redux/state";
import styled from "styled-components";
import {hover} from "@testing-library/user-event/dist/hover";

type CreatePostType = {

    onClickHundlerPost: (title: string) => void
}

const CreatePost = (props: CreatePostType) => {

    let [title, setTitle] = useState('')


    const click = () => {
        props.onClickHundlerPost(title)
    }


    function textOnChangePost(event: ChangeEvent<HTMLTextAreaElement>) {
        setTitle(event.currentTarget.value)
    }

    return (
        <div className={CreatePostStyle.my_post_container}>
            <ContainerText>
                <textarea className={CreatePostStyle.text} value={title} onChange={textOnChangePost}/>
            </ContainerText>
            <div>
                <Button onClick={click}>Send</Button>
            </div>
        </div>
    )
}

const Button = styled.button`
  width: 100px;
  height: 35px;
  color: black;
  border: 1px solid black;
  border-radius: 20px;
  margin-left: 20px;
  transition: 0.5s;
  &:hover {
    background: #3f3c3c;
    color: white;
    transition: 0.5s;
    cursor: pointer;
    border: none;
  }
`

const ContainerText = styled.div`
  max-width: 700px;
`



export default CreatePost