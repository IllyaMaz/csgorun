import styled from "styled-components"
import OponentBtn from "./oponentBtn"
import { useState } from "react"


function Oponent() {
    const [oponent, setOponent] = useState('players')

    return (
        <StyledOponent>
            <div className="header">Opponent Selection</div>
            <div className="content">
                <OponentBtn name='players' oponent={oponent} onClick={() => setOponent('players')}/>
                <OponentBtn name='bots' oponent={oponent} onClick={() => setOponent('bots')}/>
            </div>
        </StyledOponent>
    )
}

const StyledOponent = styled.div`
    .header{
        color: #abb2cf;
        text-transform: uppercase;
        font-weight: 500;
        font-size: .625rem;
        padding-left: .375rem;
        margin-bottom: .625rem;
    }

    .content{
        display: flex;
        padding: .25rem;
        border: 1px solid #262f4d;
        border-radius: 1rem;
        gap: .25rem;
    }
`

export default Oponent