import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    html{
        font-size: 1.026vw;
    }

    .icon{
        aspect-ratio: 1 / 1;
        width: 100%;
        flex-shrink: 0;
        background-color: currentColor;
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
    }

    .bg-gradient-var {
        background-image: 
            linear-gradient(var(--angle, 0deg),
            var(--from, transparent) var(--from-offset, 0%), 
            var(--to, transparent) var(--to-offset, 100%)
        );
    }

    :where([data-double-type=blue]) {
        --from: #3d76d1;
        --to: #2957a0;
        --color: #c2ddff;
        --border: #c2ddff1a;
        --from-2: rgb(61 118 209 / 70%);
        --to-2: rgb(50 62 102 / 14%);
        --color-2: #c2ddff;
        --stroke: #67a7ff;
        --image: url(/img/double/double-roulette-blue.webp);
        --from-selected: #3d76d1;
        --to-selected: #2957a0;
    }

    :where([data-double-type=gold]) {
        --from: #e59474;
        --to: #5f4448;
        --color: #ffcdba;
        --border: #ffd0d01a;
        --stroke: #ffb782;
        --image: url(/img/double/double-roulette-gold.webp);
        --from-2: rgb(229 148 116 / 70%);
        --to-2: rgb(154 91 72 / 14%);
        --color-2: #ffcdba;
        --from-selected: #e59474;
        --to-selected: #5f4448;
    }

    :where([data-double-type=green]) {
        --from: #31adb9;
        --to: #176c7d;
        --color: #cdfbff;
        --border: #cdfbff1a;
        --stroke: #a2feff;
        --image: url(/img/double/double-roulette-green.webp);
        --from-2: rgb(49 191 215 / 70%);
        --to-2: rgb(56 102 123 / 14%);
        --color-2: #cdfbff;
        --from-selected: #31adb9;
        --to-selected: #176c7d;
    }

`

export default GlobalStyle