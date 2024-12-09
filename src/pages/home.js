import styled from "styled-components"
import Header from "../components/header"
import HeaderCard from "../components/headerCards"
import Slider from "../components/slider"
import leagues from '../img/home-leagues-banner.webp'
import bonusBg from '../img/bonuses-bg.webp'
import { useRef } from "react"
import BigCard from "../components/bigCard"
import botgame from '../img/botgame-preview.avif'
import cases from '../img/cases-preview.avif'
import crash from '../img/crash-preview.avif'
import double from '../img/double-preview.avif'
import jackrun from '../img/jackrun-preview.avif'
import rollrun from '../img/rollrun-preview.avif'
import Footer from "../components/footer"

function Home() {
    const leaguesBg = useRef(null)
    const bonusBg = useRef(null)

    const leaguesBgFull = () => {
        leaguesBg.current.style.setProperty('--to', '#26457d')
    }
    
    const leaguesBgHalf = () => {
        leaguesBg.current.style.setProperty('--to', '#223D6F')
    }

    const bonusBgFull = () => {
        bonusBg.current.style.setProperty('--to', '#1e7485a6')
    }

    const bonusBgHalf = () => {
        bonusBg.current.style.setProperty('--to', '#1e748580')
    }

    return (
        <StyledHome>
            <Header/>
            <StyledContent>
                <HeaderCard/>
                <StyledSliderBlock>
                    <Slider/>
                    <div className="leagues-container" ref={leaguesBg} onMouseEnter={leaguesBgFull} onMouseLeave={leaguesBgHalf}>
                        <div className="leagues">
                            <p className="leagues-header">Лиги</p>
                            <p className="leagues-content">Получай призы</p>
                        </div>
                    </div>
                    <div className="bonus-container" ref={bonusBg} onMouseEnter={bonusBgFull} onMouseLeave={bonusBgHalf}>
                        <div className="bonus">
                            <p>Бонусы</p>
                        </div>
                    </div>
                </StyledSliderBlock>
                <StyledGames>
                    <BigCard picture={crash} name={'Crash'} online={123}/>
                    <BigCard picture={double} name={'Double'} online={312}/>
                    <BigCard picture={jackrun} name={'Jackrun'} online={12}/>
                    <BigCard picture={rollrun} name={'Rollup'} online={32}/>
                    <BigCard picture={cases} name={'Cases'} online={1}/>
                    <BigCard picture={botgame} name={'Case batle'} online={231}/>
                </StyledGames>
                <Footer/>
            </StyledContent>
            
        </StyledHome> 
    )
}

const StyledContent = styled.section`

    margin: 0 auto;
    width: 80%;
    display: block;

`

const StyledHome = styled.section`

    background-color: #161b2e;
    height: auto;

    overflow: auto; /* или scroll */
    scrollbar-width: none; /* Для Firefox */
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari и другие WebKit-браузеры */
    }
        box-sizing: border-box;
`

const StyledGames = styled.section`

    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: .65rem;
    margin-bottom: 20px;

`

const StyledSliderBlock = styled.section`

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 16px;
    margin-bottom: 20px;

    .leagues-container{
        cursor: pointer;
        aspect-ratio: 23 / 9;
        position: relative;
        border: 0;
        border-radius: 18px;
        overflow: hidden;
        grid-column: span 3;
        --to: #223D6F;
        --from: #3E76D1;
        background-image: linear-gradient(var(--angle, 0deg), var(--from, transparent) var(--from-offset, 0%), var(--to, transparent) var(--to-offset, 100%));
    }

    .leagues{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-image: url(${leagues});
        background-size: cover;
        background-position: right;
        background-repeat: no-repeat;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-right: 30px;
        color: white;
    }

    p{
        margin: 0;
    }

    .leagues-header{
        font-weight: 600;
        font-size: 1.15rem;
        color: #d6dee6;
    }

    .leagues-content{
        color: #bcdfff;
        font-size: .85rem;
        font-weight: 400;
    }

    .bonus-container{
        cursor: pointer;
        aspect-ratio: 23 / 9;
        position: relative;
        border: 0;
        border-radius: 18px;
        overflow: hidden;
        grid-column: span 3;
        --to: #1e748580;
        --from: #1d7688;
        background-image: linear-gradient(var(--angle, 0deg), var(--from, transparent) var(--from-offset, 0%), var(--to, transparent) var(--to-offset, 100%));
   
    }

    .bonus{
        background-image: url(${bonusBg});
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-right: 30px;
        color: #e4edea;
        font-weight: 600;
        font-size: 1.15rem;
    }

`

export default Home