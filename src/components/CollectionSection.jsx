/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const CollectionSection = ({ props, name }) => {
    return (
        <section className="secondBlock">
            <div className="secondBlock--wrapper">
                <div className="secondBlock--content">
                    <div className="text--logo">K</div>
                    <h2 className="title">{name}</h2>
                    <div className="decor--Dot"></div>

                    <div className="secondCard">
                        <div className="card">
                            {/* <img
                                className="card--img"
                                src="image/card/cardWax.jpg"
                            /> */}

                            <div className="card--content">
                                <div className="card--title">
                                    <h5>Воск для обуви</h5>
                                    <button type="button">→</button>
                                </div>
                                <div className="card--number">
                                    <span>от 430 руб.</span>
                                    <span>15+ товаров</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionSection;
