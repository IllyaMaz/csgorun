import styled from "styled-components"
import ticket from '../../img/ticket.svg'

function Revolves() {
    return (
        <StyledRevolves>
            <div className="icon ticket"></div>
            <div className="revolves bg-gradient-var">Revolves</div>
            <div className="footer">Choosing the winner</div>
        </StyledRevolves>
    )
}

const StyledRevolves = styled.div`

    .revolves{
        --to: #ffe3db;
        --from: white;
        color: transparent;
        font-size: 1.5rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        background-clip: text;
    }

    .footer{
        font-weight: 600;
        color: #ffc6b0;
        font-size: .875rem;
    }

    .ticket{
        mask-image: url(${ticket});
        width: 1.75rem;
        color: #ffc6b0;
        margin-bottom: .625rem;
        margin-left: auto;
        margin-right: auto;
    }

`

export default Revolves