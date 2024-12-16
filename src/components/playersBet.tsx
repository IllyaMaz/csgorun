import styled from "styled-components"


function PlayersBet() {
    return (
        <StyledPlayersBet>
            <div className="bids-block">
                <div style={{color: '#a6adcd'}}>No bids</div>
                Place your bet first
            </div>
        </StyledPlayersBet>
    )
}

const StyledPlayersBet = styled.div`

    height: 32.75rem;
    position: relative;

    .bids-block{
        color: #747e9d;
        text-transform: uppercase;
        font-weight: 500;
        font-size: .625rem;
        text-align: center;
        background-color: #1b2138;
        border: 1px dashed #29304e;
        border-radius: .875rem;
        gap: .125rem;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute;
    }

`

export default PlayersBet