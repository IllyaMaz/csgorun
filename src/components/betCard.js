import styled from "styled-components"

function BetCard({
    icon, 
    double,
    color
}) {
    return (
        <StyledBetCard data-double-type={color} icon={icon}>
            <div className={`bg-gradient-var bg`}></div>
            {double}
            X
            <span className={`bg-gradient-var bg2`}></span>
            <span className="picture"></span>
            <div className="total-bet">
                <span className="total-bet-content">0.00$</span>
            </div>
        </StyledBetCard>
    )
}

const StyledBetCard = styled.button`

    background-color: #2a3556;
    border-radius: .875rem;
    overflow: hidden;
    font-weight: 700;
    height: 4.5rem;
    border: 0;
    cursor: pointer;
    padding-left: .75rem;
    padding-right: .75rem;
    padding-bottom: .5rem;
    position: relative;
    color: var(--color);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 100%;
    z-index: 1;

    &:hover{
        .bg{
            filter: brightness(1.1);
        }

        .bg2{
            opacity: .2;
        }
    }
    

    .bg{
        --angle: 45deg;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition-property: 
            color, 
            background-color, 
            border-color, 
            text-decoration-color, 
            fill, 
            stroke, 
            opacity, 
            box-shadow, 
            transform, 
            filter, 
            backdrop-filter, 
            -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
        z-index: -1;
        --to: var(--to2-2);
    }

    .bg2{
        --angle: 45deg;
        opacity: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
        transition-property:    
            color, background-color, 
            border-color, 
            text-decoration-color, 
            fill, 
            stroke, 
            opacity, 
            box-shadow, 
            transform, 
            filter, 
            backdrop-filter, 
            -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
        z-index: -1;
    }

    .picture{
        background-image: url(${props => props.icon});
        width: 3.5rem;
        background-size: contain;
        background-position: center;
        aspect-ratio: 1 / 1;
        position: absolute;
        left: -.5rem;
        bottom: -.5rem;
        z-index: -1;
    }

    .total-bet{
        position: absolute;
        right: 0;
        left: .875rem;
        color: #fff;
        top: .625rem;
        font-weight: 800;
        font-size: .8rem;
    }

    .total-bet-content{
        font-variant-numeric: tabular-nums;
    }
`

export default BetCard