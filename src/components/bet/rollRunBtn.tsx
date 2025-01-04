import styled from "styled-components"
import weapon from '../../img/weapon.svg'

function RollRunBtn({ onCreateGame }: { onCreateGame: () => void }) {
    return (
        <StyledRollRunBtn className="bg-gradient-var" onClick={() => onCreateGame()}>
            <div className="icon weapon"></div>
            Create a game
            <span>0.10$</span>
        </StyledRollRunBtn>
    )
}

const StyledRollRunBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.625rem;
    width: 100%;
    gap: .75rem;
    border-radius: .875rem;
    padding-left: 1.125rem;
    padding-right: 1.125rem;
    font-size: .6875rem;
    font-weight: 700;
    text-transform: uppercase;
    --to: #66a6ff;
    --from: #89f7fe;
    --angle: 90deg;
    color: #212944;
    border: 0;
    cursor: pointer;

    &:hover{
        filter: brightness(1.1);
    }

    .weapon{
        mask-image: url(${weapon});
        width: 1.5rem;
    }

    span{
        font-variant-numeric: tabular-nums;
        font-size: .75rem;
        margin-left: auto;
    }
`

export default RollRunBtn