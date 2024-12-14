import styled from "styled-components"
import document from '../img/document.svg'
import DoublePlayersBet from "./doublePlayersBet"
import blue from '../img/double-icon-blue.png'
import gold from '../img/double-icon-gold.png'
import green from '../img/double-icon-green.png'
import PlayersBet from "./playersBet"


function DoublePlayers() {
    return (
        <StyledDoublePlayers>
            <div className="header-players">
                    <div className="icon document"></div>
                    <h2 className="bg-gradient-var  title">Players' Bets</h2>
                </div>
                <ul>
                    <li>
                        <DoublePlayersBet 
                            color='blue' 
                            picture={blue} 
                            coefficient='2x' 
                            amountBet={2}
                            players={3}
                        />
                        <PlayersBet/>
                    </li>
                    <li>
                        <DoublePlayersBet 
                            color='gold' 
                            picture={gold} 
                            coefficient='14x' 
                            amountBet={1.53}
                            players={3}
                        />
                        <PlayersBet/>
                    </li>
                    <li>
                        <DoublePlayersBet 
                            color='green' 
                            picture={green} 
                            coefficient='2x' 
                            amountBet={14.23}
                            players={3}
                        />
                        <PlayersBet/>
                    </li>
                </ul>
        </StyledDoublePlayers>
    )
}

const StyledDoublePlayers = styled.section`

    margin-top: 1.625rem;
    margin-bottom: 2.5rem;

    .header-players{
        display: flex;
        align-items: center;
        gap: .75rem;
        padding-left: .625rem;
        color: #747e9d;
        margin-bottom: 1rem;
    }

    .document{
        width: 1.125rem;
        -webkit-mask-image: url(${document});
        mask-image: url(${document});
    }

    .title{
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.25;
        color: transparent;
        --to: #b7c0e1;
        --from: white;
        background-clip: text;
    }

    ul{
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        display: grid;
    }

`

export default DoublePlayers