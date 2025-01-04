import styled from "styled-components"
import Header from "../components/header"
import HeaderCard from "../components/headerCards"
import RollRunControlPanel from "../components/rollRunControlPanel"
import RollRunRouletteLeftSection from "../components/RollRunRouletteLeftSection"
import { useState } from "react"
import Footer from "../components/footer"

function RollRun() {

    const [games, setGames] = useState<(number | null)[]>(Array(30).fill(null));

    const createGame = () => {
        const emptyIndex = games.findIndex((game) => game === null);
        if (emptyIndex !== -1) {
            const newGames = [...games];
            newGames[emptyIndex] = Math.random(); // Уникальный идентификатор игры
            setGames(newGames);
        } else {
            console.warn("Нет свободных слотов для новой игры.");
        }
    };

    return (
        <StyledRollRun>
            <Header/>
            <StyledContent>
                <HeaderCard/>
                <StyledPlaySection>
                    <RollRunRouletteLeftSection games={games} setGame={setGames}/>
                    <RollRunControlPanel onCreateGame={createGame}/>
                </StyledPlaySection>
                <Footer/>
            </StyledContent>
        </StyledRollRun>
    )
}

const StyledRollRun = styled.section`
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
`

export default RollRun