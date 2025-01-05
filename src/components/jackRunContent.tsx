import styled from "styled-components"
import WinLeftBloc from "./jackrun/winLeftBlock"
import WinRightBlock from "./jackrun/winRightBlock"
import Waiting from "./jackrun/waiting"
import Winner from "./jackrun/winner"
import StartGame from "./jackrun/startGame"
import Revolves from "./jackrun/revolves"


function JackRunContent() {
    return (
        <StyledJackRunContent className="bg-gradient-var">
            <div className="header">
                <WinLeftBloc/>
                <div className="status">
                    {/* <Waiting/> */}
                    {/* <Winner/> */}
                    {/* <StartGame/> */}
                    <Revolves/>
                </div>
                <WinRightBlock/>
            </div>
        </StyledJackRunContent>
    )
}

const StyledJackRunContent = styled.div`

    display: flex;
    flex-grow: 1;
    border-radius: 1.25rem;
    background-color: #1c233a;
    --to: #1c233a;
    --from: #232c48;
    overflow: hidden;

    .header{
        display: flex;
        position: relative;
        align-items: center;
        height: 9.375rem;
        gap: 0px;
        width: 100%;
    }

    .status{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

`

export default JackRunContent