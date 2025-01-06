import styled from "styled-components";
import cursor from "../../img/arrow.svg";
import sectors from "../../sectors";
import { useCallback, useEffect, useRef, useState } from "react";
import WinLeftBlock from "./winLeftBlock";
import WinRightBlock from "./winRightBlock";

function RollRunRoulette({
    stage,
    winBlock,
    timeSpin,
    timeReset,
    sectorWidth,
}: {
    stage: string | null,
    winBlock: boolean,
    timeSpin: number,
    sectorWidth: string,
    timeReset: number
}) {
    const [status, setStatus] = useState<"game" | "winner">("game");
    const rouletteRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const sectorRefs = useRef<(HTMLDivElement | null)[]>([]);
    const centerSectorRef = useRef<HTMLDivElement | null>(null);
    const sector = new Array(80).fill(sectors).flat();

    const getMiddleSector = useCallback((index: number) => {
        if (trackRef.current) {
            const trackWidth = trackRef.current.getBoundingClientRect().width;
            const sectorWidth = sectorRefs.current[0]?.getBoundingClientRect().width;

            if (sectorWidth !== undefined) {
                const centerIndex = Math.ceil(trackWidth / sectorWidth / 2) + index;

                centerSectorRef.current = sectorRefs.current[centerIndex];
                if (centerSectorRef.current) {
                    centerSectorRef.current.style.opacity = "1";
                }
            }
        }
    }, []);

    const startSpin = useCallback(() => {
        const randomIndex = Math.floor(66);
        const sectorWidth = sectorRefs.current[0]?.getBoundingClientRect().width;

        if (trackRef.current && sectorWidth !== undefined) {
            const stopPosition = -randomIndex * sectorWidth;

            trackRef.current.style.transition = `transform ${timeSpin / 1000}s cubic-bezier(0.25, 1, 0.5, 1)`;
            trackRef.current.style.transform = `translateX(${stopPosition}px)`;

            // Устанавливаем центр сектора после окончания анимации
            trackRef.current.addEventListener(
                "transitionend",
                () => {
                    getMiddleSector(randomIndex - 1);
                    setStatus("winner");
                },
                { once: true } 
            );
        }
    }, [getMiddleSector, timeSpin]);

    const resetSpin = useCallback(() => {
        setStatus("game");
        if (trackRef.current) {
            trackRef.current.style.transition = "none";
            trackRef.current.style.transform = "translateX(0px)";
        }

        if (centerSectorRef.current) {
            centerSectorRef.current.style.opacity = "0.1";
        }
    }, []);

    useEffect(() => {
            if (stage === "roulette" && rouletteRef.current) {
                rouletteRef.current.style.opacity = "1";
                startSpin();
            } else {
                setTimeout(() => {
                    resetSpin();
                    if (rouletteRef.current) {
                        rouletteRef.current.style.opacity = "0"; 
                    }
                }, timeReset)
            }
    }, [stage, startSpin, resetSpin, timeReset]);

    return (
        <StyledRollRunRoulette ref={rouletteRef} sectorWidth={sectorWidth}>
            {winBlock && <WinLeftBlock status={status} />}
            {winBlock && <WinRightBlock status={status} />}
            {winBlock && (
                <div>
                    <div className="line"></div>
                    <div className="icon cursor"></div>
                </div>
            )}

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
                            <img src={e.avatar} alt="avatar" />
                        </div>
                    ))}
                </div>
            </div>
        </StyledRollRunRoulette>
    );
}

const StyledRollRunRoulette = styled.div<{ sectorWidth: string }>`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;

    .line {
        background-image: radial-gradient(circle at 50%, #ffc8b3, #ffc8b336, transparent);
        height: 0.1875rem;
        width: 17rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .cursor {
        mask-image: url(${cursor});
        width: 1rem;
        background: #ffc8b3;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .roulette-track {
        display: flex;
        width: 100%;
        overflow: hidden;
        mask-image: linear-gradient(90deg, #00000000, black, #00000000);
    }

    .roulette {
        display: flex;
        width: 100%;
        height: ${(props) => props.sectorWidth};
    }

    .sector {
        padding-left: 1px;
        padding-right: 1px;
        width: ${(props) => props.sectorWidth};
        aspect-ratio: 1 / 1;
        opacity: 0.1;
    }

    img {
        width: 100%;
        border-radius: 1.125rem;
    }
`;

export default RollRunRoulette;
