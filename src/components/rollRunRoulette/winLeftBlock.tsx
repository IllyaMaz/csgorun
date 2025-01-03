import styled from "styled-components"
import arrow from '../../img/mask-arrow-right.svg'
import dots from '../../img/dots-mask.webp'
import trophy from '../../img/trophy.svg'

function WinLeftBlock() {
    return (
        <StyledWinLeftBlock>
            <div className="bg-mask icon"></div>
            <div className="mask icon bg-gradient-var">
                <div className="content">
                    <div className="avatar">
                        <div className="icon trophy">
                        </div>
                    </div>
                    <div>
                        <div className="header">
                            Winner of the game
                        </div>
                        <div className="footer">
                            Bot Mikhailovich
                        </div>
                    </div>
                </div>
                <div className="icon dots"></div>
            </div>
        </StyledWinLeftBlock>
    )
}

const StyledWinLeftBlock = styled.div`
    position: absolute;
    left: -1.25rem;
    top: 0;
    bottom: 0;
    width: 17.75rem;
    height: auto;
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: space-between;

    .mask{
        mask-image: url(${arrow});
        mask-position: right;
        mask-size: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        --to: #383247;
        --from: #1e253c;
        --angle: 90deg;
        padding-left: 3.75rem;
        display: flex;
    }

    .bg-mask{
        mask-image: url(${arrow});
        mask-position: right;
        mask-size: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        background-image: linear-gradient(0deg, #2e2c41, #5c464e, #efbead, #5c464e, #2e2c41);
        z-index: -1;
        margin-right: -3.9rem;
    }

    .dots{
        mask-image: url(${dots});
        background-color: #ffcab5;
        width: 15rem;
        position: absolute;
        right: -5rem;
        bottom: -3.75rem;
        opacity: .06;
    }

    .content{
        display: flex;
        margin-right: auto;
        align-items: center;
        overflow: hidden;
        margin-left: 0;
        flex-direction: row;
        gap: 1rem;
    }

    .trophy{
        mask-Image: url(${trophy});
        background: #ffc6b0;
        margin: auto;
        width: 1.375rem;
    }

    .avatar{
        border: 1px solid #4a4357;
        background: #423b4f;
        border-radius: .75rem;
        display: flex;
        aspect-ratio: 1 / 1;
        flex-shrink: 0;
        width: 3rem;
        z-index: 10;
    }

    .header{
        font-size: .875rem;
        margin-bottom: .125rem;
        font-weight: 500;
        color: white;
    }

    .footer{
        color: #ffc6b0;
        font-weight: 500;
        font-size: .8125rem;
    }
`

export default WinLeftBlock