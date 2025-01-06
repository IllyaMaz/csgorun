import styled from "styled-components"
import avatar from '../../img/double-icon-blue.png'
import arrow from '../../img/mask-arrow-left.svg'
import JoinBlock from "./joinBlock"
import green from '../../img/bot-giray.jpg'
import add from '../../img/add.svg'
import { useEffect, useRef } from "react"

function RollRunRouletteJoin({stage}: {stage: string}) {
    const betRef = useRef<HTMLDivElement | null>(null)
    const joinRef = useRef<HTMLDivElement | null>(null)
    const joinBlockRef = useRef<HTMLDivElement | null>(null)

    const hidenBet = () => {
        if (betRef.current) {
            betRef.current.style.animation = 'betSlideIn 1s forwards';
        }
    }

    const hideJoin = () => {
        if (joinRef.current) {
            joinRef.current.style.animation = 'joinSlideIn 1s forwards';
        }
    }

    useEffect(() => {
        if (joinBlockRef.current) {
            if (stage === 'join' && betRef.current && joinRef.current) {
                joinBlockRef.current.style.opacity = '1';
                betRef.current.style.animation = '';
                joinRef.current.style.animation = '';
            } else {
                hidenBet()
                hideJoin()
                // joinBlockRef.current.style.opacity = '0';
            }
        }
        
        
    }, [stage])

   

    return (
        <StyledRollRunRouletteJoin ref={joinBlockRef}>
            <div className="bet" ref={betRef}>
                <div className="bg-gradient-var avatar">
                    <img src={avatar} className="picture" alt="Avatar"/>
                </div>
                <div className="bet-info">
                    <div className="nickname">xz</div>
                    <div className="bet-amount">0.19$</div>
                    <div className="footer">Bet in the game</div>
                </div>
            </div>
            <div className="join" ref={joinRef}>
                <div className="arrow-block">
                    <div className="icon back-arrow"></div>
                    <div className="bg-gradient-var front-arrow"></div>
                </div>
                <div className="players">
                    <JoinBlock icon={null}/>
                    <JoinBlock icon={green}/>
                    <JoinBlock icon={green}/>
                </div>
                <button className="bg-gradient-var join-game">
                    <div className="icon add"></div>
                    Join
                </button>
            </div>
        </StyledRollRunRouletteJoin>
    )
}

const StyledRollRunRouletteJoin = styled.div`

    opacity: 0;

    .bet{
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        top: .5rem;
        height: auto;
        align-items: center;
        padding-left: 1rem;
        right: auto;
        max-width: 26.75rem;
        width: 40%;
        flex-direction: row;
        
    }

    .avatar{
        --to: transparent;
        --from: #2a3454;
        padding: .375rem;
        border-radius: 1.125rem;
        width: 3.25rem;
        aspect-ratio: 1 / 1;
    }

    .picture{
        width: 3.25rem;
    }

    .bet-info{
        padding-left: 1rem;
    }

    .nickname{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
        margin-bottom: .25rem;
        color: #fff;
    }

    .bet-amount{
        color: #ffc6b0;
        font-weight: 600;
    }

    .footer{
        color: #7d859e;
    }

    .join{
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-left: 2.5rem;
        padding-right: 1rem;
    }

    .arrow-block{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .back-arrow{
        background-image: linear-gradient(0deg, #242C46, #434C69, #8997C6, #434C69, #242C46);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 2.25rem;
        mask-image: url(${arrow});
        mask-position: left;
        mask-repeat: no-repeat;
        mask-size: cover;
    }

    .front-arrow{
        mask-image: url(${arrow});
        mask-position: left;
        mask-repeat: no-repeat;
        mask-size: cover;
        --from: #27304D;
        --to: #1E263E;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: .25rem;
    }

    .players{
        display: flex;
        gap: .5rem;
    }

    .join-game{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #212944;
        --from: #a2feff;
        --to: #4ecfd0;
        z-index: 1;
        border-radius: .875rem;
        padding-left: .75rem;
        padding-right: 1rem;
        font-size: .6875rem;
        font-weight: 700;
        text-transform: uppercase;
        height: 3rem;
        min-width: 6.875rem;
        gap: .75rem;
        cursor: pointer;
    }

    .add{
        mask-image: url(${add});
        width: 1.125rem;
    }

    @keyframes betSlideIn {
        0% {
            left: 0;
        }
        100% {
            left: -25rem;
        }
    }

    @keyframes joinSlideIn {
        0% {
            right: 0;
        }
        100% {
            right: -25rem;
        }
    }

    @keyframes betSlideOut {
        0% {
            left: -25rem;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes joinSlideOut {
        0% {
            right: -25rem;
        }
        100% {
            opacity: 0;
        }
    }
`
export default RollRunRouletteJoin