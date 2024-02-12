// import profile1 from './assets/Khush Soni.jpg'
// import profile2 from './assets/ronney.jpg'
import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// x-twitter icon import
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';


function Card({ imageSrc, title, description }) {
    return (
       
            <div className="card">
                <img className="card-image" src={imageSrc} alt="Ronney's profile" />
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>

                {/* Font Awesome icon social links */}
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/ronney-otieno-0a9b3b1b2/" className="social-link">
                        {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                    </a>
                    <a href="https://twitter.com/ronney_o_" className="social-link">
                        {/* <FontAwesomeIcon icon={faTwitter} /> */}
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                </div>
            </div>
        
    );
}

Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};


export default Card;

                   

