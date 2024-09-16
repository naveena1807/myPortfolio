import PropTypes from 'prop-types';
import React from 'react';

const SubHeading = React.memo(({
    heading,
    className,
}) => (
    <div dangerouslySetInnerHTML={{ __html: heading }} className={className} />
));


SubHeading.propTypes = {
    heading: PropTypes.string,
    className: PropTypes.string,
};

SubHeading.displayName = 'SubHeading';

export default SubHeading;