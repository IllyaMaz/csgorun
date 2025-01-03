import styled from "styled-components"
import RollRunRouletteWait from "./rolllRunRouletteWait"
import RollRunRouletteJoin from "./rollRunRouletteJoin"
import RollRunRoulette from "./rollRunRoulette"


function RollRunRouletteCard({order}: {order: number}) {
    return (
        <StyledRollRunRouletteCard className="bg-gradient-var">
            <RollRunRouletteWait number={order}/>
            <RollRunRouletteJoin/>
            <RollRunRoulette/>
        </StyledRollRunRouletteCard>
    )
}

const StyledRollRunRouletteCard = styled.div`
    height: 6.5rem;
    --to: #1c233a;
    --from: #232c48;
    border-radius: 1.25rem;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    z-index: 1;
    overflow: hidden;
`

export default RollRunRouletteCard