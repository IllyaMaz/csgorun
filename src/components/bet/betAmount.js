import styled from "styled-components"
import minus from '../../img/minus.svg'
import plus from '../../img/plus.svg'
import { useState } from "react"

function BetAmount() {

    const [amount, setAmount] = useState(0)

    const handleIncreaseAmout = () => {
        setAmount(amount + 1)
    }

    const handleReduceAmout = () => {
        if (amount !== 0) {
            setAmount(amount - 1)   
        }
    }

    const handleDoubleAmount = () => {
        setAmount(amount * 2)
    }

    const handleHalveAmount = () => {
        setAmount(amount / 2)
    }

    return (
        <StyledBetAmount>
            <div className="header">Enter the bet amount</div>
            <div className="count">
                <button className="minus" onClick={() => handleReduceAmout()}>
                    <div className="minus-img icon bg"></div>
                </button>
                <input value={amount}></input>
                <button className="plus" onClick={() => handleIncreaseAmout()}>
                    <div className="plus-img icon bg"></div>
                </button>
            </div>
            <div className="btn-block">
                <button className="small-btn" onClick={() => handleHalveAmount()}>1/2</button>
                <button className="big-btn">All in</button>
                <button className="small-btn" onClick={() => handleDoubleAmount()}>x2</button>
            </div>
        </StyledBetAmount>
    )
}

const StyledBetAmount = styled.div`
    .header{
        color: #abb2cf;
        font-weight: 600;
        font-size: .625rem;
        padding-left: .375rem;
        margin-bottom: .625rem;
        text-transform: uppercase;
    }

    .count{
        display: flex;
        align-items: center;   
        position: relative;
    }

    input{
        font-weight: 700;
        font-size: .875rem;
        text-align: center;
        padding-left: 3.5rem;
        padding-right: 3.5rem;
        background-color: #232c48;
        border: 1px solid #2f3959; 
        border-radius: .875rem;
        width: 100%;
        height: 3.375rem;
        outline: 2px solid transparent;
        outline-offset: 2px;
        color: white;
    }

    .minus{
        left: .75rem;
        aspect-ratio: 1 / 1;
        position: absolute;
        background-color: #2e395a;
        border-radius: .625rem;
        width: 1.875rem;
        padding: 0;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
    }

    .plus{
        right: .75rem;
        aspect-ratio: 1 / 1;
        position: absolute;
        background-color: #2e395a;
        border-radius: .625rem;
        width: 1.875rem;
        padding: 0;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
    }

    .bg{
        background: #d9d9d9;
    }

    .minus-img{
        -webkit-mask-image: url(${minus});
        mask-image: url${minus};
        width: .675rem;
    }

    .plus-img{
        -webkit-mask-image: url(${plus});
        mask-image: url${plus};
        width: .675rem;
        background: #d9d9d9;
    }

    button:hover{
        filter: brightness(1.1);
        .bg{
            background: white;
        }
    }

    .btn-block{
        display: flex;
        margin-top: .375rem;
        gap: .25rem;
        height: 2.5rem;
    }

    .small-btn{
        width: 3.75rem;
        color: #a6adcd;
        font-weight: 700;
        font-size: .75rem;
        background-color: #262f4c;
        border-radius: .875rem;
        border: 0;
        cursor: pointer;
    }

    .big-btn{
        flex-grow: 1;
        color: #a6adcd;
        font-weight: 700;
        font-size: .75rem;
        background-color: #262f4c;
        border-radius: .875rem;
        border: 0;
        cursor: pointer;
    }
`

export default BetAmount