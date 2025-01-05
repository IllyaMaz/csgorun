import styled from "styled-components"
import JackRunBanner from "../jackRunBanner"
import dolar from '../../img/dollar-circle.svg'
import percentage from '../../img/percentage.svg'

function JackRunBet() {
    return (
        <StyledJackRunBet>
            <div className="hedear">
                My bet in the current round
            </div>
            <div className="banner-block">
                <JackRunBanner color="#ffc6b0" picture={dolar} bg="#3a374c" content='0.10$'/>
                <JackRunBanner color="#a2feff" picture={percentage} bg="#2d4461" content='0.00%'/>
            </div>
        </StyledJackRunBet>
    )
}

const StyledJackRunBet = styled.div`

    .hedear{
        color: #abb2cf;
        text-transform: uppercase;
        font-weight: 500;
        font-size: .625rem;
        padding-left: .4375rem;
        padding-right: .4375rem;
        margin-bottom: .75rem;
    }

    .banner-block{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: .5rem;
        margin-bottom: .875rem;
    }

`

export default JackRunBet