import styled from "styled-components"
import players from '../../img/players.svg'

function AmountOponentBtn({amount, number, onClick}: {amount: number, number: number, onClick?: () => void}) {
    return (
        <StyledAmountOponentBtn className={`bg-gradient-var ${number === amount ? '' : 'disactive'}`} onClick={onClick}>
            <div className="icon players"></div>
            {amount}
        </StyledAmountOponentBtn>
    )
}

const StyledAmountOponentBtn = styled.button`
    --to: #2957a0;
    --from: #3d76d1;
    --angle: 45deg;
    border: 0;
    color: #c2ddff;
    font-weight: 700;
    font-size: .75rem;
    background-color: #2e3a61;
    border-radius: .8125rem;
    gap: .25rem;
    flex-grow: 1;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: .1s;

    .players{
        mask-image: url(${players});
        width: 1rem;
    }

    &.disactive{
        opacity: .25;
    }
`

export default AmountOponentBtn