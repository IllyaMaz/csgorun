import styled from "styled-components"
import logo from '../img/logo.svg'
import vk from '../img/vk.svg'
import discord from '../img/discord.svg'
import telegram from '../img/telegram.svg'
import youtube from '../img/youtube.svg'
import trophy from '../img/trophy.svg'
import bonus from '../img/bonus.svg'
import calendar from '../img/calendar.svg'
import majorpass from '../img/majorpass-logo-sm.svg'
import lock from '../img/lock.svg'
import { useNavigate } from "react-router"

function Header() {

    const navigation = useNavigate()

    const navigate = (path: string) => {
        navigation(path)
    }
    return (
        <StyledHeader>
            <a onClick={() => navigate('/')}>
                <div className="w-9 mr-87">
                    <img src={logo} alt=""></img>
                </div>
            </a>
            <div>
                <ul>
                    <li>
                        <a className="block p375">
                            <div className="icon vk" ></div>
                        </a>
                    </li>
                    <li>
                        <a className="block p375">
                            <div className="icon discord"></div>
                        </a>
                    </li>
                    <li>
                        <a className="block p375">
                            <div className="icon telegram"></div>
                        </a>
                    </li>
                    <li>
                        <a className="block p375">
                            <div className="icon youtube"></div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-full">
                <ul>
                    <li className="flex plr2 gap5">
                        <div className="icon trophy"></div>
                        <span className="text line-height1">Лиги</span>
                    </li>
                    <li className="flex plr2 gap5">
                        <div className="icon bonus"></div>
                        <span className="text line-height1">Бонусы</span>
                    </li>
                    <li className="flex plr2 gap5">
                        <div className="icon calendar"></div>
                        <span className="text line-height1">Адвент-календарь</span>
                    </li>
                    <li className="flex items-center plr2 gap5">
                        <div className="majorpass"></div>
                        <span className="majorpass-text">MAJORPASS</span>
                    </li>
                </ul>
            </div>
            <button className="h3 flex items-center button">
                Aвторизация
                <div className="icon lock"></div>
            </button>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`

    height: 43px;
    display: flex;
    align-items: center;
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
    padding-left: 1.87rem;
    padding-right: 1.87rem;

    *{
        margin: 0;
        padding: 0;
    }

    .block{
        display: block;
    }

    .gap5{
        gap: .5rem;
    }


    .button{
        padding: 0px 14px;
        gap: 8px;
        border: 0;
        border-radius: 12px;
        height: 48px;
        background-image: linear-gradient(90deg,
            #a1ffda 0%,
            #73fff3 100%
        );
    }

    .mr-87{
        margin-right: 0.87rem;
    }

    .p375{
        padding: .375rem;
    }

    img{
        width: 100%;
    }

    ul{
        display: flex;
        list-style: none;
    }

    .plr2{
        padding-left: .5rem;
        padding-right: .5rem;
    }

    .icon{
        width: 1.4375rem;
        height: 1.4375rem;
        background-color: white;
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        -webkit-mask-position: center;
        -webkit-mask-repeat: no-repeat;
    }

    .vk{
        mask-image: url(${vk});
        -webkit-mask-image: url(${vk});
    }

    .discord{
        mask-image: url(${discord});
        -webkit-mask-image: url(${discord});
    }

    .telegram{
        mask-image: url(${telegram});
        -webkit-mask-image: url(${telegram});
    }

    .youtube{
        mask-image: url(${youtube});
        -webkit-mask-image: url(${youtube});
    }

    .trophy{
        mask-image: url(${trophy});
        -webkit-mask-image: url(${trophy});
        background-color: #747e9d;
    }

    .bonus{
        mask-image: url(${bonus});
        -webkit-mask-image: url(${bonus});
        background-color: #747e9d;
    }

    .calendar{
        mask-image: url(${calendar});
        -webkit-mask-image: url(${calendar});
        background-color: #747e9d;
    }

    .majorpass{
        background-image: url(${majorpass});
        background-size: contain;
        width: 2.5rem;
        height: .875rem;
    }

    .lock{
        mask-image: url(${lock});
        -webkit-mask-image: url(${lock});
        background-color: black;
    }

    .text{
        color: #dae2f5;
    }

    .majorpass-text{
        color: white;
        font-weight: 800;
        font-size: 14px;
        font-style: italic;
    }

    .flex{
        display: flex;
    }

    .w-9{
        width: 9rem;
        cursor: pointer;
    }

    .items-center{
        align-items: center;
    }

    .line-height1{
        line-height: 1.1;
    }

    .w-full{
        width: 100%;
    }

`

export default Header