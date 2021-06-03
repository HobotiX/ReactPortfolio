import React from 'react';
import SOCIALS from '../data/socials';

const Social = props => {
const { image, link } = props.social;
    return (
        <div style={{ display: 'inline-block', width: 50, margin: 20 }}>
            <a href={link}><img src={image} alt='profile' style={{ width: 50, height: 50 }} /></a>
        </div>
    )
}

const Socials = () => (
    <div>
        <h2>Social Media</h2>
        <div>
            {
                SOCIALS.map(SOCIAL => (
                    <Social key={SOCIAL.id} social={ SOCIAL } />
                ))
            }
        </div>
    </div>
)

export default Socials;