import styled from "styled-components";
import Header from "../components/header";
import HeaderCard from "../components/headerCards";
import Roulette from "../components/roulete/roulette.js";
import cells from "../cells.js";
import DoubleControlPanel from "../components/doubleControlPanel.js";
import Footer from "../components/footer.js";
import { useEffect, useRef, useState } from "react";
import WheelDecoration from "../components/roulete/wheelDecoration.js";
import RouletteInfo from "../components/roulete/rouletteInfo.js";
import DoublePlayers from "../components/doublePlayers.js";
import LoadBlock from "../components/loadBlock.js";

function Double() {
  const [activeRoulette, setActiveRoulette] = useState(false);
  const illuminationInnerRef = useRef(null);
  const illuminationOuterRef = useRef(null);
  const dotsIlluminationRef = useRef(null)

  useEffect(() => {
    const innerColor = activeRoulette ? "#ff825699" : "#48629699";
    const outerColor = activeRoulette ? "#ff825680" : "#516e9e";
    const dotsColor = activeRoulette ? '#ff8256' : '#6b8cc1'

    if (illuminationInnerRef.current) {
        illuminationInnerRef.current.style.backgroundColor = innerColor;
    }

    if (illuminationOuterRef.current) {
        illuminationOuterRef.current.style.backgroundColor = outerColor;
    }

    if (dotsIlluminationRef.current) {
        dotsIlluminationRef.current.style.backgroundColor = dotsColor;
    }
  }, [activeRoulette]);

  return (
    <StyledDouble>
      <Header />
      <StyledContent>
        <HeaderCard />
        <div className="content">
          <div className="left-container">
            <div className="roulete">
              <div className="roulette-block">
                <div className="roulette-position">
                  <WheelDecoration
                    activeRoulette={activeRoulette}
                    illuminationInnerRef={illuminationInnerRef}
                    illuminationOuterRef={illuminationOuterRef}
                    dotsIlluminationRef={dotsIlluminationRef}
                  />
                  <Roulette cells={cells} active={activeRoulette} setActiveRoulette={setActiveRoulette} />
                </div>
                <div className="bg-gradient-var qq"></div>
                <LoadBlock active={activeRoulette} setActiveRoulette= {setActiveRoulette}/>
              </div>
              <RouletteInfo/>
            </div>
            <DoublePlayers/>
          </div>
          <div className="right-container">
            <DoubleControlPanel />
          </div>
        </div>
        <Footer />
      </StyledContent>
    </StyledDouble>
  );
}

const StyledDouble = styled.section`
  background-color: #161b2e;
`

const StyledContent = styled.section`
  margin: 0 auto;
  width: 80%;
  display: block;

  .content {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .left-container {
    overflow: hidden;
    flex-grow: 1;
  }

  .roulete {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow: hidden;
    padding-bottom: 1.25rem;
    background-image: linear-gradient(var(--angle, 0deg), #232c48 0%, #1c233a 100%);
    margin-bottom: 1rem;
    border-radius: 1.25rem;
  }

  .roulette-block {
    position: relative;
    margin-bottom: 1.75rem;
    aspect-ratio: 2.54 / 1;
    z-index: 1000;
  }

  .roulette-position {
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
    transform: translate(-50%, 0);
    z-index: 2;
  }

  .qq{
    --to: #1c233a;
    --from: transparent;
    height: 10rem;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;  
    pointer-events: none;
  }

`;

export default Double;