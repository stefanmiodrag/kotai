import React from "react";
import PropTypes from 'prop-types';

const Heading = props => (
    <div
        as={`h${props.size.toString()}`}
        role="heading"
        aria-level={props.size}
    >
        {props.title}
    </div>
);

Heading.defaultProps = {
    title: "Heading",
    size: 1
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
};

export default Heading;
