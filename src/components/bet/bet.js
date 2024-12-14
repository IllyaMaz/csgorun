import styled from "styled-components"
import BetCard from "./betCard"
import gold from '../../img/double-icon-gold.png'
import blue from '../../img/double-icon-blue.png'
import green from '../../img/double-icon-green.png'

function Bet() {
    return (
        <StyledBet>
            <div className="header">Choose a color for the bet</div>
            <div className="card-block">
                <BetCard icon={blue} double={2} color='blue'/>
                <BetCard icon={gold} double={14} color='gold'/>
                <BetCard icon={green} double={2} color='green'/>
            </div>
            
        </StyledBet>
    )
}

const StyledBet = styled.div`

    .header{
        color: #abb2cf;
        text-transform: uppercase;
        font-weight: 600;
        font-size: .625rem;
        padding-left: .375rem;
        margin-bottom: .625rem;
    }

    .card-block{
        display: grid;
        gap: .375rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }


`

export default Bet