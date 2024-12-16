import styled from "styled-components"
import RouletteCounter from "./roulleteCounterBlock"
import LastHundredSpin from "./lastHundredSpin"
import SpinHistory from "./spinHisptory"

function RouletteInfo() {
    return(
        <StyledRouletteInfo>
            <RouletteCounter/>
            <LastHundredSpin/>
            <SpinHistory/>
        </StyledRouletteInfo>
    )
}

const StyledRouletteInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    justify-content: space-between;
    column-gap: .5rem;
    row-gap: .25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`

export default RouletteInfo