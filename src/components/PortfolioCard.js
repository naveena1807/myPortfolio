import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

const portfolioCard = React.memo(({
    imageClass,
    cardBackFill,
    cardHeading,
    cardBackText,
    technologies,
}) => {

    const renderTechnologies = () => {

        const tech = technologies.map((data, index) => {

            return <li key={index}>{data}</li>;

        });

        return (
            <ul>
                {tech}
            </ul>
        );
    };

    return (
        <div className="project">
            <div className="cardSide cardFront">
                <div className={`cardPicture ${imageClass}`} />
                <h4 className="cardHeading">
                    <span className={`cardHeading_span ${imageClass}`}>
                        {cardHeading}
                    </span>
                </h4>
                <div className="cardDetails">
                    {renderTechnologies()}
                </div>
            </div>
            <div className={`cardSide cardBack ${cardBackFill}`}>
                <div className="cardCTA">
                    <div className="cardBackText">
                        {cardBackText}
                    </div>
                </div>
            </div>
        </div>
    );
});

portfolioCard.propTypes = {
    imageClass: PropTypes.string,
    cardBackFill: PropTypes.string,
    cardHeading: PropTypes.string,
    cardBackText: PropTypes.string,
    linkURL: PropTypes.string,
    technologies: PropTypes.array,
};

portfolioCard.displayName = 'portfolioCard';

export default portfolioCard;