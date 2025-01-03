import styled from "styled-components"


function OponentBtn({name , oponent, onClick}: { name: string, oponent: string, onClick?: () => void }) {
    return (
        <StyledOponentBtn className={`bg-gradient-var ${oponent === name ? '' : 'disactive'}`} onClick={onClick}>
            {name}
        </StyledOponentBtn>
    )
}

const StyledOponentBtn = styled.button`
    width: 100%;
    height: 2.75rem;
    --too: #2957a0;
    --from: #3d76d1b3;
    text-transform: uppercase;
    font-weight: 700;
    font-size: .625rem;
    background-color: #2e3a61;
    border-radius: .8125rem;
    color: #c2ddff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    transition-property: opacity, filter, --to, --from;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .1s;

    &:hover{
        filter: brightness(1.1);
    }

    &.disactive{
        opacity: .25;
    }
`

export default OponentBtn