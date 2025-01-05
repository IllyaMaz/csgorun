import styled from "styled-components"
import arrow from '../../img/mask-arrow-left.svg'
import dots from '../../img/dots-mask.webp'
import weapon from '../../img/weapon.svg'


function WinRightBlock() {
    return (
        <StyledWinRightBlock>
            <div className="icon bg"></div>
            <div className="icon front bg-gradient-var">
                <div className="icon dots"></div>
            </div>
            <div className="content">
                <div className="picture">
                    <div className="icon win"></div>
                </div>
                <div>
                    <div className="bet">
                        2
                    </div>
                    <span className="bank">
                        Skins
                    </span>
                </div>
                
            </div>
        </StyledWinRightBlock>
    )
}

const StyledWinRightBlock = styled.div`

    display: flex;
    position: relative;
    height: 100%;
    flex-shrink: 0;
    align-items: center;
    padding-right: .75rem;
    width: 27.333333%;
    justify-content: flex-end;
    padding-left: 3.25rem;

    .bg{
        mask-image: url(${arrow});
        background-image: linear-gradient(0deg, #26334e, #406177, #9cf4f6, #406177, #26334e);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        mask-position: left;
        mask-size: cover;
        aspect-ratio: 0;
    }

    .front{
        mask-image: url(${arrow});
        mask-position: left;
        mask-size: cover;
        aspect-ratio: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0.2rem;
        --to: #293956;
        --from: #1e253c;
        --angle: -90deg;
    }

    .dots{
        mask-image: url(${dots});
        background-color: #a2feff;
        opacity: .06;
        width: 15rem;
        position: absolute;
        left: -5rem;
        bottom: -6rem;
    }

    .content{
        margin-right: auto;
        display: flex;
        text-align: right;
        width: auto;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
    }

    .bet{
        z-index: 10;
        position: relative;
        font-variant-numeric: tabular-nums;
        color: #93e7eb;
        font-weight: 700;
        font-size: .9rem;
        margin-bottom: .125rem;
        text-align: left;
    }

    .bank{
        z-index: 10;
        position: relative;
        font-size: .7875rem;
        font-weight: 500;
        text-transform: uppercase;
        color: white;
    }

    .picture{
        display: flex;
        aspect-ratio: 1 / 1;
        border-radius: .75rem;
        border: 1px solid #334d6e;
        background-color: #2d4461;
        width: 3rem;
        position: relative;
    }

    .win{
        margin: auto;
        color: #93e7eb;
        width: 1.375rem;
        mask-image: url(${weapon});
    }

`

export default WinRightBlock