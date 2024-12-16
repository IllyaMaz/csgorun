import { useRef } from "react"
import styled from "styled-components"

interface BigCardProps {
    picture: string; // или другой тип, в зависимости от того, что представляет 'picture'
    name: string;
    online: number;
}

function BigCard({picture, name, online}: BigCardProps) {
    const opacityRef = useRef<HTMLDivElement>(null)
    const borderRef = useRef<HTMLDivElement>(null)

    const activeHover = () => {
        if (opacityRef.current) {
            opacityRef.current.style.opacity = '1'
        }
        
        if (borderRef.current) {
            borderRef.current.style.border = '1px solid #5d7ec1'
        }
        
    }
    const disactiveHover = () => {
        if (opacityRef.current) {
            opacityRef.current.style.opacity = '0'
        }
        
        if (borderRef.current) {
            borderRef.current.style.border = '1px solid #2d3a5a'
        }
       
    }

    return (
        <StyledBigCard picture={picture}
            onMouseEnter={activeHover}
            onMouseLeave={disactiveHover}
        >
            <div className="bg-image">
                <div className="pointer" ref={borderRef}>
                    <div className="point"></div>
                    {online}
                </div>
                <div className="game">{name}</div>
            </div>
            <div className="bg-full" ref={opacityRef}></div>
        </StyledBigCard>
    )
}

const StyledBigCard = styled.div<{picture: string}>`

    width: 100%;
    aspect-ratio: 390 / 240;
    overflow: hidden;
    position: relative;
    border: 0;
    border-radius: 18px;
    background-image: 
        linear-gradient(90deg, 
        #212842 0%,
        #2d3656 100%
    );
    cursor: pointer;

    .bg-image{
        background-image: url(${(props) => props.picture});
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: right;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        z-index: 1000;
        color: #d1dbfc;
    }

    .bg-full{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background-image: linear-gradient( 
            99deg,
            #3d76d1 0%, 
            #2756a280 100%
        );
        opacity: 0;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
    }

    .pointer{
        position: absolute;
        top: 30px;
        left: 40px;
        border: 1px solid #2d3a5a;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 0px 10px;
        height: 1.6rem;

        //#5d7ec1 hover border
    }

    .game{
        position: absolute;
        bottom: 50px;
        left: 40px;
        font-size: 20px;
        font-weight: 700;
    }

    .point{
        width: 5px;
        height: 5px;
        border: 0;
        border-radius: 50%;
        background: #a9cfff;
    }

`

export default BigCard