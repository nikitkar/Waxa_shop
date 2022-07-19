/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const InfoSection = ({ props }) => {
    return (
        <section className="firstBlock">
            <div className="firstBlock--wrapper">
                <div className="firstBlock--Content">
                    <img src={props[0].imgPath} />
                    <h2>{props[0].title}</h2>
                    <p>{props[0].text}</p>

                    <div className="list--Dots">
                        <div className="decor--Dot"></div>
                        <div className="decor--Dot"></div>
                        <div className="decor--Dot"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
