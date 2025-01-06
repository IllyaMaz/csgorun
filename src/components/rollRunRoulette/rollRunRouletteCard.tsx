import styled from "styled-components"
import RollRunRouletteWait from "./rolllRunRouletteWait"
import RollRunRouletteJoin from "./rollRunRouletteJoin"
import RollRunRoulette from "./rollRunRoulette"
import { Dispatch, SetStateAction, useEffect, useState } from "react";


function RollRunRouletteCard({ 
        order, 
        game, 
        setGame 
    }: 
    { 
        order: number, 
        game: number | null, 
        setGame:  Dispatch<SetStateAction<(number | null)[]>> 
    }) {

    const [stage, setStage] = useState<"wait" | "join" | "roulette">("wait")

    useEffect(() => {
        if (game) {
            setStage('join')
            
            setTimeout(() => {
                setStage('roulette')
            },5000)

            setTimeout(() => {
                setStage('wait')
                handleClearGame()
            },12000)
            
        }
    },[game])

    const handleClearGame = () => {
        setGame((prevGames) => {
            console.log(game);
            
            const updatedGames = [...prevGames];
            updatedGames[order] = null;
            console.log(game);

            return updatedGames;
        })

        setStage('wait')
    }

    return (
        <StyledRollRunRouletteCard className="bg-gradient-var">
            <RollRunRouletteWait stage={stage} number={order}/>
            <RollRunRouletteJoin stage={stage}/>
            <RollRunRoulette stage={stage} timeSpin={7000} timeReset={3000} winBlock={true} sectorWidth='4rem'/>
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