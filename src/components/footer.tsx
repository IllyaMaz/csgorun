import styled from "styled-components"
import logo from '../img/logo.svg'
import vk from '../img/vk.svg'
import discord from '../img/discord.svg'
import telegram from '../img/telegram.svg'
import youtube from '../img/youtube.svg'
import help from '../img/help.svg'



function Footer() {
    return (
        <StyledFooter>
            <div className="header">
                <div style={{height: '100%', width: '200px', marginRight: 'auto'}}>
                    <img src={logo} style={{height: 'auto', width: '9rem'}}></img>
                </div>
                <ul>
                    <li>
                        <div className="icon vk"></div>
                    </li>
                    <li>
                        <div className="icon discord"></div>
                    </li>
                    <li>
                        <div className="icon telegram"></div>
                    </li>
                    <li>
                        <div className="icon youtube"></div>
                    </li>
                </ul>
                <button className="help">
                    <div className="icon help-picture"></div>
                    Help
                </button>
            </div>
            <div className="bottom">
                <div>
                    <div className="licence">
                        CSGORUN © 2018-2024
                    </div>
                    <div className="description-container">
                        <div className="age">
                            18+
                        </div>
                        <div className="description">
                            Csgorun is operated by Blackhole N.V. having its office at Abraham de Veerstraat 1, Willemstad, Curaçao. <br/>
                            Company Registration number 156046.
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.section`

    padding-bottom: 2rem;

    .header{
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 1.2rem;
    }

    ul{
        list-style: none;
        display: flex;
        margin: 0;
    }

    li{
        padding: .375rem;
    }

    .icon{
        aspect-ratio: 1 / 1;
        width: 1.43rem;
        background: #a6adcd;
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
        cursor: pointer;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;

        &:hover{
            background: white;
        }
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

    .help{
        display: flex;
        align-items: center;
        gap: .8rem;
        border: 0;
        border-radius: 12px;
        padding: 0rem 1rem;
        background-color: #1e253d;
        height: 2.625rem;
        cursor: pointer;
        color: #dae2f5;
        font-weight: 500;

    }

    .help-picture{
        mask-image: url(${help});
        -webkit-mask-image: url(${help});
    }

    .bottom{
        display: flex;
        flex-wrap: wrap;
    }

    .licence{
        color: white;
        font-size: .75rem;
        font-weight: 500;
        margin-bottom: .5rem;
    }

    .description-container{
        display: flex;
        align-items: center;
        gap: .8rem;
    }

    .age{
        color: #9cc8ff;
        font-weight: 700;
        font-size: .75rem;
        background-color: #9cc8ff1a;
        border-radius: .75rem;
        border: 0;
        width: 2.25rem;
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .description{
        color: #747e9d;
        line-height: 1.2;
        font-size: .75rem;
    }
`

export default Footer