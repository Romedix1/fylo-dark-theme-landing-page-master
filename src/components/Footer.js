import React from "react";
import logo from "../images/logo.svg";
import locationIcon from "../images/icon-location.svg";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo" className="footer--logo" />

            <section class='footer--information'>
                <article className="footer--location-area">
                    <img src={locationIcon} alt="location icon" className="footer--location-icon" />
                    <p className="footer--contact-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </article>

                <article className="footer--contact-area">
                    <div className="footer--phone-area">
                        <img src={phoneIcon} alt="phone icon" className="footer--phone-icon" />
                        <p className="footer--contact-text">+1-543-123-4567</p>
                    </div>

                    <div className="footer--email-area">
                        <img src={emailIcon} alt="phone icon" className="footer--email-icon" />
                        <p className="footer--contact-text">example@fylo.com</p>
                    </div>
                </article>

                <ul className="footer--first-list">
                    <li className="footer--first-list-element">About Us</li>
                    <li className="footer--first-list-element">Jobs</li>
                    <li className="footer--first-list-element">Press</li>
                    <li className="footer--first-list-element">Blog</li>
                </ul>

                <ul className="footer--second-list">
                    <li className="footer--second-list-element">Contact Us</li>
                    <li className="footer--second-list-element">Terms</li>
                    <li className="footer--second-list-element">Privacy</li>
                </ul>

                <article className="footer--icon-container">
                    <svg className='footer--icon' viewBox='-1 -1 32 32' xmlns="http://www.w3.org/2000/svg"><path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"/></svg>
                    <svg className='footer--icon' viewBox='-5 -5 27 27' xmlns="http://www.w3.org/2000/svg"><path d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z" fill-rule="nonzero"/></svg>
                    <svg className='footer--icon' viewBox='0 0 30 30' xmlns="http://www.w3.org/2000/svg"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"/></svg>                </article>
            </section>
        </footer>
    )
}