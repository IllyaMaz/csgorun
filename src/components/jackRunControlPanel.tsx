import styled from "styled-components"
import NavigationControlPanel from "./navigationControlPanel"
import BetAmount from "./bet/betAmount"
import JackRunBet from "./bet/jackRunBet"
import RollRunBtn from "./bet/rollRunBtn"
import game from '../img/games.svg'

function JackRunControlPanel() {
    return (
        <StyledJackRunControlPanel>
            <NavigationControlPanel/>
            <BetAmount/>
            <JackRunBet/>
            <RollRunBtn onCreateGame={() => {}} picture={game} name="Bet" bet="0.10$"/>
        </StyledJackRunControlPanel>
    )
}

const StyledJackRunControlPanel = styled.div`

    width: 17.5rem;
    background: #1e253d;
    padding: 1.25rem;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: .875rem;
    flex-shrink: 0;
    height: fit-content;

`

export default JackRunControlPanel