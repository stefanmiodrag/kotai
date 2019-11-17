import React from "react";
import PropTypes from 'prop-types';

import * as style from "./Alert.style";

const Alert = props => (
    <style.Alert type={props.type} role="alert">
        {console.log(props)}
        {props.text}
    </style.Alert>
);

Alert.defaultProps = {
    text: "An error has occurred, here's actionable feedback on how to proceed.",
    type: "danger"
};

Alert.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Alert;
