import NewPostStyle from './newPost.module.css'
import styled from "styled-components";

type PropsType = {
    id: number
    messages: string
}

const NewPost = (props: PropsType) => {

    return (
        <div className={NewPostStyle.cont}>
            <div>
                <Image alt=""/>
                <Messages className={NewPostStyle.cont_text}>
                        {props.messages}
                </Messages>
            </div>
            <span>
              <LikesButton>Like</LikesButton>
                <LikesCount>0</LikesCount>
            </span>
        </div>
    )
}

const Image = styled.img.attrs({
    src: `${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5d7LJ-pf5J-6Odq-PNGwFpIyRkwii5vW_A&usqp=CAU'}`
})`
  width: 30px;
  height: 30px;
  border-radius: 20px;
`

const Messages = styled.span`
  position: relative;
  bottom: 10px;
  padding-left: 20px;
  width: 700px;
`
const LikesButton = styled.button`
  width: 50px;
  border-radius: 20%;
`
const MessagesCont = styled.p`
  max-width: 200px;
`

const LikesCount = styled.span`
  padding-left: 10px;
`

export default NewPost