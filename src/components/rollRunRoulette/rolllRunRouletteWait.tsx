import styled from "styled-components"

function RollRunRouletteWait({number}: {number: number}) {
    return (
        <StyledRollRunRouletteWaite>
            <div className="header">{number}</div>
            <div className="footer">Place available</div>
        </StyledRollRunRouletteWaite>
    )
}

const StyledRollRunRouletteWaite = styled.div`

    position: absolute;
    left: 1.25rem;
    bottom: 1.25rem;

    .header{
        margin-bottom: .25rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: #a6adcd;
    }

    .footer{
        font-size: .625rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #747e9d;
    }

`

export default RollRunRouletteWait