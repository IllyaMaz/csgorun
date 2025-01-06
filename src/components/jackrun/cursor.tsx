import styled from "styled-components"
import dots from '../../img/dots-mask.webp'
import arrow from '../../img/arrow.svg'

function Cursor() {
    return (
        <>
            <StyledCursor>
                <div className="line"></div>
                <div className="icon dots"></div>
                <div className="blur"></div>
            </StyledCursor>
            <StyledPointer>
                <div className="icon pointer"></div>
            </StyledPointer>
        </>
        
    )
}

const StyledPointer = styled.div`

    .pointer{
        mask-image: url(${arrow});
        width: 1rem;
        color: #fdb297;
        position: absolute;
        bottom: .3rem;
        left: 50%;
        transform: translate(-50%, 100%);
    }

`

const StyledCursor = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;

    .line{
        position: absolute;
        bottom: 0;
        left: 50%;
        height: .1875rem;
        width: 17.5rem;
        transform: translateX(-50%);
        background-image: linear-gradient(90deg, transparent, #fdb297, transparent);
    }

    .dots{
        mask-image: url(${dots});
        width: 15rem;
        position: absolute;
        opacity: .2;
        background-color: #ff8256;
        left: 50%;
        transform: translateX(-50%);
        bottom: -6rem;
    }

    .blur{
        opacity: .8;
        background-color: #ff8256;
        width: 7.5rem;
        aspect-ratio: 1 / 1;
        position: absolute;
        bottom: -6rem;
        left: 50%;
        transform: translateX(-50%);
        filter: blur(4rem);
    }

`

export default Cursor