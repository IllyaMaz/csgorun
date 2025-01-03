import styled from "styled-components"
import RollRunRouletteCard from "./rollRunRoulette/rollRunRouletteCard"

function RollRunRouletteLeftSection() {
    const card = []
    for (let i = 1; i < 30; i++) {
        card.push(i)
    }
    return (
        <StyledRollRunRouletteLeftSection>
            {card.map((index) => {
                return <RollRunRouletteCard key={index} order={index} />;
            })}
            
        </StyledRollRunRouletteLeftSection>
    )
}

const StyledRollRunRouletteLeftSection = styled.div`

    flex-grow: 1;
    gap: .625rem;
    display: grid;

`

export default RollRunRouletteLeftSection