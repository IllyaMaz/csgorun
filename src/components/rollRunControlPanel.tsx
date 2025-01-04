import styled from "styled-components";
import NavigationControlPanel from "./navigationControlPanel";
import BetAmount from "./bet/betAmount";
import Oponent from "./bet/oponent";
import AmountOponent from "./bet/amountOponent";
import RollRunBtn from "./bet/rollRunBtn";

function RollRunControlPanel({ onCreateGame }: { onCreateGame: () => void }) {
    return (
        <StyledRollRunControlPanel>
            <NavigationControlPanel/>
            <BetAmount/>
            <Oponent/>
            <AmountOponent amount={4}/>
            <RollRunBtn onCreateGame = {onCreateGame}/>
        </StyledRollRunControlPanel>
    )
}

const StyledRollRunControlPanel = styled.section`
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


export default RollRunControlPanel