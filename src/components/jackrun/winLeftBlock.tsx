import styled from "styled-components"
import arrow from '../../img/mask-arrow-right.svg'
import dots from '../../img/dots-mask.webp'
import bank from '../../img/bank.svg'

function WinLeftBloc() {
    return (
        <StyledWinLeftBloc>
            <div className="icon bg"></div>
            <div className="icon front bg-gradient-var">
                <div className="icon dots"></div>
            </div>
            <div className="content">
                <div>
                    <div className="bet">
                        2.00$
                    </div>
                    <span className="bank">
                        Bank
                    </span>
                </div>
                <div className="picture">
                    <div className="icon win"></div>
                </div>
            </div>
        </StyledWinLeftBloc>
    )
}

const StyledWinLeftBloc = styled.div`

    display: flex;
    position: relative;
    height: 100%;
    flex-shrink: 0;
    align-items: center;
    padding-left: .75rem;
    width: 27.333333%;
    justify-content: flex-end;
    padding-right: 3.25rem;

    .bg{
        mask-image: url(${arrow});
        background-image: linear-gradient(0deg, #2e2c41, #5c464e, #efbead, #5c464e, #2e2c41);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        mask-position: right;
        mask-size: cover;
        aspect-ratio: 0;
    }

    .front{
        mask-image: url(${arrow});
        mask-position: right;
        mask-size: cover;
        aspect-ratio: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: -0.2rem;
        --to: #383247;
        --from: #1e253c;
        --angle: 90deg;
    }

    .dots{
        mask-image: url(${dots});
        background-color: #ffcab5;
        opacity: .06;
        width: 15rem;
        position: absolute;
            right: -5rem;
            bottom: -6rem;
    }

    .content{
        margin-left: auto;
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
        color: #ffc6b0;
        font-weight: 700;
        font-size: .9rem;
        margin-bottom: .125rem;
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
        border: 1px solid #4a4357;
        background-color: #423b4f;
        width: 3rem;
        position: relative;
    }

    .win{
        margin: auto;
        color: #ffc6b0;
        width: 1.375rem;
        mask-image: url(${bank});
    }

`

export default WinLeftBloc