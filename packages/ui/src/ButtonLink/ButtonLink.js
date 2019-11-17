import React from "react";
import PropTypes from 'prop-types';

import * as style from "./ButtonLink.style";

const ButtonLink = props => (
    <style.ButtonLink to={props.path}>
        {props.label}
    </style.ButtonLink>
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
