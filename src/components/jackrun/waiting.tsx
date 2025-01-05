import styled from "styled-components"


function Waiting() {
    return (
        <StyledWaiting>
            <div className="waiting bg-gradient-var">Waiting</div>
            <div className="takes">It takes two to start the game</div>
        </StyledWaiting>
    )
}

const StyledWaiting = styled.div`

    .waiting{
        font-variant-numeric: tabular-nums;
        margin-left: auto;
        margin-right: auto;
        width: fit-content;
        --to: #b7c0e1;
        --from: white;
        font-size: 2rem;
        font-weight: 700;
        color: transparent;
        display: block;
        background-clip: text;
    }

    .takes{
        color: #bfcbe7;
        font-size: .875rem;
    }

`

export default Waiting