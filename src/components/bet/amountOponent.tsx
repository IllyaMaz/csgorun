import styled from "styled-components"
import AmountOponentBtn from "./amountOponentBtn"
import { useState } from "react";


function AmountOponent({amount}: {amount: number}) {
    const [numberBtn, setNumberBtn] = useState(1)
    
    const buttons = [];
    for (let i = 1; i <= amount; i++) {
        buttons.push(<AmountOponentBtn key={i} amount={i} number={numberBtn} onClick={() => setNumberBtn(i)}/>);
    }

    return(
        <StyledAmountOponent>
            <div className="header">Number of opponents</div>
            <div className="content">
                {buttons}
            </div>
        </StyledAmountOponent>
    )
}

const StyledAmountOponent = styled.div`
    .header {
        color: #abb2cf;
        text-transform: uppercase;
        font-weight: 500;
        font-size: .625rem;
        padding-left: .375rem;
        margin-bottom: .625rem;
    }

    .content{
        display: flex;
        gap: .25rem;
        border-radius: 1rem;
        border: 1px solid #262f4d;
        padding: .25rem;
    }
`

export default AmountOponent