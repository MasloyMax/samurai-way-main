import {DialogsNamesType} from "../../../Redux/state";
import styled from "styled-components";

type PropsType = {
    names: string
    id: number
}

const Dialog = (props: PropsType) => {
    return (
        <div>
            <DialogMap>
                {props.names}
            </DialogMap>
        </div>
    )
}

const DialogMap = styled.div`
 margin-top: 20px;
`

export default Dialog