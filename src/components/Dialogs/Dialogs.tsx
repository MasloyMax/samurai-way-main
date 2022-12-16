import DialogStyle from './dialogs.module.css'
import {DialogMessagesType, DialogsNamesType, DialogsPageType} from "../../Redux/state";
import Dialog from "./Dialog/Dialog";
import styled from "styled-components";
import Messages from "./Messages/Messages";
import {ChangeEvent, useState} from "react";

type DialogPage = {
    dialogPage: DialogsPageType
}

const Dialogs = (props: DialogPage) => {
    let dialogMap = props.dialogPage.dialogNames.map((n) => <Dialog names={n.name} id={ n.id}/>)

    let [messages, setMessages] = useState('')

    const [arrayOfDialogsPagePosts, setArrayOfDialogsPagePosts] = useState(props.dialogPage.dialogsMessages)

    function onClickButtonHandler() {
        let newMessages = {messages: messages, id: +new Date().toString()}
        setArrayOfDialogsPagePosts(prev => [...prev, newMessages])
        setMessages('')
    }

    function onChangeText(event: ChangeEvent<HTMLTextAreaElement>) {
        setMessages(event.currentTarget.value)
    }

    return (
        <div>
            <ContainerDialogs>
                <div>
                    {dialogMap}
                </div>
                <div>
                    {arrayOfDialogsPagePosts.map((n) =>
                        <Messages messages={n.messages} id={n.id}/>)}
                    <textarea onChange={onChangeText} value={messages}/>
                    <ContButton onClick={onClickButtonHandler}>Send</ContButton>
                </div>
            </ContainerDialogs>
        </div>
    )
}

const ContainerDialogs = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-evenly;
`
const ContButton = styled.button`
  width: 70px;
  height: 30px;
  background: white;
  color: black;
  transition: 0.5s;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background: black;
    color: #f2f8fa;
  }
`

export default Dialogs