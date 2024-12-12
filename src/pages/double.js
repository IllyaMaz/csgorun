import styled from "styled-components";
import Header from "../components/header";
import HeaderCard from "../components/headerCards";
import Roulette from "../components/roulette";
import cells from "../cells.js";
import DoubleControlPanel from "../components/doubleControlPanel.js";
import Footer from "../components/footer.js";
import { useEffect, useRef, useState } from "react";
import WheelDecoration from "../components/wheelDecoration.js";

function Double() {
  const [activeRoulette, setActiveRoulette] = useState(false);
  const illuminationInnerRef = useRef(null);
  const illuminationOuterRef = useRef(null);

  useEffect(() => {
    const innerColor = activeRoulette ? "#ff825699" : "#48629699";
    const outerColor = activeRoulette ? "#ff825680" : "#516e9e";

    if (illuminationInnerRef.current) {
      illuminationInnerRef.current.style.backgroundColor = innerColor;
    }
    if (illuminationOuterRef.current) {
      illuminationOuterRef.current.style.backgroundColor = outerColor;
    }
  }, [activeRoulette]);

  return (
    <StyledDouble>
      <Header />
      <StyledContent>
        <HeaderCard />
        <div className="content">
          <div className="left-container">
            <div className="first-block">
              <div className="roulette-block">
                <div className="roulette-position">
                  <WheelDecoration
                    activeRoulette={activeRoulette}
                    illuminationInnerRef={illuminationInnerRef}
                    illuminationOuterRef={illuminationOuterRef}
                  />
                  <Roulette cells={cells} setActiveRoulette={setActiveRoulette} />
                </div>
              </div>
            </div>
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
  height: 100vh;
`;

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
    border-radius: 1.25rem;
  }

  .first-block {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow: hidden;
    padding-bottom: 1.25rem;
    background-image: linear-gradient(var(--angle, 0deg), #232c48 0%, #1c233a 100%);
  }

  .roulette-block {
    position: relative;
    margin-bottom: 1.75rem;
    aspect-ratio: 2.54 / 1;
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
  }

`;

export default Double;