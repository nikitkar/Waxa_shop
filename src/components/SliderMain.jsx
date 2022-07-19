/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const CAROUSEL_ITEM_WIDTH = 1130;

function Carousel({ props }) {
    const [offset, setOffset] = React.useState(0);

    const [stateDisabledLeftArrow, setStateLeftArrow] = React.useState(1);
    const [stateDisabledRightArrow, setStateRightArrow] = React.useState(0);
    const [stateOpacityLeftArrow, setstateOpacityLeftArrow] = React.useState(0.4);
    const [stateOpacityRightArrow, setstateOpacityRightArrow] = React.useState(1);
    
    const maxTransform = Math.round(CAROUSEL_ITEM_WIDTH * (props.length - 1));
    const activeSlide_dot = Math.round(offset / CAROUSEL_ITEM_WIDTH);

    const handleArrowLeftClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset - CAROUSEL_ITEM_WIDTH;

            checkStyleBtn(newOffset);
            return Math.max(newOffset, 0);
        });
    };

    const handleArrowRightClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + CAROUSEL_ITEM_WIDTH;

            checkStyleBtn(newOffset);
            return Math.min(newOffset, maxTransform);
        });
    };

    const handleDotsClick = (e) => {
        setOffset(e.target.id * CAROUSEL_ITEM_WIDTH);
        checkStyleBtn(e.target.id * CAROUSEL_ITEM_WIDTH);
    }

    const checkStyleBtn = (newOffset) => {        
        switch(newOffset){
            case 0: 
                setStateLeftArrow(1);
                setstateOpacityLeftArrow(0.4);

                setStateRightArrow(0);
                setstateOpacityRightArrow(1);
                break;
            
            case maxTransform: 
                setStateLeftArrow(0);
                setstateOpacityLeftArrow(1);

                setStateRightArrow(1);
                setstateOpacityRightArrow(.4);
                break;

            default: 
                setStateLeftArrow(0);
                setstateOpacityLeftArrow(1);

                setStateRightArrow(0);
                setstateOpacityRightArrow(1);
                break;
        }
    };

    return (
        <section className="firtsSlide">
            <div className="firtsSlide__carousel">
                <div className="firtsSlide__inner">
                    {props.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="firtsSlide__item"
                            style={{ transform: `translateX(-${offset}px)` }}
                        >
                            <div className="firtsSlide__items">
                                <div className="contentText">
                                    <h3>{slide.subTitle}</h3>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.text}</p>
                                    <button type="submit">
                                        → {slide.textBtn}
                                    </button>
                                </div>
                                {slide.pathImg !== undefined ? (
                                    slide.pathImg !== "" ? (
                                        slide.pathImg != null ? (
                                            <div className="contentImage">
                                                <img src={slide.pathImg} />
                                            </div>) : (<></>)) : (<></>)) : (<></>)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sliderBtn--FirtsSlide">
                    <button
                        disabled={stateDisabledLeftArrow}
                        className="btn__prev"
                        onClick={handleArrowLeftClick}
                        style={
                            {opacity: `${stateOpacityLeftArrow}`}
                        }
                    >←</button>
                    <button
                        disabled={stateDisabledRightArrow}
                        className="btn__next"
                        onClick={handleArrowRightClick}
                        style={
                            {opacity: `${stateOpacityRightArrow}`}
                        }
                    >
                        →
                    </button>
                </div>
                <div className="dots">
                    {props.map((slide, slideIndex) => (
                        
                            slideIndex === activeSlide_dot 
                            ? (<div className="dot  active-dot" id={slideIndex} key={slideIndex} onClick={(e) => handleDotsClick(e)}></div>) 
                            : (<div className="dot" id={slideIndex} key={slideIndex} onClick={(e) => handleDotsClick(e)}></div>)
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Carousel;
