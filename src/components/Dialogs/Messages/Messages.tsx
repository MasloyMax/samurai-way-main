import {DialogMessagesType} from "../../../Redux/state";
import styled from "styled-components";


type MassagesType = {
    id: number
    messages: string
}

const Messages = (props:MassagesType) => {
  return(
      <div>
          <MessagesMap>
              {props.messages}
          </MessagesMap>
      </div>
  )
}

const MessagesMap = styled.div`
 margin-top: 20px;
`

export default Messages