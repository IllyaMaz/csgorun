import styled from "styled-components"
import play from '../img/play.svg'
import setting from '../img/settings.svg'

function AutoBet() {
    return (
        <StyledAutoBet>
            <div className="header">Auto-bet</div>
            <div className="btn-block">
                <button className="bg-gradient-var launch-btn">
                    <div className="icon play"></div>
                    Launch
                </button>
                <button className="bg-gradient-var setting-btn">
                    <div className="icon setting"></div>
                    Settings
                </button>
            </div>
        </StyledAutoBet>
    )
}

const StyledAutoBet = styled.div`

    .header{
        color: #abb2cf;
        text-transform: uppercase;
        font-weight: 600;
        font-size: .625rem;
        padding-left: .375rem;
        margin-bottom: .625rem;
    }

    .btn-block{
        background-color: #232c4880;
        padding: .5rem;
        border: 1px dashed #2d3653;
        border-radius: 1rem;
        gap: .375rem;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .play{
        -webkit-mask-image: url(${play});
        mask-image: url(${play});
        width: 1.125rem;
    }

    .setting{
        -webkit-mask-image: url(${setting});
        mask-image: url(${setting});
        width: 1.125rem;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .75rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .625rem;
        padding-left: .75rem;
        border-radius: .75rem;
        height: 2.75rem;
        cursor: pointer;
        border: 0;
    }

    .launch-btn{
        --to: #4ecfd0;
        --from: #a2feff;
        color: #212944;

        &:hover{
            filter: brightness(1.1);
        }
    }

    .setting-btn{
        --angle: 90deg;
        --to: #2c3552;
        --from: #3b466d;
        color: #c5d0e9;
    }

`

export default AutoBet