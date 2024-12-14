import styled from "styled-components";
import arrow from "../../img/arrow.svg";
import dots from "../../img/dots-mask.webp";
import arc from "../../img/circle.svg";

function WheelDecoration({ activeRoulette, illuminationInnerRef, illuminationOuterRef, dotsIlluminationRef}) {
    return (
      <StyledWheelDecoration>
        <div
          className={`double-wheel-decor__arrow ${activeRoulette ? "opacity" : ""}`}
        ></div>
        <div className="double-wheel-decor__bg">
          <div className="double-wheel-decor__light" ref={illuminationOuterRef}></div>
          <div className="double-wheel-decor__circle">
            <div
              className="double-wheel-decor__circle-light"
              ref={illuminationInnerRef}
            ></div>
            <div className="double-wheel-decor__circle-dots-wrapper" ref={dotsIlluminationRef}></div>
          </div>
          <div
            className={`double-wheel-decor__arc ${activeRoulette ? "opacity" : ""}`}
          ></div>
        </div>
      </StyledWheelDecoration>
    );
  }

  const StyledWheelDecoration = styled.div`
  
    pointer-events: none;
    position: absolute;
    left: 50%;
    top: 50%;
    aspect-ratio: 1 / 1;
    width: 74%;
    translate: -50% -50%;

    .double-wheel-decor__arrow {
        opacity: 0;
        aspect-ratio: 1 / 1;
        mask-image: url(${arrow});
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
        background: #f4c4b2;
        width: 1.375rem;
        position: absolute;
        bottom: -0.99rem;
        left: 50%;
        z-index: 2;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateX(-50%);
    }

    .double-wheel-decor__bg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        border-radius: 9999px;
        background-image: linear-gradient(var(--angle, 0deg), #1e2640 0%, #1c233a 100%);
    }

    .double-wheel-decor__light {
        background: #516e9e;
        position: absolute;
        bottom: -3.5rem;
        left: 50%;
        aspect-ratio: 1 / 1;
        width: 41.333333%;
        transform: translate3d(-50%, 0, 0);
        border-radius: 9999px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        filter: blur(4rem);
    }

    .double-wheel-decor__circle {
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 50%;
        aspect-ratio: 1 / 1;
        width: 98%;
        border-radius: 9999px;
        background-image: linear-gradient(var(--angle, 0deg), #1e2640 0%, #1c233a 100%);
        opacity: 0.99;
        translate: -50% -50%;
    }

    .double-wheel-decor__circle-light {
        position: absolute;
        bottom: -17.5rem;
        left: 50%;
        z-index: -1;
        aspect-ratio: 1 / 1;
        width: 50%;
        border-radius: 9999px;
        background-color: #48629699;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        filter: blur(4rem);
        translate: -50%;
    }

    .double-wheel-decor__circle-dots-wrapper {
        position: absolute;
        aspect-ratio: 1 / 1;
        mask-image: url(${dots});
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
        overflow: hidden;
        border-radius: 9999px;
        bottom: -3.75rem;
        width: 17.5rem;
        background: #6b8cc1;
        left: 50%;
        transform: translate(-50%);
        opacity: 0.3;
    }

    .double-wheel-decor__arc {
        opacity: 0;
        aspect-ratio: 1 / 1;
        mask-image: url(${arc});
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
        width: 100%;
        height: 100%;
        transform: rotate(84.1deg);
        background: #f4c4b2;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .opacity {
        opacity: 1;
    }

  `

  export default WheelDecoration