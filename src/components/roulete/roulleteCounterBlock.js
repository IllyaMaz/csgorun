import styled from "styled-components"
import RouletteCounter from "./rouletteCounter"
import players from '../../img/players.svg'
import bank from '../../img/bank.svg'
import weapon from '../../img/weapon.svg'

function RouletteCounterBlock() {
    return (
        <StyledRouletteCounter>
            <li>
                <RouletteCounter picture={bank} name='bank' value={36.00}/>
            </li>
            <li>
                <RouletteCounter picture={players} name='players' value={30}/>
            </li>
            <li>
                <RouletteCounter picture={weapon} name='skins' value={12}/>
            </li>
        </StyledRouletteCounter>
    )
}

const StyledRouletteCounter = styled.ul`
    display: flex;
    margin-left: .5rem;
    margin-right: .5rem;
    align-items: center;
    gap: 1.5rem;
`

export default RouletteCounterBlock