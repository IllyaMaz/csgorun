import styled from "styled-components"

function RollRunBtn(
    { 
        onCreateGame,
        picture,
        name,
        bet 
    }: { 
        onCreateGame: () => void ,
        picture: string,
        name: string,
        bet: string
    }) {
    return (
        <StyledRollRunBtn picture={picture} className="bg-gradient-var" onClick={() => onCreateGame()}>
            <div className="icon weapon"></div>
            {name}
            <span>{bet}</span>
        </StyledRollRunBtn>
    )
}

const StyledRollRunBtn = styled.button<{picture: string}>`
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
        mask-image: url(${(props) => props.picture});
        width: 1.5rem;
    }

    span{
        font-variant-numeric: tabular-nums;
        font-size: .75rem;
        margin-left: auto;
    }
`

export default RollRunBtn