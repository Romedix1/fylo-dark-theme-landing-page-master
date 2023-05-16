import React from 'react';
import iconAccess from '../images/icon-access-anywhere.svg'
import iconSecruity from '../images/icon-security.svg'
import iconCollaboration from '../images/icon-collaboration.svg'
import iconFile from '../images/icon-any-file.svg'

const FeaturesBox = (props) => {
    return (
        <article className='features--box'>
            <div className='features--img-container'>
                <img src={props.img} alt='feature image' className='features--img'/>
            </div>
            <h2 className='features--header'>{props.header}</h2>
            <p className='features--text'>{props.text}</p>
        </article>
    );
}

export default function Features() {
    return (
        <section className='features-section'>
            <FeaturesBox 
                img={iconAccess}
                header='Access your files, anywhere'
                text='The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
            />

            <FeaturesBox 
                img={iconSecruity}
                header='Security you can trust'
                text='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
            />

            <FeaturesBox 
                img={iconCollaboration}
                header='Real-time collaboration'
                text='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
            />

            <FeaturesBox 
                img={iconFile}
                header='Store any type of file'
                text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
            />
        </section>
    )
}