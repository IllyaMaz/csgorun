import styled from "styled-components";

function RouletteCell({ angle, color, image }) {

    const angleInRadians = (angle * Math.PI) / 180;
    const angleSin = Math.sin(angleInRadians);
    const angleCos = Math.cos(angleInRadians);

    return (
        <Cell
            style={{
                "--angle": `${angle}deg`,
                "--angle-sin": angleSin,
                "--angle-cos": angleCos,
            }}
            data-color={color}
        >
            <img src={image} alt={color} />
        </Cell>
    );
}

const Cell = styled.div`
    position: absolute;
    --aspect-w: 60;
    --aspect-h: 81;
    --roulette-radius: 43.5;
    --w: 6.7cqi;
    --gap: 1cqi;
    
    aspect-ratio: var(--aspect-w) / var(--aspect-h);
    width: var(--w);
    background-size: contain;
    translate: 
        calc(var(--angle-sin) * var(--roulette-radius) * var(--gap))
        calc(var(--angle-cos) * var(--roulette-radius) * var(--gap) * -1);
    rotate: var(--angle);
    scale: -1;
    left: calc(50% - var(--w) / 2);
    top: calc(50% - (var(--w) * var(--aspect-h) / var(--aspect-w)) / 2);
    transition: .2s ease-in-out;
    pointer-events: auto;

    img {
        width: 100%;
        height: 100%;
    }

    &:hover{
        --roulette-radius: 42.5;
    }
`;

export default RouletteCell;
