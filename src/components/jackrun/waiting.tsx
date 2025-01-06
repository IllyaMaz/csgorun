import styled from "styled-components"
import dots from '../../img/dots-mask.webp'

function Waiting() {
    return (
        <StyledWaiting>
            <div className="waiting bg-gradient-var">Waiting</div>
            <div className="takes">It takes two to start the game</div>
            <div>
                <div className="decor">
                    <div className="line"></div>
                    <div className="icon dots"></div>
                    <div className="blur"></div>
                </div>
            </div>
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

    .decor{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
    }

    .line{
        position: absolute;
        bottom: 0;
        left: 50%;
        height: .1875rem;
        width: 17.5rem;
        transform: translateX(-50%);
        background-image: linear-gradient(90deg, transparent, #589df7, transparent);
    }

    .dots{
        mask-image: url(${dots});
        width: 15rem;
        position: absolute;
        opacity: .2;
        background-color: #6b8cc1;
        left: 50%;
        transform: translateX(-50%);
        bottom: -6rem;
    }

    .blur{
        opacity: .8;
        background-color: #486296;
        width: 7.5rem;
        aspect-ratio: 1 / 1;
        position: absolute;
        bottom: -6rem;
        left: 50%;
        transform: translateX(-50%);
        filter: blur(4rem);
    }

`

export default Waiting