import react from 'react';
import stayProductive from '../images/illustration-stay-productive.png'
import rightArrow from '../images/icon-arrow.svg'

export default function Description() {
    return (
        <section className='description-section'>
            <div className='description--img-container'>
                <img src={stayProductive} alt='stay productive image' class='description--image' />
            </div>


        <article className='description--text-area'>
            <h2 className='description--header'>Stay productive, wherever you are</h2>

            <p className='description--first-text'>Never let location be an issue when accessing your files.
             Fylo has you covered for all of your file storage needs.</p>

            <p className='description--second-text'>Securely share files and folders with friends, family and colleagues for 
            live collaboration. No email attachments required.</p>

            <p className='description--link'>
                See how Fylo works
                <img src={rightArrow} alt='arrow icon' className='description--link-icon' />
            </p>
            </article>
        </section>
    )
}