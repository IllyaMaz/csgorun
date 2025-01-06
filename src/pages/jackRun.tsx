import styled from "styled-components"
import Header from "../components/header"
import HeaderCard from "../components/headerCards"
import Footer from "../components/footer"
import JackRunControlPanel from "../components/jackRunControlPanel"
import JackRunContent from "../components/jackRunContent"
import { useState } from "react"

function JackRun() {

    const [game, setGame] = useState<number>(0)

    const createGame = () => {
        setGame(1)
    }

    const stopGame = () => {
        setGame(0)
        
    }

    return (
        <StyledJackRun>
            <Header/>
            <StyledContent>
                <HeaderCard/>
                <StyledPlaySection>
                    <JackRunContent game={game} stopGame={stopGame}/>
                    <JackRunControlPanel setGame={createGame} />
                </StyledPlaySection>
                <Footer/>
            </StyledContent>
        </StyledJackRun>
    )
}

const StyledJackRun = styled.section`
    background-color: #161b2e;
    height: 100vh;

    overflow: auto; /* или scroll */
    scrollbar-width: none; /* Для Firefox */
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari и другие WebKit-браузеры */
    }
    box-sizing: border-box;
`

const StyledContent = styled.section`

    margin: 0 auto;
    width: 80%;
    display: block;

`

const StyledPlaySection = styled.section`

    display: flex;
    gap: 1rem;
    flex-direction: row;
    margin-bottom: 3rem;

`

export default JackRun