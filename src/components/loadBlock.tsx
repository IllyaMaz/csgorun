import styled from "styled-components"
import Timer from "./timer"
import Loader from "./loader"

type LoadBlockProps = {
    active: boolean;
    setActiveRoulette: (active: boolean) => void;
}

function LoadBlock({active, setActiveRoulette}: LoadBlockProps) {
    return (
        <StuledLoadBlock>
            {active ? <Loader color='gold'/> : <Timer setActiveRoulette={setActiveRoulette}/>}
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