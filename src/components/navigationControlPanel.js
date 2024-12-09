import styled from "styled-components"
import weapon from '../img/weapon.svg'
import wallet from '../img/wallet.svg'
import { useEffect, useRef, useState } from "react"

function NavigationControlPanel() {
    const [activeTab, setActiveTab] = useState("balance");
    const markerRef = useRef(null)
    const balanceRef = useRef(null)

    const handleTabClick = (tabName, event) => {
        
        setActiveTab(tabName)
        const colors = {
            balance: { from: "#674D54", to: "#32344F", left: '0%'},
            inventory: { from: "#27516C", to: "#2B3A57", left: '50%'},
        };

        const marker = markerRef.current
        marker.style.left = `${colors[tabName].left}`
        marker.style.width = '50%'

        marker.style.setProperty('--from', colors[tabName].from)
        marker.style.setProperty('--to', colors[tabName].to)
    }

    useEffect(() => { 
        if(balanceRef) {
            handleTabClick(activeTab, {target: balanceRef.current})
        }
    }, [])

    return ( 
        <StyledNavigationControlPanel>
            <ul>
                <div className="navigation__marker" ref={markerRef}></div>
                <li>
                    <button 
                        className={activeTab === 'balance' ? 'balance active' : ''} 
                        onClick={(e) => {handleTabClick('balance', e)}}
                        ref={balanceRef}
                    >
                        <div className="icon wallet"></div>
                        <span>BALANCE</span> 
                    </button>
                </li>
                <li>
                    <button 
                        className={activeTab === 'inventory' ? 'inventory active' : ''} 
                        onClick={(e) => handleTabClick('inventory', e)}
                    >
                        <div className="icon weapon"></div>
                        <span>INVENTORY</span> 
                    </button>
                </li>
            </ul>
        </StyledNavigationControlPanel>
    )
}

const StyledNavigationControlPanel = styled.div`

    ul{
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        font-size: .6875rem;
        font-weight: 700;
        background-color: #242c48;
        border-radius: .875rem;
        position: relative;
    }

    li{
        width: 50%; 
    }

    button{
        width: 100%;
        height: 3rem;
        background: transparent;
        border: 0;
        cursor: pointer;
        font-size: inherit;
        font-weight: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .625rem;
        color: #d6e2ff;
    }

    button:hover{
        color: white;
        .icon{
            background: white;
        }
    }

    .icon{
        aspect-ratio: 1 / 1;
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
        background: #d6e2ff;
        width: 1.1875rem;
    }

    .wallet{
        -webkit-mask-image: url(${wallet});
        mask-image: url(${wallet});
    }

    .weapon{
        -webkit-mask-image: url(${weapon});
        mask-image: url(${weapon});
    }

    .navigation__marker{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        border-radius: 0.875rem;
        background-image: linear-gradient(
            0deg,
            var(--from, #323d61),
            var(--to, #232c48)
        );
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .1s;
        height: 100%;
    }

    .balance.active{
        position: relative;
        z-index: 2;
        pointer-events: none;
        color: #ffc6b0;
        .icon{
            background: #ffc6b0;
        }
    }

    .inventory.active{
        position: relative;
        z-index: 2;
        pointer-events: none;
        color: #a2feff;
        .icon{
            background: #a2feff;
        }
    }

`

export default NavigationControlPanel