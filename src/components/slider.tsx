import styled from "styled-components";
import weapon from '../img/weapon.png';
import csman from '../img/csman.jpg';
import csolman from '../img/csoldman.jpg';
import coins from '../img/coins.webp';
import arrow from '../img/arrow-right-thin.svg'
import { useRef, useState } from "react";

function Slider() {
    const slides = [
        {
            image: weapon,
            header: 'Бонусы за депозит скинами и криптой',
            bottom: 'Жми на кнопку "пополнить" и получай бонусы за депозит любой криптовалютой или скинами!'
        },
        {
            image: csman,
            header: 'Task Hunter бот от CSGORUN',
            bottom: 'Выполняй простые задания и получай награду! Кликай на баннер, чтобы перейти в нашего телеграм бота'
        }, 
        {
            image: csolman,
            header: 'Блог CSGORUN',
            bottom: 'Гайды, лайфхаки и новости киберспорта в нашем новом блоге csgorun.blog'
        }, 
        {
            image: coins,
            header: 'Сезонные лиги на CSGORUN!',
            bottom: 'Играй на сайте, повышай свой рейтинг и получай еженедельные призы до 500'
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const prevArrowBtn = useRef<HTMLDivElement>(null)
    const nextArrowBtn = useRef<HTMLDivElement>(null)

    const mouseEnterBlock = () => {
        if (prevArrowBtn.current) {
            prevArrowBtn.current.style.opacity = '1'
        }
        
        if (nextArrowBtn.current) {
            nextArrowBtn.current.style.opacity = '1'
        }
        
    }

    const mouseLeaveBlock = () => {
        if (prevArrowBtn.current) {
            prevArrowBtn.current.style.opacity = '0'
        }
        
        if (nextArrowBtn.current) {
            nextArrowBtn.current.style.opacity = '0'
        }
        
    }

    const extendedSlides = [
        slides[slides.length - 1],
        ...slides,
        slides[0],
    ];

    const handleNext = () => {
        if (isTransitioning) return;
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(true);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(true);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
            setCurrentIndex(slides.length);
        } else if (currentIndex === slides.length + 1) {
            setCurrentIndex(1);
        }
    };

    return (
        <StyledSlider
            onMouseEnter={mouseEnterBlock}
            onMouseLeave={mouseLeaveBlock}
        >
            <div
                className="slider-wrapper"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? "transform 0.5s" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {extendedSlides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.image} alt={`slide-${index}`} />
                        <div className="content">
                            <div className="header-content">{slide.header}</div>
                            <div className="bottom-content">{slide.bottom}</div> 
                        </div>
                        
                    </div>
                ))}
            </div>
            <button className="slider-btn prev" onClick={handlePrev} >
                <div className="prev-img" ref={prevArrowBtn}></div>
            </button>
            <button className="slider-btn next" onClick={handleNext}>
                <div className="next-img" ref={nextArrowBtn}></div>
            </button>
        </StyledSlider>
    );
}

const StyledSlider = styled.section`
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    grid-row: span 2;
    grid-column: 1/8;

    .slider-wrapper {
        display: flex;
        transition: transform 0.5s ease-in-out;
        height: 100%;
        width: 100%;
    }

    .slide {
        min-width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .slide img {
        width: 100%;
        object-fit: cover;
        border-radius: 18px;
    }

    .slider-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent;
        color: white;
        border: none;
        cursor: pointer;
    }

    .slider-btn.prev {
        left: 10px;
    }

    .slider-btn.next {
        right: 10px;
    }

    .prev-img{
        mask-image: url(${arrow});
        -webkit-mask-image: url(${arrow});
        background-color: white;
        width: 20px;
        height: 20px;
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        -webkit-mask-position: center;
        -webkit-mask-repeat: no-repeat;
        transform: rotate(180deg);
        opacity: 0;
    }

    .next-img{
        mask-image: url(${arrow});
        -webkit-mask-image: url(${arrow});
        background-color: white;
        width: 20px;
        height: 20px;
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        -webkit-mask-position: center;
        -webkit-mask-repeat: no-repeat;
        opacity: 0;
    }

    .content{
        position: absolute;
        top: 10%;
        left: 5%;
        color: white;
        font-size: 24px;
        z-index: 11;
        max-width: 30rem;
    }

    .header-content{
        font-size: 24px;
        font-weight: 700;
        width: 300px;
    }

    .bottom-content{
        font-size: 16px;
        font-weight: 400;
        width: 400px;
        margin-top: 10px;
    }
`;

export default Slider;
