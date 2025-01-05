import { useEffect, useState } from "react"
import styled from "styled-components"

function StartGame() {

    const [counter, setCounter] = useState<number>(10.00)

    useEffect(() => {
        if (counter <= 0) {
            return
        }

        const interval = setInterval(() => {
            setCounter((prev) => Math.max(0, parseFloat((prev - 0.01).toFixed(2))))
        },10)

        return () => clearInterval(interval)
    }, [counter])

    return (
        <StyledStartGame>
            <div className="counter bg-gradient-var">{counter.toFixed(2)}s</div>
            <div className="footer">Before the start of the round</div>
        </StyledStartGame>
    )
}

const StyledStartGame = styled.div`

    .counter{
        font-size: 2rem;
        --to: #b7c0e1;
        --from: white;
        color: transparent;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
        background-clip: text;
    }

    .footer{
        font-size: .875rem;
        color: #bfcbe7;

    }
`

export default StartGame