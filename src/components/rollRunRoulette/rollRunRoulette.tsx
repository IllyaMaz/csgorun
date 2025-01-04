import styled from "styled-components"
import cursor from '../../img/arrow.svg'
import sectors from '../../sectors'
import React, { ForwardedRef, useEffect, useRef, useState } from "react"
import WinLeftBlock from "./winLeftBlock"
import WinRightBlock from "./winRightBlock"

const RollRunRoulette = React.forwardRef(({stage}: {stage: string}, ref: ForwardedRef<HTMLDivElement>) => {
    const [status, setStatus] = useState<'game' | 'winner'>('game')
    const rouletteRef = useRef<HTMLDivElement | null>(null)
    const trackRef = useRef<HTMLDivElement | null>(null);
    const sectorRefs = useRef<(HTMLDivElement | null)[]>([]);
    let sector = new Array(80).fill(sectors).flat()
    let centerSectorRef = useRef<HTMLDivElement | null>(null);

    const getMiddlesector = (index:number) => {
        if (trackRef.current){
            const trackWidth = trackRef.current.getBoundingClientRect().width;
            const sectorWidth = sectorRefs.current[0]?.getBoundingClientRect().width;

            if (sectorWidth !== undefined) {
                const centerIndex = Math.ceil(trackWidth / sectorWidth / 2) + index;
                
                setTimeout(() => {
                    centerSectorRef.current = sectorRefs.current[centerIndex];
                    if (centerSectorRef.current) {
                        centerSectorRef.current.style.opacity = '1';
                    }
                },5000)
            } 
        }
    }

    const startSpin = () => {
        const randomIndex = Math.floor(66)
        console.log(sectors.length);
        const sectorWidth = sectorRefs.current[0]?.getBoundingClientRect().width

        if (trackRef.current && sectorWidth !== undefined) {
            const stopPosition = -randomIndex * sectorWidth
            trackRef.current.style.transition = 'transform 5s cubic-bezier(0.25, 1, 0.5, 1)';
            trackRef.current.style.transform = `translateX(${stopPosition}px)`;
            getMiddlesector(randomIndex - 1)
        }

        setTimeout(() => {
            setStatus('winner')
        }, 5000)

        setTimeout(() => {
            setStatus('game')
            if (trackRef.current) {
                trackRef.current.style.transform = `translateX(0px)`;
            }
            
            if (centerSectorRef.current) {
                centerSectorRef.current.style.opacity = '0.1';
            }
            
        }, 7000)
    }

    useEffect(() => {
        if (rouletteRef.current) {
            if (stage === 'roulette') {
                rouletteRef.current.style.opacity = '1'
                startSpin()
            } else {
                rouletteRef.current.style.opacity = '0'
            }
        }
        
    }, [stage])

    return (
        <StyledRollRunRoulette ref={rouletteRef}>
            <WinLeftBlock status={status}/>
            <WinRightBlock status={status}/>
            <div>
                <div className="line"></div>
                <div className="icon cursor"></div>
            </div>
            <div className="roulette-track">
                <div className="roulette" ref={trackRef}>
                    {sector.map((e, index) => (
                        <div 
                            key={index} 
                            className="sector" 
                            ref={(el) => {
                                sectorRefs.current[index] = el; // Привязываем реф к каждому сектору
                            }} 
                        >
                            <img src={e.avatar} alt="avatar"/>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* <button onClick={() => startSpin()}>SDSFDDS</button> */}
        </StyledRollRunRoulette>
    )
})

const StyledRollRunRoulette = styled.div`

    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;

    .line{
        background-image: radial-gradient(circle at 50%, #ffc8b3, #ffc8b336, transparent);
        height: .1875rem;
        width: 17rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .cursor{
        mask-image: url(${cursor});
        width: 1rem;
        background: #ffc8b3;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .roulette-track{
        display: flex;
        width: 100%;
       
        overflow: hidden;
        mask-image: linear-gradient(90deg, #00000000, black, #00000000);
    }

    .roulette{
        display: flex;
        width: 100%;
        height: 4rem;
    }

    .sector{
        padding-left: 1px;
        padding-right: 1px;
        width: 4rem;
        aspect-ratio: 1 / 1;
        opacity: .1;
    }

    img{
        width: 100%;
        border-radius: 1.125rem;
    }

`

export default RollRunRoulette
