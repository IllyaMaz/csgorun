import styled from "styled-components"

type AmountSpinsProps = {
    color: string;
    amount: number;
}

function AmountSpins({color, amount}: AmountSpinsProps) {
    return (
        <StyledAmountSpins data-double-type={color} className="bg-gradient-var">
            {amount}
        </StyledAmountSpins>
    )    
}

const StyledAmountSpins = styled.div`
    width: 2.5rem;
    border-radius: .75rem;
    color: var(--color);
    font-weight: 700;
    font-size: .75rem;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    display: flex;
`

export default AmountSpins
