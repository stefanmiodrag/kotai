import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ButtonLink = props => (
    <Link to={props.path}>
        {props.label}
    </Link>
);

ButtonLink.defaultProps = {
    path: "/",
    label: "ButtonLink"
};

ButtonLink.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

export default ButtonLink;
