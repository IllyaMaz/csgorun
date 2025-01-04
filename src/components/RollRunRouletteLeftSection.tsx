import styled from "styled-components"
import RollRunRouletteCard from "./rollRunRoulette/rollRunRouletteCard"
import { Dispatch, SetStateAction } from "react"

function RollRunRouletteLeftSection({ games, setGame }: { games: (number | null)[], setGame: Dispatch<SetStateAction<(number | null)[]>> }) {
    return (
        <StyledRollRunRouletteLeftSection>
            {games.map((game, index) => (
                <RollRunRouletteCard 
                    key={index} 
                    order={index} 
                    game={game}
                    setGame={setGame} 
                />
            ))}
        </StyledRollRunRouletteLeftSection>
    )
}

const StyledRollRunRouletteLeftSection = styled.div`

    flex-grow: 1;
    gap: .625rem;
    display: grid;
    margin-bottom: 2rem;
`

export default RollRunRouletteLeftSection