import { useRef } from "react"
import styled from "styled-components"

function SmallCard({name, picture, onClick}) {

    const myRef = useRef(null)

    const activateFilter = () => {
        myRef.current.style.filter = 'saturate(1)'
    }

    const disableFilter = () => {
        myRef.current.style.filter = 'saturate(.5)'
    }

    return (
        <StyledSmallCard 
            onMouseEnter={activateFilter}
            onMouseLeave={disableFilter}    
            onClick={onClick}
        >
            <img className="picture" src={picture} ref={myRef}></img>
            <div className="text">{name}</div>
        </StyledSmallCard>
    )
}

const StyledSmallCard = styled.section`

    background-image: linear-gradient(90deg,
        #212842 0%,
        #2d3656 100%
    );
    position: relative;
    border: 0;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    display: grid;
    align-items: center;
    padding-left: 20px;
    aspect-ratio: 36 / 15;

    .picture{
        filter: saturate(.5);
        float: right;
        height: 100%;
        position: absolute;
        right: 0;
    }

    .text{
        font-weight: 700;
        font-size: 10px;
        color: #e6eeff;
        z-index: 100;
    }

`

export default SmallCard