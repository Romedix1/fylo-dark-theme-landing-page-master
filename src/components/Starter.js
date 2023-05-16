import React from 'react';
import introIllustration from '../images/illustration-intro.png';

export default function Starter() {
    return (
        <section className="starter-section">
            <img src={introIllustration} alt="intro illustration" className='starter--illustration' />

            <h1 className='starter--header'>All your files in one secure location, accessible anywhere.</h1>

            <p className='starter--text'>Fylo stores all your most important files in one secure location. Access them wherever 
            you need, share and collaborate with friends family, and co-workers.</p>

            <button className='starter--button'>Get Started</button>
        </section>
    );
}