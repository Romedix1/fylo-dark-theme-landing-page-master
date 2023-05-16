import React from "react";
import quoteIcon from "../images/bg-quotes.png" 
import SatishProfile from "../images/profile-1.jpg"
import BruceProfile from "../images/profile-2.jpg"
import IvaProfile from "../images/profile-3.jpg"

const QuoteBox = (props) => {
    return (
        <article className="quote--box">
            <p className="quote--box-text">{props.text}</p>

            <div className="quote--box-bottom-content">
                <div className="quote--box-bottom-content--img">
                    <img src={props.img} alt="Author profile picture" className="quote--box-img" />
                </div>
                <div className="quote--box-bottom-content--author-info">
                    <h3 className="quote--box-author">{props.personalInfo}</h3>
                    <p className="quote--box-position">{props.position}</p>
                </div>
            </div>
        </article>
    )
}

export default function Quotes() {
    return (
        <section className="quotes-section">
            <img src={quoteIcon} alt='quote icon' className="quotes--icon" />

            <section className="quotes--container">
                <QuoteBox 
                    text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    img={SatishProfile}
                    personalInfo="Satish Patel"
                    position="Founder & CEO, Huddle"
                />

                <QuoteBox 
                    text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    img={BruceProfile}
                    personalInfo="Bruce McKenzie"
                    position="Founder & CEO, Huddle"
                />

                <QuoteBox 
                    text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    img={IvaProfile}
                    personalInfo="Iva Boyd"
                    position="Founder & CEO, Huddle"
                />
            </section>
        </section>
    )
}