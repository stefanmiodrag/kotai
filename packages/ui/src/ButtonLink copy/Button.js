import React from "react";
import PropTypes from 'prop-types';

const Button = props => (
    <button onClick={props.onClick}>
        {props.label}
    </button>
);

Button.defaultProps = {
    onClick: "",
    label: "Button"
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
};

export default Button;
