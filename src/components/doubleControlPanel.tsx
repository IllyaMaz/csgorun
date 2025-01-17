import styled from "styled-components"
import NavigationControlPanel from "./navigationControlPanel"
import BetAmount from "./bet/betAmount"
import Bet from "./bet/bet"
import AutoBet from "./bet/autoBet"


function DoubleControlPanel() {
    return (
        <StyledDoubleControlPanel>
            <NavigationControlPanel/>
            <BetAmount/>
            <Bet/>
            <AutoBet/>
        </StyledDoubleControlPanel>
    )
}

const StyledDoubleControlPanel = styled.section`
    width: 17.5rem;
    background: #1e253d;
    padding: 1.25rem;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: .875rem;
`

export default DoubleControlPanel