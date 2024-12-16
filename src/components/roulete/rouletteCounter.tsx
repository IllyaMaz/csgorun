import styled from "styled-components"

type RouletteCounterProps = {
    picture: string;
    name: string;
    value: number;
}

function RouletteCounter({picture, name, value}: RouletteCounterProps) {
    return (
        <StyledRouletteCounter picture={picture}>
            <div className=" icon picture"></div>
            <span >{name + ':'}</span>
            <span className="value">{value.toFixed(2)}</span>
        </StyledRouletteCounter>
    )
}

const StyledRouletteCounter = styled.div<{picture: string}>`

    display: flex;
    align-items: center;
    gap: .25rem;
    font-size: .6875rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #a6adcd;

    .picture{
        width: 1.375rem;
        -webkit-mask-image: url(${(props) => props.picture});
        mask-image: url(${(props) => props.picture});
        margin-right: .5rem;
    }

    .value{
        font-size: .75rem;
        font-weight: 600;
        color: #dae2f5;
        font-variant-numeric: tabular-nums;
    }

`

export default RouletteCounter