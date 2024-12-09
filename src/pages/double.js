import styled from "styled-components"
import Header from "../components/header"
import HeaderCard from "../components/headerCards"
import Roulette from "../components/roulette"
import dots from '../img/dots-mask.webp'
import cells from '../cells.js'
import arc from '../img/circle.svg'
import arrow from '../img/arrow.svg'
import DoubleControlPanel from "../components/doubleControlPanel.js"
import Footer from "../components/footer.js"
import { useEffect, useRef, useState } from "react"

function Double() {
    // #ff825699  gold
    // #3d76d199 blue
    // #3ffdff99 green

    const [activeRoulette, setActiveRoulette] = useState(false)
    const illuminationInnerRef = useRef(null)
    const illuminationOuterRef = useRef(null)

    useEffect(() => {
        if (activeRoulette) {
            illuminationInnerRef.current.style.backgroundColor = '#ff825699'
            illuminationOuterRef.current.style.backgroundColor = '#ff825680'
        } else {
            illuminationInnerRef.current.style.backgroundColor = '#48629699'
            illuminationOuterRef.current.style.backgroundColor = '#516e9e'
        }   
        
    },[activeRoulette])

    return (
        <StyledDouble>
            <Header/>
            <StyledContent>
                <HeaderCard/>
                <div className="content">
                    <div className="left-container">
                        <div>
                            <div className="first-block">
                                <div className="roulette-block">
                                    <div className="roulette-position">
                                        <div className="double-wheel-decor">
                                            <div className={activeRoulette ? 'double-wheel-decor__arrow opacity' : 'double-wheel-decor__arrow'} ></div>
                                            <div className="double-wheel-decor__bg">
                                                <div className="double-wheel-decor__light" ref={illuminationOuterRef}></div>
                                                <div className="double-wheel-decor__circle">
                                                    <div className="double-wheel-decor__circle-light" ref={illuminationInnerRef}>

                                                    </div>
                                                    <div className="double-wheel-decor__circle-dots-wrapper">

                                                    </div>
                                                </div>
                                                <div className={activeRoulette ? 'double-wheel-decor__arc opacity' : 'double-wheel-decor__arc'}>

                                                </div>
                                            </div>
                                        </div>
                                        <Roulette cells={cells} setActiveRoulette={setActiveRoulette}/>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                                <div className="">

                                </div>
                            </div>
                        </div>
                        <section>

                        </section>
                    </div>
                    <div className="right-container">
                        <DoubleControlPanel/>
                    </div>
                
                </div>
                <Footer/>
            </StyledContent>
        </StyledDouble>
    )
}

const StyledDouble = styled.section`

    background-color: #161b2e;
    height: 100vh;

`

const StyledContent = styled.section`

    margin: 0 auto;
    width: 80%;
    display: block;

    .content{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .left-container{
        overflow: hidden;
        flex-grow: 1;
        border-radius: 1.25rem;
    }

    .right-container{

    }

    .first-block{
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        overflow: hidden;
        padding-bottom: 1.25rem;
        background-image: linear-gradient(var(--angle, 0deg),
            #232c48 0%,
            #1c233a 100%
        );
    }

    .roulette-block{
        position: relative;
        margin-bottom: 1.75rem;
        aspect-ratio: 2.54 / 1;
    }

    .roulette-position{
        position: absolute;
        left: 50%;
        aspect-ratio: 1 / 1;
        width: 100%;
        background-color: #181e33;
        border-radius: 9999px;
        bottom: -1rem;
        container-type: inline-size;
        display: grid;
        place-content: center;
        transform: translate(-50%, 0) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);
    }

    .double-wheel-decor{
        pointer-events: none;
        position: absolute;
        left: 50%;
        top: 50%;
        aspect-ratio: 1 / 1;
        width: 74%;
        translate: -50% -50%;
    }

    .double-wheel-decor__bg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        border-radius: 9999px;
        background-image: linear-gradient(var(--angle, 0deg),
            #1e2640 0%,
            #1c233a 100%
        );
    }

    .double-wheel-decor__light {
        background: #516e9e;
        position: absolute;
        bottom: -3.5rem;
        left: 50%;
        aspect-ratio: 1 / 1;
        width: 33.333333%;
        transform: translate3d(-50%, 0, 0);
        border-radius: 9999px;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .3s;
        filter: blur(4rem);
    }
        
    .double-wheel-decor__circle{
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 50%;
        aspect-ratio: 1 / 1;
        width: 98%;
        border-radius: 9999px;
        background-image: linear-gradient(var(--angle, 0deg),
            #1e2640 0%,
            #1c233a 100%
        );
        opacity: .99;
        translate: -50% -50%;
    }

    .double-wheel-decor__circle-dots-wrapper{
        position: absolute;
        aspect-ratio: 1 / 1;
        -webkit-mask-image: url(${dots});
        mask-image: url(${dots});
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        overflow: hidden;
        border-radius: 9999px;
        bottom: -3.75rem;
        width: 22.5rem;
        background: #6b8cc1;
        left: 50%;
        transform: translate(-50%);
        opacity: .3;
    }

    .double-wheel-decor__circle-light{
        position: absolute;
        bottom: -17.5rem;
        left: 50%;
        z-index: -1;
        aspect-ratio: 1 / 1;
        width: 50%;
        border-radius: 9999px;
        background-color: #48629699;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .3s;
        filter: blur(4rem);
        translate: -50%;
    }

    .double-wheel-decor__arc{
        opacity: 0;
        aspect-ratio: 1 / 1;
        -webkit-mask-image: url(${arc});
        mask-image: url(${arc});
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        width: 100%;
        height: 100%;
        transform: rotate(84.1deg);
        background: #f4c4b2;
    }

    .double-wheel-decor__arrow{
        opacity: 0;
        aspect-ratio: 1 / 1;
        -webkit-mask-image: url(${arrow});
        mask-image: url(${arrow});
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        background: #f4c4b2;
        /* background: #d3b58d; */
        width: 1.375rem;
        position: absolute;
        bottom: -0.99rem;
        left: 50%;
        z-index: 2;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .3s;
        transform: translateX(-50%);
    }

    .opacity{
        opacity: 1;
    }

`

export default Double