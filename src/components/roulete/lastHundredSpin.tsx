import styled from "styled-components"
import document from '../../img/document.svg'
import AmountSpins from "./amountSpins"

function LastHundredSpin() {
    return (
        <StyledLastHundredSpin>
            <div className="bg-gradient-var hunder-spin">
                <div className="icon picture"></div>
                last 100
            </div>
            <AmountSpins color='blue' amount={23}/>
            <AmountSpins color='green' amount={32}/>
            <AmountSpins color='gold' amount={21}/>
        </StyledLastHundredSpin>
    )
}

const StyledLastHundredSpin = styled.div`

    display: flex;
    align-items: center;
    gap: .25rem;
    justify-content: space-between;

    .hunder-spin{
        --to: transparent;
        --from: #2b3453;
        color: #abb2cf;
        text-transform: uppercase;
        font-weight: 500;
        font-size: .625rem;
        padding-left: .625rem;
        padding-right: .625rem;
        border-radius: .75rem;
        gap: .625rem;
        align-items: center;
        height: 2.375rem;
        display: flex;
    }

    .picture{
        background-color: #a6adcd;
        width: 1.0625rem;
        -webkit-mask-image: url(${document});
        mask-image: url(${document});
    }

`

export default LastHundredSpin