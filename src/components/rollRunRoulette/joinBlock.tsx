import styled from "styled-components"
import add from '../../img/add.svg'

function JoinBlock({icon}: {icon: string|null} ) {
    return (
        <StyledJoinBlock>
            {icon ? <img src={icon} alt="avatar" className="player"/> : <div className="icon add"></div>}
        </StyledJoinBlock>
    )
}

const StyledJoinBlock = styled.div`

    place-content: center;
    width: 3.25rem;
    aspect-ratio: 1 / 1;
    display: grid;
    position: relative;
    background-color: #272f4d;
    border: 1px dashed #323e60;
    border-radius: .75rem;
    cursor: pointer;
    overflow: hidden;

    .add{
        mask-image: url(${add});
        background-color: #bfcbe7;
        width: 1rem;
    }

    .player{
        width: 100%;
        height: 100%;
    }

`

export default JoinBlock