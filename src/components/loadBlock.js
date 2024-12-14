import styled from "styled-components"
import Timer from "./timer"
import Loader from "./loader"


function LoadBlock({active, setActiveRoulette}) {
    return (
        <StuledLoadBlock>
            {active ? <Loader color='gold'/> : <Timer active={active} setActiveRoulette={setActiveRoulette}/>}
        </StuledLoadBlock>
    )
}

const StuledLoadBlock = styled.div`

    height: 65%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    pointer-events: none;

`

export default LoadBlock