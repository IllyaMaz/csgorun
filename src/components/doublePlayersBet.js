import styled from "styled-components"
import players from '../img/players.svg'

function DoublePlayersBet({color, picture, coefficient, amountBet, players}) {
    return (
        <StyledDoublePlayersBet picture={picture} className="bg-gradient-var" data-double-type={color}>
            <div>
                <div className="coefficient">
                    {coefficient}
                </div>
                <div className="amount-bet">
                    {amountBet.toFixed(2)}
                </div>
            </div>
            <div className="players-block">
                <div className="icon players"></div>
                <span className="amount-players">{players}</span>
            </div>
            <div className="icon picture"></div>
        </StyledDoublePlayersBet>
    )
}

const StyledDoublePlayersBet = styled.section`

    height: 4.5rem;
    padding-left: 4.5rem;
    --to: var(--to-2);
    --from: var(--from-2);
    --angle: 90deg;
    color: var(--color-2);
    font-weight: 600;
    padding-right: 1rem;
    background-color: #1c233a;
    border-radius: 1.125rem;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-bottom: .5rem;
    z-index: 1;
    position: relative;

    .picture{
        mask-image: url(${(props) => props.picture});
        width: 3.625rem;
        position: absolute;
        bottom: -.25rem;
        left: -.1875rem;
        z-index: -1;
    }

    .coefficient{
        color: #fff;
        font-size: 1rem;
    }

    .amount-bet{
        font-size: .75rem;
    }

    .players{
        mask-image: url(${players});
        width: 1rem;
    }

    .players-block{
        font-weight: 600;
        font-size: .75rem;
        padding-right: .375rem;
        padding-left: .625rem;
        border-color: var(--border);
        border-style: dashed;
        border-width: 1px;
        border-radius: .75rem;
        gap: .25rem;
        align-items: center;
        height: 2.5rem;
        display: flex
    }

    .amount-players{
        font-variant-numeric: tabular-nums;
        text-align: center;
        width: 1.5rem;
    }

`

export default DoublePlayersBet