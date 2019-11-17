import React from "react";
import PropTypes from 'prop-types';

import * as style from "./Button.style";

const Button = props => (
    <style.Button onClick={props.onClick}>
        {props.label}
    </style.Button>
);

Button.defaultProps = {
    label: "Button"
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;
