import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import RouletteCell from "./rouletteCell";

function Roulette({ cells, active, setActiveRoulette }) {
    const rouletteRef = useRef(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const handleStartRoulette = () => {
        setActiveRoulette(true)

        setTimeout(() => setActiveRoulette(false),8000)
    }

    const spinRoulette = useCallback(() => {
        if (isSpinning) return; // Если уже вращается, не запускаем повторно
        setIsSpinning(true);

        const roulette = rouletteRef.current;
        const totalRotation = 1440 + Math.random() * 360; // 4 оборота + случайный угол
        roulette.style.transition = "transform 8s cubic-bezier(0.25, 1, 0.5, 1)";
        roulette.style.transform = `rotate(${totalRotation}deg)`; // Начало вращения

        setTimeout(() => {
            roulette.style.transition = ""; // Убираем transition после завершения
            roulette.style.transform = `rotate(${totalRotation % 360}deg)`; // Финальный угол
            setIsSpinning(false); // Завершаем вращение
        }, 8000); // Завершаем через 8 секунд

        handleStartRoulette(); // Уведомление о начале вращения
    }, [isSpinning, handleStartRoulette]);

    useEffect(() => {
        if (active) {
            spinRoulette(); 
        }
    }, [active, spinRoulette])

    return (
        <>
        <RouletteContainer ref={rouletteRef}>
            {cells.map((cell, index) => {
                const angle = (360 / cells.length) * index + 180;
                return (
                    <RouletteCell
                        key={index}
                        angle={angle}
                        color={cell.color}
                        image={cell.image}
                    />
                );
            })}
        </RouletteContainer>
        <SpinButton onClick={spinRoulette} disabled={isSpinning}>
            Spin
        </SpinButton>
        </>
        
    );
}

const RouletteContainer = styled.div`
    position: relative;
    margin: 0 auto;
    border-radius: 50%;
    container: inline-size;
    --wheel-size: 54rem;
    
    transform: rotate(0deg);
`;

const SpinButton = styled.button`
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        background: gray;
        cursor: not-allowed;
    }
`;

export default Roulette
