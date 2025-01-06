import styled from "styled-components"
import trophy from '../../img/trophy.svg'
import Cursor from "./cursor"

function Winner() {
    return (
        <StyledWinner>
            <div className="icon trophy"></div>
            <div className="winner bg-gradient-var">Winner</div>
            <div className="footer">IT | RoOoMur</div>
            <Cursor/>
        </StyledWinner>
    )
}

const StyledWinner = styled.div`

    .trophy{
        mask-image: url(${trophy});
        color: #ffc6b0;
        width: 1.75rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: .625rem;
    }

    .winner{
        font-size: 1.5rem;
        font-weight: 700;
        --to: #ffe3db;
        --from: white;
        color: transparent;
        font-variant-numeric: tabular-nums;
        background-clip: text;
        width: fit-content;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .footer{
        font-size: .875rem;
        color: #ffc6b0;
        font-weight: 600;
        
    }
`

export default Winner