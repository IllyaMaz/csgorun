import styled from "styled-components"
import Header from "../components/header"
import HeaderCard from "../components/headerCards"
import Footer from "../components/footer"
import JackRunControlPanel from "../components/jackRunControlPanel"
import JackRunContent from "../components/jackRunContent"

function JackRun() {
    return (
        <StyledJackRun>
            <Header/>
            <StyledContent>
                <HeaderCard/>
                <StyledPlaySection>
                    <JackRunContent/>
                    <JackRunControlPanel/>
                </StyledPlaySection>
                {/* <Footer/> */}
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

`

export default JackRun