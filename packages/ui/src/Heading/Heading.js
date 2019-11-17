import React from "react";
import PropTypes from 'prop-types';

import * as style from "./Heading.style";

const Heading = props => (
    <style.Heading
        as={`h${props.size.toString()}`}
        role="heading"
        aria-level={props.size}
    >
        {props.title}
    </style.Heading>
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
