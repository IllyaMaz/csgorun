import styled from "styled-components";
import WinLeftBloc from "./jackrun/winLeftBlock";
import WinRightBlock from "./jackrun/winRightBlock";
import Waiting from "./jackrun/waiting";
import Winner from "./jackrun/winner";
import StartGame from "./jackrun/startGame";
import Revolves from "./jackrun/revolves";
import RollRunRoulette from "./rollRunRoulette/rollRunRoulette";
import { useEffect, useState } from "react";

function JackRunContent({ game, stopGame }: { game: number; stopGame: () => void }) {
    const [stage, setStage] = useState<'roulette' | 'wait' | 'winner' | 'start'>('wait');
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        if (game === 1) {
            setStage('start');
            setTimeElapsed(0); 
        } else {
            setStage('wait');
        }
    }, [game]);

    useEffect(() => {
        if (stage !== 'wait') {
            const timer = setInterval(() => {
                setTimeElapsed((prev) => prev + 1000); 
            }, 1000);

            return () => clearInterval(timer); 
        }
    }, [stage]);

    useEffect(() => {
        if (timeElapsed >= 10000 && stage === 'start') {
            setStage('roulette');
        }
        if (timeElapsed >= 17000 && stage === 'roulette') {
            setStage('winner');
        }
        if (timeElapsed >= 22000 && stage === 'winner') {
            stopGame();
        }
        console.log(timeElapsed);
        
    }, [timeElapsed, stage, stopGame]);

    return (
        <StyledJackRunContent className="bg-gradient-var">
            <div className="header">
                <WinLeftBloc />
                <div className="status">
                    {stage === 'wait' && <Waiting />}
                    {stage === 'winner' && <Winner />}
                    {stage === 'roulette' && <Revolves />}
                    {stage === 'start' && <StartGame />}
                </div>
                <WinRightBlock />
            </div>
            <div className="roulette-block">
                <RollRunRoulette stage={stage} timeSpin={7000} timeReset={5000} winBlock={false} sectorWidth='5rem' />
            </div>
        </StyledJackRunContent>
    );
}

const StyledJackRunContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-radius: 1.25rem;
    background-color: #1c233a;
    --to: #1c233a;
    --from: #232c48;
    overflow: hidden;

    .header {
        display: flex;
        position: relative;
        align-items: center;
        height: 9.375rem;
        gap: 0px;
        width: 100%;
    }

    .status {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    .roulette-block {
        height: 40%;
    }
`;

export default JackRunContent;
