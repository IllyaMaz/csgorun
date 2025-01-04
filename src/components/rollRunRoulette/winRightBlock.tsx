import styled from "styled-components"
import arrow from '../../img/mask-arrow-left.svg'
import dots from '../../img/dots-mask.webp'
import bank from '../../img/bank.svg'
import { useEffect, useRef } from "react"

function WinRightBlock({status}: {status: string}) {
    const winRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (winRef.current) {
            if (status === 'winner') {
                winRef.current.style.right = '-1.25rem'
            } else {
                winRef.current.style.right = '-25.25rem'
            }
        }
        
    }, [status])

    return (
        <StyledWinRightBlock ref={winRef}>
            <div className="bg-mask icon"></div>
            <div className="mask icon bg-gradient-var">
                <div className="content">
                    <div>
                        <div className="header">
                            Winning amount
                        </div>
                        <div className="footer">
                            6.70$
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="icon bank">
                        </div>
                    </div>
                </div>
                <div className="icon dots"></div>
            </div>
        </StyledWinRightBlock>
    )
}

const StyledWinRightBlock = styled.div`

    position: absolute;
    right: -22.25rem;
    top: 0;
    bottom: 0;
    width: 17.75rem;
    height: auto;
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    transition: right 1s;

    .mask{
        mask-image: url(${arrow});
        mask-position: left;
        mask-size: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        --to: #293956;
        --from: #1e253c;
        --angle: 90deg;
        padding-left: 3.75rem;
        display: flex;
    }

    .bg-mask{
        mask-image: url(${arrow});
        mask-position: left;
        mask-size: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        background-image: linear-gradient(0deg, #26334e, #406177, #9cf4f6, #406177, #26334e);
        z-index: -1;
        margin-right: 3.9rem;
    }

    .dots{
        mask-image: url(${dots});
        background-color: #a2feff;
        width: 15rem;
        position: absolute;
        left: -3rem;
        bottom: -3.75rem;
        opacity: .06;
    }

    .content{
        display: flex;
        width: 84%;
        align-items: center;
        justify-content: flex-end;
        flex-direction: row;
        gap: 1rem;
    }

    .bank{
        mask-Image: url(${bank});
        background: #a2feff;
        margin: auto;
        width: 1.375rem;
    }

    .avatar{
        border: 1px solid #334d6e;
        background: #2d4461;
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
        color: #93e7eb;
        font-weight: 500;
        font-size: .8125rem;
        text-align: end;
    }

`

export default WinRightBlock