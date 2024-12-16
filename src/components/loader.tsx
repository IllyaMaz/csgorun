import styled from "styled-components"

type LoaderProps = {
    color: string;
}

function Loader({color}: LoaderProps) {
    return (
        <StuledLoader data-double-type={color}>
            <div className="loader">
                <div className="loader-container">
                    <div className="data-double-type=gold qqq"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" className="data-double-type=gold bg">
                        <circle cx="40" cy="40" r="35" opacity="0.3" stroke-width="10"></circle>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" className="data-double-type=gold big-loader">
                        <circle cx="40" cy="40" r="35" stroke-width="10" stroke-dasharray="70, 40" stroke-linecap="round"></circle>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50" fill="none" className="data-double-type=gold small-loader">
                        <circle cx="50" cy="50" r="18" stroke-linecap="round" stroke-dasharray="25 200" stroke-dashoffset="-70" stroke-width="6"></circle>
                    </svg>
                </div>
            </div>
            <div className="content">
                The roulette is spinning
            </div>
        </StuledLoader>
    )
}

const StuledLoader = styled.div`

    max-width: 100%;
    z-index: 2;
    position: relative;
    pointer-events: auto;

    .loader{
        width: 6rem;
        aspect-ratio: 1 / 1;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }

    .loader-container{
        transform: translate(-50%, -50%);
        width: 100%;
        aspect-ratio: 1 / 1;
        display: flex;
        top: 50%;
        left: 50%;
        position: absolute;
        justify-content: center;
        align-items: center;
            height: 100%;
    }

    .qqq{
        --bg: var(--from);
        border-radius: 9999px;
        border: 1rem solid color-mix(in srgb, var(--bg) 10%, transparent);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
    }

    .big-loader-container{
        width: 80%;
        aspect-ratio: 1 / 1;
        position: relative;
    }

    .bg{
        stroke: var(--from);
        width: 80%;
    }

    .big-loader{
        stroke: var(--from);
        width: 79%;
        position: absolute;
        mask-image: conic-gradient(from 35deg, transparent 14%, #000 50%, transparent 62%, transparent 70%, #000);
        transition-property: stroke;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
        animation: spin 4s linear infinite;
    }

    .small-loader{
        stroke: var(--from);
        mask-image: conic-gradient(from 45deg, rgba(0, 0, 0, 0) 75%, #000);
        position: absolute;
        width: 60%;
        animation: spin 1.5s linear infinite;
    }
    
    .content{
        font-size: .875rem;
        color: var(--color);
        text-align: center;
        
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

`

export default Loader