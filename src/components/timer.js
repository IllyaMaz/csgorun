import { useEffect, useState } from "react"
import styled from "styled-components"


function Timer({active, setActiveRoulette}) {

    const [timeLeft, setTimeLeft] = useState(15.0)

    useEffect(() => {
        if (timeLeft <= 0) {
            setActiveRoulette(true)
            return
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => Math.max(0, (prev - 0.01).toFixed(2)))
        }, 10)

        return () => clearInterval(interval);
    }, [timeLeft])


    return (
        <StyledTimer>
            <span className="bg-gradient-var">
                {timeLeft.toFixed(2)}s
            </span>
            <div className="content">
                Before the start of the round
            </div>
        </StyledTimer>
    )
}

const StyledTimer = styled.div`

    span{
        font-size: 2rem;
        --to: #b7c0e1;
        --from: white;
        color: transparent;
        line-height: 1.25;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
        width: fit-content;
        background-clip: text;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .content{
        font-size: .875rem;
        color: #bfcbe7;
        line-height: 1.25;
        
    }

`

export default Timer